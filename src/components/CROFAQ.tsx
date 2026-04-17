import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const CROFAQ = () => {
  const [openItem, setOpenItem] = useState([]); // Todas las preguntas cerradas por defecto

  const faqs = [
    {
      question: "¿Qué pasa después de hacer clic?",
      answer: "Te responderé por WhatsApp en menos de 1 hora. Hablaremos sobre tu negocio y te mostraré ejemplos de webs que funcionan como la tuya."
    },
    {
      question: "¿Cuándo empiezo a ver resultados?",
      answer: "La mayoría de clientes empiezan a recibir mensajes y contactos en la primera semana. En 30 días deberías tener clientes recurrentes."
    },
    {
      question: "¿Y si la web no me trae clientes?",
      answer: "Es raro que pase si tu negocio ya tiene demanda local. Pero si en 30 días no estás contento con los resultados, lo revisamos juntos sin coste adicional. Sin permanencia, cancelas cuando quieras."
    },
    {
      question: "¿Y si no tengo tiempo para ocuparme de esto?",
      answer: "No tienes que ocuparte de nada. Nosotros hacemos todo: diseño, textos, publicación y mantenimiento. Tú solo nos cuentas tu negocio en una llamada de 20 minutos."
    },
    {
      question: "¿Puedo cancelar el mantenimiento?",
      answer: "Sí, puedes cancelar cuando quieras sin penalizaciones. El mantenimiento es opcional y solo lo pagas si te está generando valor."
    },
    {
      question: "¿Hay costes adicionales?",
      answer: "No. El precio incluye todo: diseño, desarrollo, hosting, dominio y soporte. No hay sorpresas ni letra pequeña."
    },
    {
      question: "¿Qué incluye exactamente el precio?",
      answer: "Web profesional completa, diseño personalizado, hosting, dominio, certificado SSL, optimización para Google y soporte directo conmigo."
    }
  ];

  const toggleItem = (index) => {
    if (openItem.includes(index)) {
      setOpenItem(openItem.filter(item => item !== index));
    } else {
      setOpenItem([...openItem, index]);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de empezar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left bg-white rounded-lg border border-gray-200 p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItem.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </button>
              
              {openItem.includes(index) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 border border-gray-200 border-t-0 rounded-b-lg p-6"
                >
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CROFAQ;
