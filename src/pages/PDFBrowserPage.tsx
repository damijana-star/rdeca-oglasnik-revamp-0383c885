
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PDFBrowserPage = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-4 md:py-12">
        <div className="max-w-5xl mx-auto px-3 md:px-4">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <iframe src="https://e19d93cc850940f2a1ec9d0f0cbd122c.elf.site" width="100%" height="600" frameBorder="0" title="Nanoski Oglasnik" className="w-full rounded-md" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};

export default PDFBrowserPage;
