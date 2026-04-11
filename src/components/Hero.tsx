import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34644610120?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20web%20por%20suscripci%C3%B3n";
const PHONE_URL = "tel:+34644610120";

const Hero = () => {
  return (
    <section id="hero" className="hero-bg relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground mb-3 shadow-soft"
          >
            <span className="inline-block h-2 w-2 rounded-full gradient-bg" />
            Ves tu web antes de pagar un euro
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-4"
          >
            Consigue clientes cada semana con una <span className="gradient-text">web que vende por ti</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center gap-1 mb-6"
          >
            <span className="text-yellow-500">⭐⭐⭐⭐⭐ 4.9/5</span>
            <span className="text-sm font-medium text-gray-600">Clientes reales ya consiguen reservas y contactos</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl"
          >
            Creamos tu web en 48h para que empieces a recibir clientes desde el primer día.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-muted-foreground mb-8 font-semibold text-green-600"
          >
            Sin permanencia · Demo gratuita · Resultados desde día 1
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-primary-foreground shadow-elevated transition-all hover:scale-105 w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Quiero mi web gratis
            </a>
            <a
              href={PHONE_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-semibold text-foreground shadow-soft transition-all hover:bg-secondary w-full sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              WhatsApp
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-muted-foreground mt-4 text-gray-500"
          >
            Te enseño ejemplos reales en 1 minuto
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
