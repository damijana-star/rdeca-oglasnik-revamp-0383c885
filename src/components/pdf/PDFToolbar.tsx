
import React from 'react';
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Download, Maximize } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface PDFToolbarProps {
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onDownload: () => void;
  onOpenInNewTab: () => void;
  isPdfBase64?: boolean;
  isPdfBlob?: boolean;
}

const PDFToolbar: React.FC<PDFToolbarProps> = ({
  zoomLevel,
  onZoomIn,
  onZoomOut,
  onDownload,
  onOpenInNewTab,
  isPdfBase64,
  isPdfBlob
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-gray-100 p-2 rounded-t-lg flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onZoomOut}
          disabled={zoomLevel <= 50 || isMobile}
          className={isMobile ? "hidden" : ""}
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <span className={`text-sm font-medium ${isMobile ? "hidden" : ""}`}>{zoomLevel}%</span>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onZoomIn}
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
          onClick={onOpenInNewTab}
          className="flex items-center gap-1"
        >
          <Maximize className="h-4 w-4" />
          <span className="hidden sm:inline">Odpri</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onDownload} 
          className="flex items-center gap-1"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Prenesi</span>
        </Button>
      </div>
    </div>
  );
};

export default PDFToolbar;
