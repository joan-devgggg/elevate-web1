import { motion } from "framer-motion";
import { MessageCircle, Globe, RefreshCw, TrendingUp, Star, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Rediseño Web",
      price: "250€ pago único + IVA",
      description: "Mejora tu web actual. Mantienes tu dominio y marca. Sin empezar desde cero.",
      features: [
        "Mejora tu web actual",
        "Mantienes tu dominio y marca",
        "Sin empezar desde cero"
      ],
      cta: "Mejorar mi web actual",
      whatsapp: "Hola%2C%20quiero%20un%20redise%C3%B1o%20web",
      icon: RefreshCw,
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
      delay: 0.3
    },
    {
      title: "Tu negocio en Meta Ads (Facebook/Instagram)",
      price: "400\u20ac/mes gestión + IVA",
      description: "Capta clientes potenciales cada día a través de anuncios",
      features: [
        "Nos encargamos de todo (estrategia + optimización)",
        "Presupuesto para publicidad aparte",
        "Resultados medibles desde el primer día"
      ],
      cta: "Quiero clientes con anuncios",
      whatsapp: "Hola%2C%20quiero%20gesti%C3%B3n%20de%20Meta%20Ads",
      icon: Target,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      delay: 0.4
    }
  ];

  return (
    <section id="servicios-adicionales" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Servicios para <span className="gradient-text">multiplicar resultados</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Una vez tengas tu web, puedes escalar con estos servicios
          </p>
        </motion.div>

        {/* Servicios */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              className="relative rounded-2xl border ${service.color} p-8 bg-white shadow-lg hover:shadow-xl transition-all"
            >
              {/* Icono */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white mb-6">
                <service.icon className={`h-8 w-8 ${service.iconColor}`} />
              </div>

              {/* Contenido */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <div className="text-2xl font-bold text-gray-900 mb-4">
                {service.price}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Características */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${service.iconColor} mt-0.5`}>
                      <div className="h-2 w-2 rounded-full bg-current"></div>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/34644610120?text=${service.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 rounded-full bg-white ${service.iconColor} border-2 ${service.color.replace('bg-', 'border-')} hover:bg-gray-50`}
              >
                <MessageCircle className="h-5 w-5" />
                {service.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Nota combinación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border-2 border-blue-300 shadow-lg">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <div className="text-left">
              <div className="font-bold text-xl text-gray-900">Web + Ads = más clientes</div>
              <div className="text-base text-gray-700 font-medium">Combina servicios para multiplicar resultados</div>
            </div>
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/34644610120?text=Hola%2C%20necesito%20asesoramiento%20sobre%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Quiero asesoramiento personalizado
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Analizamos tu caso y recomendamos la mejor solución
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
