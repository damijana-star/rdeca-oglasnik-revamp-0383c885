import { Award, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-primary font-bold text-2xl">
              NANOSKI OGLASNIK
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-foreground hover:text-primary font-medium">
              Domov
            </a>
            <a href="#" className="text-foreground hover:text-primary font-medium">
              O nas
            </a>
            <a href="#" className="text-foreground hover:text-primary font-medium">
              Kontakt
            </a>
            <Button>Oddaj oglas</Button>
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
              <a href="/" className="text-foreground hover:text-primary font-medium">
                Domov
              </a>
              <a href="#" className="text-foreground hover:text-primary font-medium">
                O nas
              </a>
              <a href="#" className="text-foreground hover:text-primary font-medium">
                Kontakt
              </a>
              <Button>Oddaj oglas</Button>
            </nav>
          </div>
        )}
      </div>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-primary to-red-500 text-white py-3">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <Award className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
              <span className="font-medium text-sm md:text-base">17 let zadovoljnih strank</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <FileText className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
              <span className="font-medium text-sm md:text-base">53000 izvodov</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <Users className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
              <span className="font-medium text-sm md:text-base">168000 potencialnih strank</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
