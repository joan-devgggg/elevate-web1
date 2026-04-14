import { motion } from "framer-motion";
import { MessageCircle, Code, TrendingUp } from "lucide-react";

const SimpleProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Nos cuentas tu negocio",
      description: "Nos cuentas lo que necesitas",
      icon: <MessageCircle className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      number: "2", 
      title: "Te enseñamos tu web en 48h",
      description: "Te mostramos el diseño final",
      icon: <Code className="h-6 w-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      number: "3",
      title: "Si te gusta, empezamos a recibir clientes", 
      description: "Tu web empieza a generar contactos",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Así funciona en <span className="gradient-text">3 pasos simples</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            De la idea a clientes reales en menos de una semana
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm font-medium text-green-700">Si no te gusta, no pagas nada</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-200 h-full">
                <div className="flex justify-center mb-6">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full ${step.color}`}>
                    {step.icon}
                  </div>
                </div>
                
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleProcess;
