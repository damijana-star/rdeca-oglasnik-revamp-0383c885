
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-dark-red">
              <img 
                src="/lovable-uploads/7bb6fbc9-f86e-41ec-8b55-658095999864.png" 
                alt="NANOSKI OGLASNIK" 
                className="h-10"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#featured" className="text-foreground hover:text-dark-red font-medium">
              Oglasi
            </a>
            <a href="/nasveti" className="text-foreground hover:text-dark-red font-medium">
              Nasveti
            </a>
            <a href="#about" className="text-foreground hover:text-dark-red font-medium">
              O nas
            </a>
            <a href="#contact" className="text-foreground hover:text-dark-red font-medium">
              Kontakt
            </a>
            <Button className="bg-[#e32530] hover:bg-[#e32530]/90" asChild>
              <a href="#contact">Oddaj oglas</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                  <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#featured" className="text-foreground hover:text-dark-red font-medium">
                Oglasi
              </a>
              <a href="/nasveti" className="text-foreground hover:text-dark-red font-medium">
                Nasveti
              </a>
              <a href="#about" className="text-foreground hover:text-dark-red font-medium">
                O nas
              </a>
              <a href="#contact" className="text-foreground hover:text-dark-red font-medium">
                Kontakt
              </a>
              <Button className="bg-[#e32530] hover:bg-[#e32530]/90 w-full" asChild>
                <a href="#contact">Oddaj oglas</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
