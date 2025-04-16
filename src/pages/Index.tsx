
import Header from "@/components/Header";
import AdvertisingBenefits from "@/components/AdvertisingBenefits";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <StatsBar />
        <AdvertisingBenefits />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
