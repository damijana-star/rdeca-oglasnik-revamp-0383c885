
import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDFViewer from "@/components/PDFViewer";
import { Button } from "@/components/ui/button";
import { FileText, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PDFBrowserPage = () => {
  const [currentPdf, setCurrentPdf] = useState<string>("/sample.pdf");
  const [pdfTitle, setPdfTitle] = useState<string>("Nanoski Oglasnik - April 2025");
  const [pdfError, setPdfError] = useState<boolean>(false);
  const { toast } = useToast();

  // Sample PDFs that users can choose from
  const availablePdfs = [
    {
      url: "/sample.pdf",
      title: "Nanoski Oglasnik - April 2025"
    },
    // Add more sample PDFs here in the future
  ];

  useEffect(() => {
    // Reset error state when changing PDF
    setPdfError(false);
  }, [currentPdf]);

  const selectPdf = (url: string, title: string) => {
    setCurrentPdf(url);
    setPdfTitle(title);
    toast({
      title: "PDF naložen",
      description: `Prikazujem: ${title}`,
    });
  };

  const handlePdfError = () => {
    setPdfError(true);
    toast({
      variant: "destructive",
      title: "Napaka pri nalaganju",
      description: "PDF ni mogoče prikazati. Prosimo, poskusite z drugo datoteko.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">{pdfTitle}</h1>
            <Link to="/upload-pdf">
              <Button variant="outline" className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Naloži svojo PDF datoteko
              </Button>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            {pdfError ? (
              <div className="p-8 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">PDF datoteke ni mogoče prikazati</h3>
                <p className="text-gray-500 mb-4">PDF datoteka ne obstaja ali ni dosegljiva.</p>
                <Button onClick={() => setPdfError(false)}>Poskusi znova</Button>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PDFBrowserPage;
