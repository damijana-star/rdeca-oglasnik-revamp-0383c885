
import { useState } from "react";
import ContactFormInputs, { FormValues } from "./ContactFormInputs";
import ContactInfoDisplay from "./ContactInfoDisplay";
import { toast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    console.log("Submitting form with values:", values);
    
    // Create a FormData object
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("message", values.message);

    // Send form data to FormSubmit.co service (replace your-email@example.com with your actual email)
    fetch("https://formsubmit.co/info@nanoski-oglasnik.eu", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Form submission successful:', data);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Show success toast notification
      toast({
        title: "Sporočilo poslano",
        description: "Vaše sporočilo je bilo uspešno poslano. Odgovorili vam bomo v najkrajšem možnem času.",
        variant: "default",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    })
    .catch(error => {
      console.error('Form submission failed:', error);
      setIsSubmitting(false);
      
      // Show error toast notification
      toast({
        title: "Napaka",
        description: `Pri pošiljanju sporočila je prišlo do napake. Prosimo, poskusite ponovno kasneje.`,
        variant: "destructive",
      });
    });
  }

  return (
    <div id="contact" className="section bg-gray-50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Imate vprašanje ali potrebujete dodatne informacije? Izpolnite spodnji obrazec in odgovorili vam bomo v najkrajšem možnem času.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          <ContactFormInputs 
            onSubmit={onSubmit} 
            isSubmitting={isSubmitting} 
            isSuccess={isSuccess} 
          />
          <ContactInfoDisplay />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
