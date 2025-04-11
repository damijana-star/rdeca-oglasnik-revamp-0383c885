
import { useEffect, useState } from "react";
import PartnerLogoCarousel from "./PartnerLogoCarousel";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const clientLogos = [
    "/lovable-uploads/a70fa581-c6f8-44d5-be1c-5589ca8626f6.png", // BREZ OV:R
    "/lovable-uploads/6be61759-c181-4565-8130-35b4715fe1e1.png", // ELKOR
    "/lovable-uploads/476b5c5f-85c3-4193-8d88-f3571eb24335.png", // gramint
    "/lovable-uploads/9f35d68a-2f69-4a48-9b93-76657d6bc122.png", // Komunala
    "/lovable-uploads/a5bc1e9d-7a5b-40b2-9dfc-8feca77f7102.png", // Les 33
    "/lovable-uploads/432954bc-cf7d-42c7-b309-b20b3289108f.png", // lipbled
    "/lovable-uploads/20277a73-c415-415e-b538-75410ff05226.png", // martin
    "/lovable-uploads/d066daf3-4428-47ee-b210-1f61b489f618.png", // NAGODE
    "/lovable-uploads/484d7273-fbb0-40e2-8d02-c09f1e06b15f.png", // SencilRus
    "/lovable-uploads/b4bcb7c2-72d2-4e47-8549-2a1a57436add.png"  // Stavanja
  ];
  
  useEffect(() => {
    // Set visible after component mounts for animation to trigger
    setIsVisible(true);
  }, []);

  return <div className="relative text-white py-16 md:py-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/lovable-uploads/ef9f75c3-294b-441f-b566-cb6e2e20abb9.png" alt="Mountain landscape" className="w-full h-full object-cover transition-transform duration-[30s] hover:scale-110" />
        <div className="absolute inset-0 bg-dark-red/70"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className={`font-heading font-extrabold uppercase mb-8 text-7xl tracking-tight transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            OGLAŠUJ TAM,<br />KJER TE RES VIDIJO
          </p>
          <p className={`font-body text-lg md:text-xl mb-12 opacity-90 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Distribucija po Notranjsko-kraški, Notranjsko-obalni in Goriški regiji zagotavlja visoko prepoznavnost in direkten stik z vašimi strankami.
          </p>
        </div>
        
        <div className={`mt-8 transition-all duration-1000 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <PartnerLogoCarousel logos={clientLogos} autoplayInterval={0} />
        </div>
      </div>
    </div>;
};
export default Hero;
