import * as React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Check, Star } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34644610120?text=Hola%2C%20quiero%20empezar%20con%20mi%20web%20profesional";

const Pricing = () => {
  const plans = [
    {
      name: "Plan Presencia",
      price: "65€/mes",
      additionalText: "Sin pago inicial",
      features: [
        "Web básica para tener presencia online",
        "Diseño limpio y funcional",
        "Hosting y dominio incluidos",
        "Certificado SSL",
        "Cambios básicos incluidos",
        "Soporte estándar"
      ],
      buttonText: "Empezar sin pago inicial",
      featured: false,
      description: "Ideal para empezar sin riesgo",
      whatsappMessage: "Hola%2C%20quiero%20el%20Plan%20Presencia%20para%20mi%20negocio"
    },
    {
      name: "Plan Clientes",
      price: "350€",
      additionalText: "",
      features: [
        "Web totalmente personalizada para tu negocio (no plantilla)",
        "Estructura optimizada para convertir visitas en clientes",
        "Diseño profesional adaptado a móvil",
        "Optimización para aparecer en Google (SEO)",
        "Integración con WhatsApp y formularios",
        "Cambios ilimitados hasta que te encante",
        "Hosting, dominio y SSL incluidos",
        "Soporte prioritario"
      ],
      buttonText: "Quiero mi web en 48h",
      featured: true,
      badge: "Más elegido",
      priceDescription: "Recuperas la inversión con solo 2–3 clientes",
      whatsappMessage: "Hola%2C%20quiero%20el%20Plan%20Clientes%20para%20conseguir%20más%20clientes"
    },
    {
      name: "Plan Crecimiento",
      price: "700€",
      additionalText: "",
      features: [
        "Todo lo del plan Clientes",
        "Optimización continua de la web",
        "Mejora de conversión basada en datos",
        "Ajustes constantes para conseguir más clientes",
        "Soporte prioritario y directo",
        "Estrategia mensual personalizada"
      ],
      buttonText: "Quiero escalar mi negocio",
      featured: false,
      description: "Para crecer de forma predecible cada mes",
      whatsappMessage: "Hola%2C%20quiero%20el%20Plan%20Crecimiento%20para%20escalar%20mi%20negocio"
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Título y Subtítulo */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Elige cómo quieres conseguir <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La mayoría de negocios empiezan con el Plan Clientes
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Sin permanencia · Sin sorpresas · Sin letra pequeña
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Todos los precios son + IVA
          </p>
        </div>

        {/* Grid de Planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -1, scale: plan.featured ? 1.03 : 1.01 }}
              className={`bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-200 ${plan.featured ? 'bg-[#F8FAFF] shadow-xl scale-[1.02]' : ''} relative h-full flex flex-col justify-between transition-all duration-300`}
            >
              {/* TOP SECTION - Badge, nombre, descripción, precio, subtext */}
              <div className="min-h-[200px] flex flex-col">
                {/* Badge dentro de la card */}
                {plan.featured && (
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-full">
                      <div className="bg-[#E6F7EC] text-[#1F7A4D] px-3 py-1 rounded-full text-xs font-medium">
                        Más elegido
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Nombre del plan */}
                <h3 className={`font-semibold text-gray-900 ${plan.featured ? 'text-2xl mb-3' : 'text-xl mb-3'}`}>
                  {plan.name}
                </h3>
                
                {/* Descripción (siempre encima del precio) */}
                {plan.description && (
                  <p className="text-gray-600 text-sm mb-4 font-medium">
                    {plan.description}
                  </p>
                )}

                {/* Precio - mismo tamaño para todos */}
                <div className="mb-4">
                  <div className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </div>
                </div>
                
                {/* Subtexto adicional */}
                {plan.additionalText && (
                  <p className="text-gray-500 text-sm mb-3">
                    {plan.additionalText}
                  </p>
                )}

                {/* Descripción de precio (solo Plan Clientes) */}
                {plan.priceDescription && (
                  <p className="text-sm text-green-600 font-medium">
                    {plan.priceDescription}
                  </p>
                )}
              </div>

              {/* MIDDLE SECTION - Características */}
              <div className="flex-1 flex flex-col gap-3 text-left py-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 mt-0.5">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* BOTTOM SECTION - Botón CTA */}
              <div className="mt-auto">
                <a
                  href={`${WHATSAPP_URL.split('?')[0]}?text=${plan.whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex w-full items-center justify-center gap-2 rounded-full transition-all duration-200
                    ${plan.featured 
                      ? 'bg-gray-900 text-white hover:bg-gray-800 text-lg font-bold px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5' 
                      : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-sm font-medium px-6 py-3'
                    }
                  `}
                >
                  <MessageCircle className="h-4 w-4" />
                  {plan.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Microcopy de confianza */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Sin permanencia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Cancela cuando quieras</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Sin compromiso inicial</span>
            </div>
          </div>
        </motion.div>

        {/* Bloque Upsell - Más Clientes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 px-12 py-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl border border-gray-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900">
              ¿Quieres más clientes todavía?
            </h3>
            <p className="text-lg text-gray-700 max-w-md">
              Puedes combinar tu web con anuncios en redes sociales y multiplicar resultados
            </p>
            <button
              onClick={() => {
                const servicesSection = document.getElementById('servicios-adicionales');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Ver cómo conseguir más clientes
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
