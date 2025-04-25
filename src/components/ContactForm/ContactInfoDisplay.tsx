import { Mail, Phone } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const ContactInfoDisplay = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Kontaktni podatki</h3>
      
      <div className="space-y-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-start cursor-pointer">
                <Phone className="text-dark-red mr-4 h-5 w-5 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Telefon</h4>
                  <p className="text-gray-600">031 646 666</p>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Pokličite nas</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-start cursor-pointer">
                <Mail className="text-dark-red mr-4 h-5 w-5 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">E-pošta</h4>
                  <p className="text-gray-600">info@nanoski-oglasnik.eu</p>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Pošljite nam e-poštno sporočilo</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <div>
          <h4 className="font-medium mb-1">Delovni čas</h4>
          <p className="text-gray-600">Ponedeljek - Petek: 9:00 - 17:00</p>
          <p className="text-gray-600">Sobota: 9:00 - 13:00</p>
          <p className="text-gray-600">Nedelja: Zaprto</p>
        </div>
        
        <div>
          <h4 className="font-medium mb-1">Naslov</h4>
          <address className="text-gray-600 not-italic">
            Volče 88A<br />
            5220 Tolmin<br />
            Slovenija
          </address>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoDisplay;
