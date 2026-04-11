import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IrresistibleOffer from "@/components/IrresistibleOffer";
import TrustCounters from "@/components/TrustCounters";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import CaseStudies from "@/components/CaseStudies";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Urgency from "@/components/Urgency";
import DomainFAQ from "@/components/DomainFAQ";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FuarCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ExitPopup from "@/components/ExitPopup";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IrresistibleOffer />
        <TrustCounters />
        <Process />
        <Pricing />
        <CaseStudies />
        <Benefits />
        <Services />
        <Urgency />
        <DomainFAQ />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <ExitPopup />
    </>
  );
};

export default Index;
