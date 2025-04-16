
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ContactInfoDisplay from "./ContactInfoDisplay";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Send } from "lucide-react";

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Ime mora vsebovati vsaj 2 znaka" }),
  email: z.string().email({ message: "Vpišite veljaven email naslov" }),
  phone: z.string().optional(),
  message: z.string().min(5, { message: "Sporočilo mora vsebovati vsaj 5 znakov" }),
});

type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize React Hook Form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('phone', values.phone || '');
    formData.append('message', values.message);

    try {
      // Send data to FormSubmit.co
      const response = await fetch(`https://formsubmit.co/3d46f4b0b47d881b8a8820990542e23b`, {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        toast({
          title: "Sporočilo poslano",
          description: "Hvala za vaše sporočilo. Odgovorili vam bomo v najkrajšem možnem času.",
          variant: "default",
        });
        
        // Reset form
        form.reset();
      } else {
        throw new Error("Form submission failed");
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ime in Priimek</FormLabel>
                      <FormControl>
                        <Input placeholder="Ime in Priimek" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email naslov</FormLabel>
                      <FormControl>
                        <Input placeholder="Email naslov" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefonska številka (neobvezno)</FormLabel>
                      <FormControl>
                        <Input placeholder="Telefonska številka" type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sporočilo</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Sporočilo" className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-dark-red hover:bg-dark-red/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Pošiljanje..."
                  ) : (
                    <>
                      Pošlji sporočilo <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
          <ContactInfoDisplay />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
