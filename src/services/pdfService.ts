
import { toast } from "@/hooks/use-toast";
import pako from 'pako';

export interface PDFInfo {
  data: string;
  title: string;
  uploadedAt: string;
  compressed?: boolean;
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

export const compressData = (data: string): string => {
  try {
    // Convert base64 to binary string
    const binaryString = atob(data.split(',')[1]);
    // Convert binary string to Uint8Array
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    
    // Compress the data
    const compressed = pako.deflate(bytes);
    
    // Convert back to base64 string
    const compressedBase64 = btoa(String.fromCharCode.apply(null, compressed as unknown as number[]));
    
    // Add the compression marker
    return 'data:application/pdf-compressed;base64,' + compressedBase64;
  } catch (e) {
    console.error('Compression error:', e);
    return data; // Return original if compression fails
  }
};

export const decompressData = (data: string): string => {
  if (!data.startsWith('data:application/pdf-compressed;base64,')) {
    return data; // Not compressed, return as is
  }
  
  try {
    // Extract the base64 part
    const base64Data = data.split(',')[1];
    // Convert base64 to binary string
    const binaryString = atob(base64Data);
    // Convert binary string to Uint8Array
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    
    // Decompress the data
    const decompressed = pako.inflate(bytes);
    
    // Convert back to base64 string
    const decompressedBase64 = btoa(String.fromCharCode.apply(null, decompressed as unknown as number[]));
    
    // Return with the PDF data prefix
    return 'data:application/pdf;base64,' + decompressedBase64;
  } catch (e) {
    console.error('Decompression error:', e);
    toast({
      title: "Napaka pri nalaganju",
      description: "Napaka pri dekompresiji PDF datoteke.",
      variant: "destructive"
    });
    return data; // Return original if decompression fails
  }
};

export const savePDFToLocalStorage = (pdfInfo: PDFInfo): boolean => {
  try {
    const MAX_LOCAL_STORAGE_SIZE = 10 * 1024 * 1024; // Increased to 10MB limit
    
    // Try compression if the file is large and not already compressed
    if (!pdfInfo.compressed && pdfInfo.data.startsWith('data:application/pdf;base64,')) {
      const originalSize = pdfInfo.data.length * 2;
      const compressedData = compressData(pdfInfo.data);
      const compressedSize = compressedData.length * 2;
      
      // If compression is effective, use the compressed data
      if (compressedSize < originalSize) {
        console.log(`Compressed PDF from ${originalSize/1024} KB to ${compressedSize/1024} KB`);
        pdfInfo = {
          ...pdfInfo,
          data: compressedData,
          compressed: true
        };
      }
    }
    
    const currentSize = getLocalStorageSize();
    const infoSize = JSON.stringify(pdfInfo).length * 2;

    if (currentSize + infoSize > MAX_LOCAL_STORAGE_SIZE) {
      // Try clearing other localStorage items first
      let clearedSpace = 0;
      for (let key in localStorage) {
        if (key !== 'lastUploadedPdf' && localStorage.hasOwnProperty(key)) {
          clearedSpace += (localStorage[key].length + key.length) * 2;
          localStorage.removeItem(key);
          
          // If we've cleared enough space, break
          if (currentSize - clearedSpace + infoSize <= MAX_LOCAL_STORAGE_SIZE) {
            break;
          }
        }
      }
      
      // Check if we now have enough space
      if (getLocalStorageSize() + infoSize > MAX_LOCAL_STORAGE_SIZE) {
        toast({
          title: "Napaka pri shranjevanju",
          description: "PDF datoteka je prevelika za shranjevanje tudi po kompresiji. Poskusite z manjšo datoteko.",
          variant: "destructive"
        });
        return false;
      }
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
