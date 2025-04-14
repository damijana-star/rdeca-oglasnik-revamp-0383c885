
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Maximize } from "lucide-react";

interface PDFErrorStateProps {
  onOpenInNewTab: () => void;
  onDownload: () => void;
}

const PDFErrorState: React.FC<PDFErrorStateProps> = ({ onOpenInNewTab, onDownload }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center bg-white h-full">
      <p className="mb-4 text-gray-600">PDF ni mogoče prikazati. Poskusite s prenosom.</p>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button onClick={onOpenInNewTab} variant="outline">
          <Maximize className="h-4 w-4 mr-2" />
          Odpri v novem zavihku
        </Button>
        <Button onClick={onDownload} className="bg-[#e32530] hover:bg-[#e32530]/90">
          <Download className="h-4 w-4 mr-2" />
          Prenesi PDF
        </Button>
      </div>
    </div>
  );
};

export default PDFErrorState;
