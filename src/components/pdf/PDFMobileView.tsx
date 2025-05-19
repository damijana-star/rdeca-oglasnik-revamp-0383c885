
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Maximize } from "lucide-react";

interface PDFMobileViewProps {
  pdfUrl: string;
  isPdfBase64?: boolean;
  isPdfBlob?: boolean;
  onOpenInNewTab: () => void;
  onDownload: () => void;
  onError: () => void;
}

const PDFMobileView: React.FC<PDFMobileViewProps> = ({
  pdfUrl,
  isPdfBase64,
  isPdfBlob,
  onOpenInNewTab,
  onDownload,
  onError
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Refresh iframe when pdfUrl changes
  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      // Force iframe reload
      iframe.src = iframe.src;
    }
  }, [pdfUrl]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-white">
      <iframe
        ref={iframeRef}
        src={`${pdfUrl}${isPdfBlob || isPdfBase64 ? '' : '#toolbar=0&navpanes=0&scrollbar=0&view=FitH'}`}
        className="w-full mb-4 border border-gray-200 rounded"
        style={{ height: '60%' }}
        onError={onError}
        title="PDF Document Mobile View"
        loading="eager"
      />
      <p className="text-gray-600 mb-6 text-center text-sm">Za najboljšo izkušnjo priporočamo, da PDF dokument odprete ali prenesete.</p>
      <div className="flex flex-col space-y-3 w-full max-w-xs">
        <Button onClick={onOpenInNewTab} variant="outline" className="w-full justify-center">
          <Maximize className="h-4 w-4 mr-2" />
          Odpri v brskalniku
        </Button>
        <Button onClick={onDownload} className="w-full bg-[#e32530] hover:bg-[#e32530]/90 justify-center">
          <Download className="h-4 w-4 mr-2" />
          Prenesi PDF
        </Button>
      </div>
    </div>
  );
};

export default PDFMobileView;
