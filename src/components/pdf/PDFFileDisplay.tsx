
import React from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText, X, Eye, Upload } from "lucide-react";

interface PDFFileDisplayProps {
  file: File;
  uploadProgress: number;
  isUploading: boolean;
  onRemove: () => void;
  onPreview: () => void;
  onUpload: () => void;
}

const PDFFileDisplay: React.FC<PDFFileDisplayProps> = ({
  file,
  uploadProgress,
  isUploading,
  onRemove,
  onPreview,
  onUpload
}) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <FileText className="h-6 w-6 text-[#e32530] mr-2" />
          <div>
            <p className="text-sm font-medium truncate max-w-[200px]">
              {file.name}
            </p>
            <p className="text-xs text-gray-500">
              {(file.size / (1024 * 1024)).toFixed(2)} MB
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={onPreview}
            className="h-8 w-8"
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={onRemove}
            className="h-8 w-8 text-destructive"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {isUploading && (
        <div className="mt-2">
          <Progress value={uploadProgress} className="h-2" />
          <p className="text-xs text-gray-500 mt-1">Nalaganje: {uploadProgress}%</p>
        </div>
      )}
      
      {!isUploading && uploadProgress < 100 && (
        <Button 
          className="w-full mt-2 bg-[#e32530] hover:bg-[#e32530]/90 flex items-center justify-center"
          onClick={onUpload}
          disabled={isUploading}
        >
          <Upload className="h-4 w-4 mr-2" />
          Naloži datoteko
        </Button>
      )}
    </div>
  );
};

export default PDFFileDisplay;
