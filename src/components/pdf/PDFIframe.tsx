
import React from 'react';

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
  return (
    <iframe
      src={`${pdfUrl}${isPdfBlob || isPdfBase64 ? '' : '#toolbar=0&navpanes=0&scrollbar=0&view=FitH'}`}
      className="w-full h-full"
      style={{ 
        transform: `scale(${zoomLevel / 100})`, 
        transformOrigin: 'top left',
        width: `${10000 / zoomLevel}%`
      }}
      onError={onError}
    />
  );
};

export default PDFIframe;
