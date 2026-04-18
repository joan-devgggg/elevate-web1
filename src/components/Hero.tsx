import * as React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Check } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34644610120?text=Hola%2C%20me%20interesa%20crear%20mi%20web%20con%20Elevate%20Web.%20%C2%BFPod%C3%A9is%20ense%C3%B1arme%20ejemplos%3F";
const PHONE_URL = "tel:+34644610120";

const Hero = () => {
  return (
    <section id="hero" className="hero-bg relative overflow-hidden pt-20 pb-24 md:pt-16 md:pb-16 lg:pt-24 lg:pb-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            📍 <span className="hidden sm:inline">Para restaurantes, clínicas y negocios locales</span><span className="sm:hidden">Para negocios locales</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.2] mb-6"
          >
            Tu web lista en 48h para convertir visitas en <span className="gradient-text">clientes cada semana</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-foreground font-semibold">o no pagas nada.</span>
            <br />
            <span className="text-xl md:text-2xl lg:text-3xl text-gray-500 font-medium">Web + anuncios + chatbot WhatsApp, todo incluido.</span>
          </motion.h1>

          {/* Micro-beneficios - column on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto mb-6 text-sm text-green-600"
          >
            <div className="flex items-center">
              <Check size={16} className="mr-2" />
              <span>Web lista en 48h</span>
            </div>
            <div className="flex items-center">
              <Check size={16} className="mr-2" />
              <span>Sin pago inicial</span>
            </div>
            <div className="flex items-center">
              <Check size={16} className="mr-2" />
              <span>Sin permanencia</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm text-gray-500 text-center mb-6"
          >
            Confiado por +47 negocios locales en toda España
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4 w-full sm:w-auto mb-6"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-primary-foreground shadow-elevated transition-all hover:scale-105 w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Quiero clientes cada semana
            </a>
            <a
              href={PHONE_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-soft transition-all hover:bg-gray-50 w-auto"
            >
              <Phone className="h-4 w-4" />
              Llamar ahora
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs text-gray-500 mt-4"
          >
            Si no te gusta el diseño que te mostramos, no pagas nada.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
