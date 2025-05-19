
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface PDFObjectFallbackProps {
  pdfUrl: string;
  zoomLevel: number;
  onDownload: () => void;
  onError: () => void;
}

const PDFObjectFallback: React.FC<PDFObjectFallbackProps> = ({ 
  pdfUrl, 
  zoomLevel, 
  onDownload, 
  onError 
}) => {
  const objectRef = useRef<HTMLObjectElement>(null);
  
  // Refresh object when pdfUrl changes
  useEffect(() => {
    if (objectRef.current) {
      try {
        // Clear the data attribute
        objectRef.current.data = '';
        
        // Create a unique URL with timestamp to force refresh
        const timestamp = new Date().getTime();
        const refreshUrl = pdfUrl.includes('data:') || pdfUrl.includes('blob:') 
          ? pdfUrl 
          : `${pdfUrl}${pdfUrl.includes('?') ? '&' : '?'}_t=${timestamp}`;
        
        // Set timeout to ensure DOM updates before setting the new URL
        setTimeout(() => {
          if (objectRef.current) {
            objectRef.current.data = refreshUrl;
          }
        }, 100);
      } catch (error) {
        console.error("Error refreshing PDF object:", error);
        onError();
      }
    }
  }, [pdfUrl]);

  return (
    <object
      ref={objectRef}
      type="application/pdf"
      className="w-full h-full bg-white"
      style={{ 
        transform: `scale(${zoomLevel / 100})`, 
        transformOrigin: 'top left',
        width: `${10000 / zoomLevel}%`
      }}
      onError={onError}
    >
      <div className="flex flex-col items-center justify-center p-6 text-center bg-white h-full">
        <p className="mb-4 text-gray-600">Vaš brskalnik ne podpira PDF prikazovalnika.</p>
        <Button onClick={onDownload} className="bg-[#e32530] hover:bg-[#e32530]/90">
          <Download className="h-4 w-4 mr-2" />
          Prenesi PDF
        </Button>
      </div>
    </object>
  );
};

export default PDFObjectFallback;
