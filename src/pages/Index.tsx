import * as React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedMetrics from "@/components/AnimatedMetrics";
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
        <AnimatedMetrics />
        <ProblemIdentification />
        <CaseStudies />
        <CustomerSystem />
        <WhatsAppProof />
        <div className="w-3/5 mx-auto border-t border-gray-200"></div>
        <SimpleProcess />
        <div className="w-3/5 mx-auto border-t border-gray-200"></div>
        <UnifiedBenefits />
        <div className="w-3/5 mx-auto border-t border-gray-200"></div>
        <SimpleGuarantee />
        <Pricing />
        <div className="w-3/5 mx-auto border-t border-gray-200"></div>
        <CROFAQ />
        <StrongFinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
