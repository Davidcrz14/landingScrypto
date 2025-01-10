# Scrypto Landing Page + Chat Bot

Página web moderna y optimizada para Scrypto Solutions, que incluye un chatbot inteligente impulsado por Gemini AI, MODELO Gemini 2.0.

## 🚀 Características Principales

- **Diseño Moderno**: Interfaz limpia y minimalista con efectos glassmorphism
- **Modo Oscuro**: Soporte nativo para dark/light mode con transiciones suaves
- **Multilenguaje**: Sistema de internacionalización ES/EN
- **Chat Bot IA**: Asistente virtual integrado con Gemini 2.0
- **Diseño Responsivo**: Adaptable a todos los dispositivos
- **Animaciones Optimizadas**: Transiciones fluidas y efectos visuales

## 🚀 Tecnologías

### Frontend

- **React 18 + Vite**: Framework principal con configuración optimizada
- **TailwindCSS**: Utilidades CSS para diseño responsivo
- **Framer Motion**: Sistema de animaciones y transiciones
- **React Context**: Manejo de estado global y temas

### IA y Servicios

- **Google Gemini AI**: Motor de IA para el chatbot
- **React Markdown**: Renderizado de respuestas con formato

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── About.jsx       # Sección Sobre Nosotros (Actualizado)
│   ├── Contact.jsx     # Información de Contacto
│   ├── FloatingChat.jsx# Chat Bot Flotante
│   ├── Hero.jsx       # Sección Principal
│   ├── Navbar.jsx     # Barra de Navegación
│   └── Services.jsx   # Sección de Servicios
│
├── Services/
│   └── Gemini.jsx    # Integración con Gemini AI
│
├── context/
│   └── LanguageContext.jsx # Sistema de internacionalización
│
└── App.css          # Estilos globales y animaciones
```

## ✨ Mejoras Recientes

### Diseño

- Eliminación de patrones de fondo para una interfaz más limpia
- Nuevo layout para la sección About con diseño asimétrico
- Mejora en la disposición de elementos y espaciado
- Optimización de la jerarquía visual

### Rendimiento

- Memoización de componentes y funciones
- Optimización de re-renderizados
- Lazy loading de componentes pesados
- Mejora en la gestión de estados

### UX/UI

- Nuevas animaciones de scroll
- Efectos hover mejorados
- Mejor contraste y legibilidad
- Tooltips informativos en tecnologías

## 🛠️ Configuración

### Variables de Entorno

```env
VITE_GEMINI_API_KEY=tu_api_key_aqui
```

### Instalación

```bash
# Clonar el repositorio
git clone [https://github.com/Davidcrz14/landingScrypto]

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📱 Características del Chat Bot

- **Respuestas Inteligentes**: Procesamiento de lenguaje natural
- **Formato Markdown**: Respuestas con formato enriquecido
- **Derivación a Soporte**: Sistema automático de escalamiento
- **Historial**: Transcripción de conversaciones
- **Multilenguaje**: Soporte para ES/EN

## 🎨 Personalización

### Temas

El proyecto utiliza TailwindCSS para estilos. Configuración principal en:

- `tailwind.config.js`: Colores, fuentes y breakpoints
- `src/App.css`: Animaciones y estilos globales

### Componentes

Cada componente está diseñado para ser modular y personalizable:

- Props documentadas
- Estilos mediante clases de Tailwind
- Animaciones configurables

## 📈 Optimizaciones

- **Performance**: Código dividido y lazy loading
- **SEO**: Metadatos y estructura semántica
- **Accesibilidad**: ARIA labels y contraste
- **Mobile First**: Diseño responsive optimizado
- **Caché**: Sistema de caché para respuestas del chat
