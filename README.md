# Scrypto Landing Page + Chat Bot

Página web moderna y optimizada para Scrypto Solutions, que incluye un chatbot inteligente impulsado por Gemini AI, MODELO Gemini 2.0.

## 🚀 Tecnologías Principales

- **React + Vite**: Framework principal con configuración optimizada
- **TailwindCSS**: Framework CSS para diseño responsivo y dark mode
- **Framer Motion**: Animaciones fluidas y optimizadas
- **Google Gemini AI**: Motor de IA para el chatbot
- **React Markdown**: Renderizado de contenido con formato

## 📁 Estructura del Proyecto

src/
├── components/
│ ├── About.jsx # Sección Sobre Nosotros
│ ├── Contact.jsx # Formulario de Contacto
│ ├── FloatingChat.jsx # Chat Bot Flotante
│ ├── Hero.jsx # Sección Principal
│ ├── Navbar.jsx # Barra de Navegación
│ └── Services.jsx # Sección de Servicios
│
├── Services/
│ └── Gemini.jsx # Servicio de integración con Gemini AI
│
├── context/
│ └── LanguageContext.jsx # Contexto para internacionalización

## ✨ Características

- **Diseño Responsivo**: Adaptable a todos los dispositivos
- **Modo Oscuro**: Soporte nativo para dark/light mode
- **Multilenguaje**: Sistema de internacionalización
- **Chat Bot IA**: Asistente virtual integrado
- **Animaciones**: Transiciones y efectos optimizados
- **SEO Optimizado**: Metadatos y estructura semántica

## 🛠️ Optimizaciones

- Lazy loading de componentes
- Imágenes optimizadas
- Animaciones basadas en GPU
- Caché de respuestas del chatbot
- Diseño atómico de componentes

## 🔧 Variables de Entorno

.env
VITE_GEMINI_API_KEY=tu_api_key_aqui

## 📦 Dependencias Principales

- @heroicons/react: Iconos optimizados
- @google/generative-ai: SDK de Gemini
- framer-motion: Librería de animaciones
- react-markdown: Renderizado de markdown
- tailwindcss: Framework CSS

## 🚀 Inicio Rápido

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 💡 Características del Chat Bot

- Respuestas en tiempo real
- Formato Markdown en respuestas
- Integración con sistema de soporte
- Transcripción de conversaciones
- Derivación automática a soporte humano

## 🎨 Personalización

El proyecto utiliza TailwindCSS para estilos. Los temas principales se pueden modificar en:

- tailwind.config.js
- src/App.css

## 📱 PWA Ready

La aplicación está configurada como PWA (Progressive Web App) para una mejor experiencia móvil.
