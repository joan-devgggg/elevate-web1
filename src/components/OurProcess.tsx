import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34644610120?text=Hola%2C%20quiero%20empezar%20con%20mi%20web";

const OurProcess = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cómo trabajamos <span className="gradient-text">(y por qué funciona)</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Trabajo con negocios locales que necesitan clientes de forma constante, como restaurantes, clínicas y servicios.
              </p>
              
              <p className="text-lg leading-relaxed">
                No es una agencia. No hay intermediarios.
              </p>
              
              <p className="text-lg leading-relaxed font-semibold">
                Solo alguien que ya ha probado lo que funciona en negocios como el tuyo.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-center"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Quiero mi web en 48h
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
