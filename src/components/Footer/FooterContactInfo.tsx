
import { Mail, PhoneCall } from "lucide-react";

export const FooterContactInfo = () => {
  return (
    <div className="fade-in text-left" style={{ animationDelay: '0.3s' }}>
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
  );
};

export default FooterContactInfo;
