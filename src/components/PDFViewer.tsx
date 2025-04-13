
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from "lucide-react";

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
      
      <div className="border border-gray-200 rounded-b-lg overflow-hidden bg-gray-800 h-[70vh]">
        <iframe
          src={pdfUrl}
          className="w-full h-full"
          title={title || "PDF Viewer"}
          style={{ border: 'none' }}
        >
          <div className="flex flex-col items-center justify-center p-6 text-center bg-white h-full">
            <p className="mb-4 text-gray-600">Vaš brskalnik ne podpira vgrajenega PDF prikazovalnika.</p>
            <Button onClick={handleDownload} className="bg-[#e32530] hover:bg-[#e32530]/90">
              <Download className="h-4 w-4 mr-2" />
              Prenesi PDF
            </Button>
          </div>
        </iframe>
      </div>
    </div>
  );
};

export default PDFViewer;
