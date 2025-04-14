
import React, { useState, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import PDFDropzone from "./pdf/PDFDropzone";
import PDFFileDisplay from "./pdf/PDFFileDisplay";
import { validatePDFFile, savePDFToLocalStorage, readFileAsDataURL } from "@/services/pdfService";

interface PDFUploaderProps {
  onFileSelect?: (file: File) => void;
  maxSizeMB?: number;
}

const PDFUploader: React.FC<PDFUploaderProps> = ({ 
  onFileSelect, 
  maxSizeMB = 5 
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    
    if (!files || files.length === 0) return;
    
    const file = files[0];
    const validation = validatePDFFile(file, maxSizeMB);
    
    if (!validation.valid) {
      toast({
        title: "Napaka",
        description: validation.error,
        variant: "destructive"
      });
      return;
    }
    
    setSelectedFile(file);
    
    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const simulateUpload = async () => {
    if (!selectedFile) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    
    try {
      // Simulate upload process
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        
        if (progress >= 100) {
          clearInterval(interval);
          completeUpload();
        }
      }, 300);
      
      // Start reading the file in parallel
      const base64Data = await readFileAsDataURL(selectedFile);
      
      // Store data for when upload completes
      const pdfInfo = {
        data: base64Data,
        title: selectedFile.name,
        uploadedAt: new Date().toISOString()
      };
      
      function completeUpload() {
        setIsUploading(false);
        
        const saved = savePDFToLocalStorage(pdfInfo);
        
        if (saved) {
          toast({
            title: "Uspešno naloženo",
            description: "Vaša PDF datoteka je bila uspešno naložena.",
          });
          
          // Navigate to the PDF view page
          navigate("/view-pdf", { 
            state: { 
              fromUpload: true
            } 
          });
        } else {
          toast({
            title: "Napaka pri shranjevanju",
            description: "PDF je prevelik za shranjevanje. Poskusite z manjšo datoteko.",
            variant: "destructive"
          });
        }
      }
    } catch (error) {
      setIsUploading(false);
      toast({
        title: "Napaka pri branju datoteke",
        description: "Prosimo, poskusite z drugo datoteko.",
        variant: "destructive"
      });
    }
  };

  const handlePreview = () => {
    if (!selectedFile) return;
    
    const fileURL = URL.createObjectURL(selectedFile);
    window.open(fileURL, '_blank');
  };
  
  const handleInputClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <label htmlFor="pdf-upload" className="block text-sm font-medium mb-2">
          Naloži PDF datoteko
        </label>
        
        <Input
          id="pdf-upload"
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />
        
        {!selectedFile ? (
          <PDFDropzone 
            maxSizeMB={maxSizeMB} 
            onInputClick={handleInputClick} 
          />
        ) : (
          <PDFFileDisplay 
            file={selectedFile}
            uploadProgress={uploadProgress}
            isUploading={isUploading}
            onRemove={handleRemoveFile}
            onPreview={handlePreview}
            onUpload={simulateUpload}
          />
        )}
      </div>
    </div>
  );
};

export default PDFUploader;
