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

interface ConversationState {
  tipo_negocio?: string;
  situacion_actual?: string;
  tiene_web?: boolean;
  objetivo?: string;
  nivel_interes: 'bajo' | 'medio' | 'alto';
  respuestas_rapidas: number;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [conversationState, setConversationState] = useState<ConversationState>({
    nivel_interes: 'bajo',
    respuestas_rapidas: 0
  });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      text: 'Hola 👋\n\nSi quieres, dime qué tipo de negocio tienes y te digo cómo sería tu web para conseguir más clientes 👌',
      options: [
        'Restaurante',
        'Clínica',
        'Tienda',
        'Servicios',
        'Otro'
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
    // Guardar respuesta y detectar interés
    const tiempoRespuesta = Date.now();
    const nuevasRespuestasRapidas = conversationState.respuestas_rapidas + 1;
    
    setConversationState(prev => ({
      ...prev,
      respuestas_rapidas: nuevasRespuestasRapidas,
      nivel_interes: nuevasRespuestasRapidas >= 3 ? 'alto' : prev.nivel_interes === 'bajo' ? 'medio' : prev.nivel_interes
    }));

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
    // Guardar tipo de negocio si es la primera pregunta
    if (!conversationState.tipo_negocio && ['Restaurante', 'Clínica', 'Tienda', 'Servicios', 'Otro'].includes(userOption)) {
      setConversationState(prev => ({ ...prev, tipo_negocio: userOption }));
      
      return {
        id: messages.length + 2,
        type: 'bot',
        text: `Perfecto 👍\n\nPara ${userOption} solemos crear webs enfocadas en conseguir clientes de forma constante.\n\n¿Ahora mismo cómo consigues clientes?`,
        options: ['Instagram', 'Boca a boca', 'Google', 'No tengo nada']
      } as Message;
    }

    // Guardar situación actual
    if (!conversationState.situacion_actual && ['Instagram', 'Boca a boca', 'Google', 'No tengo nada'].includes(userOption)) {
      setConversationState(prev => ({ ...prev, situacion_actual: userOption }));
      
      return {
        id: messages.length + 2,
        type: 'bot',
        text: 'Vale, en ese caso una web bien hecha puede ayudarte mucho 👍\n\n¿Ya tienes web o empezarías desde cero?',
        options: ['Tengo web', 'No tengo']
      } as Message;
    }

    // Guardar si tiene web
    if (conversationState.tiene_web === undefined && ['Tengo web', 'No tengo'].includes(userOption)) {
      const tieneWeb = userOption === 'Tengo web';
      setConversationState(prev => ({ ...prev, tiene_web: tieneWeb }));
      
      const respuestaWeb = tieneWeb 
        ? 'Muchas veces el problema no es tener web, sino que no convierte.'
        : 'Perfecto, así la hacemos desde cero enfocada a resultados.';
      
      return {
        id: messages.length + 2,
        type: 'bot',
        text: `${respuestaWeb}\n\n¿Qué te gustaría mejorar ahora mismo?`,
        options: ['Conseguir más clientes', 'Mejorar imagen', 'Reservas/citas', 'Todo']
      } as Message;
    }

    // Guardar objetivo
    if (!conversationState.objetivo && ['Conseguir más clientes', 'Mejorar imagen', 'Reservas/citas', 'Todo'].includes(userOption)) {
      setConversationState(prev => ({ ...prev, objetivo: userOption }));
      
      // Cierre automático si interés es alto
      if (conversationState.nivel_interes === 'alto') {
        return {
          id: messages.length + 2,
          type: 'bot',
          text: `Perfecto 🙌\n\nTe enseño un ejemplo de tu caso en 1 minuto y lo ves claro.\n\n¿Qué prefieres?`,
          options: ['Ver por WhatsApp', 'Prefiero llamada']
        } as Message;
      }
      
      // Mini propuesta automática
      return {
        id: messages.length + 2,
        type: 'bot',
        text: `Por lo que me cuentas, te encajaría una web enfocada a ${userOption} para que puedas conseguir más clientes sin complicaciones.\n\nAdemás:\n* Ves la web antes de pagar\n* Cambios incluidos\n* Sin permanencia\n\nAsí no tienes riesgo 👍\n\n¿Te interesa saber más?`,
        options: ['Sí, me interesa', 'Saber más', 'Hablar con un humano']
      } as Message;
    }
    // Respuestas de cierre
    if (['Sí, me interesa', 'Ver por WhatsApp', 'Prefiero llamada'].includes(userOption)) {
      if (userOption === 'Ver por WhatsApp') {
        return {
          id: messages.length + 2,
          type: 'bot',
          text: 'Perfecto 👍\n\nTe enseño un ejemplo de tu tipo de negocio y en 1 minuto lo ves claro.\n\n👉 Escríbeme por WhatsApp y lo vemos ahora mismo.',
          options: [],
          whatsapp: true
        } as Message;
      }
      
      if (userOption === 'Prefiero llamada') {
        return {
          id: messages.length + 2,
          type: 'bot',
          text: 'Perfecto 👍\n\n¿Te llamo ahora o prefieres agendarla?\n\nEn 5 minutos vemos tu caso y te explico todo.',
          options: ['Llamar ahora', 'Agendar llamada']
        } as Message;
      }
      
      // Sí, me interesa
      return {
        id: messages.length + 2,
        type: 'bot',
        text: 'Perfecto 🙌\n\nTe enseño un ejemplo de tu caso en 1 minuto y lo ves claro.\n\n¿Qué prefieres?',
        options: ['Ver por WhatsApp', 'Prefiero llamada']
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
        text: 'Perfecto 👍\n\n¿Te viene mejor que te llame ahora o prefieres agendarla para otro momento?\n\nEn 5 minutos te explico todo y vemos tu caso concreto sin compromiso.',
        options: ['Llamar ahora', 'Agendar llamada']
      } as Message
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
      const botResponse: Message = {
        id: messages.length + 2,
        type: 'bot',
        text: 'Entiendo tu pregunta. ¿Te gustaría que te contacte por WhatsApp para explicártelo mejor?',
        options: ['Sí, WhatsApp', 'Prefiero llamada']
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/34644610120?text=Hola%2C%20me%20interesa%20sus%20servicios%20de%20páginas%20web', '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {!isMinimized ? (
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
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-blue-800 p-1 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
                    {msg.whatsapp && (
                      <button
                        onClick={handleWhatsAppClick}
                        className="mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm font-medium"
                      >
                        📱 Escribir por WhatsApp
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Options */}
            {messages[messages.length - 1]?.options && (
              <div className="p-4 border-t">
                <div className="grid grid-cols-1 gap-2">
                  {messages[messages.length - 1].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded text-sm font-medium transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

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
                onClick={() => setIsOpen(false)}
                className="hover:bg-gray-100 p-1 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
