
import { Button } from "@/components/ui/button";
import { FileText, Home, Send } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigateToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };
  
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-dark-red transition-transform duration-300 hover:scale-105">
              <img src="/lovable-uploads/0ad2c6b5-12cf-4c0b-9c30-5af74d87725a.png" alt="NANOSKI OGLASNIK" className="h-10" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300 flex items-center gap-1">
              <Home className="h-4 w-4" />
              Domov
            </Link>
            <Link to="/blog" className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300">
              Nasveti
            </Link>
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
              className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300"
            >
              Kontakt
            </Link>
            <Button variant="outline" className="flex items-center gap-2 border-[#e32530] text-[#e32530]" asChild>
              <Link to="/view-pdf">
                <FileText className="h-4 w-4" />
                Prelistaj
              </Link>
            </Button>
            <Button className="bg-[#e32530] hover:bg-[#e32530]/90 transform transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center gap-2" asChild>
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
              >
                <Send className="h-4 w-4" />
                Oddaj oglas
              </Link>
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
            <Link to="/" className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300 flex items-center gap-1">
              <Home className="h-4 w-4" />
              Domov
            </Link>
            <Link to="/blog" className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300">
              Nasveti
            </Link>
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
                setIsMenuOpen(false);
              }}
              className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300"
            >
              Kontakt
            </Link>
            <Button variant="outline" className="flex items-center justify-center gap-2 border-[#e32530] text-[#e32530]" asChild>
              <Link to="/view-pdf">
                <FileText className="h-4 w-4" />
                Prelistaj
              </Link>
            </Button>
            <Button className="bg-[#e32530] hover:bg-[#e32530]/90 w-full transform transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center justify-center gap-2" asChild>
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
                  setIsMenuOpen(false);
                }}
              >
                <Send className="h-4 w-4" />
                Oddaj oglas
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>;
};

export default Header;
