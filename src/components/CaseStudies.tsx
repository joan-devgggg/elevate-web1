import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import sanremoLogo from "@/assets/Logo elegante de Restaurante San Remo.png";
import dentluxLogo from "@/assets/PHOTO-2026-04-01-15-22-26.jpg";
import sanremoScreenshot from "@/assets/Captura de pantalla 2026-04-15 a las 23.57.20.png";
import dentluxScreenshot from "@/assets/Captura de pantalla 2026-04-15 a las 23.58.11.png";

const CaseStudies = () => {
  const cases = [
    {
      name: "Restaurante San Remo",
      location: "Palencia",
      logo: sanremoLogo,
      screenshot: sanremoScreenshot,
      url: "https://sanremopalencia.com",
      result: "+25 reservas online cada semana en solo 30 días",
      testimonio: "Ahora tenemos reservas constantes sin depender del teléfono",
      firma: "— Alberto Villegas, dueño de restaurante en Palencia",
      delay: 0.1
    },
    {
      name: "Dentlux Travel",
      location: "Alicante",
      logo: dentluxLogo,
      screenshot: dentluxScreenshot,
      url: "https://dentluxtravel.com",
      result: "+35 solicitudes de clientes al mes desde la web",
      testimonio: "Ahora recibimos mensajes y solicitudes todos los días sin hacer nada",
      firma: "— Equipo Dentlux Travel, agencia en Alicante",
      delay: 0.2
    }
  ];

  return (
    <section id="casos" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título y Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Resultados reales de clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Negocios como el tuyo ya están consiguiendo clientes cada semana
          </p>
        </motion.div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: caseStudy.delay }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={caseStudy.logo} 
                  alt={`${caseStudy.name} logo`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {caseStudy.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {caseStudy.location}
                  </p>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative group cursor-pointer mb-6">
                <a 
                  href={caseStudy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src={caseStudy.screenshot} 
                    alt={`${caseStudy.name} web`}
                    className="w-full rounded-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-xl transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      Ver web real →
                    </span>
                  </div>
                </a>
              </div>

              {/* Resultado */}
              <div className="bg-green-50 text-green-800 rounded-lg px-4 py-2 mt-4 mb-4">
                <p className="font-medium">
                  {caseStudy.result}
                </p>
              </div>

              {/* Testimonio */}
              <div className="mb-4">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {caseStudy.testimonio}
                </p>
                <p className="text-gray-600 text-sm">
                  {caseStudy.firma}
                </p>
              </div>

              {/* CTA */}
              <a
                href={caseStudy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity duration-200 inline-flex items-center gap-2 mt-4"
              >
                Ver web real →
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
