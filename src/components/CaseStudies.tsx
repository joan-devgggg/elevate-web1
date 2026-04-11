import { motion } from "framer-motion";
import { MessageCircle, TrendingUp, Users, Clock } from "lucide-react";
import sanremoLogo from "@/assets/Logo elegante de Restaurante San Remo.png";
import dentluxLogo from "@/assets/PHOTO-2026-04-01-15-22-26.jpg";

const WHATSAPP_URL = "https://wa.me/34644610120?text=Hola%2C%20quiero%20resultados%20como%20estos";

const CaseStudies = () => {
  const cases = [
    {
      category: "Restaurante San Remo",
      icon: "🍝",
      results: ["+40% reservas nuevas", "Clientes reservan directamente desde la web", "Más visibilidad en Google local"],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      delay: 0.1
    },
    {
      category: "Dentlux Travel",
      icon: "✈️",
      link: "https://dentluxtravel.com",
      results: ["+300% solicitudes de información", "Clientes interesados desde España", "Flujo constante de nuevos leads"],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      delay: 0.2
    },
    {
      category: "Nuestra propia web",
      icon: "🏢",
      link: "https://elevateweb.es",
      results: ["Optimizada para conversión", "Diseño orientado a captar clientes", "Estrategia real aplicada en negocio propio"],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      delay: 0.3,
      isOwn: true
    }
  ];

  return (
    <section id="casos" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Así es como nuestros clientes <span className="gradient-text">consiguen más ventas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resultados reales de negocios locales como el tuyo. No promesas, solo hechos.
          </p>
        </motion.div>

        {/* Casos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: caseStudy.delay }}
              className={`relative rounded-2xl border ${caseStudy.color} p-8 bg-white shadow-lg hover:shadow-xl transition-all cursor-pointer`}
            >
              {/* Badge de resultado principal */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${caseStudy.color} ${caseStudy.iconColor} font-bold text-sm shadow-md`}>
                  {caseStudy.isOwn ? (
                    <>
                      <span className="text-xs font-bold">PROPIO</span>
                      <span className="text-xs">{caseStudy.results[0]}</span>
                    </>
                  ) : (
                    <>
                      <TrendingUp className="h-4 w-4" />
                      <span>{caseStudy.results[0]}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Icono y categoría */}
              <a 
                href={caseStudy.category === "Restaurante San Remo" ? "https://sanremopalencia.com" : 
                 caseStudy.category === "Dentlux Travel" ? "https://dentluxtravel.com" : caseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mb-6 mt-4 hover:scale-105 transition-transform"
              >
                <div className="flex justify-center mb-3">
                  {caseStudy.category === "Restaurante San Remo" ? (
                    <img 
                      src={sanremoLogo} 
                      alt="Restaurante San Remo" 
                      className="w-14 h-14 object-contain scale-125"
                    />
                  ) : caseStudy.category === "Dentlux Travel" ? (
                    <img 
                      src={dentluxLogo} 
                      alt="Dentlux Travel" 
                      className="w-14 h-14 object-contain scale-80"
                    />
                  ) : (
                    <div className="text-4xl">{caseStudy.icon}</div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {caseStudy.category}
                </h3>
                {caseStudy.isOwn && (
                  <p className="text-sm text-gray-600 mb-2">
                    Aplicamos exactamente lo que vendemos
                  </p>
                )}
              </a>

              <div className="text-center mt-6">
                <a
                  href={caseStudy.category === "Restaurante San Remo" ? "https://sanremopalencia.com" : 
                     caseStudy.category === "Dentlux Travel" ? "https://dentluxtravel.com" : caseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm hover:underline transition-colors ${
                    caseStudy.isOwn ? 'text-purple-600 hover:text-purple-700' : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  <span>Ver web</span>
                  <span className="transform rotate-45 inline-block">→</span>
                </a>
              </div>

              {/* Resultados */}
              <div className="space-y-3">
                {caseStudy.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex items-start gap-3">
                    <div className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${caseStudy.iconColor} mt-0.5`}>
                      <div className="h-2 w-2 rounded-full bg-current"></div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estadísticas adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "50+", label: "Webs creadas", icon: Users },
            { value: "4.9/5", label: "Valoración", icon: TrendingUp },
            { value: "48h", label: "Entrega media", icon: Clock },
            { value: "0", label: "Clientes insatisfechos", icon: MessageCircle }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 mb-3">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Quiero resultados como estos
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Sin compromiso · Analizamos tu caso gratis
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
