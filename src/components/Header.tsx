
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FileText, Home, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const navigateToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };
  
  useEffect(() => {
    const state = location.state as { scrollTo?: string };
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-dark-red transition-transform duration-300 hover:scale-105">
              <img src="/lovable-uploads/0ad2c6b5-12cf-4c0b-9c30-5af74d87725a.png" alt="NANOSKI OGLASNIK" className="h-10" />
            </Link>
          </div>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="flex items-center gap-1 px-4 py-2 text-foreground hover:text-dark-red font-medium transition-colors duration-300">
                    <Home className="h-4 w-4" />
                    Domov
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/blog" className="px-4 py-2 text-foreground hover:text-dark-red font-medium transition-colors duration-300">
                    Nasveti
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/#contact" 
                    onClick={(e) => navigateToSection('contact', e)}
                    className="px-4 py-2 text-foreground hover:text-dark-red font-medium transition-colors duration-300"
                  >
                    Kontakt
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="flex items-center gap-2 border-[#e32530] text-[#e32530]" asChild>
              <Link to="/view-pdf">
                <FileText className="h-4 w-4" />
                Prelistaj
              </Link>
            </Button>
            <Button className="bg-[#e32530] hover:bg-[#e32530]/90 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-md" asChild>
              <Link 
                to="/#contact" 
                onClick={(e) => navigateToSection('contact', e)}
              >
                Oddaj oglas
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-foreground p-2 transition-transform duration-300 hover:scale-110 rounded-full hover:bg-gray-100" 
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        <div className={`md:hidden mt-4 pb-4 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300 flex items-center gap-1 p-2 rounded-md hover:bg-gray-50">
              <Home className="h-4 w-4" />
              Domov
            </Link>
            <Link to="/blog" className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300 p-2 rounded-md hover:bg-gray-50">
              Nasveti
            </Link>
            <Link 
              to="/#contact" 
              onClick={(e) => navigateToSection('contact', e)}
              className="nav-link text-foreground hover:text-dark-red font-medium transition-colors duration-300 p-2 rounded-md hover:bg-gray-50"
            >
              Kontakt
            </Link>
            <Button variant="outline" className="flex items-center justify-center gap-2 border-[#e32530] text-[#e32530]" asChild>
              <Link to="/view-pdf">
                <FileText className="h-4 w-4" />
                Prelistaj
              </Link>
            </Button>
            <Button className="bg-[#e32530] hover:bg-[#e32530]/90 text-white w-full transform transition-all duration-300 hover:scale-105 hover:shadow-md" asChild>
              <Link 
                to="/#contact" 
                onClick={(e) => navigateToSection('contact', e)}
              >
                Oddaj oglas
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
