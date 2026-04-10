import { motion } from "framer-motion";
import { Play, ArrowRight, CheckCircle, Clock, Users, Zap, Shield, Star } from "lucide-react";

const HowWeWork = () => {
  return (
    <section id="como-trabajamos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Así es como <span className="gradient-text">creamos tu web</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Te hacemos una demo gratuita para que veas exactamente cómo será tu web. Sin compromiso y sin coste alguno.
          </p>
        </motion.div>

        {/* Proceso principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-center mb-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl gradient-bg mb-6 shadow-elevated">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Demo Gratuita</h3>
              <p className="text-sm text-muted-foreground">Sin compromiso, sin coste</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Analizamos tu negocio</h4>
                  <p className="text-sm text-muted-foreground">Estudiamos tu sector, competencia y objetivos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Creamos mockup inicial</h4>
                  <p className="text-sm text-muted-foreground">Diseño básico para que veas la dirección</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Te presentamos propuesta</h4>
                  <p className="text-sm text-muted-foreground">Explicamos estructura, contenidos y funcionalidades</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                <Clock className="h-4 w-4" />
                24-48 horas
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="text-center mb-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl gradient-bg mb-6 shadow-elevated">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Feedback y Ajustes</h3>
              <p className="text-sm text-muted-foreground">Tú decides, nosotros ejecutamos</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Nos das tu feedback</h4>
                  <p className="text-sm text-muted-foreground">Cambios de colores, textos, estructura...</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Nosotros ajustamos</h4>
                  <p className="text-sm text-muted-foreground">Modificamos según tus indicaciones</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Iteramos hasta que esté perfecto</h4>
                  <p className="text-sm text-muted-foreground">Sin límite de revisiones</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                <Users className="h-4 w-4" />
                Trabajo en equipo
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="text-center mb-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl gradient-bg mb-6 shadow-elevated">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Web Final</h3>
              <p className="text-sm text-muted-foreground">Lista para recibir clientes</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Desarrollo completo</h4>
                  <p className="text-sm text-muted-foreground">Programación, SEO, responsive...</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Configuración técnica</h4>
                  <p className="text-sm text-muted-foreground">Hosting, dominio, certificados...</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Formación y entrega</h4>
                  <p className="text-sm text-muted-foreground">Te enseñamos a gestionar tu web</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4" />
                ¡Listo para lanzar!
              </div>
            </div>
          </motion.div>
        </div>

        {/* Beneficios clave */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-gradient-to-r from-primary/5 to-primary/10 p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              ¿Por qué nuestra <span className="gradient-text">demo gratuita</span> es diferente?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Sin compromiso real</h4>
                  <p className="text-sm text-muted-foreground">
                    Si no te gusta, no pasa nada. No te pedimos datos bancarios ni firmas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg flex-shrink-0">
                  <Star className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Resultado tangible</h4>
                  <p className="text-sm text-muted-foreground">
                    Te entregamos un diseño real que puedes ver y tocar, no solo ideas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg flex-shrink-0">
                  <Users className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Colaboración total</h4>
                  <p className="text-sm text-muted-foreground">
                    Tú tienes la última palabra. Nosotros solo asesoramos y ejecutamos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Respuesta rápida</h4>
                  <p className="text-sm text-muted-foreground">
                    En 24-48 horas tienes tu demo inicial lista para revisar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-8 shadow-soft">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                ¿Listo para ver tu <span className="gradient-text">futura web</span>?
              </h3>
              <p className="text-muted-foreground mb-6">
                Solicita tu demo gratuita ahora. En 48 horas tienes el primer diseño.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/34644610120?text=Hola%2C%20quiero%20solicitar%20mi%20demo%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-primary-foreground shadow-elevated transition-all hover:scale-105"
              >
                <Play className="h-5 w-5" />
                Solicitar demo gratuita
              </a>
              <a
                href="tel:+34644610120"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-semibold text-foreground shadow-soft transition-all hover:bg-secondary"
              >
                Llamar ahora
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Respuesta 24-48h</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>100% gratuito</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
