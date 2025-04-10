
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDFViewer from "@/components/PDFViewer";

const PDFViewPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Nanoški Oglasnik April 2025</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <PDFViewer 
              pdfUrl="/oglasnik-april-2025.pdf" 
              title="Nanoski Oglasnik - April 2025" 
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PDFViewPage;
