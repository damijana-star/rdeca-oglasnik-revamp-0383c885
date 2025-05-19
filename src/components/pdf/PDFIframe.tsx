
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
      const iframe = iframeRef.current;
      // Force iframe reload by updating the key attribute
      iframe.src = iframe.src;
    }
  }, [pdfUrl]);

  return (
    <iframe
      ref={iframeRef}
      src={`${pdfUrl}${isPdfBlob || isPdfBase64 ? '' : '#toolbar=0&navpanes=0&scrollbar=0&view=FitH'}`}
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
