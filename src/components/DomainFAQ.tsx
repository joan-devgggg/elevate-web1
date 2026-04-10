import { motion } from "framer-motion";
import { Globe, CheckCircle, MessageCircle } from "lucide-react";

const DomainFAQ = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Ya tienes <span className="gradient-text">web o dominio</span>?
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-700 font-semibold text-sm mb-6">
            <CheckCircle className="h-4 w-4" />
            Sí, usamos tu dominio actual sin problema
          </div>
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Tarjeta principal */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-gray-200 p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Icono y texto */}
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white mb-6 shadow-md">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mantenemos tu marca intacta
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Si ya tienes dominio y quieres mejorar tu web, podemos trabajar con lo que tienes. 
                  No es necesario empezar desde cero ni cambiar tu identidad digital.
                </p>

                {/* Opciones */}
                <div className="space-y-4">
                  {[
                    {
                      title: "Migramos tu web actual",
                      description: "Transferimos todo tu contenido a la nueva estructura optimizada"
                    },
                    {
                      title: "Sustituimos tu web", 
                      description: "Creamos una web completamente nueva manteniendo tu dominio"
                    },
                    {
                      title: "Configuramos todo",
                      description: "Nos encargamos de la parte técnica para que no te preocupes de nada"
                    }
                  ].map((option, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-500 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{option.title}</h4>
                        <p className="text-sm text-gray-600">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Imagen/visual */}
              <div className="flex-1 text-center">
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <div className="text-6xl mb-4">??</div>
                  <div className="text-lg font-bold text-gray-900 mb-2">TuDominio.com</div>
                  <div className="text-sm text-gray-600">Lista para clientes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Preguntas adicionales */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                question: "¿Perderé mi posicionamiento actual?",
                answer: "No. Preservamos tu SEO y mejoramos tu estructura para potenciarlo."
              },
              {
                question: "¿Cuánto tarda el proceso?",
                answer: "Normalmente 48-72 horas dependiendo de la complejidad de tu web actual."
              },
              {
                question: "¿Mis correos electrónicos se ven afectados?",
                answer: "No. Los servicios de email funcionan independientemente de la web."
              },
              {
                question: "¿Hay costes adicionales?",
                answer: "Solo el coste del servicio. No hay cargos por migración o configuración."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/34644610120?text=Hola%2C%20tengo%20dominio%20y%20quiero%20mejorar%20mi%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Analizar mi web actual
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Revisión gratuita sin compromiso
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DomainFAQ;
