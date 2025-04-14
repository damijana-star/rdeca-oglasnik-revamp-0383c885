import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDFViewer from "@/components/PDFViewer";
import { Button } from "@/components/ui/button";
import { FileText, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { decompressData } from "@/services/pdfService";

const PDFBrowserPage = () => {
  const [currentPdf, setCurrentPdf] = useState<string>("");
  const [pdfTitle, setPdfTitle] = useState<string>("");
  const [pdfError, setPdfError] = useState<boolean>(false);
  const [availablePdfs, setAvailablePdfs] = useState<Array<{ url: string; title: string }>>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Reset error state when changing PDF
    setPdfError(false);
    
    // Try to load previously uploaded PDF
    const storedPdfInfo = localStorage.getItem('lastUploadedPdf');
    if (storedPdfInfo) {
      try {
        const pdfInfo = JSON.parse(storedPdfInfo);
        
        // Check if we have base64 data
        if (pdfInfo && pdfInfo.data) {
          // Check if the data is compressed and decompress if needed
          const pdfData = pdfInfo.compressed ? decompressData(pdfInfo.data) : pdfInfo.data;
          
          // Add the uploaded PDF to the available PDFs
          const newPdf = {
            url: pdfData,
            title: pdfInfo.title || "Uploaded PDF"
          };
          
          // Check if we already have this PDF in the list
          const exists = availablePdfs.some(pdf => pdf.title === newPdf.title);
          
          if (!exists) {
            setAvailablePdfs(prev => [newPdf, ...prev]);
            
            // Automatically select the uploaded PDF
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
  }, [toast]); // eslint-disable-line react-hooks/exhaustive-deps

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
      <main className="flex-grow container py-12">
        <div className="max-w-5xl mx-auto">
          {availablePdfs.length === 0 ? (
            <div className="p-8 text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No PDFs available</h3>
              <p className="text-gray-500 mb-4">Upload a PDF to get started</p>
              <Link to="/upload-pdf">
                <Button variant="default" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Upload your first PDF
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">{pdfTitle}</h1>
              <Link to="/upload-pdf">
                <Button variant="outline" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Upload your own PDF
                </Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              {pdfError ? (
                <div className="p-8 text-center">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">PDF cannot be displayed</h3>
                  <p className="text-gray-500 mb-4">The PDF file doesn't exist or is not accessible.</p>
                  <Button onClick={() => setPdfError(false)}>Try again</Button>
                </div>
              ) : (
                <PDFViewer 
                  pdfUrl={currentPdf} 
                  title={pdfTitle}
                  onError={handlePdfError}
                />
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {availablePdfs.map((pdf, index) => (
                <div 
                  key={index}
                  className={`border rounded-lg p-4 hover:shadow-md cursor-pointer transition-all duration-300 ${currentPdf === pdf.url ? 'border-[#e32530] bg-red-50' : 'border-gray-200'}`}
                  onClick={() => selectPdf(pdf.url, pdf.title)}
                >
                  <div className="flex items-center">
                    <FileText className={`h-6 w-6 mr-2 ${currentPdf === pdf.url ? 'text-[#e32530]' : 'text-gray-500'}`} />
                    <div>
                      <p className="font-medium">{pdf.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PDFBrowserPage;
