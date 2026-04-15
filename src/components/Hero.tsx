import * as React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34644610120?text=Hola%2C%20me%20interesa%20crear%20mi%20web%20con%20Elevate%20Web.%20%C2%BFPod%C3%A9is%20ense%C3%B1arme%20ejemplos%3F";
const PHONE_URL = "tel:+34644610120";

const Hero = () => {
  return (
    <section id="hero" className="hero-bg relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.2] mb-6"
          >
            Tu web lista en 48h para conseguir <span className="gradient-text">clientes cada semana sin depender de Instagram</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-green-600 font-semibold">o no pagas nada</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl"
          >
            Especialmente pensado para restaurantes, clínicas y negocios que dependan de clientes cada semana. Sin permanencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-primary-foreground shadow-elevated transition-all hover:scale-105 w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Quiero empezar a recibir clientes
            </a>
            <a
              href={PHONE_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-soft transition-all hover:bg-gray-50 w-full sm:w-auto"
            >
              <Phone className="h-5 w-5" />
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
