
import { Facebook, Mail, PhoneCall } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navigateToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // If we're already on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash, then scroll
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-16 pb-8 text-center shadow-inner-soft" id="footer">
      <Separator className="mb-12 mx-auto max-w-4xl" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 max-w-6xl mx-auto px-4">
        <div id="about" className="text-center transform transition-all duration-500 hover:scale-105">
          <h3 className="mb-6 flex justify-center">
            <img 
              src="/lovable-uploads/0ad2c6b5-12cf-4c0b-9c30-5af74d87725a.png" 
              alt="NANOSKI OGLASNIK" 
              className="h-10 transition-transform duration-300 hover:scale-110"
            />
          </h3>
          <p className="text-gray-600 mb-6 font-light">
            Oglasnik za NOTRANJSKO-KRAŠKO, OBALNO-KRAŠKO in GORIŠKO regijo.
          </p>
          <div className="flex space-x-4 justify-center">
            <a 
              href="https://www.facebook.com/profile.php?id=61575021988033" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-red hover:text-white hover:bg-dark-red rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="mailto:info@nanoski-oglasnik.eu" 
              className="text-dark-red hover:text-white hover:bg-dark-red rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="text-left transform transition-all duration-500 hover:translate-x-1">
          <h3 className="font-bold mb-6 text-dark-red text-left text-xl">Povezave</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-dark-red transition-all duration-300 flex items-center">
                <span className="w-0 h-[2px] bg-dark-red inline-block transition-all duration-300 mr-0 group-hover:w-4 group-hover:mr-2"></span>
                Nasveti
              </Link>
            </li>
            <li>
              <Link 
                to="/#contact" 
                onClick={(e) => navigateToSection('contact', e)}
                className="text-gray-600 hover:text-dark-red transition-all duration-300 flex items-center"
              >
                <span className="w-0 h-[2px] bg-dark-red inline-block transition-all duration-300 mr-0 group-hover:w-4 group-hover:mr-2"></span>
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="/view-pdf" className="text-gray-600 hover:text-dark-red transition-all duration-300 flex items-center">
                <span className="w-0 h-[2px] bg-dark-red inline-block transition-all duration-300 mr-0 group-hover:w-4 group-hover:mr-2"></span>
                Prelistaj
              </Link>
            </li>
            <li>
              <Link 
                to="/#contact" 
                onClick={(e) => navigateToSection('contact', e)}
                className="text-gray-600 hover:text-dark-red transition-all duration-300 flex items-center"
              >
                <span className="w-0 h-[2px] bg-dark-red inline-block transition-all duration-300 mr-0 group-hover:w-4 group-hover:mr-2"></span>
                Oddaj oglas
              </Link>
            </li>
          </ul>
        </div>

        <div id="contact" className="text-left transform transition-all duration-500 hover:translate-x-1">
          <h3 className="font-bold mb-6 text-dark-red text-left text-xl">Kontakt</h3>
          <div className="space-y-4">
            <div className="flex items-center transition-all duration-300 hover:translate-x-2 hover:text-dark-red group">
              <PhoneCall size={18} className="mr-3 text-dark-red" />
              <span className="text-gray-600 group-hover:text-dark-red">031 646 666</span>
            </div>
            <div className="flex items-center transition-all duration-300 hover:translate-x-2 hover:text-dark-red group">
              <Mail size={18} className="mr-3 text-dark-red" />
              <span className="text-gray-600 group-hover:text-dark-red">info@nanoski-oglasnik.eu</span>
            </div>
            <address className="text-gray-600 not-italic transition-all duration-300 hover:translate-x-2 pl-7">
              Volče 88<br />
              5220 Tolmin<br />
              Slovenija
            </address>
          </div>
        </div>
      </div>

      <Separator className="mb-8 mx-auto max-w-4xl" />

      <div className="text-center text-gray-500 text-sm px-4">
        <p>© {new Date().getFullYear()} Nanoski Oglasnik. Vse pravice pridržane.</p>
      </div>
    </footer>
  );
};

export default Footer;
