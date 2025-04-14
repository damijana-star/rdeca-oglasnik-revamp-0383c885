
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDFUploader from "@/components/PDFUploader";

const PDFUploadPage = () => {
  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file);
    // Here you would normally handle the file upload to your server
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Naloži PDF</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Navodila za nalaganje</h2>
            <ol className="list-decimal pl-5 space-y-2 mb-6">
              <li>Izberite PDF datoteko s klikom na gumb "Izberi datoteko"</li>
              <li>Največja dovoljena velikost datoteke je 10MB</li>
              <li>Po izbiri datoteke kliknite "Naloži datoteko"</li>
              <li>Počakajte, da se datoteka naloži</li>
              <li>Po uspešnem nalaganju boste videli potrditev</li>
            </ol>
            
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <PDFUploader onFileSelect={handleFileSelect} maxSizeMB={10} />
            </div>
            
            <p className="text-sm text-gray-600">
              Opomba: Trenutno podpiramo samo nalaganje PDF datotek. Za druge formate se obrnite na našo podporo.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PDFUploadPage;
