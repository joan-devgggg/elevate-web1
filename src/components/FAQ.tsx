import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Qué incluye exactamente el servicio?",
    a: "Incluye diseño profesional a medida, desarrollo web completo, hosting, certificado SSL, mantenimiento continuo, cambios ilimitados (uso razonable), SEO básico y soporte continuo. Todo en una sola cuota mensual.",
  },
  {
    q: "¿Cuánto tarda en estar lista mi web?",
    a: "Normalmente entre 3 y 6 días hábiles, dependiendo de la complejidad. Webs sencillas pueden estar listas en 3 días.",
  },
  {
    q: "¿Puedo pedir cambios después?",
    a: "¡Claro! Los cambios están incluidos en tu cuota mensual. Puedes solicitar modificaciones de texto, imágenes, secciones y más.",
  },
  {
    q: "¿Necesito contratar un dominio aparte?",
    a: "Si ya tienes un dominio, lo conectamos sin problema. Si no lo tienes, te ayudamos a elegirlo y configurarlo.",
  },
  {
    q: "¿Hay permanencia?",
    a: "No, sin permanencia. Puedes cancelar el servicio en cualquier momento. Sin penalizaciones ni letra pequeña.",
  },
  {
    q: "¿Qué pasa si cancelo?",
    a: "Si cancelas, tu web dejará de estar activa al finalizar el periodo facturado.",
  },
  {
    q: "¿Qué tipo de webs pueden hacer?",
    a: "Páginas corporativas, webs de servicios, landing pages, portfolios, webs para restaurantes, clínicas, tiendas locales, profesionales autónomos… Básicamente cualquier negocio que necesite presencia online profesional.",
  },
  {
    q: "¿Incluye posicionamiento SEO?",
    a: "Sí, incluye SEO básico on-page: títulos optimizados, meta descripciones, estructura correcta, velocidad de carga y adaptación móvil. Para posicionamiento avanzado, podemos evaluar cada caso según tus necesidades.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 gradient-subtle-bg">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-6 shadow-soft data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
