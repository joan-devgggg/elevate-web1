import * as React from "react";
import { motion } from "framer-motion";
import heroMockup from "@/assets/hero-mockup.png";

const WebShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Título y Subtítulo */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Así se ve una web que sí consigue clientes
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Diseñadas para convertir visitas en mensajes, reservas y llamadas desde el primer día
          </p>
          
          {/* Bloque Visual */}
          <div className="relative">
            {/* Desktop - Imagen Principal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl shadow-xl overflow-hidden bg-gray-50"
            >
              <img 
                src={heroMockup}
                alt="Web profesional para conseguir clientes"
                className="w-full h-auto object-cover"
              />
            </motion.div>
            
            {/* Mobile - Opción superpuesta (decorativa) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:block absolute -bottom-8 -right-8 w-48 h-32 bg-white rounded-xl shadow-lg p-2"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-2"></div>
                  <div className="text-xs text-gray-600 font-medium">Mobile</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Detalles de características */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Responsive</h3>
              <p className="text-sm text-gray-600">Perfecta en móvil, tablet y escritorio</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Conversión Optimizada</h3>
              <p className="text-sm text-gray-600">Diseñada para generar contactos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">SEO Integrado</h3>
              <p className="text-sm text-gray-600">Para que te encuentren en Google</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebShowcase;
