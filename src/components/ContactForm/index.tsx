
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ContactInfoDisplay from "./ContactInfoDisplay";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    // Log form data for debugging
    console.log("Submitting form with values:", {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      message: formData.get("message")
    });

    try {
      // Create a standard form submission but with fetch
      const response = await fetch("https://formsubmit.co/ajax/info@nanoski-oglasnik.eu", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone") || "",
          message: formData.get("message"),
          _captcha: "false",
          _subject: "Nova poizvedba iz spletne strani",
          _template: "table"
        }),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        toast({
          title: "Sporočilo poslano",
          description: "Hvala za vaše sporočilo. Odgovorili vam bomo v najkrajšem možnem času.",
          variant: "default",
        });
        
        // Reset form
        e.currentTarget.reset();
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      toast({
        title: "Napaka",
        description: "Prišlo je do napake pri pošiljanju. Prosimo, poskusite znova.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="section bg-gray-50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Kontaktni obrazec</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Imate vprašanje ali potrebujete dodatne informacije? Izpolnite spodnji obrazec in odgovorili vam bomo v najkrajšem možnem času.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-dark-red focus:outline-none focus:ring-1 focus:ring-dark-red"
                    placeholder="Ime in Priimek"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-dark-red focus:outline-none focus:ring-1 focus:ring-dark-red"
                    placeholder="Email naslov"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-dark-red focus:outline-none focus:ring-1 focus:ring-dark-red"
                    placeholder="Telefonska številka (neobvezno)"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={6}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-dark-red focus:outline-none focus:ring-1 focus:ring-dark-red"
                    placeholder="Sporočilo"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-dark-red hover:bg-dark-red/90 text-white px-4 py-3 rounded-md transition-colors ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Pošiljanje..." : "Pošlji sporočilo"}
              </button>
            </form>
          </div>
          <ContactInfoDisplay />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
