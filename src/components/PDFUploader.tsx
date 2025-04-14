import React, { useState, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import PDFDropzone from "./pdf/PDFDropzone";
import PDFFileDisplay from "./pdf/PDFFileDisplay";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, X } from "lucide-react";
import { validatePDFFile, savePDFToLocalStorage, readFileAsDataURL } from "@/services/pdfService";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PDFUploaderProps {
  onFileSelect?: (file: File) => void;
  maxSizeMB?: number;
}

const PDFUploader: React.FC<PDFUploaderProps> = ({ 
  onFileSelect, 
  maxSizeMB = 10 
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    
    if (!files || files.length === 0) return;
    
    processPDFFile(files[0]);
  };
  
  const processPDFFile = (file: File) => {
    console.log("Processing PDF file:", file.name, file.size);
    const validation = validatePDFFile(file, maxSizeMB || 5);
    
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
    // Also clear preview if it exists
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };
  
  const handleFileDrop = (file: File) => {
    processPDFFile(file);
  };
  
  const simulateUpload = async () => {
    if (!selectedFile) {
      console.log("No file selected for upload");
      return;
    }
    
    console.log("Starting upload simulation for file:", selectedFile.name);
    setIsUploading(true);
    setUploadProgress(0);
    
    try {
      // Start reading the file in parallel
      console.log("Reading file as data URL");
      const base64Data = await readFileAsDataURL(selectedFile);
      console.log("File read successfully, data length:", base64Data.length);
      
      // Simulate upload process
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        console.log(`Upload progress: ${progress}%`);
        
        if (progress >= 100) {
          clearInterval(interval);
          completeUpload(base64Data);
        }
      }, 300);
    } catch (error) {
      console.error("Error during file reading:", error);
      setIsUploading(false);
      toast({
        title: "Napaka pri branju datoteke",
        description: "Prosimo, poskusite z drugo datoteko.",
        variant: "destructive"
      });
    }
  };
  
  const completeUpload = (base64Data: string) => {
    console.log("Upload complete, saving to localStorage");
    setIsUploading(false);
    
    if (!selectedFile) return;
    
    const pdfInfo = {
      data: base64Data,
      title: selectedFile.name,
      uploadedAt: new Date().toISOString()
    };
    
    const saved = savePDFToLocalStorage(pdfInfo);
    
    if (saved) {
      console.log("PDF successfully saved to localStorage");
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
      console.error("Failed to save PDF to localStorage");
      toast({
        title: "Napaka pri shranjevanju",
        description: "PDF je prevelik za shranjevanje. Poskusite z manjšo datoteko.",
        variant: "destructive"
      });
    }
  };

  const handlePreview = () => {
    if (!selectedFile) return;
    
    // Create a new object URL for the file
    const fileURL = URL.createObjectURL(selectedFile);
    console.log("Created preview URL:", fileURL);
    
    // Store the URL for cleanup later
    setPreviewUrl(fileURL);
    
    // Open the preview dialog
    setPreviewOpen(true);
  };
  
  const closePreview = () => {
    setPreviewOpen(false);
  };
  
  const handleInputClick = () => {
    fileInputRef.current?.click();
  };

  const recommendedMaxSize = 5; // MB

  return (
    <div className="w-full">
      <div className="mb-4">
        <label htmlFor="pdf-upload" className="block text-sm font-medium mb-2">
          Naloži PDF datoteko
        </label>
        
        <Alert 
          variant="default" 
          className="mb-4 bg-amber-50 border-amber-200 border-l-4 border-amber-500"
        >
          <Info className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800">
            Čeprav je največja velikost {maxSizeMB}MB, priporočamo datoteko manjšo od {recommendedMaxSize}MB za boljšo zmogljivost.
          </AlertDescription>
        </Alert>
        
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
            onFileDrop={handleFileDrop}
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
      
      {/* PDF Preview Dialog */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] p-0">
          <div className="p-4 bg-white rounded-t-lg border-b flex justify-between items-center">
            <h3 className="text-lg font-medium">Predogled: {selectedFile?.name}</h3>
            <button 
              onClick={closePreview}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-[80vh] overflow-auto">
            {previewUrl && (
              <iframe 
                src={previewUrl} 
                className="w-full h-full border-0" 
                title="PDF Preview"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PDFUploader;
