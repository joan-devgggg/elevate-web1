import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alberto Villegas",
    business: "San Remo Palencia",
    website: "sanremopalencia.com",
    type: "Restaurante de alta cocina",
    image: "/src/assets/LOGO copia.png",
    rating: 5,
    quote: "Necesitábamos una web que reflejara la autenticidad de nuestro restaurante. Elevate Web creó una experiencia digital tan cuidada como nuestros platos. Ahora recibimos reservas online cada semana.",
    results: "40% más reservas online"
  },
  {
    name: "Sofia Benali",
    business: "Dentlux Travel",
    website: "dentluxtravel.com",
    type: "Clínica dental turismo dental",
    image: "/src/assets/PHOTO-2026-04-01-15-22-26.jpg",
    rating: 5,
    quote: "Como clínica dental de turismo dental en Marrakech, necesitábamos una web que transmitiera profesionalismo médico y experiencia premium. El resultado ha sido espectacular: ahora recibimos pacientes de toda España.",
    results: "300% aumento en reservas"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Resultados reales</span> de nuestros clientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Webs que funcionan y generan clientes cada día.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:shadow-card hover:-translate-y-1"
            >
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-primary/20" />
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  <a 
                    href={`https://${testimonial.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    {testimonial.website}
                  </a>
                  <div className="inline-block mt-2 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {testimonial.type}
                  </div>
                </div>
              </div>

              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="text-sm">
                  <span className="font-semibold text-foreground">Resultado: </span>
                  <span className="text-primary font-medium">{testimonial.results}</span>
                </div>
                <a
                  href={`https://${testimonial.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Ver web →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 rounded-2xl border border-border bg-card px-8 py-6 shadow-soft">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">4.9</div>
              <div className="text-sm text-muted-foreground">Valoración media</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
