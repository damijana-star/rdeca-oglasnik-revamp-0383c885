
import Header from "@/components/Header";
import AdvertisingBenefits from "@/components/AdvertisingBenefits";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Blog from "@/components/Blog";
import ContactForm from "@/components/Footer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatsBar />
      <main className="flex-grow">
        <Hero />
        <AdvertisingBenefits />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

