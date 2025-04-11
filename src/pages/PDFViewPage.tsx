
import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDFViewer from "@/components/PDFViewer";
import { useToast } from "@/hooks/use-toast";

const PDFViewPage = () => {
  // Default to the sample PDF file
  const [lastUploadedPdf, setLastUploadedPdf] = useState<string>("/oglasnik-april-2025.pdf");
  const [pdfTitle, setPdfTitle] = useState<string>("Nanoski Oglasnik - April 2025");
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if we have any stored PDFs in local storage
    const storedPdfInfo = localStorage.getItem('lastUploadedPdf');
    
    if (storedPdfInfo) {
      try {
        const pdfInfo = JSON.parse(storedPdfInfo);
        
        // Check if URL is valid and use it
        if (pdfInfo && pdfInfo.url) {
          console.log("Loading PDF from storage:", pdfInfo.url);
          setLastUploadedPdf(pdfInfo.url);
          setPdfTitle(pdfInfo.title || "Uploaded PDF");
          
          toast({
            title: "PDF naložen",
            description: "Prikazujem zadnjo naloženo PDF datoteko.",
          });
        } else {
          console.log("No valid PDF URL found in storage");
        }
      } catch (error) {
        console.error("Error parsing stored PDF info:", error);
        // Fall back to default PDF if there's an error
        setLastUploadedPdf("/oglasnik-april-2025.pdf");
        setPdfTitle("Nanoski Oglasnik - April 2025");
      }
    } else {
      console.log("No PDF info found in storage, using default");
    }
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">{pdfTitle}</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <PDFViewer 
              pdfUrl={lastUploadedPdf} 
              title={pdfTitle} 
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PDFViewPage;
