
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { setCookie, getCookie } from "@/lib/cookies";
import { useToast } from "@/hooks/use-toast";
import { Cookie, Info, Shield } from "lucide-react";

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if the user has already consented to cookies
    const hasConsented = getCookie("cookie-consent");
    if (!hasConsented) {
      // Delay the opening of the dialog for better UX
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookie("cookie-consent", "accepted", 365);
    setCookie("analytics-cookies", "accepted", 365);
    setCookie("marketing-cookies", "accepted", 365);
    setOpen(false);
    toast({
      title: "Piškotki sprejeti",
      description: "Hvala, da ste sprejeli vse piškotke.",
      variant: "default",
    });
  };

  const handleAcceptEssential = () => {
    setCookie("cookie-consent", "essential", 365);
    setOpen(false);
    toast({
      title: "Osnovni piškotki sprejeti",
      description: "Uporabljali bomo samo nujne piškotke.",
      variant: "default",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md rounded-xl backdrop-blur-sm border border-gray-200 shadow-soft animate-zoom-in">
        <DialogHeader className="space-y-2">
          <div className="flex items-center gap-2">
            <Cookie className="h-5 w-5 text-dark-red" />
            <DialogTitle className="text-lg font-semibold">Piškotki in zasebnost</DialogTitle>
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-dark-red to-dark-red/60 rounded-full"></div>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="flex gap-3">
            <div className="mt-0.5">
              <Info className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-sm text-gray-600">
              Ta spletna stran uporablja piškotke za izboljšanje vaše uporabniške izkušnje. V skladu z EU zakonodajo vas obveščamo o uporabi piškotkov na naši strani.
            </p>
          </div>
          
          <div className="flex gap-3">
            <div className="mt-0.5">
              <Shield className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-sm text-gray-600">
              Uporabljamo osnovne piškotke za delovanje strani ter analitične in marketinške piškotke, ki nam pomagajo razumeti, kako uporabljate našo stran.
            </p>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={handleAcceptEssential}
            className="sm:w-auto w-full transition-all hover:border-dark-red hover:text-dark-red"
          >
            Samo nujni piškotki
          </Button>
          <Button
            onClick={handleAcceptAll}
            className="bg-dark-red hover:bg-dark-red/90 sm:w-auto w-full transition-all shadow-sm hover:shadow-md"
          >
            Sprejmi vse piškotke
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsent;
