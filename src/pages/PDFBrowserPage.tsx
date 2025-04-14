import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDFViewer from "@/components/PDFViewer";
import { FileText, Plus, Link as LinkIcon, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { decompressData } from "@/services/pdfService";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PDFBrowserPage = () => {
  const [currentPdf, setCurrentPdf] = useState<string>("");
  const [pdfTitle, setPdfTitle] = useState<string>("");
  const [pdfError, setPdfError] = useState<boolean>(false);
  const [availablePdfs, setAvailablePdfs] = useState<Array<{ url: string; title: string; isExternal?: boolean }>>([]);
  const [isAddLinkDialogOpen, setIsAddLinkDialogOpen] = useState<boolean>(false);
  const [externalPdfUrl, setExternalPdfUrl] = useState<string>("");
  const [externalPdfTitle, setExternalPdfTitle] = useState<string>("");
  const [sharePointUrl, setSharePointUrl] = useState<string>("");
  const [sharePointTitle, setSharePointTitle] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("external");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    setPdfError(false);
    
    const externalPdfs = localStorage.getItem('externalPdfs');
    let externalPdfsList: Array<{ url: string; title: string; isExternal: boolean }> = [];
    
    if (externalPdfs) {
      try {
        externalPdfsList = JSON.parse(externalPdfs);
      } catch (error) {
        console.error("Error parsing external PDFs:", error);
      }
    }
    
    const storedPdfInfo = localStorage.getItem('lastUploadedPdf');
    if (storedPdfInfo) {
      try {
        const pdfInfo = JSON.parse(storedPdfInfo);
        
        if (pdfInfo && pdfInfo.data) {
          const pdfData = pdfInfo.compressed ? decompressData(pdfInfo.data) : pdfInfo.data;
          
          const newPdf = {
            url: pdfData,
            title: pdfInfo.title || "Uploaded PDF"
          };
          
          const exists = availablePdfs.some(pdf => pdf.title === newPdf.title);
          
          if (!exists) {
            setAvailablePdfs(prev => [...externalPdfsList, newPdf]);
            
            setCurrentPdf(pdfData);
            setPdfTitle(pdfInfo.title || "Uploaded PDF");
            
            toast({
              title: "Uploaded PDF loaded",
              description: `Displaying: ${pdfInfo.title || "Uploaded PDF"}`,
            });
          }
        }
      } catch (error) {
        console.error("Error parsing stored PDF info:", error);
      }
    } else {
      setAvailablePdfs(externalPdfsList);
      
      if (externalPdfsList.length > 0) {
        selectPdf(externalPdfsList[0].url, externalPdfsList[0].title);
      }
    }
  }, [toast]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const selectPdf = (url: string, title: string) => {
    setCurrentPdf(url);
    setPdfTitle(title);
    setPdfError(false);
    toast({
      title: "PDF loaded",
      description: `Displaying: ${title}`,
    });
  };

  const handlePdfError = () => {
    setPdfError(true);
    toast({
      variant: "destructive",
      title: "Error loading PDF",
      description: "The PDF could not be displayed. Please try with another file.",
    });
  };
  
  const handleAddExternalPdf = () => {
    if (!externalPdfUrl) {
      toast({
        variant: "destructive",
        title: "Invalid URL",
        description: "Please enter a valid PDF URL",
      });
      return;
    }
    
    if (!externalPdfTitle) {
      setExternalPdfTitle("External PDF");
    }
    
    const newPdf = {
      url: externalPdfUrl,
      title: externalPdfTitle || "External PDF",
      isExternal: true
    };
    
    const exists = availablePdfs.some(pdf => pdf.url === newPdf.url);
    
    if (!exists) {
      const updatedPdfs = [...availablePdfs, newPdf];
      setAvailablePdfs(updatedPdfs);
      
      const externalPdfs = updatedPdfs.filter(pdf => pdf.isExternal);
      localStorage.setItem('externalPdfs', JSON.stringify(externalPdfs));
      
      selectPdf(newPdf.url, newPdf.title);
      
      toast({
        title: "External PDF added",
        description: `Added: ${newPdf.title}`,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Duplicate PDF",
        description: "This PDF is already in your list",
      });
    }
    
    setExternalPdfUrl("");
    setExternalPdfTitle("");
    setIsAddLinkDialogOpen(false);
  };

  const handleAddSharePointPdf = async () => {
    if (!sharePointUrl) {
      toast({
        variant: "destructive",
        title: "Invalid URL",
        description: "Please enter a valid SharePoint URL",
      });
      return;
    }
    
    if (!sharePointUrl.includes('sharepoint.com')) {
      toast({
        variant: "destructive",
        title: "Invalid SharePoint URL",
        description: "Please enter a valid SharePoint URL",
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      let directUrl = sharePointUrl;
      
      if (directUrl.includes('?e=')) {
        directUrl = directUrl.split('?')[0] + '?download=1';
      }
      
      if (!directUrl.includes('download=1')) {
        directUrl = directUrl.includes('?') 
          ? directUrl + '&download=1' 
          : directUrl + '?download=1';
      }
      
      const pdfTitle = sharePointTitle || "SharePoint PDF";
      
      const newPdf = {
        url: directUrl,
        title: pdfTitle,
        isExternal: true
      };
      
      const exists = availablePdfs.some(pdf => pdf.url === newPdf.url);
      
      if (!exists) {
        const updatedPdfs = [...availablePdfs, newPdf];
        setAvailablePdfs(updatedPdfs);
        
        const externalPdfs = updatedPdfs.filter(pdf => pdf.isExternal);
        localStorage.setItem('externalPdfs', JSON.stringify(externalPdfs));
        
        selectPdf(newPdf.url, newPdf.title);
        
        toast({
          title: "SharePoint PDF added",
          description: `Added: ${pdfTitle}`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Duplicate PDF",
          description: "This PDF is already in your list",
        });
      }
      
      setSharePointUrl("");
      setSharePointTitle("");
      setIsAddLinkDialogOpen(false);
    } catch (error) {
      console.error("Error adding SharePoint PDF:", error);
      toast({
        variant: "destructive",
        title: "Error adding PDF",
        description: "Failed to add SharePoint PDF. Please try again.",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-4 md:py-12">
        <div className="max-w-5xl mx-auto px-3 md:px-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl md:text-3xl font-bold">PDF Browser</h1>
            <Button 
              onClick={() => setIsAddLinkDialogOpen(true)}
              className="flex items-center gap-2"
            >
              <LinkIcon className="h-4 w-4" />
              <span className={isMobile ? "hidden" : ""}>Add External PDF</span>
            </Button>
          </div>
          
          <div className="mb-8 bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-medium mb-4">Nanoski Oglasnik - Prelistaj</h3>
            <div className="elfsight-app-e19d93cc-8509-40f2-a1ec-9d0f0cbd122c" data-elfsight-app-lazy></div>
          </div>
          
          {availablePdfs.length === 0 ? (
            <div className="p-4 md:p-8 text-center">
              <FileText className="h-10 w-10 md:h-12 md:w-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-medium mb-2">No PDFs available</h3>
              <p className="text-gray-500 mb-4">No PDFs have been uploaded yet</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/upload-pdf">
                  <Button className="w-full sm:w-auto flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Upload PDF
                  </Button>
                </Link>
                <Button 
                  onClick={() => setIsAddLinkDialogOpen(true)}
                  variant="outline"
                  className="w-full sm:w-auto flex items-center gap-2"
                >
                  <LinkIcon className="h-4 w-4" />
                  Link External PDF
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center mb-3 md:mb-8">
                <h1 className="text-xl md:text-3xl font-bold">{pdfTitle}</h1>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-2 md:p-6 mb-3 md:mb-8">
                {pdfError ? (
                  <div className="p-4 md:p-8 text-center">
                    <FileText className="h-10 w-10 md:h-12 md:w-12 text-gray-400 mx-auto mb-3" />
                    <h3 className="text-lg font-medium mb-2">PDF cannot be displayed</h3>
                    <p className="text-gray-500 mb-4">The PDF file doesn't exist or is not accessible.</p>
                  </div>
                ) : (
                  <PDFViewer 
                    pdfUrl={currentPdf} 
                    title={pdfTitle}
                    onError={handlePdfError}
                  />
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-3 md:mt-8">
                {availablePdfs.map((pdf, index) => (
                  <div 
                    key={index}
                    className={`border rounded-lg p-3 hover:shadow-md cursor-pointer transition-all duration-300 ${currentPdf === pdf.url ? 'border-[#e32530] bg-red-50' : 'border-gray-200'}`}
                    onClick={() => selectPdf(pdf.url, pdf.title)}
                  >
                    <div className="flex items-center">
                      <FileText className={`h-5 w-5 mr-2 ${currentPdf === pdf.url ? 'text-[#e32530]' : 'text-gray-500'}`} />
                      <div className="flex-grow">
                        <p className="font-medium text-sm md:text-base line-clamp-1">{pdf.title}</p>
                        {pdf.isExternal && (
                          <span className="text-xs text-gray-500">External link</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      
      <Dialog open={isAddLinkDialogOpen} onOpenChange={setIsAddLinkDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add External PDF</DialogTitle>
          </DialogHeader>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="external">Standard URL</TabsTrigger>
              <TabsTrigger value="sharepoint">SharePoint</TabsTrigger>
            </TabsList>
            
            <TabsContent value="external" className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="pdf-url">PDF URL</Label>
                <Input 
                  id="pdf-url" 
                  placeholder="https://example.com/document.pdf" 
                  value={externalPdfUrl}
                  onChange={(e) => setExternalPdfUrl(e.target.value)}
                />
                <p className="text-xs text-gray-500">
                  Enter the full URL to the PDF file
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pdf-title">Title (optional)</Label>
                <Input 
                  id="pdf-title" 
                  placeholder="My Document" 
                  value={externalPdfTitle}
                  onChange={(e) => setExternalPdfTitle(e.target.value)}
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddLinkDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleAddExternalPdf}>Add PDF</Button>
              </DialogFooter>
            </TabsContent>
            
            <TabsContent value="sharepoint" className="space-y-4 py-4">
              <Alert className="bg-amber-50 border-amber-200">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                  Make sure the SharePoint PDF is set to allow anyone with the link to view it
                </AlertDescription>
              </Alert>
              
              <div className="space-y-2">
                <Label htmlFor="sharepoint-url">SharePoint URL</Label>
                <Input 
                  id="sharepoint-url" 
                  placeholder="https://company-my.sharepoint.com/:b:/g/..." 
                  value={sharePointUrl}
                  onChange={(e) => setSharePointUrl(e.target.value)}
                />
                <p className="text-xs text-gray-500">
                  Paste the SharePoint sharing link here
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sharepoint-title">Title (optional)</Label>
                <Input 
                  id="sharepoint-title" 
                  placeholder="My SharePoint Document" 
                  value={sharePointTitle}
                  onChange={(e) => setSharePointTitle(e.target.value)}
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddLinkDialogOpen(false)}>Cancel</Button>
                <Button 
                  onClick={handleAddSharePointPdf} 
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Add SharePoint PDF"}
                </Button>
              </DialogFooter>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default PDFBrowserPage;
