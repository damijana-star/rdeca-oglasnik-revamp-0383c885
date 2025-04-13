import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Ime mora vsebovati vsaj 2 znaka." }),
  email: z.string().email({ message: "Vnesite veljaven e-poštni naslov." }),
  phone: z.string().min(9, { message: "Vnesite veljavno telefonsko številko." }),
  message: z.string().min(10, { message: "Sporočilo mora vsebovati vsaj 10 znakov." }),
});

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  }

  return (
    <div id="contact" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Kontaktirajte nas</h2>
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
                      <FormLabel>Ime in priimek</FormLabel>
                      <FormControl>
                        <Input placeholder="Vnesite vaše ime in priimek" {...field} />
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
                      <FormLabel>E-pošta</FormLabel>
                      <FormControl>
                        <Input placeholder="Vnesite vaš e-poštni naslov" type="email" {...field} />
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
                      <FormLabel>Telefonska številka</FormLabel>
                      <FormControl>
                        <Input placeholder="Vnesite vašo telefonsko številko" {...field} />
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
                        <Textarea 
                          placeholder="Vnesite vaše sporočilo" 
                          className="min-h-32" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-dark-red hover:bg-dark-red/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Pošiljanje...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Pošlji sporočilo
                    </>
                  )}
                </Button>
                
                {isSuccess && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-md text-center">
                    Vaše sporočilo je bilo uspešno poslano! Hvala za kontakt.
                  </div>
                )}
              </form>
            </Form>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Kontaktni podatki</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-dark-red mr-4 h-5 w-5 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Telefon</h4>
                  <p className="text-gray-600">031 646 666</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-dark-red mr-4 h-5 w-5 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">E-pošta</h4>
                  <p className="text-gray-600">info@nanoski-oglasnik.eu</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Delovni čas</h4>
                <p className="text-gray-600">Ponedeljek - Petek: 9:00 - 17:00</p>
                <p className="text-gray-600">Sobota: 9:00 - 13:00</p>
                <p className="text-gray-600">Nedelja: Zaprto</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Naslov</h4>
                <address className="text-gray-600 not-italic">
                  Volče 88<br />
                  5220 Tolmin<br />
                  Slovenija
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
