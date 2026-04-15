import * as React from "react";
import { motion } from "framer-motion";
import sanremoLogo from "@/assets/Logo elegante de Restaurante San Remo.png";
import dentluxLogo from "@/assets/PHOTO-2026-04-01-15-22-26.jpg";

const SocialProof = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Negocios como el tuyo ya consiguen clientes cada semana con su web
          </h2>
          
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Restaurantes, clínicas y negocios locales que antes dependían del boca a boca
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <img 
                src={sanremoLogo} 
                alt="Restaurante San Remo"
                className="w-20 h-20 mx-auto mb-3 rounded-full object-cover border-2 border-gray-200"
              />
              <p className="font-semibold text-gray-900">Restaurante San Remo</p>
              <p className="text-sm text-gray-600">Palencia</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <img 
                src={dentluxLogo} 
                alt="Dentlux Travel"
                className="w-20 h-20 mx-auto mb-3 rounded-full object-cover border-2 border-gray-200"
              />
              <p className="font-semibold text-gray-900">Dentlux Travel</p>
              <p className="text-sm text-gray-600">Alicante</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
