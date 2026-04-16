import * as React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemIdentification from "@/components/ProblemIdentification";
import CaseStudies from "@/components/CaseStudies";
import SimpleProcess from "@/components/SimpleProcess";
import UnifiedBenefits from "@/components/UnifiedBenefits";
import WebShowcase from "@/components/WebShowcase";
import SimpleGuarantee from "@/components/SimpleGuarantee";
import Pricing from "@/components/Pricing";
import CustomerAcquisitionSystem from "@/components/CustomerAcquisitionSystem";
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
        <ProblemIdentification />
        <CaseStudies />
        <SimpleProcess />
        <UnifiedBenefits />
        <WebShowcase />
        <SimpleGuarantee />
        <Pricing />
        <CustomerAcquisitionSystem />
        <CROFAQ />
        <StrongFinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
