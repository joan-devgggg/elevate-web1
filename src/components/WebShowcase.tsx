import * as React from "react";
import { motion } from "framer-motion";
import showcaseImage from "@/assets/ChatGPT Image 16 abr 2026, 01_39_48.png";

const WebShowcase = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-7xl mx-auto"
        >
          {/* Badge pequeño centrado */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-800">Ejemplos reales de clientes</span>
          </motion.div>
          
          {/* Imagen protagonista absoluta */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[1100px] mx-auto"
          >
            <img 
              src={showcaseImage}
              alt="Web profesional - Ejemplo real de clientes"
              className="w-full rounded-2xl md:rounded-[16px] shadow-lg object-cover"
            />
          </motion.div>
          
          {/* Texto opcional debajo */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base text-gray-600 mt-6 max-w-3xl mx-auto"
          >
            Webs diseñadas para convertir visitas en clientes desde el primer día
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WebShowcase;
