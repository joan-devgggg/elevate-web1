import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: number;
  type: 'bot' | 'user';
  text: string;
  options?: string[];
  whatsapp?: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      text: '¡Hola! 👋 Soy el asistente virtual de Elevate Web. Puedo ayudarte con cualquier duda sobre nuestros servicios.',
      options: [
        '¿Cuánto cuesta?',
        '¿Pueden enseñarme ejemplos?',
        '¿Cuánto tiempo tarda?',
        'Me interesa',
        '¿Qué tipo de webs hacen?',
        '¿Hay permanencia?',
        '¿Puedo hacer cambios después?',
        '¿Incluye el dominio?',
        '¿Qué garantías ofrecen?',
        '¿Trabajan con empresas extranjeras?',
        '¿Cómo empiezo?',
        '¿Prefieres WhatsApp o llamada?',
        'Hablar con un humano'
      ]
    }
  ]);

  useEffect(() => {
    // Mostrar chatbot después de 10 segundos
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (option: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      text: option
    };

    setMessages(prev => [...prev, userMessage]);

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse = getBotResponse(option);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userOption: string): Message => {
    const responses: { [key: string]: Message } = {
      '¿Cuánto cuesta?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Depende un poco de lo que necesites, pero hay opciones desde 79€/mes 👍\n\nLa idea es que la web te genere clientes, no que sea un gasto.\n\n¿Tu negocio es más tipo servicio, tienda o algo diferente?',
        options: ['Servicio', 'Tienda', 'Otro']
      } as Message,
      'Servicio': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto, para servicios tenemos planes muy completos 👍\n\nIncluye presentación de servicios, contacto y captación de clientes.\n\n¿Te enseño un ejemplo de un servicio similar y lo ves claro?',
        options: ['Ver ejemplo', 'Seguir preguntando']
      } as Message,
      'Tienda': {
        id: messages.length + 2,
        type: 'bot',
        text: '¡Genial! Para tiendas tenemos soluciones con catálogo y ventas 👍\n\nPuedes vender online y gestionar todo fácilmente.\n\n¿Te enseño una tienda real y ves cómo funciona?',
        options: ['Ver tienda', 'Saber más']
      } as Message,
      'Otro': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto, cada negocio es único 👍\n\nCuéntame un poco más y te digo qué encaja mejor contigo.\n\n¿A qué te dedicas exactamente?',
        options: ['Explicar mi negocio', 'Prefiero hablar']
      } as Message,
      '¿Cuánto tarda en estar lista mi web?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'El tiempo depende de la complejidad:\n\n⚡ **Web sencilla**: 3-4 días\n- Página de inicio, servicios, contacto\n- Sin funcionalidades complejas\n\n🔄 **Web estándar**: 5-7 días\n- Hasta 10 páginas\n- Formularios, blog básico\n\n🎯 **Web avanzada**: 1-2 semanas\n- E-commerce, reservas, multiidioma\n- Integraciones personalizadas\n\n¿Qué tipo de web necesitas?',
        options: ['Web sencilla', 'Web estándar', 'Web avanzada']
      } as Message,
      '¿Puedo pedir cambios después?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Sí, puedes hacer cambios cuando quieras 👍\n\nIncluimos cambios continuos para que tu web siempre esté actualizada.\n\nSi quieres, te explico cómo funciona por WhatsApp y te enseño ejemplos reales.',
        options: ['Escribir por WhatsApp', 'Saber más']
      } as Message,
      '¿Necesito contratar un dominio aparte?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'No te preocupes por eso:\n\n✅ **Si ya tienes dominio**: Lo conectamos sin coste extra\n✅ **Si no tienes dominio**: Te ayudamos a elegir y registrar\n✅ **Nos encargamos de todo**: Configuración, DNS, hosting\n✅ **Sin costes ocultos**: Todo incluido en tu cuota\n\n¿Ya tienes un dominio o necesitas ayuda para elegir uno?',
        options: ['Ya tengo dominio', 'Necesito ayuda para elegir']
      } as Message,
      '¿Hay permanencia?': {
        id: messages.length + 2,
        type: 'bot',
        text: '¡No hay ninguna permanencia!\n\n✅ **Cancela cuando quieras**: Sin penalizaciones\n✅ **Sin letra pequeña**: Contrato transparente\n✅ **Máxima flexibilidad**: Págalas por mes\n✅ **Sin ataduras**: Total libertad\n\nPuedes cancelar este mes y no pagas más. ¿Necesitas algo más?',
        options: ['No, gracias', 'Saber más sobre cancelación']
      } as Message,
      '¿Qué pasa si cancelo?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Si cancelas el servicio:\n\n⏰ **Tu web sigue activa**: Hasta fin de mes facturado\n⏰ **Puedes descargar contenido**: Todos tus textos e imágenes\n⏰ **Exportación**: Te entregamos todo el material\n⏰ **Sin coste extra**: Incluido en tu cuota\n\n¿Te gustaría que te expliquemos el proceso?',
        options: ['Sí, explícame el proceso', 'No, ya lo sé']
      } as Message,
      '¿Qué tipo de webs pueden hacer?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Creamos todo tipo de webs profesionales:\n\n🍽 **Restaurantes y bares**: Con reservas, carta digital\n🏥 **Clínicas y consultorios**: Citas online, presentación servicios\n🏪 **Tiendas y e-commerce**: Catálogo, carrito, pasarela pago\n🏢 **Profesionales y autónomos**: Portfolio, servicios, contacto\n🏨 **Construcción e inmobiliarias**: Proyectos, galería, contacto\n🎓 **Educación y formación**: Cursos, información, inscripciones\n\n¿Qué tipo de negocio tienes?',
        options: ['Restaurante', 'Clínica', 'Tienda', 'Profesional', 'Otro']
      } as Message,
      '¿Incluye posicionamiento SEO?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Sí, incluimos SEO básico completo:\n\n🔍 **SEO On-Page**: Títulos optimizados, meta descripciones\n🔍 **Estructura correcta**: Encabezados H1-H6, semántica\n🔍 **Velocidad**: Optimización de carga rápida\n🔍 **Mobile-first**: Perfecta en móviles y tablets\n🔍 **Mapa Google**: Tu negocio en Google Maps\n\nPara SEO avanzado (posicionamiento orgánico), podemos evaluar cada caso según tus objetivos y presupuesto. ¿Te interesa?',
        options: ['Quiero SEO avanzado', 'Solo SEO básico me vale']
      } as Message,
      '¿Pueden añadir funciones extra?': {
        id: messages.length + 2,
        type: 'bot',
        text: '¡Claro que sí! Podemos añadir cualquier funcionalidad:\n\n🛒 **Tienda online**: Catálogo productos, carrito, pasarela pago\n📅 **Sistema de reservas**: Calendario, gestión de citas, recordatorios\n🌍 **Multiidioma**: Varios idiomas con traducción profesional\n📊 **Analytics avanzado**: Estadísticas detalladas, reporting\n💬 **Chat y soporte**: Sistema de atención al cliente\n📝 **Blog avanzado**: Artículos, categorías, SEO contenido\n\nCada funcionalidad tiene un coste adicional según complejidad. ¿Qué función necesitas?',
        options: ['Tienda online', 'Sistema de reservas', 'Multiidioma', 'Blog avanzado']
      } as Message,
      '¿Cómo funciona el proceso de pago inicial?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Te explicamos la opción de pago inicial:\n\n💰 **Pago inicial**: 199€ (una sola vez)\n💰 **Cuota reducida**: 49€/mes (en lugar de 79€/mes)\n💰 **Ahorro total**: Pagas menos cada mes\n💰 **Flexibilidad**: Más inversión inicial, menos cuota mensual\n\nEs ideal si prefieres pagar más ahora y menos cada mes. ¿Quieres esta opción?',
        options: ['Sí, quiero pago inicial', 'Prefiero cuota normal']
      } as Message,
      '¿Qué incluye el mantenimiento?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Nuestro mantenimiento incluye todo lo necesario:\n\n🔧 **Actualizaciones**: Sistema, plugins, seguridad\n� **Copias de seguridad**: Backups automáticos diarios\n� **Monitorización**: Tu web siempre online y funcionando\n�️ **Soporte técnico**: Resolución de problemas 24/7\n� **Cambios y mejoras**: Las que necesites sin coste extra\n🌐 **Hosting y dominio**: Renovaciones y configuración\n\nTú solo te dedicas a tu negocio, nosotros nos encargamos de todo. ¿Hay algo específico que necesites?',
        options: ['Soporte técnico', 'Hacer cambios', 'Consultar sobre hosting']
      } as Message,
      '¿Qué garantías ofrecen?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Trabajamos sin riesgo:\n\n* Te enseñamos la web antes de pagar\n* Cambios hasta que te encante\n* Sin permanencia\n\nAsí te aseguras de que encaja contigo.\n\nSi quieres, te enseño un ejemplo real y lo ves claro 👌',
        options: ['Ver ejemplo', 'Saber más']
      } as Message,
      '¿Trabajan con empresas extranjeras?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Sí, sin problema 👍\n\nPodemos adaptar la web a diferentes países, idiomas y tipos de negocio.\n\n¿Tu caso sería para aquí o fuera?',
        options: ['Aquí (España)', 'Fuera', 'Ambos']
      } as Message,
      'Aquí (España)': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto, tenemos muchos clientes en España 👍\n\nConocemos el mercado y lo que funciona aquí.\n\n¿Te enseño ejemplos de negocios como el tuyo?',
        options: ['Ver ejemplos', 'Seguir']
      } as Message,
      'Fuera': {
        id: messages.length + 2,
        type: 'bot',
        text: '¡Genial! Trabajamos con clientes de todo el mundo 👍\n\nAdaptamos todo a tu mercado local y preferencias.\n\n¿Desde qué país nos contactas?',
        options: ['Europa', 'América', 'Otro']
      } as Message,
      'Ambos': {
        id: messages.length + 2,
        type: 'bot',
        text: '¡Perfecto! Eso nos da mucha flexibilidad 👍\n\nPodemos preparar la web para funcionar en varios mercados.\n\n¿Cuál es tu mercado principal ahora?',
        options: ['España', 'Internacional']
      } as Message,
      '¿Cómo empiezo?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Es muy sencillo:\n\n1. Me cuentas tu negocio\n2. Te enseño una demo\n3. Si te gusta, la lanzamos\n\n¿Quieres que te enseñe un ejemplo ya y lo ves claro?',
        options: ['Ver ejemplo', 'Saber más']
      } as Message,
      '¿Prefieres WhatsApp o llamada?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Lo más rápido suele ser WhatsApp porque puedo enseñarte ejemplos directamente.\n\nPero si prefieres llamada, lo vemos sin problema 👍\n\n¿Qué te viene mejor?',
        options: ['WhatsApp', 'Llamada']
      } as Message,
      'Hablar con un humano': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👌\n\nSoy yo mismo quien lleva los proyectos, así que lo vemos directo.\n\n¿Prefieres WhatsApp o llamada?',
        options: ['WhatsApp', 'Llamada']
      } as Message,
      '¿Qué métodos de pago aceptan?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Aceptamos múltiples métodos de pago:\n\n💳 **Transferencia bancaria**: Directo a nuestra cuenta\n💳 **Bizum**: Pago instantáneo y seguro\n💳 **PayPal**: Para clientes internacionales\n💳 **Stripe**: Tarjetas de crédito y débito\n\nTodos los pagos son seguros. ¿Qué método te interesa?',
        options: ['Transferencia', 'Bizum', 'Tarjeta']
      } as Message,
        text: 'Perfecto 👌\n\nEscríbeme por WhatsApp y lo vemos directamente, así puedo enseñarte ejemplos reales.',
        options: ['Escribir por WhatsApp', 'Llamar ahora']
      } as Message,
      'Sí, quiero pago inicial': {
        id: messages.length + 2,
        type: 'bot',
        text: '¡Genial! El pago inicial es de 199€. Esto te permitirá ahorrar 30€ al mes en tu cuota. ¿Quieres proceder con el pago?',
        options: ['Sí, proceder con el pago', 'Cancelar']
      } as Message,
      'Prefiero cuota normal': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Entendido. La cuota normal es de 79€ al mes. ¿Quieres proceder con el pago?',
        options: ['Sí, proceder con el pago', 'Cancelar']
      } as Message,
      'Soporte técnico': {
        id: messages.length + 2,
        type: 'bot',
        text: '¡Claro! Nuestro soporte técnico está disponible las 24 horas del día, los 7 días de la semana. ¿Quieres contactar con ellos?',
        options: ['Sí, contactar con soporte', 'Cancelar']
      } as Message,
      'Hacer cambios': {
        id: messages.length + 2,
        type: 'bot',
        text: '¡Por supuesto! Puedes hacer cambios en tu web en cualquier momento. ¿Quieres hacer cambios ahora?',
        options: ['Sí, hacer cambios', 'Cancelar']
      } as Message,
      'Consultar sobre hosting': {
        id: messages.length + 2,
        type: 'bot',
        text: '¡Claro! Nuestro hosting es de alta calidad y seguro. ¿Quieres saber más sobre nuestro hosting?',
        options: ['Sí, saber más', 'Cancelar']
      } as Message,
      'Garantía de satisfacción': {
        id: messages.length + 2,
        type: 'bot',
        text: '¡Por supuesto! Nuestra garantía de satisfacción es de 30 días. Si no estás satisfecho con nuestro servicio, puedes cancelar en cualquier momento. ¿Quieres saber más sobre nuestra garantía?',
        options: ['Sí, saber más', 'Cancelar']
      } as Message,
      'Garantía de funcionamiento': {
        id: messages.length + 2,
        type: 'bot',
        text: '¡Claro! Nuestra garantía de funcionamiento es de 99,9%. Esto significa que tu web estará disponible en todo momento. ¿Quieres saber más sobre nuestra garantía?',
        options: ['Sí, saber más', 'Cancelar']
      } as Message,
      '¿Pueden enseñarme ejemplos?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Sí, tengo varios ejemplos reales según el tipo de negocio.\n\nSi quieres, te los enseño por WhatsApp y vemos cuál encaja contigo 👌',
        options: ['Ver ejemplos por WhatsApp', 'Seguir preguntando']
      } as Message,
      '¿Cuánto cuesta?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Depende un poco de lo que necesites, pero hay opciones desde 79€/mes 👍\n\nLa idea es que la web te genere clientes, no que sea un gasto.\n\n¿Tu negocio es más tipo servicio, tienda o algo diferente?',
        options: ['Servicio', 'Tienda', 'Otro']
      } as Message,
      'Servicio': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto, para servicios tenemos planes muy completos 👍\n\nIncluye presentación de servicios, contacto y captación de clientes.\n\n¿Te enseño un ejemplo de un servicio similar y lo ves claro?',
        options: ['Ver ejemplo', 'Seguir preguntando']
      } as Message,
      'Tienda': {
        id: messages.length + 2,
        type: 'bot',
        text: '¡Genial! Para tiendas tenemos soluciones con catálogo y ventas 👍\n\nPuedes vender online y gestionar todo fácilmente.\n\n¿Te enseño una tienda real y ves cómo funciona?',
        options: ['Ver tienda', 'Saber más']
      } as Message,
      'Otro': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto, cada negocio es único 👍\n\nCuéntame un poco más y te digo qué encaja mejor contigo.\n\n¿A qué te dedicas exactamente?',
        options: ['Explicar mi negocio', 'Prefiero hablar']
      } as Message,
      'Me interesa': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 🙌\n\nLo más rápido es verlo por WhatsApp, te enseño una demo y en 2 minutos lo tienes claro.',
        options: ['Ver demo por WhatsApp', 'Llamar ahora']
      } as Message,
      'No estoy seguro': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Lo mejor en ese caso es enseñarte un ejemplo real de tu sector.\n\nSi quieres, te lo paso por WhatsApp y lo ves sin compromiso.',
        options: ['Ver ejemplo por WhatsApp', 'Seguir explorando']
      } as Message,
      '¿Cuánto tiempo tarda?': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Normalmente en 48h tienes la primera versión lista.\n\nSi quieres, te explico cómo sería en tu caso por WhatsApp 👍',
        options: ['Ver mi caso por WhatsApp', 'Saber más']
      } as Message,
      'No sé qué necesito': {
        id: messages.length + 2,
        type: 'bot',
        text: 'No te preocupes, es lo más normal.\n\nCuéntamelo por WhatsApp y te digo exactamente qué te conviene sin complicaciones.',
        options: ['Contactar por WhatsApp', 'Llamar ahora']
      } as Message,
      'Sí, escribir por WhatsApp': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nTe enseño ejemplos reales y lo vemos en 1 minuto.\n\n👉 Escríbeme por WhatsApp y lo vemos rápido.',
        options: [],
        whatsapp: true
      } as Message,
      'Prefiero llamada': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\n¿Te viene mejor que te llame ahora o prefieres agendarla para otro momento?\n\nEn 5 minutos te explico todo y vemos tu caso concreto sin compromiso.',
        options: ['Llamar ahora', 'Agendar llamada', 'Prefiero WhatsApp']
      } as Message,
      'Sí, WhatsApp': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nTe enseño ejemplos reales y lo vemos en 1 minuto.\n\n👉 Escríbeme por WhatsApp y lo vemos rápido.',
        options: [],
        whatsapp: true
      } as Message,
      'Llamar ahora': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nPuedo llamarte ahora mismo o coordinamos un momento que te venga mejor.\n\n¿Cuándo prefieres que hablemos?',
        options: ['Llamar ahora', 'Coordinar llamada']
      } as Message,
      'Ver ejemplos por WhatsApp': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nTe paso ejemplos reales de tu sector y vemos cuál encaja contigo.\n\n👉 Escríbeme por WhatsApp y te enseño ahora mismo.',
        options: [],
        whatsapp: true
      } as Message,
      'Ver planes por WhatsApp': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nTe explico los planes según lo que necesites y te doy precio exacto.\n\n👉 Escríbeme por WhatsApp y lo vemos rápido.',
        options: [],
        whatsapp: true
      } as Message,
      'Empezar por WhatsApp': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nEmpezamos rápido: me cuentas tu negocio y te enseño una demo.\n\n👉 Escríbeme por WhatsApp y empezamos ahora.',
        options: [],
        whatsapp: true
      } as Message,
      'Agendar llamada': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\n¿Qué día y hora te viene bien?\n\nPuedo llamarte mañana o cualquier día de la semana que prefieras.\n\nEn 5 minutos vemos tu caso y te explico todo sin compromiso.',
        options: ['Mañana', 'Esta semana', 'Otro momento']
      } as Message,
      'Mañana': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\n¿Mañana por la mañana o por la tarde?\n\nMañana (9:00-13:00) o Mañana (16:00-20:00)',
        options: ['Mañana mañana', 'Mañana tarde']
      } as Message,
      'Esta semana': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\n¿Qué día de esta semana te viene mejor?\n\nPuedo llamarte cualquier día de lunes a viernes.',
        options: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
      } as Message,
      'Ver por WhatsApp': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nTe paso ejemplos reales y vemos qué encaja contigo.\n\n👉 Escríbeme por WhatsApp y lo vemos ahora.',
        options: [],
        whatsapp: true
      } as Message,
      'Mañana mañana': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nTe llamo mañana por la mañana entre 9:00 y 13:00.\n\n¿Hay algún momento específico que te venga mejor?',
        options: ['9:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00']
      } as Message,
      'Mañana tarde': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nTe llamo mañana por la tarde entre 16:00 y 20:00.\n\n¿Hay algún momento específico que te venga mejor?',
        options: ['16:00-17:00', '17:00-18:00', '18:00-19:00', '19:00-20:00']
      } as Message,
      'Otro día': {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 👍\n\nDime qué día y hora te viene mejor y te llamo puntualmente.\n\n¿Qué día prefieres?',
        options: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
      } as Message,
    };

    return responses[userOption] || {
      id: messages.length + 2,
      type: 'bot',
      text: 'Te lo explico mejor por WhatsApp y te enseño ejemplos reales 👍\n\n¿Te va bien si lo vemos por ahí?',
      options: ['Sí, WhatsApp', 'Prefiero llamada']
    } as Message;
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      text: message
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    // Simular respuesta del bot
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: messages.length + 2,
        type: 'bot',
        text: 'Gracias por tu mensaje. Un experto te responderá en menos de 5 minutos por WhatsApp. Mientras tanto, ¿te interesa ver nuestros planes?',
        options: ['Ver planes', 'Ver ejemplos']
      } as Message]);
    }, 1000);
  };

  const lastMessage = messages[messages.length - 1];

  return (
    <>
      {/* Botón flotante del chatbot */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-primary-foreground shadow-lg transition-all hover:scale-110"
            aria-label="Abrir chat"
          >
            <MessageCircle className="h-6 w-6" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-background" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Ventana del chatbot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)]"
          >
            <div className="bg-background rounded-2xl border border-border shadow-elevated overflow-hidden">
              {/* Header */}
              <div className="gradient-bg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                      <div className="absolute -bottom-0 -right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Asistente Elevate</div>
                      <div className="text-xs opacity-90">Responde en tiempo real</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsMinimized(!isMinimized)}
                      className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    >
                      {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              {!isMinimized && (
                <>
                  <div className="h-96 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            msg.type === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-foreground'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{msg.text}</p>
                          {msg.options && msg.options.length > 0 && (
                            <div className="mt-3 space-y-2">
                              {msg.options.map((option, i) => (
                                <button
                                  key={i}
                                  onClick={() => handleOptionClick(option)}
                                  className="w-full text-left text-sm bg-background/50 hover:bg-background/70 rounded-lg px-3 py-2 transition-colors border border-border/50"
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          )}
                          {msg.whatsapp && (
                            <div className="mt-3">
                              <a
                                href="https://wa.me/34644610120?text=Hola%2C%20necesito%20hablar%20con%20un%20experto"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-500 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-green-600 transition-colors"
                              >
                                <MessageCircle className="h-4 w-4" />
                                Abrir WhatsApp
                              </a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="border-t border-border p-4">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Escribe tu mensaje..."
                        className="flex-1 px-4 py-2 rounded-full border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!message.trim()}
                        className="gradient-bg p-2 rounded-full text-primary-foreground transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
