import { motion } from "framer-motion";
import { MessageCircle, Search, TrendingUp, Clock } from "lucide-react";

const UnifiedBenefits = () => {
  const benefits = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Recibe mensajes, reservas o citas cada semana",
      description: "Tu web convierte visitas en clientes mientras tú duermes"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Aparece en Google cuando te buscan",
      description: "Clientes locales te encuentran cuando necesitan tus servicios"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Convierte visitas en clientes",
      description: "Diseño optimizado para generar mensajes, reservas y citas"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Funciona 24/7",
      description: "Tu negocio nunca cierra, sigue generando clientes siempre"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tu web <span className="gradient-text">trabaja por ti</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mientras tú te ocupas de tu negocio local, tu web se encarga de conseguir clientes
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-sm font-medium text-blue-700">Trabajamos con restaurantes, clínicas y negocios locales</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-200 h-full"
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <div className="text-blue-600">
                    {benefit.icon}
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnifiedBenefits;
