import { Facebook, Mail, PhoneCall } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link, useLocation } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Footer = () => {
  const clientLogos = [
    "/lovable-uploads/a70fa581-c6f8-44d5-be1c-5589ca8626f6.png", // BREZ OV:R
    "/lovable-uploads/6be61759-c181-4565-8130-35b4715fe1e1.png", // ELKOR
    "/lovable-uploads/476b5c5f-85c3-4193-8d88-f3571eb24335.png", // gramint
    "/lovable-uploads/9f35d68a-2f69-4a48-9b93-76657d6bc122.png", // Komunala
    "/lovable-uploads/a5bc1e9d-7a5b-40b2-9dfc-8feca77f7102.png", // Les 33
    "/lovable-uploads/432954bc-cf7d-42c7-b309-b20b3289108f.png", // lipbled
    "/lovable-uploads/20277a73-c415-415e-b538-75410ff05226.png", // martin
    "/lovable-uploads/d066daf3-4428-47ee-b210-1f61b489f618.png", // NAGODE
    "/lovable-uploads/484d7273-fbb0-40e2-8d02-c09f1e06b15f.png", // SencilRus
    "/lovable-uploads/b4bcb7c2-72d2-4e47-8549-2a1a57436add.png"  // Stavanja
  ];
  
  const location = useLocation();
  
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
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-6">Naši partnerji</h3>
        <div className="max-w-6xl mx-auto px-4">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="py-4">
              {clientLogos.map((logo, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div 
                    className="flex items-center justify-center h-20 transition-all duration-300 hover:scale-105 px-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img 
                      src={logo} 
                      alt={`Partner logo ${index + 1}`} 
                      className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </div>
          </Carousel>
        </div>
      </div>

      <Separator className="mb-8 mx-auto max-w-4xl" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 max-w-6xl mx-auto">
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
