
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-react";

const PDFLoading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full bg-white">
      <div className="flex flex-col items-center space-y-3">
        <Loader className="h-8 w-8 text-gray-400 animate-spin" />
        <p className="text-sm text-gray-500">Nalaganje PDF dokumenta...</p>
        
        {/* PDF document outline placeholder */}
        <div className="w-72 mt-2">
          <Skeleton className="h-2 w-full mb-2" />
          <Skeleton className="h-2 w-5/6 mb-2" />
          <Skeleton className="h-2 w-4/6 mb-2" />
          <Skeleton className="h-2 w-full mb-2" />
          <Skeleton className="h-2 w-3/6 mb-2" />
        </div>
      </div>
    </div>
  );
};

export default PDFLoading;
