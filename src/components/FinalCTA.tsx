import { motion } from "framer-motion";
import { MessageCircle, Phone, Zap } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34644610120?text=Hola%2C%20quiero%20mi%20web%20profesional";
const PHONE_URL = "tel:+34644610120";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tu web profesional,{" "}
            <span className="gradient-text">sin complicaciones</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Empieza hoy mismo por solo 65€/mes + IVA
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-10 py-5 text-lg font-semibold text-primary-foreground shadow-elevated transition-all hover:scale-105"
            >
              <MessageCircle className="h-6 w-6" />
              Solicitar información
            </a>
            <a
              href={PHONE_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-10 py-5 text-lg font-semibold text-foreground shadow-soft transition-all hover:bg-secondary"
            >
              <Phone className="h-6 w-6" />
              Llamar ahora
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="h-4 w-4 text-primary" />
            Respuesta rápida
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
