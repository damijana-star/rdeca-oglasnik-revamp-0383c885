
import { Award, FileText, Users } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative text-white py-16 md:py-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/ef9f75c3-294b-441f-b566-cb6e2e20abb9.png" 
          alt="Mountain landscape" 
          className="w-full h-full object-cover transition-transform duration-[30s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-dark-red/70"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xl md:text-2xl mb-8 font-bold uppercase fade-in" style={{ animationDelay: '0.3s' }}>
            DOSEŽI VEČ – OGLAŠUJ TAM, KJER TE LJUDJE RES VIDIJO
          </p>
          <p className="font-body text-lg md:text-xl mb-12 opacity-90 fade-in" style={{ animationDelay: '0.6s' }}>
            Distribucija po Notranjsko-kraški, Notranjsko-obalni in Goriški regiji zagotavlja visoko prepoznavnost in direkten stik z vašimi strankami.
          </p>
          
          {/* New stats section */}
          <div className="flex justify-center space-x-8 mt-8 text-white/90">
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 mb-2" strokeWidth={1.5} />
              <span className="text-lg font-semibold">17 let zadovoljnih strank</span>
            </div>
            <div className="flex flex-col items-center">
              <FileText className="h-8 w-8 mb-2" strokeWidth={1.5} />
              <span className="text-lg font-semibold">53000 izvodov</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 mb-2" strokeWidth={1.5} />
              <span className="text-lg font-semibold">168000 potencialnih strank</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
