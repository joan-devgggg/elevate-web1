import * as React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Check, Star } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34644610120?text=Hola%2C%20me%20interesa%20crear%20mi%20web%20con%20Elevate%20Web.%20%C2%BFPod%C3%A9is%20ense%C3%B1arme%20ejemplos%3F";

const Pricing = () => {
  const plans = [
    {
      name: "Plan Presencia",
      price: "65€/mes",
      additionalText: "Todo incluido desde el primer mes",
      description: "Diseño + hosting + dominio + mantenimiento. Sin pago inicial.",
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
      whatsappMessage: "Hola%2C%20quiero%20el%20Plan%20Presencia%20para%20mi%20negocio"
    },
    {
      name: "Plan Clientes",
      price: "350€",
      additionalText: "+ 55€/mes mantenimiento opcional",
      description: "Web profesional optimizada para conseguir clientes, lista en 48h.",
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
      buttonText: "Quiero empezar a recibir clientes",
      featured: true,
      badge: "Más elegido",
      priceDescription: "Recuperas la inversión con solo 2–3 clientes",
      whatsappMessage: "Hola%2C%20quiero%20el%20Plan%20Clientes%20para%20conseguir%20más%20clientes"
    },
    {
      name: "Plan Sistema",
      price: "Precio personalizado",
      additionalText: "Según el volumen de anuncios de tu negocio",
      features: [
        "Todo lo del Plan Clientes",
        "Chatbot WhatsApp automatizado 24h",
        "Gestión completa de anuncios en Meta",
        "Optimización continua de campañas",
        "Mejora de conversión basada en datos",
        "Soporte prioritario y directo",
        "Estrategia mensual personalizada"
      ],
      buttonText: "Quiero saber si es para mí",
      featured: false,
      description: "Para crecer de forma predecible cada mes",
      whatsappMessage: "Hola%2C%20quiero%20información%20sobre%20el%20Plan%20Sistema",
      badge: "Sistema completo",
      hasInfoBox: true
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Título y Subtítulo */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5">
            Elige cómo quieres conseguir <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Empieza con la web y activa el sistema cuando quieras.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Sin permanencia · Sin sorpresas · Sin letra pequeña
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Todos los precios son + IVA
          </p>
        </div>

        {/* Bloque de Anclaje de Precios */}
        <div className="bg-blue-50 rounded-3xl p-5 md:p-6 mb-10 md:mb-12 max-w-4xl mx-auto border border-blue-100">
          <p className="text-center text-slate-700 text-sm leading-relaxed">
            Una agencia tradicional te cobra entre 1.500€ y 5.000€ por una web similar. Y luego 150€/mes de mantenimiento. Aquí empiezas desde 65€/mes, ves el diseño antes de pagar, y si no te gusta no debes nada.
          </p>
        </div>

        {/* Grid de Planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto mt-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -1, scale: plan.featured ? 1.03 : 1.01 }}
              className={`${plan.name === "Plan Clientes" ? "order-1 md:order-unset" : plan.name === "Plan Presencia" ? "order-2 md:order-unset" : "order-3 md:order-unset"} bg-white rounded-3xl p-6 md:p-8 text-center shadow-lg border border-gray-200 ${plan.featured ? 'bg-[#F8FAFF] shadow-xl md:scale-[1.02]' : ''} relative h-full flex flex-col justify-between transition-all duration-300`}
            >
              {/* TOP SECTION - Badge, nombre, descripción, precio, subtext */}
              <div className="min-h-[200px] flex flex-col">
                {/* Badge dentro de la card */}
                {plan.badge && (
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-full">
                      <div className={`${plan.featured ? "bg-[#E6F7EC] text-[#1F7A4D]" : "bg-gray-900 text-white"} px-3 py-1 rounded-full text-xs font-medium`}>
                        {plan.badge}
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
                    <p className="text-slate-600 text-sm mb-4 font-medium">
                    {plan.description}
                  </p>
                )}

                {/* Precio - mismo tamaño para todos */}
                <div className="mb-4">
                    <div className={`${plan.price === "Precio personalizado" ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"} font-bold text-gray-900`}>
                    {plan.price}
                  </div>
                </div>
                
                {/* Subtexto adicional */}
                {plan.additionalText && (
                    <p className="text-slate-500 text-sm mb-3">
                    {plan.additionalText}
                  </p>
                )}

                {/* Info box for Plan Sistema */}
                {plan.hasInfoBox && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                    <p className="text-blue-800 text-sm">
                      El presupuesto de anuncios es tuyo y lo controlas tú directamente
                    </p>
                  </div>
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
                    <p className="text-slate-700 text-sm leading-relaxed">
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
                      ? 'text-white text-base md:text-lg font-bold px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5 mb-4 md:mb-0' 
                      : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-sm font-medium px-6 py-3'
                    }
                  `}
                  style={plan.featured ? { background: 'linear-gradient(135deg, #2563EB, #7C3AED)' } : {}}
                >
                  <MessageCircle className="h-4 w-4" />
                  {plan.buttonText}
                </a>
                {plan.badge === "Sistema completo" && (
                    <p className="text-slate-500 text-xs text-center mt-3">
                      Precio según volumen de anuncios — te lo explicamos en 5 min por WhatsApp
                    </p>
                  )}
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
          className="text-center mt-10"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-slate-600">
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
      </div>
    </section>
  );
};

export default Pricing;
