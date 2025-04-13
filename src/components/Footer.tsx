
import { Facebook, Mail, PhoneCall, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  
  return (
    <footer className="bg-gray-100 pt-12 pb-6 text-center" id="footer">
      <Separator className="mb-8 mx-auto max-w-4xl" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
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

        <div className="fade-in text-left" style={{ animationDelay: '0.2s' }}>
          <h3 className="font-bold mb-4 text-dark-red text-left">Povezave</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-dark-red transition-colors duration-300">
                Nasveti
              </Link>
            </li>
            <li>
              <Link 
                to="/" 
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname !== '/') {
                    window.location.href = '/#contact';
                  } else {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="text-gray-600 hover:text-dark-red transition-colors duration-300"
              >
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="/view-pdf" className="text-gray-600 hover:text-dark-red transition-colors duration-300">
                Prelistaj
              </Link>
            </li>
            <li>
              <Link 
                to="/" 
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname !== '/') {
                    window.location.href = '/#contact';
                  } else {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="text-gray-600 flex items-center gap-1 text-dark-red font-medium hover:text-dark-red/80 transition-colors duration-300"
              >
                <Send size={16} />
                Oddaj oglas
              </Link>
            </li>
          </ul>
        </div>

        <div id="contact" className="fade-in text-left" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-bold mb-4 text-dark-red text-left">Kontakt</h3>
          <div className="space-y-3">
            <div className="flex items-center transition-transform duration-300 hover:translate-x-1">
              <PhoneCall size={18} className="mr-2 text-dark-red" />
              <span className="text-gray-600">031 646 666</span>
            </div>
            <div className="flex items-center transition-transform duration-300 hover:translate-x-1">
              <Mail size={18} className="mr-2 text-dark-red" />
              <span className="text-gray-600">info@nanoski-oglasnik.eu</span>
            </div>
            <address className="text-gray-600 not-italic transition-transform duration-300 hover:translate-x-1">
              Volče 88<br />
              5220 Tolmin<br />
              Slovenija
            </address>
          </div>
        </div>
      </div>

      <Separator className="mb-6 mx-auto max-w-4xl" />

      <div className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Nanoski Oglasnik. Vse pravice pridržane.
      </div>
    </footer>
  );
};

export default Footer;
