
import React, { useEffect, useRef } from 'react';

interface PDFIframeProps {
  pdfUrl: string;
  zoomLevel: number;
  isPdfBase64?: boolean;
  isPdfBlob?: boolean;
  onError: () => void;
}

const PDFIframe: React.FC<PDFIframeProps> = ({
  pdfUrl,
  zoomLevel,
  isPdfBase64,
  isPdfBlob,
  onError
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Refresh iframe when pdfUrl changes
  useEffect(() => {
    if (iframeRef.current) {
      try {
        // Create a unique URL with timestamp to force refresh
        const timestamp = new Date().getTime();
        const refreshUrl = isPdfBase64 || isPdfBlob 
          ? pdfUrl
          : `${pdfUrl}${pdfUrl.includes('?') ? '&' : '?'}_t=${timestamp}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;
        
        iframeRef.current.src = refreshUrl;
      } catch (error) {
        console.error("Error refreshing PDF iframe:", error);
        onError();
      }
    }
  }, [pdfUrl, isPdfBase64, isPdfBlob]);

  return (
    <iframe
      ref={iframeRef}
      className="w-full h-full bg-white"
      style={{ 
        transform: `scale(${zoomLevel / 100})`, 
        transformOrigin: 'top left',
        width: `${10000 / zoomLevel}%`
      }}
      onError={onError}
      title="PDF Document"
      loading="eager"
    />
  );
};

export default PDFIframe;
