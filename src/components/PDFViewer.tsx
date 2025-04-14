
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Maximize, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
  isPreview?: boolean;
  onError?: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ 
  pdfUrl,
  title,
  isPreview = false,
  onError
}) => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [fullscreen, setFullscreen] = useState(false);
  const [isObjectFallback, setIsObjectFallback] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setZoomLevel(isMobile ? 100 : 100);
    setIsObjectFallback(false);
    setLoadError(false);
    setIsLoading(true);
    
    if (pdfUrl.startsWith('blob:')) {
      console.log("Loading blob URL PDF:", pdfUrl);
    }
    
    // Reset loading state after a delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [pdfUrl, isMobile]);
  
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 25, 200));
  };
  
  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 25, 50));
  };
  
  const handleDownload = () => {
    if (pdfUrl.startsWith('data:application/pdf')) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = title || 'document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleError = () => {
    console.log("PDF embed failed to load, switching to object tag");
    setIsObjectFallback(true);
  };

  const handleObjectError = () => {
    console.log("PDF object tag also failed, showing error state");
    setLoadError(true);
    // Call the onError callback if provided
    if (onError) {
      onError();
    }
  };

  const isPdfBase64 = pdfUrl.startsWith('data:application/pdf');
  const isPdfBlob = pdfUrl.startsWith('blob:');
  
  const openInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  // Mobile optimization: use different height based on device
  const containerHeight = isMobile ? "40vh" : "70vh";

  return (
    <div className="w-full flex flex-col">
      <div className="bg-gray-100 p-2 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleZoomOut}
            disabled={zoomLevel <= 50 || isMobile}
            className={isMobile ? "hidden" : ""}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className={`text-sm font-medium ${isMobile ? "hidden" : ""}`}>{zoomLevel}%</span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleZoomIn}
            disabled={zoomLevel >= 200 || isMobile}
            className={isMobile ? "hidden" : ""}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={openInNewTab}
            className="flex items-center gap-1"
          >
            <Maximize className="h-4 w-4" />
            <span className="hidden sm:inline">Odpri</span>
          </Button>
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
      </div>
      
      <div 
        className="border border-gray-200 rounded-b-lg overflow-hidden bg-gray-50"
        style={{ height: containerHeight }}
      >
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-12 bg-gray-200 rounded-full mb-2"></div>
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        ) : loadError ? (
          <div className="flex flex-col items-center justify-center p-6 text-center bg-white h-full">
            <p className="mb-4 text-gray-600">PDF ni mogoče prikazati. Poskusite s prenosom.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button onClick={openInNewTab} variant="outline">
                <Maximize className="h-4 w-4 mr-2" />
                Odpri v novem zavihku
              </Button>
              <Button onClick={handleDownload} className="bg-[#e32530] hover:bg-[#e32530]/90">
                <Download className="h-4 w-4 mr-2" />
                Prenesi PDF
              </Button>
            </div>
          </div>
        ) : isObjectFallback ? (
          <object
            data={pdfUrl}
            type="application/pdf"
            className="w-full h-full"
            style={{ 
              transform: `scale(${zoomLevel / 100})`, 
              transformOrigin: 'top left',
              width: `${10000 / zoomLevel}%`
            }}
            onError={handleObjectError}
          >
            <div className="flex flex-col items-center justify-center p-6 text-center bg-white h-full">
              <p className="mb-4 text-gray-600">Vaš brskalnik ne podpira PDF prikazovalnika.</p>
              <Button onClick={handleDownload} className="bg-[#e32530] hover:bg-[#e32530]/90">
                <Download className="h-4 w-4 mr-2" />
                Prenesi PDF
              </Button>
            </div>
          </object>
        ) : isMobile ? (
          // Enhanced mobile view with better display options
          <div className="flex flex-col items-center justify-center h-full p-4">
            <iframe
              src={`${pdfUrl}${isPdfBlob || isPdfBase64 ? '' : '#toolbar=0&navpanes=0&scrollbar=0&view=FitH'}`}
              className="w-full h-full mb-4"
              style={{ height: '60%' }}
              onError={handleError}
            />
            <p className="text-gray-600 mb-6 text-center text-sm">Za najboljšo izkušnjo priporočamo, da PDF dokument odprete ali prenesete.</p>
            <div className="flex flex-col space-y-3 w-full max-w-xs">
              <Button onClick={openInNewTab} variant="outline" className="w-full justify-center">
                <Maximize className="h-4 w-4 mr-2" />
                Odpri v brskalniku
              </Button>
              <Button onClick={handleDownload} className="w-full bg-[#e32530] hover:bg-[#e32530]/90 justify-center">
                <Download className="h-4 w-4 mr-2" />
                Prenesi PDF
              </Button>
            </div>
          </div>
        ) : (
          <iframe
            src={`${pdfUrl}${isPdfBlob || isPdfBase64 ? '' : '#toolbar=0&navpanes=0&scrollbar=0&view=FitH'}`}
            className="w-full h-full"
            style={{ 
              transform: `scale(${zoomLevel / 100})`, 
              transformOrigin: 'top left',
              width: `${10000 / zoomLevel}%`
            }}
            onError={handleError}
          />
        )}
      </div>
    </div>
  );
};

export default PDFViewer;
