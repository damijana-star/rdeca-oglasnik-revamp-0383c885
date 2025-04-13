
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "@/components/Header";
import AdvertisingBenefits from "@/components/AdvertisingBenefits";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string };
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clear the state to prevent repeated scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="animate-slide-up">
          <StatsBar />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <AdvertisingBenefits />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Blog />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
