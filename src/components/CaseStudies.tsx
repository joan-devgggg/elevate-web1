import * as React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { TrendingUp, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import sanremoLogo from "@/assets/logo-sanremo.png";
import dentluxLogo from "@/assets/logo-dentlux.jpg";
import sanremoScreenshot from "@/assets/screenshot-sanremo.png";
import dentluxScreenshot from "@/assets/screenshot-dentlux.png";
import fotoAlberto from "@/assets/foto-alberto.png";
import fotoDentlux from "@/assets/foto-dentlux.jpg";

const AnimatedCounter = ({ target }: { target: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 1.5,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, count, target]);

  return <span ref={ref}>{displayValue}%</span>;
};

const CaseStudies = () => {
  const cases = [
    {
      name: "Restaurante San Remo",
      location: "Palencia",
      logo: sanremoLogo,
      screenshot: sanremoScreenshot,
      url: "https://sanremopalencia.com",
      result: "Antes: dependían solo del teléfono\nAhora: +25 reservas online cada semana en solo 30 días",
      testimonio: "Pasamos de depender solo del teléfono a recibir +25 reservas online cada semana en solo 30 días.",
      firma: "— Alberto Villegas, Restaurante San Remo · Palencia",
      delay: 0.1
    },
    {
      name: "Dentlux Travel",
      location: "Alicante",
      logo: dentluxLogo,
      screenshot: dentluxScreenshot,
      url: "https://dentluxtravel.com",
      result: "Antes: no recibían solicitudes constantes\nAhora: +35 solicitudes de clientes al mes desde la web",
      testimonio: "Ahora recibimos +35 solicitudes de clientes al mes desde la web, todos los días sin hacer nada.",
      firma: "— Equipo Dentlux Travel · Alicante",
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
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-1 p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={caseStudy.name === "Restaurante San Remo" ? fotoAlberto : fotoDentlux}
                    alt={caseStudy.name === "Restaurante San Remo" ? "Alberto Villegas" : "Equipo Dentlux Travel"}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
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

              {/* Testimonio */}
              <div className="mb-4">
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                  "{caseStudy.testimonio}"
                </p>
                {caseStudy.name === "Dentlux Travel" && (
                  <div className="mb-4">
                    {/* VIDEO_TESTIMONIO_DENTLUX: insertar aquí cuando esté disponible */}
                  </div>
                )}
                <p className="text-gray-500 text-sm">
                  {caseStudy.firma}
                </p>
              </div>

              {/* CTA */}
              <a
                href={caseStudy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-opacity duration-200 inline-flex items-center gap-2 mt-4"
              >
                Ver web real →
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Banner de Anuncios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 max-w-6xl mx-auto"
        >
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-6">
            <TrendingUp className="text-blue-600 w-12 h-12 md:w-16 md:h-16 flex-shrink-0" />
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Nuestros anuncios consiguen resultados un <AnimatedCounter target={53} /> más baratos que la media del sector
              </h3>
              <p className="text-white font-bold text-sm md:text-base">
                Mismo presupuesto. Más clientes. Cada semana.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
