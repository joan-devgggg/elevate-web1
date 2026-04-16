import * as React from "react";
import { motion } from "framer-motion";
import { TrendingUp, MessageCircle } from "lucide-react";

const CustomerAcquisitionSystem = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Título y Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sistema completo para conseguir clientes cada semana
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tu web está diseñada para convertir. Ahora puedes escalar y automatizar todo el proceso.
          </p>
        </motion.div>

        {/* Bloques lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Bloque 1 - Más Clientes (ADS) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 shadow-lg"
          >
            {/* Icono */}
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>

            {/* Título y texto */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Consigue más clientes cuando quieras
            </h3>
            
            <p className="text-gray-700 mb-6">
              Añade anuncios en Meta y empieza a recibir contactos cada día. Tu web ya convierte, los anuncios simplemente aceleran los resultados.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Clientes desde el primer día</span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Segmentación a personas listas para comprar</span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Control total de la inversión</span>
              </div>
            </div>

            {/* Botón */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-4 min-h-[44px] transition-colors shadow-lg hover:shadow-xl">
              Quiero más clientes
            </button>
          </motion.div>

          {/* Bloque 2 - No Pierdas Ninguno (Asistente 24H) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 shadow-lg"
          >
            {/* Icono */}
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>

            {/* Título y texto */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No pierdas clientes por no responder
            </h3>
            
            <p className="text-gray-700 mb-6">
              Un asistente en tu web y WhatsApp que responde automáticamente, filtra contactos y convierte mensajes en citas.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Responde al instante, incluso fuera de horario</span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Filtra clientes reales automáticamente</span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Convierte conversaciones en reservas</span>
              </div>
            </div>

            {/* Botón */}
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-6 py-4 min-h-[44px] transition-colors shadow-lg hover:shadow-xl">
              Quiero un asistente 24h
            </button>
          </motion.div>
        </div>

        {/* Frase final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-4xl mx-auto mt-16"
        >
          <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
            Tu web atrae clientes.<br />
            Los anuncios los multiplican.<br />
            Y el asistente se asegura de que no pierdas ninguno.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerAcquisitionSystem;
