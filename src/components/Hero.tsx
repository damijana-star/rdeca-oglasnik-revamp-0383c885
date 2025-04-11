
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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
            DOSEŽI VEČ – OGLAŠUJ TAM,<br />KJER TE LJUDJE RES VIDIJO
          </p>
          <p className={`font-body text-lg md:text-xl mb-12 opacity-90 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Distribucija po Notranjsko-kraški, Notranjsko-obalni in Goriški regiji zagotavlja visoko prepoznavnost in direkten stik z vašimi strankami.
          </p>
        </div>
      </div>
    </div>;
};
export default Hero;
