import { motion } from "framer-motion";
import { MessageSquare, PenTool, Settings, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Nos cuentas tu negocio",
    desc: "Hablamos contigo para entender lo que necesitas",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Te enseñamos tu web gratis",
    desc: "48 horas para ver tu diseño profesional",
  },
  {
    icon: Settings,
    num: "03",
    title: "La adaptamos contigo",
    desc: "Hacemos todos los cambios necesarios hasta que tu web esté 100% a tu gusto",
  },
  {
    icon: Rocket,
    num: "04",
    title: "La lanzamos y empiezas a recibir clientes",
    desc: "Web funcionando 24/7 para captar oportunidades",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Así conseguimos que tu web te <span className="gradient-text">traiga clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">Un proceso simple, probado y optimizado para que empieces a recibir clientes en días, no meses.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              {/* Línea conector entre pasos (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full">
                  <div className="h-0.5 bg-gradient-to-r from-blue-200 to-transparent ml-8"></div>
                </div>
              )}

              {/* Número del paso */}
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm mb-4">
                {i + 1}
              </div>

              {/* Icono */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 mb-6 mx-auto">
                <s.icon className="h-8 w-8 text-blue-600" />
              </div>

              {/* Contenido */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {s.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/34644610120?text=Hola%2C%20quiero%20empezar%20con%20mi%20web%20profesional"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
          >
            <ArrowRight className="h-5 w-5" />
            Empezar ahora
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Sin compromiso · Respuesta en menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
