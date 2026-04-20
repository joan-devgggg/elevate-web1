import * as React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Megaphone, ArrowUpRight } from "lucide-react";

const CustomerSystem = () => {
  return (
    <section className="py-16 md:py-24 pt-10 md:pt-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Título y Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            El sistema completo para llenar<br />
            <span className="gradient-text">tu agenda cada semana</span>
          </h2>
          
          <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Los resultados no vienen solo de tener una web.<br />
            Vienen de captar, responder y hacer seguimiento sin perder ningún lead.
          </p>
        </motion.div>

        {/* Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Captación, CRM y seguimiento en automático
          </h3>
          
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Tres piezas que trabajan juntas mientras tú atiendes tu negocio
          </p>
        </motion.div>

        {/* Bloques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto mt-10">
          {/* Bloque 1 - Atraemos clientes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-blue-50 border border-blue-200 rounded-3xl p-7 text-center shadow-sm"
          >
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 shadow-sm">
                <Megaphone className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Empiezas a recibir leads desde el primer día
            </h4>
            <div className="space-y-2 text-gray-700">
              <p>Anuncios en Meta desde el primer día</p>
              <p>Personas listas para comprar</p>
              <p>Control total de la inversión</p>
            </div>
          </motion.div>

          {/* Bloque 2 - Convertimos visitas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-purple-50 border border-purple-200 rounded-3xl p-7 text-center shadow-sm"
          >
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <ArrowUpRight className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Convierte visitas en reservas y contactos reales
            </h4>
            <div className="space-y-2 text-gray-700">
              <p>Web optimizada para reservas y contactos</p>
              <p>Diseño pensado para generar mensajes</p>
            </div>
          </motion.div>

          {/* Bloque 3 - Cerramos automáticamente */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-green-50 border border-green-200 rounded-3xl p-7 text-center shadow-sm"
          >
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              No pierdes ningún chat interesado
            </h4>
            <div className="space-y-2 text-gray-700">
              <p>Respuesta instantánea 24h</p>
              <p>Se guarda cada conversación en el CRM</p>
              <p>Seguimiento automático hasta cerrar</p>
            </div>
          </motion.div>
        </div>

        {/* Precio y CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10 max-w-3xl mx-auto"
        >
          <p className="text-base md:text-lg text-slate-600 mb-6">
            Desde 450€/mes para conseguir clientes cada semana<br />
            Web + gestión de anuncios en Meta + CRM + automatización de seguimiento
          </p>
          
          <a
            href="https://wa.me/34644610120?text=Hola%2C%20quiero%20clientes%20cada%20semana"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg inline-flex items-center justify-center gap-2 text-white rounded-full px-8 py-4 text-base md:text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all mb-5 w-full sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Quiero clientes cada semana
          </a>
          
          <p className="text-sm text-slate-500 mb-0">
            Te respondemos en menos de 1 hora por WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerSystem;
