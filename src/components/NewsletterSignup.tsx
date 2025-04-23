
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

// Define form validation schema
const formSchema = z.object({
  email: z.string().email({ message: "Vpišite veljaven email naslov" }),
});

type FormValues = z.infer<typeof formSchema>;

const NewsletterSignup: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize React Hook Form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    console.log("Submitting newsletter form with email:", values.email);
    
    const formData = new FormData();
    formData.append('email', values.email);
    // Add these required FormSubmit fields
    formData.append('_captcha', 'false');
    formData.append('_subject', 'Nova prijava na e-novičke');
    formData.append('_template', 'table');

    try {
      // Send data to FormSubmit.co with the correct URL format
      const response = await fetch("https://formsubmit.co/3d46f4b0b47d881b8a8820990542e23b", {
        method: "POST",
        body: formData
      });
      
      console.log("Newsletter form submission response:", response);
      
      if (response.ok) {
        toast({
          title: "Prijava uspešna!",
          description: "Na email boste prejeli 15% popust na prvi oglas.",
        });
        
        // Reset form and close it
        form.reset();
        setShowForm(false);
      } else {
        console.error("Newsletter form submission failed with status:", response.status);
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Newsletter form submission failed:", error);
      toast({
        title: "Napaka",
        description: "Prišlo je do napake pri pošiljanju. Prosimo, poskusite znova.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showForm) {
    return (
      <div className="fixed bottom-4 right-4 z-50 flex justify-center py-4 fade-in">
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#FF9999] via-[#FF6666] to-[#ea384c] 
          text-white shadow-lg hover:scale-105 transition-all 
          group flex items-center gap-2 
          font-semibold tracking-wide 
          hover:bg-opacity-90 
          focus:outline-none focus:ring-2 focus:ring-red-300"
          onClick={() => setShowForm(true)}
        >
          <Mail className="mr-2 opacity-70 group-hover:animate-bounce" />
          Prijavi se na e-novičke za 15% popust
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 py-4 fade-in">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col md:flex-row items-center justify-center gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Tvoj e-mail"
                    className="w-64 border-[#ea384c] focus:ring-[#FF6666] 
                    transition-all duration-300 
                    hover:border-[#FF9999] 
                    focus:border-[#ea384c]"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs absolute" />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="bg-[#ea384c] hover:bg-[#FF6666] text-white 
            transition-colors duration-300 
            shadow-md hover:shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Pošiljanje..." : "Prijavi se"}
          </Button>
          
          <Button
            variant="ghost"
            type="button"
            className="ml-2 text-[#ea384c] hover:text-[#1A1F2C] 
            hover:bg-[#FF9999] transition-colors duration-300"
            onClick={() => setShowForm(false)}
            disabled={isSubmitting}
          >
            Prekliči
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewsletterSignup;
