
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PDFBrowserPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-4 md:py-12">
        <div className="max-w-5xl mx-auto px-3 md:px-4">
          <h1 className="text-xl md:text-3xl font-bold mb-8">Prelistaj Nanoski Oglasnik</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-medium mb-4">Nanoski Oglasnik - Prelistaj</h3>
            <div className="elfsight-app-e19d93cc-8509-40f2-a1ec-9d0f0cbd122c" data-elfsight-app-lazy></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PDFBrowserPage;
