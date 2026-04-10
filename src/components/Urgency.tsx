import { motion } from "framer-motion";
import { MessageCircle, Clock, Users } from "lucide-react";

const Urgency = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Plazas <span className="gradient-text">limitadas</span> esta semana
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solo trabajamos con 8 nuevos clientes al mes para garantizar resultados y atención personalizada
          </p>
        </motion.div>

        {/* Disponibilidad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-lg font-semibold text-gray-900">Disponibilidad actual:</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-green-600">3</span>
              <span className="text-lg text-gray-600">plazas disponibles</span>
            </div>
          </div>
        </motion.div>

        {/* Razones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
        >
          {[
            {
              icon: Users,
              title: "Atención personalizada",
              description: "Máximo 8 clientes nuevos al mes para dedicar el tiempo que necesitas"
            },
            {
              icon: Clock,
              title: "Resultados garantizados",
              description: "Control total del proceso para asegurar que tu web funcione"
            },
            {
              icon: MessageCircle,
              title: "Soporte directo",
              description: "Hablas siempre conmigo, sin equipos ni intermediarios"
            }
          ].map((reason, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white mb-4 shadow-md">
                <reason.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Urgente */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-red-700 font-semibold text-sm mb-4">
              <Clock className="h-4 w-4" />
              ÚLTIMAS 3 PLAZAS DISPONIBLES
            </div>
            <p className="text-gray-600 mb-6">
              Cuando se llenen las plazas, cerraremos admisiones hasta el mes que viene
            </p>
          </div>

          <a
            href="https://wa.me/34644610120?text=Hola%2C%20quiero%20reservar%20mi%20plaza%20ahora"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Reservar mi plaza ahora
          </a>
          
          <p className="text-sm text-gray-500 mt-4">
            Sin compromiso · Si decides no continuar, no pagas nada
          </p>
        </motion.div>

        {/* Contador regresivo visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            {[
              { number: "3", label: "Plazas libres" },
              { number: "8", label: "Clientes/mes" },
              { number: "48h", label: "Entrega" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Urgency;
