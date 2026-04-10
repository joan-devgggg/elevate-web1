import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "5 errores que estás cometiendo con tu web actual",
    excerpt: "Descubre los errores más comunes que frenan el crecimiento de tu negocio y cómo solucionarlos fácilmente.",
    category: "Diseño Web",
    readTime: "5 min",
    date: "15 Nov 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    featured: true
  },
  {
    title: "¿Por qué tu restaurante necesita una web con reservas online?",
    excerpt: "Aprende cómo un sistema de reservas puede aumentar tus clientes un 40% y optimizar tu operación.",
    category: "Restaurantes",
    readTime: "7 min",
    date: "10 Nov 2024",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    featured: false
  },
  {
    title: "SEO local: La guía definitiva para negocios en Palencia",
    excerpt: "Todo lo que necesitas saber para posicionar tu negocio localmente y atraer más clientes de tu zona.",
    category: "SEO",
    readTime: "10 min",
    date: "5 Nov 2024",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78bab9?w=600&h=400&fit=crop",
    featured: false
  },
  {
    title: "Tienda online vs catálogo digital: ¿Qué necesitas?",
    excerpt: "Analizamos las diferencias y te ayudamos a decidir qué es lo mejor para tu negocio.",
    category: "E-commerce",
    readTime: "6 min",
    date: "1 Nov 2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    featured: false
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Consejos expertos</span> para tu negocio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Artículos prácticos sobre diseño web, marketing digital y estrategias para hacer crecer tu negocio online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-card border border-border shadow-soft transition-all hover:shadow-card hover:-translate-y-1 ${
                post.featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-8' : ''
              }`}
            >
              {post.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-primary to-primary/80">
                    <BookOpen className="h-3 w-3" />
                    Destacado
                  </div>
                </div>
              )}

              <div className={`${post.featured ? 'lg:order-2' : ''} relative h-48 lg:h-56 overflow-hidden`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className={`p-6 ${post.featured ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <h3 className={`font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors ${
                  post.featured ? 'text-lg lg:text-xl' : 'text-base'
                }`}>
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline group-hover:gap-3 transition-all"
                >
                  Leer artículo completo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-gradient-to-r from-primary/5 to-primary/10 p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¿Quieres <span className="gradient-text">más consejos</span> como estos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Suscríbete a nuestra newsletter y recibe cada semana artículos exclusivos para hacer crecer tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Tu email profesional"
                  className="flex-1 max-w-sm px-4 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-primary-foreground transition-all hover:scale-105">
                  Suscribirse gratis
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Sin spam. Cancela cuando quieras. Solo contenido de valor para tu negocio.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
