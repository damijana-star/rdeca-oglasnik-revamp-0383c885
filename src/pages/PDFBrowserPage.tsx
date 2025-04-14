
import React, { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PDFBrowserPage = () => {
  // Load the Elfsight widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-4 md:py-12">
        <div className="max-w-5xl mx-auto px-3 md:px-4">
          <h1 className="text-xl md:text-3xl font-bold mb-8">Prelistaj Nanoski Oglasnik</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div id="e19d93cc850940f2a1ec9d0f0cbd122c" className="elfsight-app-e19d93cc850940f2a1ec9d0f0cbd122c"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PDFBrowserPage;
