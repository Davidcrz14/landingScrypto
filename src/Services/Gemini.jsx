import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const generation_config = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const systemInstruction = `Eres un asistente Virtual Llamado Scrypto Bot.
Tu objetivo es dar respuestas CORTAS Y CONCISAS sobre los servicios de Scrypto.
Puedes usar Markdown para formatear tus respuestas.

Los servicios que ofrecemos son:
- Desarrollo de Aplicaciones Móviles [Flutter]
- Desarrollo de Aplicaciones Web [PHP, HTML, CSS, JavaScript, React, MySQL y Tailwind]
- Aplicaciones de Escritorio [C#]

Cuando te pregunten por servicios, responde en formato de lista usando Markdown:

Ofrecemos:
- Desarrollo de aplicaciones móviles
- Desarrollo web
- Aplicaciones de escritorio

Ofrecemos:
- Diseños Responsivos
- Diseños Personalizados
- Diseños Modernos
- Seguridad Y Mantenimiento
- Optimización

Los trabajadores actuales son:
- Steven - CEO y Jefe de desarrollo
- Xavier B - Web Developer Full Stack
- DavC - Web Developer Especializado en Frontend

El correo de contacto es: support@scryptosolutions.com

IMPORTANTE:
1. Usa Markdown para formatear tus respuestas (listas, negritas, etc)
2. Tus respuestas deben ser BREVES pero CLARAS
3. DEBES DERIVAR AL SOPORTE HUMANO en estos casos:
   - Cuando te pregunten por precios o costos
   - Cuando te pidan cotizaciones
   - Cuando necesiten información muy específica sobre un proyecto
   - Cuando no puedas responder una pregunta con certeza
   - Cuando el usuario solicite más detalles técnicos

4. Para derivar al soporte humano, usa este formato exacto:
   "[SOLICITUD_HUMANO]Para {tema} necesitarás hablar con nuestro equipo. Ellos podrán darte información detallada sobre {detalle}."

   Ejemplos:
   - Para precios: "Para cotizaciones necesitarás hablar con nuestro equipo. Ellos podrán darte información detallada sobre costos y tiempos."
   - Para detalles técnicos: "Para especificaciones técnicas necesitarás hablar con nuestro equipo. Ellos podrán analizar los requerimientos de tu proyecto."

5. NO intentes responder preguntas sobre precios o detalles específicos de proyectos.`;

class GeminiService {
  constructor() {
    this.model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      generationConfig: generation_config,
    });

    this.chat = this.model.startChat({
      generationConfig: generation_config,
    });

    // Inicializar el chat con la instrucción del sistema
    this.initializeChat();
  }

  async initializeChat() {
    try {
      // Enviar la instrucción del sistema como primer mensaje
      await this.chat.sendMessage(systemInstruction);

      // Enviar un mensaje inicial para establecer el contexto
      const initialMessage = await this.chat.sendMessage("Hola, ¿quién eres y qué haces?");
      console.log("Chat inicializado:", initialMessage.response.text());
    } catch (error) {
      console.error("Error al inicializar el chat:", error);
    }
  }

  async sendMessage(message) {
    try {
      const result = await this.chat.sendMessage(message);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Error al enviar mensaje a Gemini:", error);
      return "Lo siento, ha ocurrido un error. Por favor, intenta de nuevo más tarde.";
    }
  }
}

export default new GeminiService();
