import { motion } from "framer-motion";
import { MessageCircle, Eye, Settings, Rocket } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34644610120?text=Hola%2C%20quiero%20empezar%20mi%20web";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Nos cuentas tu negocio",
      description: "Hablamos contigo para entender lo que necesitas",
      delay: 0.1
    },
    {
      icon: Eye,
      title: "Te enseñamos tu web gratis",
      description: "48 horas para ver tu diseño profesional",
      delay: 0.2
    },
    {
      icon: Settings,
      title: "La adaptamos contigo",
      description: "Hacemos todos los cambios necesarios hasta que tu web esté 100% a tu gusto",
      delay: 0.3
    },
    {
      icon: Rocket,
      title: "La lanzamos y empiezas a recibir clientes",
      description: "Web funcionando 24/7 para captar oportunidades",
      delay: 0.4
    }
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Texto puente */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Más de 50 negocios ya confían en nosotros. Así es como conseguimos resultados:
          </p>
        </motion.div>

        {/* Línea separadora */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Así conseguimos que tu web te <span className="gradient-text">traiga clientes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un proceso simple, probado y optimizado para que empieces a recibir clientes en días, no meses.
          </p>
        </motion.div>

        {/* Pasos */}
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: step.delay }}
              className="text-center relative"
            >
              {/* Conector entre pasos (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full">
                  <div className="h-0.5 bg-gradient-to-r from-blue-200 to-transparent ml-8"></div>
                </div>
              )}

              {/* Número del paso */}
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm mb-4">
                {index + 1}
              </div>

              {/* Icono */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 mb-6 mx-auto">
                <step.icon className="h-8 w-8 text-blue-600" />
              </div>

              {/* Contenido */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Empezar ahora
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Sin compromiso · Respuesta en 24-48h
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
