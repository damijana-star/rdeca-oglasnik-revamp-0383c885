
import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDFViewer from "@/components/PDFViewer";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const PDFViewPage = () => {
  // Default to the sample PDF file
  const [lastUploadedPdf, setLastUploadedPdf] = useState<string>("/oglasnik-april-2025.pdf");
  const [pdfTitle, setPdfTitle] = useState<string>("Nanoski Oglasnik - April 2025");
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const { toast } = useToast();
  const location = useLocation();
  
  useEffect(() => {
    // Set loading state
    setIsLoading(true);
    setLoadError(false);
    
    console.log("PDFViewPage mounted, checking for PDF data");
    
    // Check if we're coming from the upload page
    const fromUpload = location.state && location.state.fromUpload;
    console.log("Coming from upload:", fromUpload);
    
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
      setIsLoading(false);
    }
    
  }, [toast, location.state]);
  
  const loadPdfFromStorage = () => {
    const storedPdfInfo = localStorage.getItem('lastUploadedPdf');
    console.log("Found stored PDF info:", !!storedPdfInfo);
    
    if (storedPdfInfo) {
      try {
        const pdfInfo = JSON.parse(storedPdfInfo);
        
        // Check if we have base64 data
        if (pdfInfo && pdfInfo.data) {
          console.log("Loading PDF from storage (base64)");
          setLastUploadedPdf(pdfInfo.data);
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
      <main className="flex-grow container py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">{pdfTitle}</h1>
          
          {isLoading ? (
            <div className="flex items-center justify-center p-12">
              <div className="animate-pulse">
                <p className="text-gray-500">Nalaganje PDF datoteke...</p>
              </div>
            </div>
          ) : loadError ? (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8 text-center">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Napaka pri nalaganju PDF datoteke</h2>
              <p className="text-gray-600 mb-6">PDF datoteke ni bilo mogoče naložiti. Poskusite z nalaganjem nove datoteke.</p>
              <Link to="/upload-pdf">
                <Button className="bg-[#e32530] hover:bg-[#e32530]/90">
                  <Upload className="h-4 w-4 mr-2" />
                  Naloži novo PDF datoteko
                </Button>
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <PDFViewer 
                pdfUrl={lastUploadedPdf} 
                title={pdfTitle} 
              />
            </div>
          )}
          
          <div className="mt-6 flex justify-center">
            <Link to="/upload-pdf">
              <Button variant="outline" className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Naloži drugo PDF datoteko
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
