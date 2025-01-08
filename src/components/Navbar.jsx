import {
    Bars3Icon,
    EnvelopeIcon,
    HomeIcon,
    LanguageIcon,
    MoonIcon,
    SunIcon,
    UserGroupIcon,
    WrenchScrewdriverIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const menuItems = [
  { name: { es: 'Inicio', en: 'Home' }, href: '#home', icon: <HomeIcon className="w-5 h-5" /> },
  { name: { es: 'Servicios', en: 'Services' }, href: '#services', icon: <WrenchScrewdriverIcon className="w-5 h-5" /> },
  { name: { es: 'Nosotros', en: 'About' }, href: '#about', icon: <UserGroupIcon className="w-5 h-5" /> },
  { name: { es: 'Contacto', en: 'Contact' }, href: '#contact', icon: <EnvelopeIcon className="w-5 h-5" /> }
];

const Navbar = ({ isDark, setIsDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detectar sección activa
      const sections = menuItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-100/80 shadow-lg backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Scrypto
              </span>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name[language]}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.name[language]}</span>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-200 hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
                aria-label="Toggle language"
              >
                <div className="flex items-center space-x-1">
                  <LanguageIcon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {language.toUpperCase()}
                  </span>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-200 hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <SunIcon className="w-5 h-5 text-primary" />
                ) : (
                  <MoonIcon className="w-5 h-5 text-primary" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-dark-100 shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name[language]}
                  href={item.href}
                  onClick={closeMenu}
                  whileHover={{ x: 4 }}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.name[language]}</span>
                </motion.a>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="w-full flex items-center space-x-2 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <LanguageIcon className="w-5 h-5" />
                <span>{language === 'es' ? 'English' : 'Español'}</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDark(!isDark)}
                className="w-full flex items-center space-x-2 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {isDark ? (
                  <>
                    <SunIcon className="w-5 h-5" />
                    <span>{language === 'es' ? 'Modo Claro' : 'Light Mode'}</span>
                  </>
                ) : (
                  <>
                    <MoonIcon className="w-5 h-5" />
                    <span>{language === 'es' ? 'Modo Oscuro' : 'Dark Mode'}</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
