import * as React from "react";
import { motion } from "framer-motion";
import sanremoScreenshot from "@/assets/screenshot-sanremo.png";
import dentluxScreenshot from "@/assets/screenshot-dentlux.png";

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
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Diseñadas para convertir visitas en mensajes, reservas y llamadas desde el primer día
          </p>
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-12"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-800">Ejemplos reales de clientes</span>
          </motion.div>
          
          {/* Bloque Visual Realista */}
          <div className="relative max-w-[700px] mx-auto">
            {/* Desktop - Portátil con San Remo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-gray-100 rounded-2xl shadow-xl overflow-hidden p-4 md:p-8"
            >
              {/* Marco del portátil */}
              <div className="bg-gray-900 rounded-t-2xl h-4 md:h-6 flex items-center justify-center">
                <div className="w-12 md:w-16 h-1 bg-gray-700 rounded-full"></div>
              </div>
              
              {/* Pantalla del portátil con screenshot */}
              <div className="bg-white rounded-b-2xl overflow-hidden">
                <img 
                  src={sanremoScreenshot}
                  alt="Web de Restaurante San Remo - Desktop"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Mobile - Delante con Dentlux (solo en desktop) */}
              <motion.div
                initial={{ opacity: 0, x: 30, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ rotate: -2, scale: 1.05 }}
                className="hidden lg:block absolute -bottom-4 -right-4 w-32 bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
              >
                {/* Marco del móvil */}
                <div className="bg-gray-900 h-4 flex items-center justify-center">
                  <div className="w-8 h-1 bg-gray-700 rounded-full"></div>
                </div>
                
                {/* Pantalla del móvil con screenshot */}
                <div className="bg-white rounded-b-2xl overflow-hidden">
                  <img 
                    src={dentluxScreenshot}
                    alt="Web de Dentlux Travel - Mobile"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
            
            {/* Mobile - Versión separada para móvil/tablet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="lg:hidden mt-8 max-w-[300px] mx-auto"
            >
              <div className="bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
                {/* Marco del móvil */}
                <div className="bg-gray-900 h-4 flex items-center justify-center">
                  <div className="w-8 h-1 bg-gray-700 rounded-full"></div>
                </div>
                
                {/* Pantalla del móvil con screenshot */}
                <div className="bg-white rounded-b-2xl overflow-hidden">
                  <img 
                    src={dentluxScreenshot}
                    alt="Web de Dentlux Travel - Mobile"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">Versión móvil</p>
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
