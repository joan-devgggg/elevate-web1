import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const bad = [
  "Pagas hosting, dominio y diseño por separado",
  "Pierdes semanas aprendiendo herramientas",
  "Problemas técnicos que no sabes resolver",
  "Resultado poco profesional",
  "Sin soporte ni mantenimiento",
];

const good = [
  "Todo incluido en una sola cuota",
  "Diseño profesional hecho para ti",
  "Sin complicaciones técnicas",
  "Cambios fáciles y rápidos",
  "Te olvidas de todo, nosotros lo gestionamos",
];

const Comparison = () => {
  return (
    <section className="py-20 md:py-28 gradient-subtle-bg">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            ¿Por qué <span className="gradient-text">Elevate Web</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-8 shadow-soft"
          >
            <h3 className="text-lg font-semibold text-muted-foreground mb-6">Hacerlo tú mismo</h3>
            <div className="flex flex-col gap-4">
              {bad.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                    <X className="h-3 w-3 text-destructive" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-primary bg-card p-8 shadow-elevated relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-bg px-4 py-1 text-xs font-semibold text-primary-foreground">
              Recomendado
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Con Elevate Web</h3>
            <div className="flex flex-col gap-4">
              {good.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full gradient-bg">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
