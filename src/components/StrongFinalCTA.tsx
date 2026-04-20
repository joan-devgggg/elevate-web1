import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34644610120?text=Hola%2C%20me%20interesa%20crear%20mi%20web%20con%20Elevate%20Web.%20%C2%BFPod%C3%A9is%20ense%C3%B1arme%20ejemplos%3F";

const StrongFinalCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5"
          >
            Empieza hoy. Si no te gusta el diseño, no pagas nada.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-2xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Sin permanencia. Sin pago si no te gusta. Solo clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-medium shadow-sm">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              <span>Solo 3 plazas disponibles esta semana</span>
            </div>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 rounded-full px-8 py-4 text-base md:text-lg font-bold shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Quiero llenar mi agenda
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default StrongFinalCTA;
