
import React from 'react';
import PartnerLogoCarousel from './PartnerLogoCarousel';

const partnerLogos = [
  "/lovable-uploads/a70fa581-c6f8-44d5-be1c-5589ca8626f6.png",
  "/lovable-uploads/6be61759-c181-4565-8130-35b4715fe1e1.png",
  "/lovable-uploads/476b5c5f-85c3-4193-8d88-f3571eb24335.png",
  "/lovable-uploads/9f35d68a-2f69-4a48-9b93-76657d6bc122.png",
  "/lovable-uploads/a5bc1e9d-7a5b-40b2-9dfc-8feca77f7102.png",
  "/lovable-uploads/432954bc-cf7d-42c7-b309-b20b3289108f.png",
  "/lovable-uploads/20277a73-c415-415e-b538-75410ff05226.png",
  "/lovable-uploads/d066daf3-4428-47ee-b210-1f61b489f618.png",
  "/lovable-uploads/484d7273-fbb0-40e2-8d02-c09f1e06b15f.png",
  "/lovable-uploads/b4bcb7c2-72d2-4e47-8549-2a1a57436add.png",
  "/lovable-uploads/96e57270-837b-4917-adde-f0154b82a599.png",
  "/lovable-uploads/a95d5fec-41d0-4daf-904a-707c45aefb65.png",
  "/lovable-uploads/fbbe3b71-7014-40f5-8c70-ebfe802f9329.png",
  "/lovable-uploads/c7debcb6-84a6-440a-bc84-865cd2dfe300.png"
];

const PartnersSection = () => {
  return (
    <div className="bg-[#e32530]/5 py-10">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-semibold text-center mb-6">Zaupajo nam</h3>
        <PartnerLogoCarousel 
          logos={partnerLogos} 
          size="medium" 
          hoverEffect={true} 
          autoplay={true}
        />
      </div>
    </div>
  );
};

export default PartnersSection;
