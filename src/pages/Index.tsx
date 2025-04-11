
import Header from "@/components/Header";
import AdvertisingBenefits from "@/components/AdvertisingBenefits";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import PartnerLogoCarousel from "@/components/PartnerLogoCarousel";

const Index = () => {
  const clientLogos = [
    "/lovable-uploads/a70fa581-c6f8-44d5-be1c-5589ca8626f6.png", // BREZ OV:R
    "/lovable-uploads/6be61759-c181-4565-8130-35b4715fe1e1.png", // ELKOR
    "/lovable-uploads/476b5c5f-85c3-4193-8d88-f3571eb24335.png", // gramint
    "/lovable-uploads/9f35d68a-2f69-4a48-9b93-76657d6bc122.png", // Komunala
    "/lovable-uploads/a5bc1e9d-7a5b-40b2-9dfc-8feca77f7102.png", // Les 33
    "/lovable-uploads/432954bc-cf7d-42c7-b309-b20b3289108f.png", // lipbled
    "/lovable-uploads/20277a73-c415-415e-b538-75410ff05226.png", // martin
    "/lovable-uploads/d066daf3-4428-47ee-b210-1f61b489f618.png", // NAGODE
    "/lovable-uploads/484d7273-fbb0-40e2-8d02-c09f1e06b15f.png", // SencilRus
    "/lovable-uploads/b4bcb7c2-72d2-4e47-8549-2a1a57436add.png"  // Stavanja
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="bg-white py-4 border-b">
          <div className="container mx-auto">
            <PartnerLogoCarousel logos={clientLogos} autoplayInterval={3000} />
          </div>
        </div>
        <StatsBar />
        <AdvertisingBenefits />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
