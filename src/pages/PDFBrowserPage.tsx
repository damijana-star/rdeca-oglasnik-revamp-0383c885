
import React, { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PDFBrowserPage = () => {
  useEffect(() => {
    // Create and append the Elfsight script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.head.appendChild(script);

    // Create a div for the widget
    const widgetDiv = document.getElementById('elfsight-widget-container');
    if (widgetDiv) {
      const appDiv = document.createElement('div');
      appDiv.className = 'elfsight-app-e19d93cc850940f2a1ec9d0f0cbd122c';
      widgetDiv.appendChild(appDiv);
    }

    return () => {
      // Clean up
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-4 md:py-12">
        <div className="max-w-5xl mx-auto px-3 md:px-4">
          <h1 className="text-xl md:text-3xl font-bold mb-8">Prelistaj Nanoski Oglasnik</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div id="elfsight-widget-container" className="w-full rounded-md min-h-[600px]">
              {/* Elfsight widget will be dynamically inserted here */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PDFBrowserPage;
