
import { toast } from "@/hooks/use-toast";

export interface PDFInfo {
  data: string;
  title: string;
  uploadedAt: string;
}

export const getLocalStorageSize = () => {
  let total = 0;
  for (let x in localStorage) {
    if (localStorage.hasOwnProperty(x)) {
      total += (localStorage[x].length + x.length) * 2;
    }
  }
  return total;
};

export const savePDFToLocalStorage = (pdfInfo: PDFInfo): boolean => {
  try {
    const MAX_LOCAL_STORAGE_SIZE = 5 * 1024 * 1024; // 5MB limit
    const currentSize = getLocalStorageSize();
    const infoSize = JSON.stringify(pdfInfo).length * 2;

    if (currentSize + infoSize > MAX_LOCAL_STORAGE_SIZE) {
      toast({
        title: "Napaka pri shranjevanju",
        description: "PDF datoteka je prevelika za shranjevanje. Poskusite z manjšo datoteko.",
        variant: "destructive"
      });
      return false;
    }

    localStorage.setItem('lastUploadedPdf', JSON.stringify(pdfInfo));
    return true;
  } catch (e) {
    console.error("Error saving to localStorage:", e);
    toast({
      title: "Napaka pri shranjevanju",
      description: "Datoteko ni bilo mogoče shraniti. Prosimo, izpraznite predpomnilnik ali poskusite z manjšo datoteko.",
      variant: "destructive"
    });
    return false;
  }
};

export const readFileAsDataURL = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target && event.target.result) {
        resolve(event.target.result.toString());
      } else {
        reject(new Error("Failed to read file"));
      }
    };
    reader.onerror = () => reject(new Error("Error reading file"));
    reader.readAsDataURL(file);
  });
};

export const validatePDFFile = (file: File, maxSizeMB: number): { valid: boolean; error?: string } => {
  if (file.type !== 'application/pdf') {
    return { 
      valid: false, 
      error: "Prosimo, izberite PDF datoteko." 
    };
  }
  
  const fileSizeMB = file.size / (1024 * 1024);
  if (fileSizeMB > maxSizeMB) {
    return { 
      valid: false, 
      error: `Največja dovoljena velikost je ${maxSizeMB}MB. Vaša datoteka je ${fileSizeMB.toFixed(2)}MB.` 
    };
  }
  
  return { valid: true };
};
