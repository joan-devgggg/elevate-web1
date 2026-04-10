import { motion } from "framer-motion";
import {
  Palette, Smartphone, Search, Globe, ShieldCheck,
  Wrench, RefreshCw, MessageCircle, LayoutDashboard
} from "lucide-react";

const benefits = [
  {
    icon: MessageCircle,
    title: "Recibe mensajes de clientes por WhatsApp automáticamente",
    description: "Botón flotante integrado. Clientes te escriben directamente sin perder oportunidades."
  },
  {
    icon: Search,
    title: "Aparece en Google cuando te buscan",
    description: "SEO local optimizado. Te encuentran cuando buscan tus servicios en tu zona."
  },
  {
    icon: Palette,
    title: "Convierte visitas en clientes reales",
    description: "Estructura diseñada para vender. Formularios y CTAs estratégicos que generan confianza."
  },
  {
    icon: Smartphone,
    title: "Web rápida y lista para vender 24/7",
    description: "Carga instantánea. Perfecta en cualquier dispositivo. Funciona siempre sin fallos."
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Una web que te trae <span className="gradient-text">clientes</span> mientras tú te dedicas a tu negocio
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Deja que la tecnología trabaje para ti. Nos encargamos de todo para que solo te preocupes de atender a tus clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all"
            >
              {/* Icono */}
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
