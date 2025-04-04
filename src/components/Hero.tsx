
import { Award, FileText, Users } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative text-white py-16 md:py-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/ef9f75c3-294b-441f-b566-cb6e2e20abb9.png" 
          alt="Mountain landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-red/70"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xl md:text-2xl mb-8 font-bold uppercase">
            Imate izdelek, storitev ali dogodek, ki bi ga radi predstavili širši lokalni skupnosti?
          </p>
          <p className="font-body text-lg md:text-xl mb-12 opacity-90">
            Distribucija po Notranjsko-kraški, Notranjsko-obalni in Goriški regiji zagotavlja visoko prepoznavnost in direkten stik z vašimi strankami.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center justify-center">
              <Award className="h-10 w-10 mb-3 text-white/80" strokeWidth={1.5} />
              <span className="font-body text-lg font-semibold">17 let zadovoljnih strank</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FileText className="h-10 w-10 mb-3 text-white/80" strokeWidth={1.5} />
              <span className="font-body text-lg font-semibold">53000 izvodov</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Users className="h-10 w-10 mb-3 text-white/80" strokeWidth={1.5} />
              <span className="font-body text-lg font-semibold">168000 potencialnih strank</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
