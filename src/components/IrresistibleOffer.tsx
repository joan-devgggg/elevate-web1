import { motion } from "framer-motion";
import { CheckCircle, Shield, X } from "lucide-react";

const IrresistibleOffer = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16 md:py-20"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Fondo destacado */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl" />
            <div className="relative border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-elevated">
              
              {/* Título principal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Empieza <span className="gradient-text">sin riesgo</span>
                </h2>
              </motion.div>

              {/* Puntos clave */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Diseñamos tu web GRATIS antes de que pagues</h3>
                    <p className="text-sm text-muted-foreground">Ves el diseño exacto sin coste alguno</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Cambios ilimitados hasta que te encante</h3>
                    <p className="text-sm text-muted-foreground">Modificamos todo lo que necesites sin coste extra</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Sin permanencia</h3>
                    <p className="text-sm text-muted-foreground">Cancelas cuando quieras sin penalizaciones</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Optimizada para conseguir clientes desde el primer día</h3>
                    <p className="text-sm text-muted-foreground">Diseñada para generar resultados desde el inicio</p>
                  </div>
                </motion.div>
              </div>

              {/* Remate potente */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl shadow-elevated">
                  <Shield className="h-6 w-6" />
                  <span className="text-xl font-bold">Si no te gusta, no pagas nada</span>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-center mt-8"
              >
                <a
                  href="https://wa.me/34644610120?text=Hola%2C%20quiero%20empezar%20sin%20riesgo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-bg inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-primary-foreground shadow-elevated transition-all hover:scale-105"
                >
                  Quiero empezar sin riesgo
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Escríbenos ahora y diseñamos tu web gratis
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default IrresistibleOffer;
