import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: number;
  type: 'bot' | 'user';
  text: string;
  options?: string[];
  whatsapp?: boolean;
}

interface ConversationState {
  tipo_negocio?: string;
  situacion_actual?: string;
  tiene_web?: boolean;
  nivel_interes: 'bajo' | 'medio' | 'alto';
  respuestas_rapidas: number;
  tiempo_inactividad: number;
  ultima_interaccion: number;
  momento_intencion?: 'ya' | 'valorando';
  tipo_cliente?: 'basico' | 'completo';
  nombre_negocio?: string;
  objetivo?: string;
  // MEMORIA DE CONVERSACIÓN
  ya_ofrecio_ejemplo?: boolean;
  ya_ofrecio_whatsapp?: boolean;
  ya_ofrecio_llamada?: boolean;
  ultima_intencion_usuario?: string;
  numero_interacciones?: number;
  ultimo_mensaje_bot?: string;
  momento_conversacion?: 'inicio' | 'cualificacion' | 'cierre' | 'saturacion';
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  // ESTADO AVANZADO DE CONVERSACIÓN (MEMORIA INTELIGENTE)
  const [conversationState, setConversationState] = useState<ConversationState>({
    nivel_interes: 'bajo',
    respuestas_rapidas: 0,
    tiempo_inactividad: 0,
    ultima_interaccion: Date.now(),
    // MEMORIA DE CONVERSACIÓN
    tipo_negocio: '',
    objetivo: '',
    ya_ofrecio_ejemplo: false,
    ya_ofrecio_whatsapp: false,
    ya_ofrecio_llamada: false,
    ultima_intencion_usuario: '',
    numero_interacciones: 0,
    ultimo_mensaje_bot: '', // Evitar repetición
    momento_conversacion: 'inicio' // inicio, cualificacion, cierre, saturacion
  });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      text: '¿Quieres que te enseñe cómo sería tu web?\n\nPuedo mostrarte un ejemplo real en 1 minuto.',
      options: [
        'Ver ejemplo',
        'Quiero mi web',
        'Tengo dudas'
      ]
    }
  ]);

  // Control de sesión para apertura inteligente
  const [hasOpenedIntelligently, setHasOpenedIntelligently] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // APERTURA INTELIGENTE OPCIONAL (solo si cumple condiciones)
    const intelligentOpenTimer = setTimeout(() => {
      // Solo abrir si:
      // - No está abierto
      // - No se ha abierto antes en esta sesión
      // - Ha hecho scroll
      // - Han pasado 40 segundos
      if (!isOpen && !hasOpenedIntelligently && hasScrolled) {
        // Verificar que no haya popup activo
        const popupExists = document.querySelector('[data-popup-active="true"]');
        if (!popupExists) {
          const intelligentMessage: Message = {
            id: messages.length + 1,
            type: 'bot',
            text: '¿Quieres que te enseñe cómo sería tu web?\n\nPuedo mostrarte un ejemplo real en 1 minuto.',
            options: ['Ver ejemplo', 'Quiero mi web', 'Tengo dudas']
          };
          setMessages(prev => [...prev, intelligentMessage]);
          setIsOpen(true);
          setHasOpenedIntelligently(true);
          trackEvent('intelligent_open');
        }
      }
    }, 40000); // 40 segundos
    
    return () => clearTimeout(intelligentOpenTimer);
  }, [isOpen, hasOpenedIntelligently, hasScrolled, messages.length, trackEvent]);
  
  // DETECCIÓN DE SCROLL PARA APERTURA INTELIGENTE
  useEffect(() => {
    const handleScroll = () => {
      const scrollDepth = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      
      if (scrollDepth > 0.3 && !hasScrolled) { // Scroll 30% = interés
        setHasScrolled(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  // EVITAR CONFLICTOS CON POPUP
  useEffect(() => {
    const checkPopupConflict = () => {
      const popupActive = document.querySelector('[data-popup-active="true"]');
      if (popupActive && isOpen) {
        setIsOpen(false); // Cerrar chat si popup está activo
      }
    };

    // Verificar conflictos cada segundo
    const conflictTimer = setInterval(checkPopupConflict, 1000);
    
    return () => clearInterval(conflictTimer);
  }, [isOpen]);
  
  // EXIT INTENT DETECTION
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && isOpen) { // Ratón saliendo por arriba
        const exitIntentMessage: Message = {
          id: messages.length + 1,
          type: 'bot',
          text: 'Antes de irte, ¿quieres ver un ejemplo real en 1 minuto?',
          options: ['Ver ejemplo', 'WhatsApp']
        };
        setMessages(prev => [...prev, exitIntentMessage]);
        trackEvent('exit_intent');
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, messages.length]);
  
  // PERSONALIZACIÓN AUTOMÁTICA
  useEffect(() => {
    // Detectar tipo_negocio desde URL o localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const savedTipo = localStorage.getItem('tipo_negocio');
    const urlTipo = urlParams.get('tipo');
    
    const detectedTipo = urlTipo || savedTipo;
    
    if (detectedTipo && !conversationState.tipo_negocio) {
      setConversationState(prev => ({ ...prev, tipo_negocio: detectedTipo }));
      // Actualizar mensaje inicial si se detecta tipo
      setMessages(prev => [{
        ...prev[0],
        text: `En 1 minuto te digo cómo conseguir más clientes con tu web de ${detectedTipo} 👇\n\n¿Confirmas que es un ${detectedTipo}?`,
        options: ['Sí, confirmar', 'No, es otro']
      }]);
    }
  }, [conversationState.tipo_negocio]);

  // TRACKING DE EVENTOS
  const trackEvent = useCallback((eventType: string, additionalData?: Record<string, unknown>) => {
    const eventData = {
      event: eventType,
      timestamp: new Date().toISOString(),
      tipo_negocio: conversationState.tipo_negocio,
      nivel_interes: conversationState.nivel_interes,
      ...additionalData
    };
    
    console.log('TRACKING:', eventData);
    // Aquí se podría integrar con Google Analytics, Facebook Pixel, etc.
  }, [conversationState.nivel_interes, conversationState.tipo_negocio]);

  const toggleChat = () => {
    const wasClosed = !isOpen;
    trackEvent(wasClosed ? 'chat_open' : 'chat_close');
    console.log('toggleChat clickeado, isOpen:', isOpen);
    setIsOpen(!isOpen);
  };

  const handleCloseChat = () => {
    console.log('handleCloseChat clickeado');
    setIsOpen(false);
  };

  // DETECCIÓN DE INTENCIÓN EN MENSAJES LIBRES
  const detectarIntencion = (mensaje: string): string => {
    const mensajeLower = mensaje.toLowerCase();
    
    // PRECIO
    if (mensajeLower.includes('cuánto') || mensajeLower.includes('costa') || 
        mensajeLower.includes('precio') || mensajeLower.includes('euros') || 
        mensajeLower.includes('€') || mensajeLower.includes('barato') ||
        mensajeLower.includes('caro')) {
      return 'precio';
    }
    
    // EJEMPLOS
    if (mensajeLower.includes('ejemplo') || mensajeLower.includes('webs') || 
        mensajeLower.includes('ver') || mensajeLower.includes('mostrar') ||
        mensajeLower.includes('caso') || mensajeLower.includes('trabajo')) {
      return 'ejemplos';
    }
    
    // DUDAS
    if (mensajeLower.includes('duda') || mensajeLower.includes('no sé') || 
        mensajeLower.includes('cómo funciona') || mensajeLower.includes('funciona') ||
        mensajeLower.includes('confundido') || mensajeLower.includes('entender')) {
      return 'dudas';
    }
    
    // INTERÉS ALTO
    if (mensajeLower.includes('me interesa') || mensajeLower.includes('quiero') || 
        mensajeLower.includes('necesito') || mensajeLower.includes('urgente') ||
        mensajeLower.includes('ya') || mensajeLower.includes('ahora')) {
      return 'interes_alto';
    }
    
    // GENERAL (fallback)
    return 'general';
  };

  // SISTEMA DE DECISIÓN HUMANA INTELIGENTE (SABER CUÁNDO RESPONDER)
  const tomarDecisionHumana = (mensaje: string): { 
    debeResponder: boolean, 
    tipoRespuesta: string,
    contenido: string,
    nivelInteres: 'frío' | 'tibio' | 'caliente' | 'pasivo',
    debeVender: boolean,
    accionPrincipal: string
  } => {
    const mensajeLower = mensaje.toLowerCase();
    const numInteracciones = conversationState.numero_interacciones || 0;
    const negocio = conversationState.tipo_negocio;
    
    // 1. DETECCIÓN DE NIVEL DE INTERÉS DEL USUARIO
    let nivelInteres: 'frío' | 'tibio' | 'caliente' | 'pasivo' = 'frío';
    let debeVender = false;
    
    // USUARIO FRÍO (saludos, dudas básicas)
    if (mensajeLower === 'hola' || mensajeLower === 'buenas' || 
        mensajeLower.includes('¿qué es') || mensajeLower.includes('información') ||
        mensajeLower.includes('duda') || numInteracciones <= 1) {
      nivelInteres = 'frío';
      debeVender = false; // SOLO informar
    }
    
    // USUARIO TIBIO (interés moderado, preguntas relevantes)
    else if (mensajeLower.includes('cómo funciona') || 
               mensajeLower.includes('cuánto') || 
               mensajeLower.includes('tiempo') ||
               mensajeLower.includes('ejemplo') ||
               numInteracciones === 2) {
      nivelInteres = 'tibio';
      debeVender = true; // explicar + CTA suave
    }
    
    // USUARIO CALIENTE (interés alto, palabras de acción)
    else if (mensajeLower.includes('quiero') || 
               mensajeLower.includes('necesito') || 
               mensajeLower.includes('ya') ||
               mensajeLower.includes('ahora') ||
               mensajeLower.includes('urgente') ||
               numInteracciones >= 3) {
      nivelInteres = 'caliente';
      debeVender = true; // CTA claro
    }
    
    // USUARIO PASIVO (no responde, duda constante)
    else if (mensajeLower.includes('no sé') || 
               mensajeLower.includes('dudo') ||
               mensajeLower.includes('no estoy seguro') ||
               numInteracciones > 4) {
      nivelInteres = 'pasivo';
      debeVender = false; // NO insistir
    }
    
    // 2. ANTI-SPAM DEFINITIVO
    if (conversationState.ya_ofrecio_ejemplo && mensajeLower.includes('ejemplo')) {
      return {
        debeResponder: true,
        tipoRespuesta: 'ya_tratado',
        contenido: 'Ya te mostré cómo sería, si quieres avanzar me dices 👍',
        nivelInteres: 'pasivo',
        debeVender: false,
        accionPrincipal: 'esperar'
      };
    }
    
    if (conversationState.ya_ofrecio_whatsapp && mensajeLower.includes('whatsapp')) {
      return {
        debeResponder: true,
        tipoRespuesta: 'ya_tratado',
        contenido: 'Ya te dejé el enlace de WhatsApp, si no te funciona me avisas 👍',
        nivelInteres: 'pasivo',
        debeVender: false,
        accionPrincipal: 'esperar'
      };
    }
    
    // 3. DECISIÓN SEGÚN NIVEL DE INTERÉS
    let accionPrincipal = '';
    let contenido = '';
    
    switch (nivelInteres) {
      case 'frío':
        accionPrincipal = 'informar';
        contenido = negocio 
          ? `Te explico cómo funciona para tu ${negocio.toLowerCase()} 👍\n\nPrimero entendemos lo que necesitas, luego diseñamos y lanzamos.\n\nTú te encargas de tu negocio, nosotros de la web.`
          : 'Te explico cómo funciona 👍\n\nPrimero entendemos lo que necesitas, luego diseñamos y lanzamos.\n\nTú te encargas de tu negocio, nosotros de la web.';
        break;
        
      case 'tibio':
        accionPrincipal = 'explicar';
        contenido = negocio
          ? `Para tu ${negocio.toLowerCase()} podemos hacer algo bastante bueno 👍\n\nTe atraería clientes de forma constante y te ahorraría tiempo gestionando reservas/contactos.`
          : 'Podemos hacer algo bastante bueno 👍\n\nTe atraería clientes de forma constante y te ahorraría tiempo gestionando contactos.';
        break;
        
      case 'caliente':
        accionPrincipal = 'vender';
        contenido = negocio
          ? `Tu ${negocio.toLowerCase()} tiene muy buena pinta 👌\n\nSi quieres, te enseño un ejemplo real y lo ves claro en 1 minuto.`
          : 'Tiene muy buena pinta tu caso 👌\n\nSi quieres, te enseño un ejemplo real y lo ves claro en 1 minuto.';
        break;
        
      case 'pasivo':
        accionPrincipal = 'ayudar';
        contenido = 'Cuéntame, ¿qué es lo que más te preocupa de tu web actual? 👍';
        break;
    }
    
    return {
      debeResponder: true,
      tipoRespuesta: nivelInteres,
      contenido,
      nivelInteres,
      debeVender,
      accionPrincipal
    };
  };
  const getRespuestaInteligente = (mensaje: string): Message | null => {
    const mensajeLower = mensaje.toLowerCase();
    const negocio = conversationState.tipo_negocio;
    const numInteracciones = conversationState.numero_interacciones || 0;
    
    // 1. RESPUESTAS ESPECÍFICAS A PREGUNTAS CONCRETAS
    
    // FINANCIACIÓN
    if (mensajeLower.includes('financiable') || mensajeLower.includes('financiar') || 
        mensajeLower.includes('pago') || mensajeLower.includes('inversión')) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: 'Sí 👍\n\nSe puede adaptar bastante según lo que necesites.\n\nHay opciones de empezar con una inversión más baja y luego pagar una parte mensual, para que no tengas que hacer un pago grande al inicio.\n\nSi quieres, dime qué tipo de negocio tienes y te digo cómo sería en tu caso exacto.',
        options: negocio ? [] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
      } as Message;
    }
    
    // PRECIOS
    if (mensajeLower.includes('precio') || mensajeLower.includes('cuánto cuesta') || 
        mensajeLower.includes('cuánto vale') || mensajeLower.includes('costo') ||
        mensajeLower.includes('tarifa') || mensajeLower.includes('€') || mensajeLower.includes('euros')) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: negocio
          ? `Para tu ${negocio.toLowerCase()} hay varias opciones 👍\n\n🔹 Plan Presencia: 65€/mes (sin pago inicial)\n🔹 Plan Clientes: 350€ inicial + 55€/mes\n🔹 Plan Crecimiento: 700€ inicial + 95€/mes\n\nDepende de lo que necesites: más clientes, reservas online, tienda...\n\n¿Qué es lo más importante para ti?`
          : 'Hay varios planes según lo que necesites 👍\n\n🔹 Plan Presencia: 65€/mes (sin pago inicial)\n🔹 Plan Clientes: 350€ inicial + 55€/mes\n🔹 Plan Crecimiento: 700€ inicial + 95€/mes\n\nCada plan incluye diferentes funcionalidades.\n\n¿Qué tipo de negocio tienes?',
        options: negocio ? ['Ver diferencias', 'Elegir plan', 'WhatsApp'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
      } as Message;
    }
    
    // PLANES
    if (mensajeLower.includes('plan') || mensajeLower.includes('planes') || 
        mensajeLower.includes('opciones') || mensajeLower.includes('versiones') ||
        mensajeLower.includes('modalidades')) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: negocio
          ? `Te explico los planes para tu ${negocio.toLowerCase()} 👍\n\n🔹 PRESENCIA (65€/mes): Web profesional + hosting + mantenimiento\n🔹 CLIENTES (350€ inicial + 55€/mes): Web personalizada para conseguir clientes\n🔹 CRECIMIENTO (700€ inicial + 95€/mes): Optimización continua y análisis\n\n¿Qué incluye te interesa más?`
          : 'Te explico los planes disponibles 👍\n\n🔹 PRESENCIA (65€/mes): Web profesional + hosting + mantenimiento\n🔹 CLIENTES (350€ inicial + 55€/mes): Web personalizada para conseguir clientes\n🔹 CRECIMIENTO (700€ inicial + 95€/mes): Optimización continua y análisis\n\n¿Qué tipo de negocio tienes?',
        options: negocio ? ['Ver Presencia', 'Ver Clientes', 'Ver Crecimiento'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
      } as Message;
    }
    
    // ¿QUÉ INCLUYE?
    if (mensajeLower.includes('qué incluye') || mensajeLower.includes('qué lleva') || 
        mensajeLower.includes('incluye') || mensajeLower.includes('contiene')) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: negocio
          ? `Para tu ${negocio.toLowerCase()} incluye todo lo necesario 👍\n\n✅ Diseño profesional\n✅ Web adaptada a móviles\n✅ Posicionamiento en Google\n✅ Formulario de contacto\n✅ Mapa de ubicación\n✅ Soporte técnico\n\nSegún el plan, también incluye reservas, tienda online, etc.\n\n¿Quieres ver ejemplo de ${negocio.toLowerCase()}?`
          : 'Incluye todo lo necesario para que funcione bien 👍\n\n✅ Diseño profesional\n✅ Web adaptada a móviles\n✅ Posicionamiento en Google\n✅ Formulario de contacto\n✅ Mapa de ubicación\n✅ Soporte técnico\n\n¿Qué tipo de negocio tienes?',
        options: negocio ? ['Ver ejemplo', 'Más detalles', 'WhatsApp'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
      } as Message;
    }
    
    // SALUDO INICIAL
    if (mensajeLower === 'hola' || mensajeLower === 'buenas' || 
        mensajeLower === 'buenos días' || mensajeLower === 'buenas tardes') {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: negocio 
          ? `¡Buenas! 👋\n\nVeo que tienes un ${negocio.toLowerCase()}. Cuéntame, ¿qué necesitas mejorar exactamente?\n\nAsí te explico cómo sería la web en tu caso y cómo te ayudaría a conseguir más clientes.`
          : '¡Buenas! 👋\n\nCuéntame, ¿qué tipo de negocio tienes?\n\nAsí te explico cómo sería la web en tu caso y cómo te ayudaría a conseguir más clientes.',
        options: negocio ? ['Conseguir clientes', 'Mejorar imagen', 'Reservas/citas'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
      } as Message;
    }
    
    // RECHAZO DIRECTO
    if (mensajeLower.includes('no me interesa') || mensajeLower.includes('no gracias') || 
        mensajeLower.includes('no quiero') || mensajeLower.includes('no, gracias')) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: 'Sin problema 👍\n\nSi en algún momento quieres mejorar la web o conseguir más clientes, aquí estoy.',
        options: []
      } as Message;
    }
    
    // 2. RESPUESTAS PERSONALIZADAS POR TIPO DE NEGOCIO
    
    // RESTAURANTE
    if (mensajeLower.includes('restaurante') || mensajeLower.includes('bar') || 
        mensajeLower.includes('cafetería') || mensajeLower.includes('comida')) {
      if (!negocio) {
        setConversationState(prev => ({ ...prev, tipo_negocio: 'Restaurante' }));
      }
      return {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nPara un restaurante, lo más potente es una web donde puedan ver la carta online, hacer reservas fácilmente y atraer clientes de la zona.\n\nAsí dejas de depender solo de redes sociales y tienes un canal propio de clientes.\n\n¿Quieres ver cómo funcionaría la reserva online?',
        options: ['Ver reservas', 'Ver carta', 'WhatsApp']
      } as Message;
    }
    
    // CLÍNICA
    if (mensajeLower.includes('clínica') || mensajeLower.includes('médico') || 
        mensajeLower.includes('dentista') || mensajeLower.includes('consulta')) {
      if (!negocio) {
        setConversationState(prev => ({ ...prev, tipo_negocio: 'Clínica' }));
      }
      return {
        id: messages.length + 2,
        type: 'bot',
        text: 'Entendido 👍\n\nPara una clínica, lo clave es generar confianza desde el primer momento y que los pacientes puedan pedir cita fácilmente sin llamar.\n\nUna web bien hecha ahí marca muchísima diferencia en conseguir nuevos pacientes.\n\n¿Te interesa ver cómo funcionaría el sistema de citas?',
        options: ['Ver citas', 'Ver confianza', 'WhatsApp']
      } as Message;
    }
    
    // TIENDA
    if (mensajeLower.includes('tienda') || mensajeLower.includes('ecommerce') || 
        mensajeLower.includes('vender') || mensajeLower.includes('productos')) {
      if (!negocio) {
        setConversationState(prev => ({ ...prev, tipo_negocio: 'Tienda' }));
      }
      return {
        id: messages.length + 2,
        type: 'bot',
        text: 'Claro 👌\n\nPara una tienda, lo importante es mostrar bien los productos, facilitar la compra online y que te encuentren fácilmente en Google.\n\nAsí no pierdes clientes que ya están buscando lo que vendes.\n\n¿Quieres ver cómo se verían tus productos?',
        options: ['Ver productos', 'Ver compra online', 'WhatsApp']
      } as Message;
    }
    
    // SERVICIOS
    if (mensajeLower.includes('servicios') || mensajeLower.includes('consultoría') || 
        mensajeLower.includes('profesional') || mensajeLower.includes('freelance')) {
      if (!negocio) {
        setConversationState(prev => ({ ...prev, tipo_negocio: 'Servicios' }));
      }
      return {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nPara negocios de servicios, lo clave es explicar bien lo que haces, mostrar casos de éxito y que te contacten fácilmente.\n\nUna buena web ahí convierte mucho más que cualquier red social.\n\n¿Quieres ver cómo funcionaría el contacto?',
        options: ['Ver contacto', 'Ver casos', 'WhatsApp']
      } as Message;
    }
    
    // 3. RESPUESTAS A DUDAS COMUNES
    
    // ¿PARA QUÉ SIRVE?
    if (mensajeLower.includes('para qué sirve') || mensajeLower.includes('qué hace') || 
        mensajeLower.includes('para qué es') || mensajeLower.includes('funcionalidad')) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: negocio
          ? `Para tu ${negocio.toLowerCase()} sirve para conseguir más clientes 👍\n\n✅ Aparecer en Google cuando te buscan\n✅ Mostrar tu información profesionalmente\n✅ Facilitar que te contacten o reserven\n✅ Vender productos o servicios online\n\nAsí dejas de depender solo de redes sociales.\n\n¿Qué necesitas conseguir principalmente?`
          : 'Sirve para conseguir más clientes para tu negocio 👍\n\n✅ Aparecer en Google cuando te buscan\n✅ Mostrar tu información profesionalmente\n✅ Facilitar que te contacten o reserven\n✅ Vender productos o servicios online\n\n¿Qué tipo de negocio tienes?',
        options: negocio ? ['Más clientes', 'Vender online', 'Mejorar imagen'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
      } as Message;
    }
    
    // ¿QUÉ NECESITO?
    if (mensajeLower.includes('qué necesito') || mensajeLower.includes('qué hace falta') || 
        mensajeLower.includes('requisitos') || mensajeLower.includes('qué se necesita')) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: 'Solo necesitas decirme qué quieres conseguir 👍\n\nYo me encargo de todo lo técnico:\n\n✅ Diseño de la web\n✅ Programación\n✅ Posicionamiento en Google\n✅ Soporte y mantenimiento\n\nTú solo me das tu información y logos.\n\n¿Qué tipo de negocio tienes?',
        options: negocio ? ['Empezar ya', 'Ver proceso', 'WhatsApp'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
      } as Message;
    }
    
    // ¿ES PARA MÍ?
    if (mensajeLower.includes('es para mí') || mensajeLower.includes('me sirve') || 
        mensajeLower.includes('funciona para mí') || mensajeLower.includes('es mi caso')) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: negocio
          ? `Sí, es perfecto para tu ${negocio.toLowerCase()} 👍\n\nEstá pensado para negocios como el tuyo que necesitan:\n\n✅ Más visibilidad online\n✅ Captar clientes locales\n✅ Profesionalizar su imagen\n✅ Automatizar reservas/ventas\n\n¿Qué de estos necesitas más urgente?`
          : 'Sí, funciona para prácticamente cualquier tipo de negocio 👍\n\nDesde restaurantes y clínicas hasta tiendas y servicios profesionales.\n\n¿Qué tipo de negocio tienes y te digo cómo sería en tu caso?',
        options: negocio ? ['Más visibilidad', 'Más clientes', 'Automatizar'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
      } as Message;
    }
    
    // ¿HACÉIS TODO?
    if (mensajeLower.includes('hacéis todo') || mensajeLower.includes('incluye todo') || 
        mensajeLower.includes('es completo') || mensajeLower.includes('todo incluido')) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: 'Sí, me encargo de todo lo técnico 👍\n\n✅ Diseño web completo\n✅ Programación y funcionalidades\n✅ Posicionamiento SEO\n✅ Fotos y textos profesionales\n✅ Soporte técnico\n✅ Actualizaciones\n\nTú solo te preocupas de tu negocio.\n\n¿Quieres ver ejemplos de webs que he hecho?',
        options: negocio ? ['Ver ejemplos', 'Empezar', 'WhatsApp'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
      } as Message;
    }
    
    // SOPORTE Y MANTENIMIENTO
    if (mensajeLower.includes('soporte') || mensajeLower.includes('mantenimiento') || 
        mensajeLower.includes('ayuda') || mensajeLower.includes('garantía')) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: negocio
          ? `Para tu ${negocio.toLowerCase()} incluyo soporte completo 👍\n\n✅ Ayuda técnica 24/7\n✅ Actualizaciones constantes\n✅ Copias de seguridad\n✅ Cambios y mejoras\n\nNunca te dejo solo con tu web.\n\n¿Qué tipo de soporte necesitas?`
          : 'Incluyo soporte técnico completo para todos los planes 👍\n\n✅ Ayuda técnica 24/7\n✅ Actualizaciones constantes\n✅ Copias de seguridad\n✅ Cambios y mejoras\n\n¿Qué tipo de negocio tienes?',
        options: negocio ? ['Ver soporte', 'Empezar', 'WhatsApp'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
      } as Message;
    }
    
    // ¿ES FÁCIL USAR?
    if (mensajeLower.includes('fácil') || mensajeLower.includes('difícil') || 
        mensajeLower.includes('complicado') || mensajeLower.includes('sé usar')) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: negocio
          ? `Es súper fácil para tu ${negocio.toLowerCase()} 👍\n\n✅ Panel de control intuitivo\n✅ Actualizaciones con 1 clic\n\nYo me encargo de todo lo técnico.\n\nTú solo subes tus productos o cambias textos cuando quieras.\n\n¿Quieres ver cómo funciona el panel?`
          : 'Es súper fácil de usar 👍\n\n✅ Panel de control intuitivo\n✅ Actualizaciones con 1 clic\n\nYo me encargo de todo lo técnico.\n\nTú solo subes tu información cuando quieras.\n\n¿Qué tipo de negocio tienes?',
        options: negocio ? ['Ver panel', 'Probar gratis', 'WhatsApp'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
      } as Message;
    }
    
    // ¿FUNCIONA EN MÓVILES?
    if (mensajeLower.includes('móvil') || mensajeLower.includes('móviles') || 
        mensajeLower.includes('celular') || mensajeLower.includes('responsive') ||
        mensajeLower.includes('adaptada')) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: negocio
          ? `Sí, tu web para ${negocio.toLowerCase()} se ve perfecta en móviles 👍\n\n✅ Diseño 100% adaptado\n✅ Fácil de usar con el dedo\n✅ Carga rápida en móviles\n✅ Funciona en cualquier dispositivo\n\nLa mayoría de tus clientes te buscarán desde el móvil.\n\n¿Quieres ver ejemplo móvil?`
          : 'Sí, todas las webs se ven perfectas en móviles 👍\n\n✅ Diseño 100% adaptado\n✅ Fácil de usar con el dedo\n✅ Carga rápida en móviles\n✅ Funciona en cualquier dispositivo\n\n¿Qué tipo de negocio tienes?',
        options: negocio ? ['Ver ejemplo móvil', 'Empezar', 'WhatsApp'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
      } as Message;
    }
    
    // ¿APAREZCO EN GOOGLE?
    if (mensajeLower.includes('google') || mensajeLower.includes('posicionamiento') || 
        mensajeLower.includes('seo') || mensajeLower.includes('buscar') ||
        mensajeLower.includes('encontrar')) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: negocio
          ? `Sí, tu ${negocio.toLowerCase()} aparecerá en Google 👍\n\n✅ Posicionamiento SEO incluido\n✅ Palabras clave de tu sector\n✅ Búsqueda local en tu zona\n✅ Mapa de Google Maps\n\nAsí te encuentran clientes que buscan exactamente lo que ofreces.\n\n¿Quieres ver ejemplo de posicionamiento?`
          : 'Sí, tu negocio aparecerá en Google 👍\n\n✅ Posicionamiento SEO incluido\n✅ Palabras clave de tu sector\n✅ Búsqueda local en tu zona\n✅ Mapa de Google Maps\n\n¿Qué tipo de negocio tienes?',
        options: negocio ? ['Ver posicionamiento', 'Empezar', 'WhatsApp'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
      } as Message;
    }
    
    // 4. RESPUESTA UNIVERSAL (SIN FRASES VACÍAS)
    return {
      id: messages.length + 2,
      type: 'bot',
      text: negocio
        ? `Te entiendo 👍\n\nPuedo ayudarte a conseguir más clientes con una web bien hecha para tu ${negocio.toLowerCase()}.\n\nCuéntame qué es lo que más te gustaría mejorar y te explico cómo sería exactamente en tu caso.`
        : 'Te entiendo 👍\n\nPuedo ayudarte a conseguir más clientes con una web bien hecha.\n\nCuéntame qué tipo de negocio tienes y te explico cómo sería exactamente en tu caso.',
      options: negocio ? ['Conseguir clientes', 'Mejorar imagen', 'Más ventas'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
    } as Message;
  };
  const getRespuestaLibre = (mensaje: string): Message | null => {
    const intencion = detectarIntencion(mensaje);
    const negocio = conversationState.tipo_negocio;
    
    switch (intencion) {
      case 'precio':
        return {
          id: messages.length + 2,
          type: 'bot',
          text: negocio
            ? `Buena pregunta 👍\n\nDepende de lo que necesites, pero hay opciones desde 79€/mes.\n\nLa idea es que la web te genere clientes, no que sea un gasto.\n\n¿Quieres ver un ejemplo para tu ${negocio.toLowerCase()}?`
            : 'Buena pregunta 👍\n\nDepende de lo que necesites, pero hay opciones desde 79€/mes.\n\nLa idea es que la web te genere clientes, no que sea un gasto.\n\n¿Tu negocio es más tipo restaurante, clínica o algo diferente?',
          options: negocio ? ['Ver ejemplo', 'WhatsApp'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios']
        } as Message;
        
      case 'ejemplos':
        return {
          id: messages.length + 2,
          type: 'bot',
          text: negocio
            ? `Claro 👌\n\nTengo ejemplos reales de ${negocio.toLowerCase()} y encajarían bastante bien para ti.\n\nSi quieres, te enseño uno en 1 minuto.`
            : 'Claro 👌\n\nTengo ejemplos reales según el tipo de negocio.\n\nPara el tuyo encajaría algo así bastante bien.\n\nSi quieres, te enseño uno en 1 minuto.',
          options: ['Ver por WhatsApp', 'Prefiero llamada']
        } as Message;
        
      case 'dudas':
        return {
          id: messages.length + 2,
          type: 'bot',
          text: negocio
            ? `Es normal tener dudas 👍\n\nLa idea es que tú no tengas que preocuparte de nada, nosotros nos encargamos.\n\nEsto en tu caso encajaría bastante bien 👌\n\nSi quieres, te enseño un ejemplo y lo ves más claro.`
            : 'Es normal tener dudas 👍\n\nLa idea es que tú no tengas que preocuparte de nada, nosotros nos encargamos.\n\nSi quieres, te enseño un ejemplo y lo ves más claro.',
          options: ['Ver ejemplo', 'WhatsApp']
        } as Message;
        
      case 'interes_alto':
        return {
          id: messages.length + 2,
          type: 'bot',
          text: negocio
            ? `Perfecto 🙌\n\nTiene muy buena pinta tu ${negocio.toLowerCase()}.\n\nTe enseño un ejemplo en 1 minuto y lo ves claro.\n\n¿Prefieres WhatsApp o llamada?`
            : 'Perfecto 🙌\n\nTiene muy buena pinta tu caso.\n\nTe enseño un ejemplo en 1 minuto y lo ves claro.\n\n¿Prefieres WhatsApp o llamada?',
          options: ['WhatsApp', 'Llamada']
        } as Message;
        
      case 'general':
      default:
        return {
          id: messages.length + 2,
          type: 'bot',
          text: negocio
            ? `Te entiendo 👍\n\nLa idea es ayudarte a conseguir más clientes con una web sin complicaciones.\n\nPara tu ${negocio.toLowerCase()} puede encajar muy bien.\n\n¿Quieres que te enseñe un ejemplo?`
            : 'Te entiendo 👍\n\nLa idea es ayudarte a conseguir más clientes con una web sin complicaciones.\n\nSi quieres, dime qué tipo de negocio tienes y te digo cómo sería en tu caso.',
          options: negocio ? ['Ver ejemplo', 'WhatsApp'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
        } as Message;
    }
  };
  const detectarInteres = (respuesta: string, tiempoRespuesta: number) => {
    const palabrasClaveAlto = ['me interesa', 'quiero', 'vale', 'perfecto', 'genial', 'sí', 'ok'];
    const palabrasClaveBajo = ['duda', 'no sé', 'quizás', 'tal vez', 'pensando'];
    
    const respuestaLower = respuesta.toLowerCase();
    const tieneInteresAlto = palabrasClaveAlto.some(palabra => respuestaLower.includes(palabra));
    const tieneInteresBajo = palabrasClaveBajo.some(palabra => respuestaLower.includes(palabra));
    const respuestaRapida = tiempoRespuesta < 3000; // Menos de 3 segundos
    
    if (tieneInteresAlto || respuestaRapida) {
      return 'alto';
    } else if (tieneInteresBajo) {
      return 'bajo';
    } else {
      return 'medio';
    }
  };

  const handleOptionClick = (option: string) => {
    const tiempoRespuesta = Date.now() - conversationState.ultima_interaccion;
    const interesDetectado = detectarInteres(option, tiempoRespuesta);
    
    // ACTUALIZAR MEMORIA DE CONVERSACIÓN
    const nuevoNumeroInteracciones = (conversationState.numero_interacciones || 0) + 1;
    
    // REGISTRAR QUÉ SE HA OFRECIDO
    const actualizaEstado: ConversationState = {
      ...conversationState,
      respuestas_rapidas: conversationState.respuestas_rapidas + 1,
      nivel_interes: interesDetectado,
      ultima_interaccion: Date.now(),
      numero_interacciones: nuevoNumeroInteracciones,
      ultima_intencion_usuario: option
    };
    
    // ACTUALIZAR MEMORIA DE CTA OFRECIDOS
    if (option.includes('ejemplo')) {
      actualizaEstado.ya_ofrecio_ejemplo = true;
      actualizaEstado.momento_conversacion = 'cierre';
    }
    if (option.includes('WhatsApp')) {
      actualizaEstado.ya_ofrecio_whatsapp = true;
      actualizaEstado.momento_conversacion = 'cierre';
    }
    if (option.includes('llamada')) {
      actualizaEstado.ya_ofrecio_llamada = true;
      actualizaEstado.momento_conversacion = 'cierre';
    }
    
    setConversationState(actualizaEstado);
    
    // TRACKING MEJORADO
    trackEvent('user_response', { 
      option, 
      response_time: tiempoRespuesta, 
      detected_interest: interesDetectado,
      message_type: 'button',
      numero_interacciones: nuevoNumeroInteracciones,
      momento_conversacion: actualizaEstado.momento_conversacion
    });

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      text: option
    };

    setMessages(prev => [...prev, userMessage]);

    // USAR SISTEMA DE DECISIÓN HUMANA
    const decision = tomarDecisionHumana(option);
    const negocio = conversationState.tipo_negocio;
    
    if (!decision.debeResponder) {
      return; // No responder si el sistema lo dice
    }
    
    // Simular respuesta del bot con delay humano
    const delay = Math.random() * 1000 + 500; // 500-1500ms
    setTimeout(() => {
      let botResponse: Message | null = null;
      
      // RESPUESTA SEGÚN DECISIÓN INTELIGENTE
      switch (decision.tipoRespuesta) {
        case 'saturacion':
          botResponse = {
            id: messages.length + 2,
            type: 'bot',
            text: decision.contenido,
            options: []
          } as Message;
          break;
          
        case 'despedida':
          botResponse = {
            id: messages.length + 2,
            type: 'bot',
            text: decision.contenido,
            options: []
          } as Message;
          break;
          
        case 'ya_ofrecido':
          botResponse = {
            id: messages.length + 2,
            type: 'bot',
            text: decision.contenido,
            options: ['Seguir', 'No gracias']
          } as Message;
          break;
          
        default:
          botResponse = getBotResponse(option);
      }
      
      if (botResponse) {
        setMessages(prev => [...prev, botResponse]);
        
        // GUARDAR ÚLTIMO MENSAJE DEL BOT PARA EVITAR REPETICIÓN
        setConversationState(prev => ({
          ...prev,
          ultimo_mensaje_bot: botResponse.text
        }));
      }
    }, delay);
  };
  
  // MANEJAR MENSAJES ESCRITOS (INPUT LIBRE) CON SISTEMA INTELIGENTE
  const handleSendMessage = () => {
    if (!message.trim()) return; // No enviar mensajes vacíos
    
    const tiempoRespuesta = Date.now() - conversationState.ultima_interaccion;
    const interesDetectado = detectarInteres(message, tiempoRespuesta);
    
    // ACTUALIZAR MEMORIA DE CONVERSACIÓN
    const nuevoNumeroInteracciones = (conversationState.numero_interacciones || 0) + 1;
    
    const actualizaEstado: ConversationState = {
      ...conversationState,
      respuestas_rapidas: conversationState.respuestas_rapidas + 1,
      nivel_interes: interesDetectado,
      ultima_interaccion: Date.now(),
      numero_interacciones: nuevoNumeroInteracciones,
      ultima_intencion_usuario: message
    };
    
    setConversationState(actualizaEstado);
    
    // TRACKING MEJORADO
    trackEvent('user_message', { 
      message: message.substring(0, 50), // Primeros 50 caracteres
      response_time: tiempoRespuesta, 
      detected_interest: interesDetectado,
      message_type: 'text',
      intent: detectarIntencion(message),
      numero_interacciones: nuevoNumeroInteracciones,
      momento_conversacion: actualizaEstado.momento_conversacion
    });

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      text: message
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage(''); // Limpiar input

    // USAR SISTEMA DE DECISIÓN HUMANA
    const decision = tomarDecisionHumana(message);
    const negocio = conversationState.tipo_negocio;
    
    if (!decision.debeResponder) {
      return; // No responder si el sistema lo dice
    }
    
    // Simular respuesta del bot con delay humano
    const delay = Math.random() * 1000 + 500; // 500-1500ms
    setTimeout(() => {
      let botResponse: Message | null = null;
      
      // RESPUESTA SEGÚN DECISIÓN HUMANA (UNA SOLA ACCIÓN)
      switch (decision.tipoRespuesta) {
        case 'ya_tratado':
          botResponse = {
            id: messages.length + 2,
            type: 'bot',
            text: decision.contenido,
            options: [] // SIN CTA adicionales
          } as Message;
          break;
          
        case 'pasivo':
          botResponse = {
            id: messages.length + 2,
            type: 'bot',
            text: decision.contenido,
            options: [] // NO insistir
          } as Message;
          break;
          
        case 'frío':
          botResponse = {
            id: messages.length + 2,
            type: 'bot',
            text: decision.contenido,
            options: negocio ? ['Conseguir clientes', 'Mejorar imagen', 'Más ventas'] : ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro']
          } as Message;
          break;
          
        case 'tibio':
          botResponse = {
            id: messages.length + 2,
            type: 'bot',
            text: decision.contenido,
            options: ['Ver ejemplo'] // UN SOLO CTA suave
          } as Message;
          break;
          
        case 'caliente':
          botResponse = {
            id: messages.length + 2,
            type: 'bot',
            text: decision.contenido,
            options: ['Ver por WhatsApp', 'Prefiero llamada'] // CTA claro y directo
          } as Message;
          break;
          
        default:
          // USAR SISTEMA INTELIGENTE COMO FALLBACK
          botResponse = getRespuestaInteligente(message);
      }
      
      if (botResponse) {
        setMessages(prev => [...prev, botResponse]);
        
        // GUARDAR ÚLTIMO MENSAJE DEL BOT PARA EVITAR REPETICIÓN
        setConversationState(prev => ({
          ...prev,
          ultimo_mensaje_bot: botResponse.text
        }));
      }
    }, delay);
  };

  // SEGUNDO MENSAJE EN FORMATO HUMANO
  const getSegundoMensajeHumano = (userOption: string): Message | null => {
    const interes = conversationState.nivel_interes;
    const tonoDirecto = interes === 'alto';
    
    const mensajes: { [key: string]: Message } = {
      'Restaurante': {
        id: messages.length + 3,
        type: 'bot',
        text: tonoDirecto ? 'Mira, te explico rápido 👇' : 'Te enseño un caso real 👇',
        options: []
      } as Message,
      'Clínica': {
        id: messages.length + 3,
        type: 'bot',
        text: tonoDirecto ? 'Te lo enseño ahora 👇' : 'Te explico rápido 👇',
        options: []
      } as Message,
      'Tienda': {
        id: messages.length + 3,
        type: 'bot',
        text: tonoDirecto ? 'En 1 minuto lo tienes claro 👇' : 'Verás cómo funciona 👇',
        options: []
      } as Message,
      'Servicios': {
        id: messages.length + 3,
        type: 'bot',
        text: tonoDirecto ? 'Lo vemos ahora mismo 👇' : 'Te muestro ejemplos 👇',
        options: []
      } as Message,
      'Sí, me interesa': {
        id: messages.length + 3,
        type: 'bot',
        text: tonoDirecto ? 'Perfecto, lo vemos ahora 👇' : 'Genial, te explico 👇',
        options: []
      } as Message
    };
    
    return mensajes[userOption] || null;
  };

  const getBotResponse = (userOption: string): Message => {
    const interes = conversationState.nivel_interes;
    const negocio = conversationState.tipo_negocio;
    
    // MODO USUARIO CALIENTE
    const tonoDirecto = interes === 'alto' || conversationState.momento_intencion === 'ya';
    
    // BOTÓN DE ATAJO "VER MI CASO"
    if (userOption === 'Ver mi caso') {
      trackEvent('boton_ver_caso', { conversion_step: 'direct_closure' });
      return {
        id: messages.length + 2,
        type: 'bot',
        text: tonoDirecto
          ? 'Perfecto, en 1 minuto lo tienes claro 👍\n\n¿Qué prefieres?'
          : 'Genial, te enseño tu caso en 1 minuto �\n\n¿Qué prefieres?',
        options: ['Ver por WhatsApp', 'Prefiero llamada']
      } as Message;
    }
    
    // PASO 1: Tipo de negocio - RESPUESTA PERSONALIZADA POR SECTOR
    if (!conversationState.tipo_negocio && ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro'].includes(userOption)) {
      setConversationState(prev => ({ ...prev, tipo_negocio: userOption }));
      
      // RESPUESTAS ESPECÍFICAS POR SECTOR
      const respuestasSector = {
        'Restaurante': 'Para tu restaurante, lo más potente es una web donde puedan ver la carta y reservar fácilmente.\n\nEso suele hacer que entren más clientes sin depender solo de redes.',
        'Clínica': 'En una clínica, lo clave es generar confianza y que puedan pedir cita fácil.\n\nAhí es donde una web bien hecha marca mucha diferencia.',
        'Tienda': 'Para una tienda, lo importante es mostrar bien los productos y facilitar la compra o el contacto.\n\nAsí no pierdes clientes que ya están interesados.',
        'Servicios': 'En negocios de servicios, lo clave es explicar bien lo que haces y que te contacten fácil.\n\nUna buena web ahí convierte mucho más.',
        'Otro': 'En tu caso, lo importante es adaptar la web a cómo consigues clientes.\n\nAhí es donde se puede marcar mucha diferencia.'
      };
      
      return {
        id: messages.length + 2,
        type: 'bot',
        text: `Perfecto 👍\n\n${respuestasSector[userOption]}\n\nSi quieres, te enseño un ejemplo y lo ves claro en 1 minuto.`,
        options: ['Ver ejemplo', 'WhatsApp']
      } as Message;
    }

    // PASO 2: Objetivo - RESPUESTAS ESPECÍFICAS OPTIMIZADAS
    if (!conversationState.objetivo && ['Conseguir clientes', 'Mejorar imagen', 'Reservas/citas'].includes(userOption)) {
      setConversationState(prev => ({ ...prev, objetivo: userOption }));
      
      return {
        id: messages.length + 2,
        type: 'bot',
        text: `Buena elección 👍\n\nPor lo que me cuentas, te encajaría algo así para conseguir más clientes de forma constante.\n\nTe enseñamos la web antes de pagar y sin compromiso 👍\n\nTu caso tiene muy buena pinta 👌\n\nCreo que le podemos sacar bastante.\n\n¿Qué prefieres?`,
        options: ['Ver por WhatsApp', 'Prefiero llamada']
      } as Message;
    }
    
    // RESPUESTAS ESPECÍFICAS COMUNES (PERSONALIZADAS)
    if (['ya tengo web', 'tengo web', 'ya tengo página', 'tengo página'].includes(userOption.toLowerCase())) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: negocio
          ? `Perfecto 👍\n\nMuchas veces el problema no es tener web, sino que no convierte.\n\nAhí se puede mejorar bastante para tu ${negocio.toLowerCase()}.\n\nSi quieres, te enseño un ejemplo y lo ves claro.`
          : 'Perfecto 👍\n\nMuchas veces el problema no es tener web, sino que no convierte.\n\nAhí se puede mejorar bastante 👍\n\nSi quieres, te enseño un ejemplo y lo ves claro.',
        options: ['Ver ejemplo', 'WhatsApp']
      } as Message;
    }
    
    if (['no estoy seguro', 'dudo', 'no sé', 'estoy pensando'].includes(userOption.toLowerCase())) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: negocio
          ? `Normal 👍\n\nMuchos clientes con ${negocio.toLowerCase()} están igual al principio.\n\nPor eso lo mejor es ver un ejemplo real y entenderlo rápido.\n\nSi quieres, te enseño uno y decides tranquilo.`
          : 'Normal 👍\n\nMuchos clientes están igual al principio.\n\nPor eso lo mejor es ver un ejemplo real y entenderlo rápido.\n\nSi quieres, te enseño uno y decides tranquilo.',
        options: ['Ver ejemplo', 'WhatsApp']
      } as Message;
    }
    
    // CIERRE DIRECTO - WHATSAPP OPTIMIZADO
    if (userOption === 'Ver por WhatsApp') {
      trackEvent('click_whatsapp', { conversion_step: 'direct_conversion' });
      return {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nTe enseño un ejemplo de tu tipo de negocio y lo ves claro en 1 minuto.\n\n👉 Escríbeme por WhatsApp',
        options: [],
        whatsapp: true
      } as Message;
    }
    
    // CIERRE DIRECTO - LLAMADA OPTIMIZADA
    if (userOption === 'Prefiero llamada') {
      trackEvent('click_call', { conversion_step: 'direct_conversion' });
      return {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\n¿Te llamo ahora o prefieres agendarla?\n\nEn 5 minutos lo vemos todo.',
        options: ['Llamar ahora', 'Agendar llamada']
      } as Message;
    }
    
    // CAPTURA DE NOMBRE DE NEGOCIO
    if (userOption === 'Te lo digo' && !conversationState.nombre_negocio) {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: 'Genial 👍\n\nDime el nombre y te preparo algo personalizado.',
        options: []
      } as Message;
    }
    
    if (userOption === 'Prefiero no decir') {
      return {
        id: messages.length + 2,
        type: 'bot',
        text: 'Sin problema 👌\n\nTe enseño un ejemplo de tu caso igualmente.\n\n¿Qué prefieres?',
        options: ['WhatsApp', 'Llamada']
      } as Message;
    }

    // REINTENTO DE CIERRE
    if (userOption === 'Ver ejemplo') {
      trackEvent('retry_closure');
      return {
        id: messages.length + 2,
        type: 'bot',
        text: tonoDirecto
          ? 'Si quieres, lo vemos por WhatsApp y te enseño un caso real 👍\n\n¿Qué prefieres?'
          : 'Si quieres, lo vemos por WhatsApp y te enseño un caso real 👍\n\n¿Qué prefieres?',
        options: ['WhatsApp', 'Llamada']
      } as Message;
    }

    // Respuestas existentes mejoradas
    const responses: { [key: string]: Message } = {
      '¿Cuánto cuesta?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Hay opciones desde 79€/mes 👍\n\n¿Tu negocio es más tipo servicio, tienda o restaurante?',
        options: ['Servicio', 'Tienda', 'Restaurante']
      } as Message,
      'Servicio': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto, para servicios tenemos planes muy completos 👍\n\n¿Te enseño un ejemplo y lo ves claro?',
        options: ['Ver ejemplo', 'Saber más']
      } as Message,
      'Tienda': {
        id: messages.length + 2,
        type: 'bot',
        text: '¡Genial! Para tiendas tenemos soluciones con catálogo y ventas 👍\n\n¿Te enseño una tienda real?',
        options: ['Ver tienda', 'Saber más']
      } as Message,
      'Restaurante': {
        id: messages.length + 2,
        type: 'bot',
        text: '¡Perfecto! Para restaurantes creamos webs con reservas y menús 👍\n\n¿Quieres ver un ejemplo?',
        options: ['Ver ejemplo', 'Saber más']
      } as Message,
      '¿Qué garantías ofrecen?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Trabajamos sin riesgo:\n\n* Te enseñamos la web antes de pagar\n* Cambios hasta que te encante\n* Sin permanencia\n\n¿Te interesa saber más?',
        options: ['Sí, me interesa', 'Saber más']
      } as Message,
      '¿Cómo empiezo?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Es muy sencillo:\n\n1. Me cuentas tu negocio\n2. Te enseño una demo\n3. Si te gusta, la lanzamos\n\n¿Empezamos?',
        options: ['Sí, empezar', 'Saber más']
      } as Message,
      'Hablar con un humano': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👌\n\nSoy yo mismo quien lleva los proyectos, así que lo vemos directo.\n\n¿Prefieres WhatsApp o llamada?',
        options: ['WhatsApp', 'Llamada']
      } as Message,
      'WhatsApp': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nTe enseño ejemplos reales y lo vemos en 1 minuto.\n\n👉 Escríbeme por WhatsApp y lo vemos rápido.',
        options: [],
        whatsapp: true
      } as Message,
      'Llamada': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\n¿Te viene mejor que te llame ahora o prefieres agendarla?\n\nEn 5 minutos te explico todo y vemos tu caso concreto sin compromiso.',
        options: ['Llamar ahora', 'Agendar llamada']
      } as Message,
      'Sí, empezar': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 🙌\n\nTe enseño un ejemplo de tu caso en 1 minuto y lo ves claro.\n\n¿Qué prefieres?',
        options: ['Ver por WhatsApp', 'Prefiero llamada']
      } as Message,
      'Llamar ahora': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nTe llamo ahora mismo y en 5 minutos vemos tu caso.\n\n¿Cuál es tu teléfono?',
        options: ['Prefiero WhatsApp', 'Agendar llamada']
      } as Message,
      'Agendar llamada': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\n¿Qué día y hora te viene bien?\n\nPuedo llamarte mañana o cualquier día de la semana.',
        options: ['Mañana', 'Esta semana', 'Otro momento']
      } as Message
    };

    return responses[userOption] || {
      id: messages.length + 2,
      type: 'bot',
      text: negocio
        ? `Te entiendo 👍\n\nMira, lo mejor es verlo con un ejemplo real de ${negocio.toLowerCase()} y lo ves claro en 1 minuto.\n\n¿Lo vemos por WhatsApp o prefieres llamada?`
        : 'Te entiendo 👍\n\nMira, lo mejor es verlo con un ejemplo real y lo ves claro en 1 minuto.\n\n¿Lo vemos por WhatsApp o prefieres llamada?',
      options: ['WhatsApp', 'Llamada']
    } as Message;
  };

  const handleWhatsAppClick = () => {
    trackEvent('click_whatsapp', { conversion_step: 'final_conversion' });
    
    // MENSAJE PERSONALIZADO PARA WHATSAPP OPTIMIZADO
    const mensajePersonalizado = conversationState.nombre_negocio
      ? `Hola, tengo un ${conversationState.tipo_negocio || 'negocio'} llamado "${conversationState.nombre_negocio}" y quiero una web para conseguir más clientes`
      : `Hola, tengo un ${conversationState.tipo_negocio || 'negocio'} y quiero una web para conseguir más clientes`;
    
    const whatsappUrl = `https://wa.me/34644610120?text=${encodeURIComponent(mensajePersonalizado)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  // DETECCIÓN DE INACTIVIDAD MEJORADA
  useEffect(() => {
    if (!isOpen) return;
    
    // Primer reenganche a 10 segundos
    const timer1 = setTimeout(() => {
      const tiempoInactivo = Date.now() - conversationState.ultima_interaccion;
      if (tiempoInactivo > 10000 && messages.length > 2) {
        const reengancheMessage: Message = {
          id: messages.length + 1,
          type: 'bot',
          text: 'Si quieres, te enseño un ejemplo real 👌',
          options: ['Ver ejemplo', 'WhatsApp']
        };
        setMessages(prev => [...prev, reengancheMessage]);
      }
    }, 10000);
    
    // Segundo reenganche a 20 segundos
    const timer2 = setTimeout(() => {
      const tiempoInactivo = Date.now() - conversationState.ultima_interaccion;
      if (tiempoInactivo > 20000 && messages.length > 2) {
        const reengancheMessage2: Message = {
          id: messages.length + 2,
          type: 'bot',
          text: 'Lo vemos en 1 minuto por WhatsApp 👍',
          options: ['WhatsApp', 'Llamada']
        };
        setMessages(prev => [...prev, reengancheMessage2]);
      }
    }, 20000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isOpen, conversationState.ultima_interaccion, messages.length]);

  // El botón flotante siempre está visible, la ventana del chatbot se controla con isOpen
  return (
    <>
      {/* Botón flotante del asistente - SIEMPRE VISIBLE */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="fixed bottom-20 right-4 z-40 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Ventana del chatbot - SOLO SE MUESTRA SI isOpen = true */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 z-50"
          >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg shadow-2xl w-96 h-[600px] flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Asistente Elevate Web</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="hover:bg-blue-800 p-1 rounded"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCloseChat}
                  className="hover:bg-blue-800 p-1 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                    
                    {/* Botón WhatsApp integrado en el mensaje */}
                    {msg.whatsapp && (
                      <button
                        onClick={handleWhatsAppClick}
                        className="mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm font-medium"
                      >
                        📱 Escribir por WhatsApp
                      </button>
                    )}
                    
                    {/* Botones de opciones integrados en el mensaje */}
                    {msg.options && (
                      <div className="mt-3 space-y-2">
                        {msg.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded text-sm font-medium transition-colors text-left"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg shadow-2xl p-4"
          >
            <div className="flex items-center space-x-3">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Asistente Elevate Web</span>
              <button
                onClick={() => setIsMinimized(false)}
                className="ml-auto hover:bg-gray-100 p-1 rounded"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <button
                onClick={handleCloseChat}
                className="hover:bg-blue-800 p-1 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
