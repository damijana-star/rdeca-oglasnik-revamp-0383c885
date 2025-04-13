
import { Link, useLocation } from "react-router-dom";

type FooterNavLinksProps = {
  navigateToSection: (sectionId: string, e: React.MouseEvent) => void;
};

export const FooterNavLinks = ({ navigateToSection }: FooterNavLinksProps) => {
  return (
    <div className="fade-in text-left" style={{ animationDelay: '0.2s' }}>
      <h3 className="font-bold mb-4 text-dark-red text-left">Povezave</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/blog" className="text-gray-600 hover:text-dark-red transition-colors duration-300">
            Nasveti
          </Link>
        </li>
        <li>
          <a 
            href="#contact" 
            onClick={(e) => navigateToSection('contact', e)}
            className="text-gray-600 hover:text-dark-red transition-colors duration-300"
          >
            Kontakt
          </a>
        </li>
        <li>
          <Link to="/view-pdf" className="text-gray-600 hover:text-dark-red transition-colors duration-300">
            Prelistaj
          </Link>
        </li>
        <li>
          <a 
            href="#contact" 
            onClick={(e) => navigateToSection('contact', e)}
            className="text-gray-600 hover:text-dark-red transition-colors duration-300"
          >
            Oddaj oglas
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterNavLinks;
