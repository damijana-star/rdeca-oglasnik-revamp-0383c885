import React, { useState, useEffect } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import PDFToolbar from "@/components/pdf/PDFToolbar";
import PDFErrorState from "@/components/pdf/PDFErrorState";
import PDFObjectFallback from "@/components/pdf/PDFObjectFallback";
import PDFIframe from "@/components/pdf/PDFIframe";
import PDFMobileView from "@/components/pdf/PDFMobileView";
import PDFLoading from "@/components/pdf/PDFLoading";

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
  const [isObjectFallback, setIsObjectFallback] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setZoomLevel(isMobile ? 100 : 100);
    setIsObjectFallback(false);
    setLoadError(false);
    
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
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
    if (onError) {
      onError();
    }
  };

  const isPdfBase64 = pdfUrl.startsWith('data:application/pdf');
  const isPdfBlob = pdfUrl.startsWith('blob:');
  
  const openInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  const containerHeight = isMobile ? "50vh" : "70vh";

  const renderContent = () => {
    if (isLoading) {
      return <PDFLoading />;
    }
    
    if (loadError) {
      return <PDFErrorState onOpenInNewTab={openInNewTab} onDownload={handleDownload} />;
    }
    
    if (isObjectFallback) {
      return (
        <PDFObjectFallback 
          pdfUrl={pdfUrl} 
          zoomLevel={zoomLevel} 
          onDownload={handleDownload} 
          onError={handleObjectError} 
        />
      );
    }
    
    if (isMobile) {
      return (
        <PDFMobileView 
          pdfUrl={pdfUrl} 
          isPdfBase64={isPdfBase64} 
          isPdfBlob={isPdfBlob}
          onOpenInNewTab={openInNewTab} 
          onDownload={handleDownload} 
          onError={handleError}
        />
      );
    }
    
    return (
      <PDFIframe 
        pdfUrl={pdfUrl} 
        zoomLevel={zoomLevel} 
        isPdfBase64={isPdfBase64} 
        isPdfBlob={isPdfBlob}
        onError={handleError}
      />
    );
  };

  return (
    <div className="w-full flex flex-col">
      <PDFToolbar 
        zoomLevel={zoomLevel}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onDownload={handleDownload}
        onOpenInNewTab={openInNewTab}
        isPdfBase64={isPdfBase64}
        isPdfBlob={isPdfBlob}
      />
      
      <div 
        className="border border-gray-200 rounded-b-lg overflow-hidden bg-gray-50"
        style={{ height: containerHeight }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default PDFViewer;
