import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Monitor } from "lucide-react";

const projects = [
  {
    title: "San Remo Palencia",
    category: "Restaurante de alta cocina",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    desktopImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
    mobileImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=600&fit=crop",
    url: "https://sanremopalencia.com",
    description: "Web para restaurante italiano con sistema de reservas online, carta digital y galería de ambientes.",
    features: ["Reservas online", "Carta digital", "Galería de fotos", "SEO local"],
    color: "from-orange-500 to-red-500",
    real: true
  },
  {
    title: "Dentlux Travel",
    category: "Servicios de Experiencia",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    desktopImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    mobileImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=600&fit=crop",
    url: "https://dentluxtravel.com",
    description: "Servicios premium de experiencia con atención personalizada y seguimiento de calidad.",
    features: ["Atención personalizada", "Experiencia premium", "Seguimiento calidad", "Servicios exclusivos"],
    color: "from-blue-500 to-purple-500",
    real: true
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 gradient-subtle-bg">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Algunos de nuestros <span className="gradient-text">trabajos recientes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proyectos profesionales que generan resultados reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-soft transition-all hover:shadow-card hover:-translate-y-1"
            >
              {/* Badge de categoría */}
              <div className="absolute top-4 left-4 z-10">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.color}`}>
                  {project.category}
                </div>
              </div>

              {/* Badge de estado */}
              {project.real ? (
                <div className="absolute top-4 right-4 z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Web real
                  </div>
                </div>
              ) : (
                <div className="absolute top-4 right-4 z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Ejemplo conceptual
                  </div>
                </div>
              )}

              {/* Imagen principal */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Características */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Vista previa desktop y mobile */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="relative rounded-lg overflow-hidden bg-muted h-24">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Monitor className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <img
                      src={project.desktopImage}
                      alt="Desktop view"
                      className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="relative rounded-lg overflow-hidden bg-muted h-24">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <img
                      src={project.mobileImage}
                      alt="Mobile view"
                      className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">100% responsive</span> · Optimizado SEO
                  </div>
                  {project.url !== "#" ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      Ver web real
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      Solicitar similar
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA secundario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="text-left">
              <h3 className="font-semibold text-foreground mb-1">¿Quieres una web como estas?</h3>
              <p className="text-sm text-muted-foreground">Habla con nosotros y te asesoramos sin compromiso.</p>
            </div>
            <a
              href="https://wa.me/34644610120?text=Hola%2C%20quiero%20una%20web%20como%20los%20ejemplos"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105"
            >
              Solicitar información
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
