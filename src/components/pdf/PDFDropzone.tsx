
import React, { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, MoveHorizontal } from "lucide-react";

interface PDFDropzoneProps {
  maxSizeMB: number;
  onInputClick: () => void;
  onFileDrop: (file: File) => void;
}

const PDFDropzone: React.FC<PDFDropzoneProps> = ({ maxSizeMB, onInputClick, onFileDrop }) => {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  }, [isDragging]);
  
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      onFileDrop(files[0]);
    }
  }, [onFileDrop]);
  
  return (
    <div 
      className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition cursor-pointer
        ${isDragging ? 'border-[#e32530] bg-gray-100' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={onInputClick}
    >
      {isDragging ? (
        <>
          <MoveHorizontal className="h-10 w-10 text-[#e32530] mb-2" />
          <p className="text-sm text-[#e32530] font-medium mb-1">Spustite datoteko tukaj</p>
        </>
      ) : (
        <>
          <Upload className="h-10 w-10 text-gray-400 mb-2" />
          <p className="text-sm text-gray-600 mb-1">Kliknite ali povlecite PDF datoteko</p>
          <p className="text-xs text-gray-500">Največ {maxSizeMB}MB</p>
        </>
      )}
      <Button 
        variant="outline" 
        className="mt-4"
        onClick={(e) => {
          e.stopPropagation();
          onInputClick();
        }}
      >
        Izberi datoteko
      </Button>
    </div>
  );
};

export default PDFDropzone;
