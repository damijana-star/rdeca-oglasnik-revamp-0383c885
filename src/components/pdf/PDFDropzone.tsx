
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

interface PDFDropzoneProps {
  maxSizeMB: number;
  onInputClick: () => void;
}

const PDFDropzone: React.FC<PDFDropzoneProps> = ({ maxSizeMB, onInputClick }) => {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
      <Upload className="h-10 w-10 text-gray-400 mb-2" />
      <p className="text-sm text-gray-600 mb-1">Kliknite ali povlecite PDF datoteko</p>
      <p className="text-xs text-gray-500">Največ {maxSizeMB}MB</p>
      <Button 
        variant="outline" 
        className="mt-4"
        onClick={onInputClick}
      >
        Izberi datoteko
      </Button>
    </div>
  );
};

export default PDFDropzone;
