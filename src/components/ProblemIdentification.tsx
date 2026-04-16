import * as React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const ProblemIdentification = () => {
  const problems = [
    "Dependes de Instagram o del boca a boca para conseguir clientes",
    "Tienes WhatsApp lleno de consultas pero ninguna web donde mandarlos",
    "Pierdes clientes cada semana porque no apareces en Google",
    "Has pensado en tener web pero las agencias te piden 2.000€ o más",
    "Tu competencia ya tiene web y tú todavía no"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            ¿Te suena alguna de estas situaciones?
          </h2>
          
          <div className="space-y-4 mb-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-left bg-white p-4 rounded-lg border border-gray-200"
              >
                <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{problem}</span>
              </motion.div>
            ))}
          </div>
          
          <p className="text-lg text-gray-600 font-medium">
            Si te has sentido identificado, esto es para ti.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemIdentification;
