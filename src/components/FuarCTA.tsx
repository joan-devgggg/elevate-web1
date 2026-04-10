import { motion } from "framer-motion";
import { MessageCircle, Phone, CheckCircle, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-8"
          >
            <CheckCircle className="h-4 w-4" />
            ÚLTIMA OPORTUNIDAD ESTA SEMANA
          </motion.div>

          {/* Título principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Empieza hoy. Si no te gusta, no pagas nada.
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed"
          >
            Tu web lista para conseguir clientes en 48h
          </motion.p>

          {/* Garantías */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              "Sin permanencia",
              "Demo gratuita", 
              "Resultados reales",
              "Soporte directo"
            ].map((guarantee, index) => (
              <div key={index} className="flex items-center gap-2 text-white">
                <CheckCircle className="h-5 w-5 text-yellow-300" />
                <span className="font-medium">{guarantee}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <a
              href="https://wa.me/34644610120?text=Hola%2C%20quiero%20mi%20web%20en%2048h"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 rounded-full px-10 py-5 text-xl font-bold shadow-2xl transition-all hover:scale-105 hover:shadow-3xl"
            >
              <MessageCircle className="h-6 w-6" />
              Quiero mi web en 48h
              <ArrowRight className="h-6 w-6" />
            </a>
          </motion.div>

          {/* Texto de urgencia */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-white/80 text-lg mb-8"
          >
            Solo 3 plazas disponibles esta semana
          </motion.p>

          {/* CTA secundario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="tel:+34644610120"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors underline decoration-2 underline-offset-4"
            >
              <Phone className="h-5 w-5" />
              Llama ahora
            </a>
          </motion.div>

          {/* Estadísticas finales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/20"
          >
            {[
              { value: "50+", label: "Webs creadas" },
              { value: "4.9/5", label: "Valoración" },
              { value: "48h", label: "Entrega" },
              { value: "100%", label: "Satisfacción" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
