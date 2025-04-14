
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle } from "lucide-react";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  name: z.string().min(2, { message: "Ime mora vsebovati vsaj 2 znaka." }),
  email: z.string().email({ message: "Vnesite veljaven e-poštni naslov." }),
  phone: z.string().min(9, { message: "Vnesite veljavno telefonsko številko." }),
  message: z.string().min(10, { message: "Sporočilo mora vsebovati vsaj 10 znakov." }),
});

export type FormValues = z.infer<typeof formSchema>;

interface ContactFormInputsProps {
  onSubmit: (values: FormValues) => void;
  isSubmitting: boolean;
  isSuccess: boolean;
}

export const ContactFormInputs = ({ onSubmit, isSubmitting, isSuccess }: ContactFormInputsProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
    // Reset form after successful submission
    if (!isSubmitting) {
      form.reset();
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
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
            <Alert className="bg-green-50 border-green-200">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-700">Sporočilo poslano!</AlertTitle>
              <AlertDescription className="text-green-600">
                Vaše sporočilo je bilo uspešno poslano! Hvala za kontakt.
              </AlertDescription>
            </Alert>
          )}
        </form>
      </Form>
    </div>
  );
};

export default ContactFormInputs;
