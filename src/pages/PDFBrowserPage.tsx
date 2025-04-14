
import React, { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PDFBrowserPage = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);
  
  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
    
    if (!existingScript) {
      // Create and append the Elfsight script
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.defer = true;
      script.onload = () => {
        console.log("Elfsight script loaded successfully");
        setIsScriptLoaded(true);
      };
      
      document.head.appendChild(script);
      
      // Clean up function
      return () => {
        if (script && document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    } else {
      console.log("Elfsight script already exists in the document");
      setIsScriptLoaded(true);
    }
  }, []);
  
  useEffect(() => {
    if (isScriptLoaded) {
      // Create widget container after script is loaded
      const container = document.getElementById('elfsight-widget-container');
      if (container && !isWidgetLoaded) {
        // Clear any existing content first
        container.innerHTML = '';
        
        // Create the widget div
        const widgetDiv = document.createElement('div');
        widgetDiv.className = 'elfsight-app-e19d93cc850940f2a1ec9d0f0cbd122c';
        container.appendChild(widgetDiv);
        
        console.log("Elfsight widget container created");
        setIsWidgetLoaded(true);
        
        // Try to force widget initialization if the platform is already loaded
        if (window.eapps && typeof window.eapps.reinitializeWidget === 'function') {
          setTimeout(() => {
            window.eapps.reinitializeWidget('e19d93cc850940f2a1ec9d0f0cbd122c');
          }, 500);
        }
      }
    }
  }, [isScriptLoaded, isWidgetLoaded]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-4 md:py-12">
        <div className="max-w-5xl mx-auto px-3 md:px-4">
          <h1 className="text-xl md:text-3xl font-bold mb-8">Prelistaj Nanoski Oglasnik</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div id="elfsight-widget-container" className="w-full rounded-md min-h-[600px]">
              {!isScriptLoaded && (
                <div className="flex items-center justify-center h-[400px]">
                  <p className="text-gray-500">Nalaganje...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Add this global type definition for the eapps object
declare global {
  interface Window {
    eapps?: {
      reinitializeWidget?: (widgetId: string) => void;
    };
  }
}

export default PDFBrowserPage;
