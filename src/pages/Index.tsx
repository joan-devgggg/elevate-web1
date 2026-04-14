import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import SimpleProcess from "@/components/SimpleProcess";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import UnifiedBenefits from "@/components/UnifiedBenefits";
import SimpleGuarantee from "@/components/SimpleGuarantee";
import StrongFinalCTA from "@/components/StrongFinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <SimpleProcess />
        <CaseStudies />
        <Pricing />
        <UnifiedBenefits />
        <SimpleGuarantee />
        <StrongFinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
