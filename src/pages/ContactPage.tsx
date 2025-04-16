
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
        <div className="py-12 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Kontaktirajte nas</h2>
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};
export default ContactPage;
