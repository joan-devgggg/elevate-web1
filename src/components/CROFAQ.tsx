import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const CROFAQ = () => {
  const [openItem, setOpenItem] = useState<number[]>([]);

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
      answer: "Depende del plan: si eliges solo web, incluye diseño personalizado, hosting, dominio, certificado SSL y soporte. Si eliges el sistema, además añade anuncios, CRM y seguimiento."
    },
    {
      question: "¿Cuánto tengo que gastar en anuncios cada mes?",
      answer: "El presupuesto mínimo recomendado es de 200-300€/mes en Meta Ads. Ese dinero va directamente a Meta — tú lo controlas en todo momento. Nosotros gestionamos las campañas para que cada euro rinda al máximo."
    },
    {
      question: "¿Cuánto tiempo tardan en llegar los primeros leads con el Plan Sistema?",
      answer: "Con los anuncios activos, los primeros contactos suelen llegar en los primeros 3-7 días. El CRM guarda cada lead y el seguimiento empieza desde el mismo día que se lanza la web."
    },
    {
      question: "¿Puedo empezar solo con la web y añadir el sistema después?",
      answer: "Sí, claro. Puedes empezar con la web y activar después el sistema completo cuando te encaje."
    },
    {
      question: "¿Los anuncios están incluidos en algún plan?",
      answer: "Los anuncios están incluidos en el Plan Sistema. El presupuesto publicitario es tuyo y lo controlas tú directamente — nosotros nos encargamos de gestionar las campañas para maximizar tus resultados."
    },
    {
      question: "¿Por qué el Plan Sistema es el más efectivo?",
      answer: "Porque combina anuncios masivos con una IA que responde al segundo, asegurando que solo hables con clientes que de verdad van a contratarte."
    },
    {
      question: "¿Necesito saber de tecnología?",
      answer: "No necesitas saber nada. Nos encargamos de todo lo técnico. Tú solo decides si te gusta la web o el sistema."
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
    <section id="faq" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
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
                className="w-full text-left bg-white rounded-2xl border border-slate-200 p-5 md:p-6 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItem.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-slate-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-500" />
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
                  className="bg-slate-50 border border-slate-200 border-t-0 rounded-b-2xl p-5 md:p-6"
                >
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
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
