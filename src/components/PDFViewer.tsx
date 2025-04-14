
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ 
  pdfUrl,
  title
}) => {
  // We'll use this for controlling UI elements, but actual zoom 
  // will be handled differently since iframe doesn't support style.zoom
  const [zoomLevel, setZoomLevel] = useState(100);
  const [fullscreen, setFullscreen] = useState(false);
  const [isObjectFallback, setIsObjectFallback] = useState(false);
  
  useEffect(() => {
    // Reset zoom level when PDF changes
    setZoomLevel(100);
  }, [pdfUrl]);
  
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 25, 200));
  };
  
  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 25, 50));
  };
  
  const handleDownload = () => {
    // For base64 data
    if (pdfUrl.startsWith('data:application/pdf')) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = title || 'document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    
    // For regular URLs (local or remote)
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleError = () => {
    console.log("PDF iframe failed to load, switching to object tag");
    setIsObjectFallback(true);
  };

  // Determine if we're using a base64 encoded PDF or a file URL
  const isPdfBase64 = pdfUrl.startsWith('data:application/pdf');

  return (
    <div className="w-full flex flex-col">
      <div className="bg-gray-100 p-2 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleZoomOut}
            disabled={zoomLevel <= 50}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">{zoomLevel}%</span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleZoomIn}
            disabled={zoomLevel >= 200}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleDownload} 
          className="flex items-center gap-1"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Prenesi</span>
        </Button>
      </div>
      
      <div className="border border-gray-200 rounded-b-lg overflow-hidden bg-gray-50 h-[70vh]">
        {isObjectFallback ? (
          <object
            data={pdfUrl}
            type="application/pdf"
            className="w-full h-full"
            style={{ 
              transform: `scale(${zoomLevel / 100})`, 
              transformOrigin: 'top left',
              width: `${10000 / zoomLevel}%`  // Adjust width based on zoom
            }}
          >
            <div className="flex flex-col items-center justify-center p-6 text-center bg-white h-full">
              <p className="mb-4 text-gray-600">Vaš brskalnik ne podpira PDF prikazovalnika.</p>
              <Button onClick={handleDownload} className="bg-[#e32530] hover:bg-[#e32530]/90">
                <Download className="h-4 w-4 mr-2" />
                Prenesi PDF
              </Button>
            </div>
          </object>
        ) : (
          <embed
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            type="application/pdf"
            className="w-full h-full"
            style={{ 
              transform: `scale(${zoomLevel / 100})`, 
              transformOrigin: 'top left',
              width: `${10000 / zoomLevel}%`  // Adjust width based on zoom
            }}
            onError={handleError}
          />
        )}
      </div>
    </div>
  );
};

export default PDFViewer;
