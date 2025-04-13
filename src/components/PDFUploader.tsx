import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { FileText, Upload, X, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    
    if (!files || files.length === 0) return;
    
    const file = files[0];
    
    if (file.type !== 'application/pdf') {
      toast({
        title: "Napaka",
        description: "Prosimo, izberite PDF datoteko.",
        variant: "destructive"
      });
      return;
    }
    
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      toast({
        title: "Prevelika datoteka",
        description: `Največja dovoljena velikost je ${maxSizeMB}MB. Vaša datoteka je ${fileSizeMB.toFixed(2)}MB.`,
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
  };
  
  const simulateUpload = () => {
    if (!selectedFile) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    
    const reader = new FileReader();
    
    reader.onload = function(event) {
      if (event.target && event.target.result) {
        // Start progress simulation
        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          setUploadProgress(progress);
          
          if (progress >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            
            // Store the PDF data as base64
            const base64Data = event.target.result.toString();
            
            // Save to localStorage with size check
            try {
              const pdfInfo = {
                data: base64Data,
                title: selectedFile.name,
                uploadedAt: new Date().toISOString()
              };
              
              localStorage.setItem('lastUploadedPdf', JSON.stringify(pdfInfo));
              console.log("Saved PDF info to localStorage");
              
              toast({
                title: "Uspešno naloženo",
                description: "Vaša PDF datoteka je bila uspešno naložena."
              });
              
              // Navigate to the PDF view page
              navigate("/view-pdf", { 
                state: { 
                  fromUpload: true
                } 
              });
            } catch (e) {
              console.error("Error saving to localStorage:", e);
              toast({
                title: "Napaka pri shranjevanju",
                description: "PDF je prevelik za shranjevanje. Poskusite z manjšo datoteko.",
                variant: "destructive"
              });
            }
          }
        }, 300);
      }
    };
    
    reader.onerror = function() {
      toast({
        title: "Napaka pri branju datoteke",
        description: "Prosimo, poskusite z drugo datoteko.",
        variant: "destructive"
      });
      setIsUploading(false);
    };
    
    // Read the file as a data URL (base64)
    reader.readAsDataURL(selectedFile);
  };

  const handlePreview = () => {
    if (!selectedFile) return;
    
    const fileURL = URL.createObjectURL(selectedFile);
    window.open(fileURL, '_blank');
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <label htmlFor="pdf-upload" className="block text-sm font-medium mb-2">
          Naloži PDF datoteko
        </label>
        
        {!selectedFile ? (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
            <Input
              id="pdf-upload"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            <Upload className="h-10 w-10 text-gray-400 mb-2" />
            <p className="text-sm text-gray-600 mb-1">Kliknite ali povlecite PDF datoteko</p>
            <p className="text-xs text-gray-500">Največ {maxSizeMB}MB</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => document.getElementById('pdf-upload')?.click()}
            >
              Izberi datoteko
            </Button>
          </div>
        ) : (
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <FileText className="h-6 w-6 text-[#e32530] mr-2" />
                <div>
                  <p className="text-sm font-medium truncate max-w-[200px]">
                    {selectedFile.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handlePreview}
                  className="h-8 w-8"
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleRemoveFile}
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
                className="w-full mt-2 bg-[#e32530] hover:bg-[#e32530]/90"
                onClick={simulateUpload}
                disabled={isUploading}
              >
                Naloži datoteko
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFUploader;
