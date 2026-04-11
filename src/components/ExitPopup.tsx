import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Gift, ArrowRight } from 'lucide-react';

const ExitPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Verificar si ya se mostró alguna vez
    if (localStorage.getItem('popupMostrado')) {
      return;
    }

    // Mostrar popup después de 20 segundos
    const timer = setTimeout(() => {
      if (!hasShown) {
        showPopup();
      }
    }, 20000);

    const showPopup = () => {
      setIsVisible(true);
      setHasShown(true);
      localStorage.setItem('popupMostrado', 'true');
    };

    return () => {
      clearTimeout(timer);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('popupMostrado', 'true');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/34644610120?text=Hola%2C%20quiero%20ver%20mi%20web%20gratis', '_blank');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          data-popup-active="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative bg-white rounded-2xl border border-gray-200 shadow-xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Cerrar popup"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Contenido */}
            <div className="text-center mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full gradient-bg mb-4 mx-auto">
                <Gift className="h-6 w-6 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Te diseñamos una web pensada para conseguirte clientes (gratis)
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Valorado en 150€. Solo pagas si te convence.
              </p>

            </div>

            {/* Botones de acción */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-full gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Quiero ver mi web gratis
              </button>
              
              <button
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 px-6 py-3 text-base font-medium transition-all"
              >
                Prefiero verlo más tarde
              </button>
            </div>

            {/* Texto de confianza */}
            <p className="text-sm text-gray-500 text-center mt-6">
              Sin riesgo. Si no te gusta, no pagas nada.
            </p>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitPopup;
