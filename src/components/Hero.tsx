
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    // Set visible after component mounts for animation to trigger
    setTimeout(() => setIsVisible(true), 100);
    
    // Set animation complete after animations finish
    setTimeout(() => setAnimationComplete(true), 2500);
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
          <p className={`font-heading font-extrabold uppercase mb-8 md:text-5xl transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          } ${
            animationComplete ? 'animate-[pulse_4s_ease-in-out_infinite]' : ''
          }`}>
            <span className="inline-block transition-all duration-700 delay-300 transform hover:scale-105">DOSEŽI</span>{" "}
            <span className="inline-block transition-all duration-700 delay-500 transform hover:scale-105">VEČ</span>{" "}
            <span className="inline-block transition-all duration-700 delay-700 transform hover:scale-105">–</span>{" "}
            <span className="inline-block transition-all duration-700 delay-900 transform hover:scale-105">OGLAŠUJ</span>
            <br />
            <span className="inline-block transition-all duration-700 delay-1100 transform hover:scale-105">TAM,</span>{" "}
            <span className="inline-block transition-all duration-700 delay-1300 transform hover:scale-105">KJER</span>{" "}
            <span className="inline-block transition-all duration-700 delay-1500 transform hover:scale-105">TE</span>{" "}
            <span className="inline-block transition-all duration-700 delay-1700 transform hover:scale-105">LJUDJE</span>{" "}
            <span className="inline-block transition-all duration-700 delay-1900 transform hover:scale-105">RES</span>{" "}
            <span className="inline-block transition-all duration-700 delay-2100 transform hover:scale-105">VIDIJO</span>
          </p>
          <p className={`font-body text-lg md:text-xl mb-12 opacity-90 transition-all duration-1000 delay-2300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Distribucija po Notranjsko-kraški, Notranjsko-obalni in Goriški regiji zagotavlja visoko prepoznavnost in direkten stik z vašimi strankami.
          </p>
        </div>
      </div>
    </div>;
};
export default Hero;
