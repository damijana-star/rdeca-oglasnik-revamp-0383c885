
import { Facebook, Mail } from "lucide-react";

export const FooterAbout = () => {
  return (
    <div id="about" className="fade-in text-center" style={{ animationDelay: '0.1s' }}>
      <h3 className="mb-4 flex justify-center">
        <img 
          src="/lovable-uploads/0ad2c6b5-12cf-4c0b-9c30-5af74d87725a.png" 
          alt="NANOSKI OGLASNIK" 
          className="h-8 transition-transform duration-300 hover:scale-105"
        />
      </h3>
      <p className="text-gray-600 mb-4">
        Oglasnik za NOTRANJSKO-KRAŠKO, OBALNO-KRAŠKO in GORIŠKO regijo.
      </p>
      <div className="flex space-x-4 justify-center">
        <a 
          href="https://www.facebook.com/profile.php?id=61575021988033" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-dark-red hover:text-white hover:bg-dark-red rounded-full p-2 transition-all duration-300 hover:scale-110"
        >
          <Facebook size={20} />
        </a>
        <a 
          href="mailto:info@nanoski-oglasnik.eu" 
          className="text-dark-red hover:text-white hover:bg-dark-red rounded-full p-2 transition-all duration-300 hover:scale-110"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  );
};

export default FooterAbout;
