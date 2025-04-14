
export interface PDFInfo {
  data: string;
  title: string;
  uploadedAt: string;
}

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

export const savePDFToLocalStorage = (pdfInfo: PDFInfo): boolean => {
  try {
    localStorage.setItem('lastUploadedPdf', JSON.stringify(pdfInfo));
    console.log("Saved PDF info to localStorage");
    return true;
  } catch (e) {
    console.error("Error saving to localStorage:", e);
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
