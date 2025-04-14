
import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDFViewer from "@/components/PDFViewer";
import { FileText, Plus, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { decompressData } from "@/services/pdfService";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PDFBrowserPage = () => {
  const [currentPdf, setCurrentPdf] = useState<string>("");
  const [pdfTitle, setPdfTitle] = useState<string>("");
  const [pdfError, setPdfError] = useState<boolean>(false);
  const [availablePdfs, setAvailablePdfs] = useState<Array<{ url: string; title: string; isExternal?: boolean }>>([]);
  const [isAddLinkDialogOpen, setIsAddLinkDialogOpen] = useState<boolean>(false);
  const [externalPdfUrl, setExternalPdfUrl] = useState<string>("");
  const [externalPdfTitle, setExternalPdfTitle] = useState<string>("");
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    setPdfError(false);
    
    // Load previously saved external PDFs
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
      // If no uploaded PDF, just show the external ones
      setAvailablePdfs(externalPdfsList);
      
      // If there are external PDFs, select the first one
      if (externalPdfsList.length > 0) {
        selectPdf(externalPdfsList[0].url, externalPdfsList[0].title);
      }
    }
  }, [toast]);

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
    
    // Check if this PDF is already in the list
    const exists = availablePdfs.some(pdf => pdf.url === newPdf.url);
    
    if (!exists) {
      const updatedPdfs = [...availablePdfs, newPdf];
      setAvailablePdfs(updatedPdfs);
      
      // Save external PDFs to localStorage
      const externalPdfs = updatedPdfs.filter(pdf => pdf.isExternal);
      localStorage.setItem('externalPdfs', JSON.stringify(externalPdfs));
      
      // Select the newly added PDF
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
    
    // Reset form and close dialog
    setExternalPdfUrl("");
    setExternalPdfTitle("");
    setIsAddLinkDialogOpen(false);
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
      
      {/* Add External PDF Dialog */}
      <Dialog open={isAddLinkDialogOpen} onOpenChange={setIsAddLinkDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add External PDF</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
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
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddLinkDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddExternalPdf}>Add PDF</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default PDFBrowserPage;
