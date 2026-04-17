import * as React from "react";
import { motion } from "framer-motion";
import { MessageCircle, TrendingUp, Bot } from "lucide-react";

const CustomerSystem = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Título y Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cómo consiguen clientes cada semana nuestros clientes
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Los resultados que has visto arriba no vienen solo de tener una web.<br />
            Vienen de tener un sistema completo funcionando.
          </p>
        </motion.div>

        {/* Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Sistema de clientes en automático
          </h3>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un sistema que atrae clientes, los convierte y no deja escapar ninguno.
          </p>
        </motion.div>

        {/* Bloques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {/* Bloque 1 - Atraemos clientes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center"
          >
            <div className="text-4xl mb-4">🟦</div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Atraemos clientes
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
            className="bg-purple-50 border border-purple-200 rounded-2xl p-8 text-center"
          >
            <div className="text-4xl mb-4">🟪</div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Convertimos visitas
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
            className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
          >
            <div className="text-4xl mb-4">🟩</div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Cerramos automáticamente
            </h4>
            <div className="space-y-2 text-gray-700">
              <p>Respuesta instantánea 24h</p>
              <p>Filtra curiosos</p>
              <p>Convierte mensajes en citas</p>
            </div>
          </motion.div>
        </div>

        {/* Precio y CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-600 mb-8">
            Disponible a partir de 450€/mes según negocio<br />
            Incluye anuncios, optimización y automatización completa
          </p>
          
          <a
            href="https://wa.me/34644610120?text=Hola%2C%20quiero%20activar%20el%20sistema%20de%20clientes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-black text-white rounded-full px-8 py-4 text-lg font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" />
            Quiero activar el sistema
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerSystem;
