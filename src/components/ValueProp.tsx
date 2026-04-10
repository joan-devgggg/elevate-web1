import { motion } from "framer-motion";
import { Check } from "lucide-react";

const checks = [
  "Tú te centras en tu negocio, yo me encargo de la web",
  "No necesitas saber nada de tecnología",
  "Hosting, dominio, SSL, todo gestionado",
  "Actualizaciones y mejoras incluidas",
  "Un solo interlocutor, comunicación directa",
];

const ValueProp = () => {
  return (
    <section className="py-20 md:py-28 gradient-subtle-bg">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Olvídate de lo técnico.{" "}
            <span className="gradient-text">Yo me encargo de todo.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-12"
          >
            Tener una web profesional no debería ser complicado ni caro. Con Elevate Web, solo tienes que contarme qué necesitas. Del resto me ocupo yo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex flex-col gap-4 text-left"
          >
            {checks.map((c) => (
              <div key={c} className="flex items-center gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full gradient-bg">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <span className="text-foreground font-medium">{c}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
