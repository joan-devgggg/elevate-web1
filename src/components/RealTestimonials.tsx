import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const RealTestimonials = () => {
  const testimonials = [
    {
      business: "Restaurante San Remo",
      before: "Sin reservas online",
      after: "+40% reservas en 30 días",
      quote: "Desde que tenemos la web, recibimos clientes cada semana",
      url: "https://sanremopalencia.com"
    },
    {
      business: "Dentlux Travel",
      before: "Sin clientes online", 
      after: "+300% solicitudes",
      quote: "Ahora recibimos mensajes de WhatsApp todos los días",
      url: "https://dentluxtravel.com"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Resultados reales de <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esto es lo que consiguen negocios como el tuyo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {testimonial.business}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="text-sm font-medium text-blue-700 mb-1">ANTES</div>
                    <div className="text-gray-700">{testimonial.before}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <div className="text-sm font-medium text-green-700 mb-1">DESPUÉS</div>
                    <div className="text-gray-700 font-semibold">{testimonial.after}</div>
                  </div>
                </div>
                
                <blockquote className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <a
                  href={testimonial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <span>Ver web</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealTestimonials;
