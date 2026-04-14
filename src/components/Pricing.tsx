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
        "Web profesional para tu negocio",
        "Diseño limpio y funcional",
        "Hosting y dominio incluidos",
        "Certificado SSL (web segura)",
        "Cambios básicos incluidos",
        "Soporte estándar"
      ],
      buttonText: "Quiero mi demo gratuita",
      featured: false,
      description: "Ideal para empezar a tener presencia online profesional",
      whatsappMessage: "Hola%2C%20quiero%20el%20Plan%20Presencia%20para%20mi%20negocio"
    },
    {
      name: "Plan Clientes",
      price: "350€ inicial + 55€/mes",
      additionalText: "",
      features: [
        "Web totalmente personalizada para tu negocio",
        "Estructura diseñada para convertir visitas en clientes",
        "Optimización para aparecer en Google",
        "Cambios y mejoras continuas",
        "Soporte prioritario"
      ],
      buttonText: "Quiero mi demo gratuita",
      featured: true,
      badge: "Más popular",
      priceDescription: "Pensada para que empieces a recibir clientes desde el primer mes",
      idealFor: "Recuperas la inversión con 2-3 clientes",
      whatsappMessage: "Hola%2C%20quiero%20el%20Plan%20Clientes%20para%20conseguir%20más%20clientes"
    },
    {
      name: "Plan Crecimiento",
      price: "700€ inicial + 95€/mes",
      additionalText: "",
      features: [
        "Todo lo del plan Clientes",
        "Mejora continua de la web",
        "Ajustes constantes para conseguir más clientes",
        "Optimización basada en resultados",
        "Revisión y mejoras periódicas",
        "Optimización para aparecer en Google Maps",
        "Soporte dedicado prioritario",
        "Atención rápida y prioritaria"
      ],
      buttonText: "Quiero mi demo gratuita",
      featured: false,
      description: "Para negocios que quieren crecer en serio",
      priceDescription: "Optimización continua para aumentar clientes cada mes",
      whatsappMessage: "Hola%2C%20quiero%20el%20Plan%20Crecimiento%20para%20escalar%20mi%20negocio"
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Título y Subtítulo */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Elige cómo quieres conseguir <span className="gradient-text">clientes con tu web</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tres opciones según el nivel de resultados que quieras conseguir
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Sin permanencia · Sin sorpresas · Sin letra pequeña
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Todos los precios son + IVA
          </p>
        </div>

        {/* Grid de Planes */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`
                relative rounded-2xl p-8 md:p-10 text-center transition-all duration-300 bg-white hover:scale-105 hover:shadow-xl
                ${plan.featured 
                  ? 'shadow-2xl scale-105 border-2 bg-gradient-to-r from-green-500 to-green-600 bg-[length:100%_2px] bg-[position:0%_0%] bg-no-repeat ring-4 ring-green-100/30' 
                  : 'shadow-md border border-gray-200'
                }
              `}
            >
              {/* Badge para plan destacado */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border border-green-200">
                    LA OPCIÓN MÁS ELEGIDA
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
                      <div className={`text-lg font-semibold text-gray-700 mt-2`}>
                        {plan.name === 'Plan Clientes' ? '+55€/mes (opcional, mantenimiento y mejoras)' : plan.name === 'Plan Crecimiento' ? '+95€/mes (opcional, optimización continua)' : ''}
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
              
              {/* Texto ideal para plan Clientes */}
              {plan.idealFor && (
                <p className="text-sm font-medium text-green-600 mb-8">
                  {plan.idealFor}
                </p>
              )}
              
              
              {/* Texto adicional */}
              {plan.additionalText && (
                <p className={`text-gray-500 ${plan.featured ? 'text-base mb-12' : 'text-sm mb-8'}`}>
                  {plan.additionalText}
                </p>
                {plan.price.includes('inicial') && (
                  <div className="flex flex-col gap-1 mt-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>Sin permanencia</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>Activalo solo si lo necesitas</span>
                    </div>
                  </div>
                )}
              )}

              {/* Características */}
              <div className={`flex flex-col gap-3 text-left ${plan.featured ? 'mb-12' : 'mb-10'}`}>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className={`leading-relaxed ${plan.featured ? 'text-base text-gray-800' : 'text-sm text-gray-700'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Botón */}
              <a
                href={`${WHATSAPP_URL.split('?')[0]}?text=${plan.whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-flex w-full items-center justify-center gap-2 rounded-xl transition-all duration-200
                  ${plan.featured 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 text-lg font-bold px-8 py-4 shadow-lg hover:shadow-xl' 
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm font-medium px-6 py-3'
                  }
                `}
              >
                <MessageCircle className="h-4 w-4" />
                {plan.buttonText}
              </a>
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
