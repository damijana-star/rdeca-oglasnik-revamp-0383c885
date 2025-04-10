
import { Facebook, Mail, PhoneCall } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const clientLogos = [
    "Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5"
  ];
  
  const location = useLocation();
  
  // Function to handle navigation to home page sections
  const navigateToHomeSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-100 pt-12 pb-6 text-center" id="footer">
      {/* Client logos */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-6">Naši partnerji</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-center">
          {clientLogos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white rounded-md p-4 flex items-center justify-center h-20 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 mx-auto"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-gray-400">{logo}</span>
            </div>
          ))}
        </div>
      </div>

      <Separator className="mb-8 mx-auto max-w-4xl" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 max-w-6xl mx-auto">
        <div id="about" className="fade-in text-center" style={{ animationDelay: '0.1s' }}>
          <h3 className="mb-4 flex justify-center">
            <img 
              src="/lovable-uploads/7bb6fbc9-f86e-41ec-8b55-658095999864.png" 
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

        <div className="fade-in text-center" style={{ animationDelay: '0.2s' }}>
          <h3 className="font-bold mb-4 text-dark-red">Povezave</h3>
          <ul className="space-y-2 inline-block text-left">
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-dark-red transition-colors duration-300">
                Nasveti
              </Link>
            </li>
            <li>
              <Link 
                to="/#contact" 
                onClick={(e) => {
                  if (location.pathname !== '/') {
                    e.preventDefault();
                    window.location.href = '/#contact';
                  } else {
                    e.preventDefault();
                    navigateToHomeSection('contact');
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
                to="/#contact" 
                onClick={(e) => {
                  if (location.pathname !== '/') {
                    e.preventDefault();
                    window.location.href = '/#contact';
                  } else {
                    e.preventDefault();
                    navigateToHomeSection('contact');
                  }
                }}
                className="text-gray-600 hover:text-dark-red transition-colors duration-300"
              >
                Oddaj oglas
              </Link>
            </li>
          </ul>
        </div>

        <div id="contact" className="fade-in text-center" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-bold mb-4 text-dark-red">Kontakt</h3>
          <div className="space-y-3 inline-block text-left">
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
