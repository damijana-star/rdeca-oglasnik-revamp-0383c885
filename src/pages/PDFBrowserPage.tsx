
import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDFViewer from "@/components/PDFViewer";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { decompressData } from "@/services/pdfService";
import { useIsMobile } from "@/hooks/use-mobile";

const PDFBrowserPage = () => {
  const [currentPdf, setCurrentPdf] = useState<string>("");
  const [pdfTitle, setPdfTitle] = useState<string>("");
  const [pdfError, setPdfError] = useState<boolean>(false);
  const [availablePdfs, setAvailablePdfs] = useState<Array<{ url: string; title: string }>>([]);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    setPdfError(false);
    
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
            setAvailablePdfs(prev => [newPdf, ...prev]);
            
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
    }
  }, [toast]);

  const selectPdf = (url: string, title: string) => {
    setCurrentPdf(url);
    setPdfTitle(title);
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-6 md:py-12">
        <div className="max-w-5xl mx-auto px-4">
          {availablePdfs.length === 0 ? (
            <div className="p-4 md:p-8 text-center">
              <FileText className="h-10 w-10 md:h-12 md:w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No PDFs available</h3>
              <p className="text-gray-500 mb-4">No PDFs have been uploaded yet</p>
            </div>
          ) : (
            <>
              <div className="flex items-center mb-4 md:mb-8">
                <h1 className="text-2xl md:text-3xl font-bold">{pdfTitle}</h1>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-3 md:p-6 mb-4 md:mb-8">
                {pdfError ? (
                  <div className="p-4 md:p-8 text-center">
                    <FileText className="h-10 w-10 md:h-12 md:w-12 text-gray-400 mx-auto mb-4" />
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-8">
                {availablePdfs.map((pdf, index) => (
                  <div 
                    key={index}
                    className={`border rounded-lg p-3 md:p-4 hover:shadow-md cursor-pointer transition-all duration-300 ${currentPdf === pdf.url ? 'border-[#e32530] bg-red-50' : 'border-gray-200'}`}
                    onClick={() => selectPdf(pdf.url, pdf.title)}
                  >
                    <div className="flex items-center">
                      <FileText className={`h-5 w-5 md:h-6 md:w-6 mr-2 ${currentPdf === pdf.url ? 'text-[#e32530]' : 'text-gray-500'}`} />
                      <div>
                        <p className="font-medium text-sm md:text-base">{pdf.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PDFBrowserPage;
