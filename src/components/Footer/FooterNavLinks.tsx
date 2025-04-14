
import { Link } from "react-router-dom";

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
          <Link to="/contact" className="text-gray-600 hover:text-dark-red transition-colors duration-300">
            Kontakt
          </Link>
        </li>
        <li>
          <Link to="/browse-pdf" className="text-gray-600 hover:text-dark-red transition-colors duration-300">
            Prelistaj
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-600 hover:text-dark-red transition-colors duration-300">
            Oddaj oglas
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterNavLinks;
