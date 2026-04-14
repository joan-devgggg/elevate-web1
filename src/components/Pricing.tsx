import { motion } from "framer-motion";
import { MessageCircle, Check, Star } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34644610120?text=Hola%2C%20quiero%20empezar%20con%20mi%20web%20profesional";

const Pricing = () => {
  const plans = [
    {
      name: "Plan Clientes",
      price: "350€",
      additionalText: "",
      features: [
        "Web totalmente personalizada para tu negocio",
        "Estructura optimizada para convertir visitas en clientes",
        "Diseño profesional adaptado a móvil",
        "Optimización para aparecer en Google",
        "Integración con WhatsApp y formularios",
        "Cambios ilimitados hasta que te encante",
        "Hosting, dominio y SSL incluidos",
        "Soporte prioritario"
      ],
      buttonText: "Quiero mi web en 48h",
      featured: true,
      badge: "La opción más elegida",
      priceDescription: "La opción más rentable para la mayoría de negocios",
      whatsappMessage: "Hola%2C%20quiero%20el%20Plan%20Clientes%20para%20conseguir%20más%20clientes"
    },
    {
      name: "Plan Presencia",
      price: "65€/mes",
      additionalText: "Sin pago inicial",
      features: [
        "Web profesional básica",
        "Diseño limpio y funcional",
        "Hosting y dominio incluidos",
        "Certificado SSL",
        "Cambios básicos incluidos",
        "Soporte estándar"
      ],
      buttonText: "Quiero mi web en 48h",
      featured: false,
      description: "Ideal para empezar sin inversión inicial",
      whatsappMessage: "Hola%2C%20quiero%20el%20Plan%20Presencia%20para%20mi%20negocio"
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
      buttonText: "Quiero mi web en 48h",
      featured: false,
      description: "Para negocios que quieren escalar más rápido",
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
              whileHover={{ y: -2, scale: 1.02 }}
              className={`bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg border ${plan.featured ? 'border-gray-200 shadow-2xl scale-105' : 'border-gray-200'} relative h-full flex flex-col justify-between transition-transform duration-300`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-200">
                    Más elegido
                  </div>
                </div>
              )}
                {/* Nombre del plan */}
                <h3 className={`font-semibold text-gray-900 ${plan.featured ? 'text-2xl mb-8' : 'text-xl mb-6'}`}>
                  {plan.name}
                </h3>
                
                {/* Descripción adicional */}
                {plan.description && (
                  <p className={`text-gray-600 ${plan.featured ? 'text-base mb-6' : 'text-sm mb-4'} font-medium`}>
                    {plan.description}
                  </p>
                )}

                {/* Precio con jerarquía elegante */}
                <div className={`${plan.featured ? 'mb-12' : 'mb-8'}`}>
                  {plan.price.includes('inicial') ? (
                    <div className="space-y-1">
                      <div className="text-6xl font-black text-gray-900">
                        {plan.price.split('inicial')[0].trim()}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {plan.price.includes('inicial') ? 'Pago único' : ''}
                      </div>
                      {plan.price.includes('inicial') && (
                        <div className="text-lg font-semibold text-gray-700 mt-2">
                          {plan.name === 'Plan Clientes' ? '+55€/mes (opcional, mantenimiento y mejoras)' : plan.name === 'Plan Crecimiento' ? '+95€/mes (opcional, optimización continua)' : ''}
                        </div>
                      )}
                      {plan.name === 'Plan Clientes' && (
                        <div className="text-sm text-gray-600 mt-2">
                          Pago único + opción de mantenimiento mensual (opcional)
                        </div>
                      )}
                      {plan.name === 'Plan Clientes' && (
                        <div className="text-sm text-green-600 font-medium mt-2">
                          La opción más rentable para la mayoría de negocios
                        </div>
                      )}
                      {plan.name === 'Plan Presencia' && (
                        <div className="text-sm text-blue-600 font-medium mt-2">
                          Ideal para empezar sin inversión inicial
                        </div>
                      )}
                      {plan.name === 'Plan Crecimiento' && (
                        <div className="text-sm text-purple-600 font-medium mt-2">
                          Para negocios que quieren crecer más rápido
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div className={`font-bold text-gray-900 ${plan.featured ? 'text-5xl' : 'text-4xl'}`}>
                        {plan.price}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Descripción de precio para plan central */}
                {plan.priceDescription && (
                  <p className="text-sm text-gray-600 mb-8">
                    {plan.priceDescription}
                  </p>
                )}
                
                {/* Texto adicional */}
                {plan.additionalText && (
                  <p className={`text-gray-500 ${plan.featured ? 'text-base mb-12' : 'text-sm mb-8'}`}>
                    {plan.additionalText}
                  </p>
                )}
                {plan.price.includes('inicial') && (
                  <div className="flex flex-col gap-1 mt-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>Sin permanencia · Actívalo cuando quieras</span>
                    </div>
                  </div>
                )}

                {/* Características */}
                <div className={`flex flex-col gap-3 text-left ${plan.featured ? 'mb-8' : 'mb-6'}`}>
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

                {/* Botón */}
                <a
                  href={`${WHATSAPP_URL.split('?')[0]}?text=${plan.whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex w-full items-center justify-center gap-2 rounded-full transition-all duration-200
                    ${plan.featured 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 text-lg font-bold px-8 py-4 shadow-lg hover:shadow-xl' 
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm font-medium px-6 py-3'
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
