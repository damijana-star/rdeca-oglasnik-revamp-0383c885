
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
          className="bg-gradient-to-r from-[#FFA99F] via-[#FF719A] to-[#e32530] text-white shadow-lg hover:scale-105 transition-all"
          onClick={() => setShowForm(true)}
        >
          Prijavi se na e-novičke za 15% popust na prvi oglas
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
        className="w-64"
        disabled={isSubmitting}
      />
      <Button
        type="submit"
        className="bg-[#e32530] hover:bg-[#e32530]/90 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Pošiljanje..." : "Prijavi se"}
      </Button>
      <Button
        variant="ghost"
        type="button"
        className="ml-2 text-gray-500"
        onClick={() => setShowForm(false)}
        disabled={isSubmitting}
      >
        Prekliči
      </Button>
    </form>
  );
};

export default NewsletterSignup;
