import { ChatBubbleLeftRightIcon, PaperAirplaneIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import GeminiService from '../Services/Gemini';

const ChatMessage = memo(({ message, onContactSupport }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex items-start space-x-2 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isUser ? 'bg-primary text-white' : 'bg-primary/10'
      }`}>
        {isUser ? (
          <UserIcon className="w-5 h-5 text-white" />
        ) : (
          <ChatBubbleLeftRightIcon className="w-5 h-5 text-primary" />
        )}
      </div>
      <div className={`rounded-2xl p-3 max-w-[80%] shadow-sm ${
        isUser ? 'bg-primary text-white rounded-tr-none' : 'bg-white dark:bg-dark-200 rounded-tl-none'
      }`}>
        <p className={`text-sm ${isUser ? 'text-white' : 'text-gray-800 dark:text-gray-200'}`}>
          {message.content.includes('[SOLICITUD_HUMANO]') ? (
            <>
              <ReactMarkdown>{message.content.replace('[SOLICITUD_HUMANO]', '')}</ReactMarkdown>
              <button
                onClick={onContactSupport}
                className="mt-2 bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors block w-full"
              >
                Contactar Soporte
              </button>
            </>
          ) : (
            <ReactMarkdown className="prose dark:prose-invert prose-sm max-w-none">
              {message.content}
            </ReactMarkdown>
          )}
        </p>
      </div>
    </div>
  );
});

ChatMessage.displayName = 'ChatMessage';

ChatMessage.propTypes = {
  message: PropTypes.shape({
    role: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  onContactSupport: PropTypes.func.isRequired
};

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '¡Hola! Soy el asistente virtual de Scrypto. ¿En qué puedo ayudarte hoy?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleContactSupport = useCallback(async () => {
    const transcript = messages.map(msg =>
      `${msg.role.toUpperCase()}: ${msg.content.replace('[SOLICITUD_HUMANO]', '')}`
    ).join('\n\n');

    const lastUserMessage = messages
      .filter(msg => msg.role === 'user')
      .pop()?.content || 'No se encontró la última pregunta del usuario';

    const emailBody =
      `Solicitud de atención humana\n\n` +
      `Última pregunta del usuario: ${lastUserMessage}\n\n` +
      `Transcripción del chat:\n${transcript}`;

    const mailtoLink = `mailto:support@scryptosolutions.com?subject=${encodeURIComponent('Solicitud de Soporte - Scrypto')}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  }, [messages]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      const userMessage = message.trim();
      setMessage('');
      setIsLoading(true);

      setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

      try {
        const response = await GeminiService.sendMessage(userMessage);
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      } catch (error) {
        console.error('Error al enviar mensaje:', error);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'Lo siento, ha ocurrido un error. Por favor, intenta de nuevo más tarde.'
        }]);
      } finally {
        setIsLoading(false);
      }
    }
  }, [message, isLoading]);

  const handleMessageChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  const handleToggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleCloseChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-full right-0 mb-4 w-[300px] sm:w-[350px] bg-white dark:bg-dark-200 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header del chat */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                <h3 className="text-lg font-semibold text-white">
                  Chat de Soporte
                </h3>
              </div>
              <button
                onClick={handleCloseChat}
                className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Área de mensajes */}
            <div className="h-[300px] sm:h-[400px] p-4 overflow-y-auto bg-gray-50 dark:bg-dark-300">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <ChatMessage
                    key={index}
                    message={msg}
                    onContactSupport={handleContactSupport}
                  />
                ))}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Formulario de entrada */}
            <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-dark-200 border-t dark:border-dark-400">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Escribe tu mensaje..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 rounded-xl bg-gray-100 dark:bg-dark-300 border-0 focus:ring-2 focus:ring-primary text-sm dark:text-white disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`p-2 bg-primary text-white rounded-xl transition-colors ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'
                  }`}
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante */}
      <motion.button
        onClick={handleToggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow relative"
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
        {!isOpen && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
          />
        )}
      </motion.button>
    </div>
  );
};

export default memo(FloatingChat);
