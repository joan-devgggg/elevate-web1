import { useEffect, useRef } from 'react';

const ConversionTools = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animación de entrada al hacer scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
    
    // Observar las tarjetas
    cardRefs.current.forEach(card => {
      if (card) {
        card.classList.add('card-initial');
        observer.observe(card);
      }
    });
    
    return () => observer.disconnect();
  }, []);

  const handleCTAClick = () => {
    // Aquí puedes agregar la acción que quieras
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
  };

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Título y Subtítulo */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Herramientas que convierten visitas en clientes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No solo creamos tu web, la optimizamos para que genere contactos reales y aumente tus ventas.
          </p>
        </div>
        
        {/* Grid de Tarjetas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* BLOQUE 1 - BOTÓN DE WHATSAPP */}
          <div 
            ref={el => cardRefs.current[0] = el}
            className="card-hover bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            {/* Icono y Título */}
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#25D366'}}>
                <i className="fab fa-whatsapp text-white text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Convierte visitas en clientes en segundos
              </h2>
            </div>
            
            {/* Texto descriptivo */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Añadimos un botón flotante de WhatsApp para que tus clientes puedan contactarte al instante de forma rápida y sencilla.
            </p>
            
            {/* Características */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                <span className="text-gray-700">Botón visible en toda la web</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                <span className="text-gray-700">Contacto directo e inmediato</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                <span className="text-gray-700">Mejora la conversión de visitas a clientes</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                <span className="text-gray-700">Configuración personalizada del mensaje inicial</span>
              </li>
            </ul>
            
            {/* Microcopy destacado */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-green-800 font-semibold flex items-center">
                <i className="fas fa-bolt text-green-600 mr-2"></i>
                Tus clientes te escriben en segundos
              </p>
            </div>
          </div>
          
          {/* BLOQUE 2 - ASISTENTE DE IA */}
          <div 
            ref={el => cardRefs.current[1] = el}
            className="card-hover bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            {/* Icono y Título */}
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mr-4 bg-gradient-to-r from-blue-500 to-purple-600">
                <i className="fas fa-robot text-white text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Responde automáticamente y no pierdas clientes
              </h2>
            </div>
            
            {/* Texto descriptivo */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Integramos un asistente automático que responde preguntas frecuentes y guía a tus visitantes incluso cuando no estás disponible.
            </p>
            
            {/* Características */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mt-1 mr-3 flex-shrink-0"></i>
                <span className="text-gray-700">Respuestas automáticas a dudas comunes</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mt-1 mr-3 flex-shrink-0"></i>
                <span className="text-gray-700">Disponible 24/7</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mt-1 mr-3 flex-shrink-0"></i>
                <span className="text-gray-700">Mejora la experiencia del usuario</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mt-1 mr-3 flex-shrink-0"></i>
                <span className="text-gray-700">Filtra clientes interesados antes del contacto</span>
              </li>
            </ul>
            
            {/* Microcopy destacado */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-800 font-semibold flex items-center">
                <i className="fas fa-shield-alt text-blue-600 mr-2"></i>
                Nunca pierdas un cliente por no responder a tiempo
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA FINAL */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Convierte tu web en una herramienta para conseguir clientes
          </h3>
          <button 
            onClick={handleCTAClick}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Quiero mejorar mi web
          </button>
        </div>
      </div>

      <style>{`
        .card-initial {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default ConversionTools;
