import * as React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemIdentification from "@/components/ProblemIdentification";
import CaseStudies from "@/components/CaseStudies";
import CustomerSystem from "@/components/CustomerSystem";
import WhatsAppProof from "@/components/WhatsAppProof";
import SimpleProcess from "@/components/SimpleProcess";
import UnifiedBenefits from "@/components/UnifiedBenefits";
import SimpleGuarantee from "@/components/SimpleGuarantee";
import Pricing from "@/components/Pricing";
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
        <CustomerSystem />
        <WhatsAppProof />
        <SimpleProcess />
        <UnifiedBenefits />
        <SimpleGuarantee />
        <Pricing />
        <CROFAQ />
        <StrongFinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
