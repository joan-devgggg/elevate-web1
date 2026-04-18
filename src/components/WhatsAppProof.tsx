import * as React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppProof = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conversaciones reales con clientes
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estos son ejemplos reales de mensajes que llegan cuando el sistema está activo.
          </p>
        </motion.div>

        {/* Grid de imágenes de WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {/* Placeholder para imágenes de conversaciones */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: item * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 border border-gray-200"
            >
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-3">
                <div className="text-center">
                  <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Conversación {item}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Cliente interesado en {item === 1 ? "reserva" : item === 2 ? "información" : item === 3 ? "cita" : item === 4 ? "servicio" : item === 5 ? "precio" : "consulta"}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Texto adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 max-w-3xl mx-auto"
        >
          <p className="text-gray-600">
            Así llegan los clientes cuando el sistema está activo. Sin que hagas nada.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppProof;
