
import React from 'react';
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
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <iframe
        src={`${pdfUrl}${isPdfBlob || isPdfBase64 ? '' : '#toolbar=0&navpanes=0&scrollbar=0&view=FitH'}`}
        className="w-full h-full mb-4"
        style={{ height: '60%' }}
        onError={onError}
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
