
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Toaster } from "@/components/ui/toaster";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default ContactPage;
