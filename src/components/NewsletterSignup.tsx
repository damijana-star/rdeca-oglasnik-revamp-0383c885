
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const NewsletterSignup: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Prijava uspešna!",
        description: "Na email boste prejeli 15% popust na prvi oglas.",
      });
      setShowForm(false);
      setEmail("");
      setIsSubmitting(false);
    }, 1200);
  };

  if (!showForm) {
    return (
      <div className="flex justify-center py-4 fade-in">
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#E5DEFF] via-[#D6BCFA] to-[#9b87f5] 
          text-dark-gray-900 shadow-lg hover:scale-105 transition-all 
          group flex items-center gap-2 
          font-semibold tracking-wide 
          hover:bg-opacity-90 
          focus:outline-none focus:ring-2 focus:ring-purple-300"
          onClick={() => setShowForm(true)}
        >
          <Mail className="mr-2 opacity-70 group-hover:animate-bounce" />
          Prijavi se na e-novičke za 15% popust
        </Button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col md:flex-row items-center justify-center gap-3 py-4 fade-in"
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        placeholder="Tvoj e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-64 border-[#9b87f5] focus:ring-[#9b87f5] 
        transition-all duration-300 
        hover:border-[#7E69AB] 
        focus:border-[#6E59A5]"
        disabled={isSubmitting}
      />
      <Button
        type="submit"
        className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white 
        transition-colors duration-300 
        shadow-md hover:shadow-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Pošiljanje..." : "Prijavi se"}
      </Button>
      <Button
        variant="ghost"
        type="button"
        className="ml-2 text-[#6E59A5] hover:text-[#1A1F2C] 
        hover:bg-[#E5DEFF] transition-colors duration-300"
        onClick={() => setShowForm(false)}
        disabled={isSubmitting}
      >
        Prekliči
      </Button>
    </form>
  );
};

export default NewsletterSignup;
