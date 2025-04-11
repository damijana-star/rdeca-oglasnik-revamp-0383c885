
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { setCookie, getCookie } from "@/lib/cookies";
import { useToast } from "@/hooks/use-toast";

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if the user has already consented to cookies
    const hasConsented = getCookie("cookie-consent");
    if (!hasConsented) {
      setOpen(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookie("cookie-consent", "accepted", 365);
    setCookie("analytics-cookies", "accepted", 365);
    setCookie("marketing-cookies", "accepted", 365);
    setOpen(false);
    toast({
      title: "Cookies accepted",
      description: "Thank you for accepting cookies.",
    });
  };

  const handleAcceptEssential = () => {
    setCookie("cookie-consent", "essential", 365);
    setOpen(false);
    toast({
      title: "Essential cookies accepted",
      description: "Only essential cookies will be used.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cookie Policy</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-sm text-gray-500">
            Naša spletna stran uporablja piškotke za izboljšanje vaše izkušnje pri brskanju. V skladu z EU zakonodajo vas obveščamo o uporabi piškotkov na naši spletni strani.
          </p>
          <p className="text-sm text-gray-500">
            Uporabljamo bistvene piškotke, ki so potrebni za delovanje strani, ter analitične in marketinške piškotke, ki nam pomagajo razumeti, kako uporabljate našo stran.
          </p>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={handleAcceptEssential}
            className="sm:w-auto w-full"
          >
            Samo nujni piškotki
          </Button>
          <Button
            onClick={handleAcceptAll}
            className="bg-[#e32530] hover:bg-[#e32530]/90 sm:w-auto w-full"
          >
            Sprejmi vse piškotke
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsent;
