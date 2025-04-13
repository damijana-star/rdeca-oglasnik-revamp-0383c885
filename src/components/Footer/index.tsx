
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import FooterAbout from "./FooterAbout";
import FooterNavLinks from "./FooterNavLinks";
import FooterContactInfo from "./FooterContactInfo";
import FooterCopyright from "./FooterCopyright";

export const Footer = () => {
  const location = useLocation();
  
  // Handle hash navigation when the component mounts
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);
  
  const navigateToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // If we're already on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home page with the section as hash
      // Fixed to work with HashRouter
      window.location.href = `/#/${sectionId}`;
    }
  };

  return (
    <footer className="bg-gray-100 pt-12 pb-6 text-center" id="footer">
      <Separator className="mb-8 mx-auto max-w-4xl" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
        <FooterAbout />
        <FooterNavLinks navigateToSection={navigateToSection} />
        <FooterContactInfo />
      </div>

      <Separator className="mb-6 mx-auto max-w-4xl" />

      <FooterCopyright />
    </footer>
  );
};

export default Footer;
