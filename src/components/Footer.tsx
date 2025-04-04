
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const clientLogos = [
    "Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5"
  ];

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container">
        {/* Client logos */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6 text-center">Naši partnerji</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {clientLogos.map((logo, index) => (
              <div key={index} className="bg-white rounded-md p-4 flex items-center justify-center h-20 shadow-sm">
                <span className="text-gray-400">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div id="about">
            <h3 className="font-bold text-lg mb-4 text-dark-red">NANOSKI OGLASNIK</h3>
            <p className="text-gray-600 mb-4">
              Vodilni specializirani oglasnik za zimsko športno opremo v Sloveniji.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-red hover:text-white hover:bg-dark-red rounded-full p-2 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-dark-red hover:text-white hover:bg-dark-red rounded-full p-2 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-dark-red hover:text-white hover:bg-dark-red rounded-full p-2 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-dark-red">Povezave</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-dark-red">O nas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dark-red">Pogoji uporabe</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dark-red">Zasebnost</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dark-red">Piškotki</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-dark-red">Kontakt</a></li>
            </ul>
          </div>

          <div id="contact">
            <h3 className="font-bold mb-4 text-dark-red">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-dark-red" />
                <span className="text-gray-600">+386 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-dark-red" />
                <span className="text-gray-600">info@nanoski-oglasnik.eu</span>
              </div>
              <address className="text-gray-600 not-italic">
                Volče 88<br />
                5220 Tolmin<br />
                Slovenija
              </address>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Nanoski Oglasnik. Vse pravice pridržane.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
