import { motion } from "framer-motion";
import { AlertTriangle, Timer, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  const [spotsLeft, setSpotsLeft] = useState(3);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Mostrar barra tras scroll > 300px
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Mostrar barra tras 12 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 12000);

    // Simular que alguien reserva una plaza cada 30 segundos
    const spotTimer = setInterval(() => {
      setSpotsLeft(prev => {
        if (prev > 1) return prev - 1;
        return prev;
      });
    }, 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      clearInterval(spotTimer);
    };
  }, []);

  const formatTime = (hours, minutes, seconds) => {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white z-50 ${
        isVisible ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 px-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 animate-pulse" />
              <span className="font-bold text-lg">⚠️ Solo 3 plazas disponibles esta semana</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-white/30" />
          </div>
          
          <div className="flex items-center gap-4">
          </div>
        </div>
      </div>

      {/* Efecto de partículas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-white/20 rounded-full animate-ping" />
        <div className="absolute top-1/2 -left-1 w-3 h-3 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 -right-1 w-3 h-3 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
      </div>
    </motion.div>
  );
};

export default UrgencyBanner;
