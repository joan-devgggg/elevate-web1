import { useState, useEffect } from "react";
import WhatsAppIcon from "../assets/WhatsApp.svg.png";

const WHATSAPP_URL = "https://wa.me/34644610120?text=Hola%2C%20quiero%20mi%20demo%20gratuita";

const WhatsAppButton = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Verificar si ya se mostró en esta sesión
    const bubbleShown = sessionStorage.getItem('whatsappBubbleShown');
    
    if (!bubbleShown) {
      // Mostrar bubble después de 2 segundos
      const timer = setTimeout(() => {
        setShowBubble(true);
        sessionStorage.setItem('whatsappBubbleShown', 'true');
        
        // Ocultar automáticamente después de 4.5 segundos
        setTimeout(() => {
          setShowBubble(false);
        }, 4500);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Bubble tipo chat */}
      {showBubble && (
        <div className="absolute bottom-20 right-0 bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-lg border border-gray-100 whitespace-nowrap animate-slide-fade" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          {/* Mensaje principal */}
          <div className="text-base font-semibold text-gray-900 mb-1">
            ¿Quieres tu demo gratuita?
          </div>
          
          {/* Subtítulo - responsive */}
          <div className="text-xs text-gray-600 hidden md:block">
            Te la enseño en 2 min por WhatsApp
          </div>
          <div className="text-xs text-gray-600 md:hidden">
            Te la enseño en 2 min
          </div>
          
          {/* Flechita apuntando al botón */}
          <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
        </div>
      )}
      
      {/* Botón limpio y profesional */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowBubble(false)}
        className="flex h-14 w-14 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-105 animate-pulse-slow"
        style={{
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          width: '56px',
          height: '56px'
        }}
        aria-label="Contactar por WhatsApp"
      >
        <img src={WhatsAppIcon} alt="WhatsApp" className="w-8 h-8" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
