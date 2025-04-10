import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-dark-red transition-transform duration-300 hover:scale-105">
              <img src="/lovable-uploads/7bb6fbc9-f86e-41ec-8b55-658095999864.png" alt="NANOSKI OGLASNIK" className="h-10" />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#featured" className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300">
          </a>
            <Link to="/blog" className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300">
              Nasveti
            </Link>
            <a href="#about" className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300">

          </a>
            <a href="#contact" className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300">
              Kontakt
            </a>
            <Button variant="outline" className="flex items-center gap-2 border-[#e32530] text-[#e32530]" asChild>
              <Link to="/view-pdf">
                <FileText className="h-4 w-4" />
                Prelistaj
              </Link>
            </Button>
            <Button className="bg-[#e32530] hover:bg-[#e32530]/90 transform transition-all duration-300 hover:scale-105 hover:shadow-md" asChild>
              <a href="#contact">Oddaj oglas</a>
            </Button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground p-2 transition-transform duration-300 hover:scale-110" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
              {isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x transition-transform duration-300">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu transition-transform duration-300">
                  <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
                </svg>}
            </button>
          </div>
        </div>

        <div className={`md:hidden mt-4 pb-4 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-4">
            <a href="#featured" className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300">
              Oglasi
            </a>
            <Link to="/blog" className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300">
              Nasveti
            </Link>
            <a href="#about" className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300">
              O nas
            </a>
            <a href="#contact" className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300">
              Kontakt
            </a>
            <Button variant="outline" className="flex items-center justify-center gap-2 border-[#e32530] text-[#e32530]" asChild>
              <Link to="/view-pdf">
                <FileText className="h-4 w-4" />
                Prelistaj
              </Link>
            </Button>
            <Button className="bg-[#e32530] hover:bg-[#e32530]/90 w-full transform transition-all duration-300 hover:scale-105 hover:shadow-md" asChild>
              <a href="#contact">Oddaj oglas</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>;
};
export default Header;