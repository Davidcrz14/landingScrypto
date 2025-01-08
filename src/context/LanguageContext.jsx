import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      contact: 'Contacto',
      lightMode: 'Modo Claro',
      darkMode: 'Modo Oscuro'
    },
    hero: {
      badge: 'Innovación Digital',
      title: 'Transformamos Ideas en',
      titleHighlight: 'Soluciones Digitales',
      description: 'Creamos experiencias digitales excepcionales que impulsan el crecimiento de tu negocio con tecnologías de vanguardia.',
      cta: {
        primary: 'Inicia tu Proyecto',
        secondary: 'Explora Servicios'
      },
      techTitle: 'Tecnologías que Dominamos'
    },
    services: {
      title: 'Nuestros Servicios',
      description: 'Desarrollo completo de aplicaciones web y de escritorio adaptadas a tus necesidades',
      items: {
        web: {
          title: 'Desarrollo Web',
          description: 'Creamos aplicaciones web completas y responsivas utilizando las últimas tecnologías como PHP, HTML, CSS, JavaScript, React, MySQL y Tailwind.'
        },
        desktop: {
          title: 'Aplicaciones de Escritorio',
          description: 'Desarrollamos aplicaciones de escritorio robustas y eficientes para optimizar tus procesos empresariales.'
        },
        responsive: {
          title: 'Diseño Responsivo',
          description: 'Aseguramos que todas nuestras aplicaciones funcionen perfectamente en cualquier dispositivo y tamaño de pantalla.'
        },
        security: {
          title: 'Seguridad y Mantenimiento',
          description: 'Proporcionamos soluciones seguras y ofrecemos mantenimiento continuo para mantener tus aplicaciones actualizadas.'
        }
      },
      learnMore: 'Saber más',
      consultation: 'Consulta Gratuita'
    },
    about: {
      title: 'Sobre Scrypto',
      description: 'We are a team dedicated to the development of web and desktop applications, we offer our solutions to any private company or person.',
      stats: {
        projects: 'Proyectos Exitosos',
        clients: 'Clientes Satisfechos',
        experience: 'Años de Experiencia',
        technologies: 'Tecnologías Dominadas'
      },
      team: {
        title: 'Nuestro Equipo',
        description: 'Un equipo apasionado por la tecnología y el desarrollo',
        members: {
          steven: {
            description: 'Líder de el equipo de desarrollo'
          },
          xavier: {
            description: 'Experto en desarrollo full-stack web'
          },
          davc: {
            description: 'Desarrollador Frontend especializado en React y Tailwind'
          }
        }
      },
      why: {
        title: '¿Por qué Elegirnos?',
        subtitle: 'Combinamos experiencia técnica con un profundo entendimiento de las necesidades empresariales',
        quality: {
          title: 'Calidad Garantizada',
          description: 'Implementamos rigurosos estándares de calidad en cada proyecto.'
        },
        performance: {
          title: 'Rendimiento Optimizado',
          description: 'Soluciones diseñadas para máxima eficiencia y velocidad.'
        },
        security: {
          title: 'Seguridad Avanzada',
          description: 'Protección robusta para tus activos digitales.'
        }
      }
    },
    contact: {
      title: 'Contáctanos',
      description: '¿Tienes un proyecto en mente? Conversemos sobre cómo podemos ayudarte a hacerlo realidad',
      form: {
        name: 'Nombre',
        email: 'Email',
        phone: 'Teléfono',
        location: 'Ubicación',
        subject: 'Asunto',
        message: 'Mensaje',
        placeholders: {
          name: 'Tu nombre',
          email: 'tu@email.com',
          subject: '¿Cómo podemos ayudarte?',
          message: 'Cuéntanos más sobre tu proyecto...'
        },
        submit: 'Enviar Mensaje',
        sending: 'Enviando...'
      },
      info: {
        title: 'Información de Contacto',
        social: 'Síguenos'
      }
    },
    footer: {
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode'
    },
    hero: {
      badge: 'Digital Innovation',
      title: 'We Transform Ideas into',
      titleHighlight: 'Digital Solutions',
      description: 'We create exceptional digital experiences that drive your business growth with cutting-edge technologies.',
      cta: {
        primary: 'Start Your Project',
        secondary: 'Explore Services'
      },
      techTitle: 'Technologies We Master'
    },
    services: {
      title: 'Our Services',
      description: 'Complete development of web and desktop applications tailored to your needs',
      items: {
        web: {
          title: 'Web Development',
          description: 'We create complete and responsive web applications using the latest technologies like PHP, HTML, CSS, JavaScript, React, MySQL, and Tailwind.'
        },
        desktop: {
          title: 'Desktop Applications',
          description: 'We develop robust and efficient desktop applications to optimize your business processes.'
        },
        responsive: {
          title: 'Responsive Design',
          description: 'We ensure that all our applications work perfectly on any device and screen size.'
        },
        security: {
          title: 'Security & Maintenance',
          description: 'We provide secure solutions and offer continuous maintenance to keep your applications up to date.'
        }
      },
      learnMore: 'Learn More',
      consultation: 'Free Consultation'
    },
    about: {
      title: 'About Scrypto',
      description: 'We are a team dedicated to the development of web and desktop applications, we offer our solutions to any private company or person.',
      stats: {
        projects: 'Successful Projects',
        clients: 'Satisfied Clients',
        experience: 'Years of Experience',
        technologies: 'Technologies Mastered'
      },
      team: {
        title: 'Our Team',
        description: 'A team passionate about technology and development',
        members: {
          steven: {
            description: 'Development Team Leader'
          },
          xavier: {
            description: 'Web Full-stack Development Expert'
          },
          davc: {
            description: 'Frontend Developer specialized in React and Tailwind'
          }
        }
      },
      why: {
        title: 'Why Choose Us?',
        subtitle: 'We combine technical expertise with a deep understanding of business needs',
        quality: {
          title: 'Guaranteed Quality',
          description: 'We implement rigorous quality standards in every project.'
        },
        performance: {
          title: 'Optimized Performance',
          description: 'Solutions designed for maximum efficiency and speed.'
        },
        security: {
          title: 'Advanced Security',
          description: 'Robust protection for your digital assets.'
        }
      }
    },
    contact: {
      title: 'Contact Us',
      description: 'Have a project in mind? Let\'s talk about how we can help make it happen',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        subject: 'Subject',
        message: 'Message',
        placeholders: {
          name: 'Your name',
          email: 'you@email.com',
          subject: 'How can we help you?',
          message: 'Tell us more about your project...'
        },
        submit: 'Send Message',
        sending: 'Sending...'
      },
      info: {
        title: 'Contact Information',
        social: 'Follow Us'
      }
    },
    footer: {
      rights: 'All rights reserved.'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (path) => {
    return path.split('.').reduce((obj, key) => obj?.[key], translations[language]) || path;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
