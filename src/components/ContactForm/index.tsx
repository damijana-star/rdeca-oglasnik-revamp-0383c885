
import { useState } from "react";
import ContactFormInputs, { FormValues } from "./ContactFormInputs";
import ContactInfoDisplay from "./ContactInfoDisplay";
import { toast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    
    // Prepare the email template parameters
    const templateParams = {
      from_name: values.name,
      reply_to: values.email,
      phone: values.phone,
      message: values.message
    };

    // Send email using emailjs
    emailjs.send(
      "service_n429gen", // service ID
      "template_hdewjqm", // template ID
      templateParams,
      "ejoTXEF5clFp3_Cnx" // public key from .env file
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
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
    .catch((error) => {
      console.error('Email sending failed:', error);
      setIsSubmitting(false);
      
      // Show error toast notification
      toast({
        title: "Napaka",
        description: "Pri pošiljanju sporočila je prišlo do napake. Prosimo, poskusite ponovno kasneje.",
        variant: "destructive",
      });
    });
  }

  return (
    <div id="contact" className="section bg-gray-50 py-16">
      <div className="container">
        {/* Removed h1 "Kontaktirajte nas" */}
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
