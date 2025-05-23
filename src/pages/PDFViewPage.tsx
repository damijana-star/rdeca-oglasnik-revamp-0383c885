
import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDFViewer from "@/components/PDFViewer";
import { useToast } from "@/hooks/use-toast";
import { useLocation, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { decompressData } from "@/services/pdfService";
import { useIsMobile } from "@/hooks/use-mobile";

const PDFViewPage = () => {
  // Default to the sample PDF file
  const [lastUploadedPdf, setLastUploadedPdf] = useState<string>("/oglasnik-april-2025.pdf");
  const [pdfTitle, setPdfTitle] = useState<string>("Nanoski Oglasnik - April 2025");
  const [isLoading, setIsLoading] = useState(false); // Changed to false initially
  const [loadError, setLoadError] = useState(false);
  const { toast } = useToast();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    // Only set loading if we're actually loading from storage or parameters
    const hasUrlParam = searchParams.get('url') !== null;
    const hasStateFromUpload = location.state && location.state.fromUpload;
    
    // Only show loading state if we're loading from parameters or storage
    if (hasUrlParam || hasStateFromUpload) {
      setIsLoading(true);
    } else {
      setIsLoading(false); // Default PDF should load instantly
    }
    
    setLoadError(false);
    
    console.log("PDFViewPage mounted, checking for PDF data");
    
    // Check if we're coming from the upload page
    const fromUpload = location.state && location.state.fromUpload;
    console.log("Coming from upload:", fromUpload);
    
    // Check if there's a URL parameter
    const urlParam = searchParams.get('url');
    const titleParam = searchParams.get('title');
    
    if (urlParam) {
      console.log("Loading PDF from URL parameter:", urlParam);
      setLastUploadedPdf(decodeURIComponent(urlParam));
      setPdfTitle(titleParam ? decodeURIComponent(titleParam) : "External PDF");
      setIsLoading(false);
      return;
    }
    
    try {
      loadPdfFromStorage();
    } catch (error) {
      console.error("Error loading PDF:", error);
      setLoadError(true);
      toast({
        title: "Napaka pri nalaganju",
        description: "PDF datoteke ni bilo mogoče naložiti.",
        variant: "destructive"
      });
    } finally {
      // Ensure loading is set to false when complete
      setIsLoading(false);
    }
    
  }, [toast, location.state, searchParams]);
  
  const loadPdfFromStorage = () => {
    const storedPdfInfo = localStorage.getItem('lastUploadedPdf');
    console.log("Found stored PDF info:", !!storedPdfInfo);
    
    if (storedPdfInfo) {
      try {
        const pdfInfo = JSON.parse(storedPdfInfo);
        console.log("PDF info parsed successfully:", pdfInfo.title);
        
        // Check if we have base64 data
        if (pdfInfo && pdfInfo.data) {
          console.log("Loading PDF from storage (base64)");
          
          // Check if the data is compressed and decompress if needed
          const pdfData = pdfInfo.compressed ? decompressData(pdfInfo.data) : pdfInfo.data;
          console.log("PDF data processed, compressed:", pdfInfo.compressed);
          
          setLastUploadedPdf(pdfData);
          setPdfTitle(pdfInfo.title || "Uploaded PDF");
          
          toast({
            title: "PDF naložen",
            description: "Prikazujem naloženo PDF datoteko.",
          });
        } 
        // Backward compatibility with older format
        else if (pdfInfo && pdfInfo.url) {
          console.log("Loading PDF from storage (URL):", pdfInfo.url);
          setLastUploadedPdf(pdfInfo.url);
          setPdfTitle(pdfInfo.title || "Uploaded PDF");
          
          toast({
            title: "PDF naložen",
            description: "Prikazujem naloženo PDF datoteko.",
          });
        } else {
          console.log("No valid PDF data found in storage");
          // Fall back to default PDF
          setLastUploadedPdf("/oglasnik-april-2025.pdf");
          setPdfTitle("Nanoski Oglasnik - April 2025");
        }
      } catch (error) {
        console.error("Error parsing stored PDF info:", error);
        // Fall back to default PDF if there's an error
        setLastUploadedPdf("/oglasnik-april-2025.pdf");
        setPdfTitle("Nanoski Oglasnik - April 2025");
      }
    } else {
      console.log("No PDF info found in storage, using default");
      // Ensure we use the default PDF
      setLastUploadedPdf("/oglasnik-april-2025.pdf");
      setPdfTitle("Nanoski Oglasnik - April 2025");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-4 md:py-12">
        <div className="max-w-5xl mx-auto px-3 md:px-4">
          <h1 className="text-xl md:text-3xl font-bold mb-3 md:mb-8">{pdfTitle}</h1>
          
          {isLoading ? (
            <div className="flex items-center justify-center p-4 md:p-12">
              <div className="animate-pulse">
                <p className="text-gray-500">Nalaganje PDF datoteke...</p>
              </div>
            </div>
          ) : loadError ? (
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-4 md:mb-8 text-center">
              <FileText className="h-10 w-10 md:h-16 md:w-16 text-gray-400 mx-auto mb-3" />
              <h2 className="text-lg md:text-xl font-semibold mb-2">Napaka pri nalaganju PDF datoteke</h2>
              <p className="text-gray-600 mb-4 md:mb-6">PDF datoteke ni bilo mogoče naložiti. Poskusite z nalaganjem nove datoteke.</p>
              <Link to="/upload-pdf">
                <Button className="bg-[#e32530] hover:bg-[#e32530]/90">
                  <Upload className="h-4 w-4 mr-2" />
                  Naloži novo PDF datoteko
                </Button>
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-2 md:p-6 mb-3 md:mb-8">
              <PDFViewer 
                pdfUrl={lastUploadedPdf} 
                title={pdfTitle} 
              />
            </div>
          )}
          
          <div className="mt-3 md:mt-6 flex justify-center">
            <Link to="/upload-pdf">
              <Button variant="outline" className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                {isMobile ? "Naloži drugo" : "Naloži drugo PDF datoteko"}
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PDFViewPage;
