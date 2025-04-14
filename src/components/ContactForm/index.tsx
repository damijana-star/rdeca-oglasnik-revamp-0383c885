
import { useState } from "react";
import ContactFormInputs, { FormValues } from "./ContactFormInputs";
import ContactInfoDisplay from "./ContactInfoDisplay";
import emailjs from 'emailjs-com';
import { toast } from "@/hooks/use-toast";

// These are the IDs needed for EmailJS
const EMAILJS_SERVICE_ID = "service_p7fmfp9"; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_r2dgxz1"; // Replace with your EmailJS template ID 
const EMAILJS_USER_ID = "J7bQx7e37a96cTJl7"; // Replace with your EmailJS public key
const RECIPIENT_EMAIL = "info@nanoski-oglasnik.eu"; // The email address that should receive contact form submissions

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    
    // Initialize EmailJS with the user ID
    emailjs.init(EMAILJS_USER_ID);
    
    // Prepare the email template parameters
    const templateParams = {
      from_name: values.name,
      reply_to: values.email,
      to_email: RECIPIENT_EMAIL,
      phone: values.phone,
      message: values.message
    };
    
    // Send the email using EmailJS
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
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
    .catch((err) => {
      console.error('FAILED...', err);
      setIsSubmitting(false);
      
      // Show error toast notification
      toast({
        title: "Napaka pri pošiljanju",
        description: "Prišlo je do napake pri pošiljanju sporočila. Prosimo, poskusite ponovno kasneje.",
        variant: "destructive",
      });
    });
  }

  return (
    <div id="contact" className="section bg-gray-50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Kontaktirajte nas</h2>
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
