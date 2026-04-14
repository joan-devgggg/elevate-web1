import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RealTestimonials from "@/components/RealTestimonials";
import SimpleProcess from "@/components/SimpleProcess";
import OurProcess from "@/components/OurProcess";
import Pricing from "@/components/Pricing";
import UnifiedBenefits from "@/components/UnifiedBenefits";
import SimpleGuarantee from "@/components/SimpleGuarantee";
import CROFAQ from "@/components/CROFAQ";
import StrongFinalCTA from "@/components/StrongFinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SimpleProcess />
        <RealTestimonials />
        <OurProcess />
        <Pricing />
        <UnifiedBenefits />
        <SimpleGuarantee />
        <CROFAQ />
        <StrongFinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
