import { motion } from 'framer-motion';
import { FaCss3Alt, FaDatabase, FaHtml5, FaJs, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiPostgresql, SiTypescript } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const techStack = [
    { name: 'PHP', icon: <FaPhp className="w-8 h-8 text-[#777BB3]" /> },
    { name: 'HTML', icon: <FaHtml5 className="w-8 h-8 text-[#E34F26]" /> },
    { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8 text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <FaJs className="w-8 h-8 text-[#F7DF1E]" /> },
    { name: 'MySQL', icon: <FaDatabase className="w-8 h-8 text-[#4479A1]" /> },
    // MERN Stack
    { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8 text-[#47A248]" /> },
    { name: 'Express.js', icon: <FaNodeJs className="w-8 h-8 text-[#68A063]" /> },
    { name: 'React.js', icon: <FaReact className="w-8 h-8 text-[#61DAFB]" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8 text-[#68A063]" /> },
     // PERN Stack
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8 text-[#336791]" /> },
     // Next.js
    { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8 text-[#000000]" /> },
     // TypeScript
    { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8 text-[#007ACC]" /> },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden bg-white dark:bg-dark-100">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold"
              >
                {t('hero.badge')}
              </motion.div>
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {t('hero.title')}
                  <span className="block mt-2 sm:mt-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-normal">
                    {t('hero.titleHighlight')}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  {t('hero.description')}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all text-center text-sm sm:text-base"
              >
                {t('hero.cta.primary')}
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-dark-200 text-gray-900 dark:text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-center border border-gray-200 dark:border-dark-300 text-sm sm:text-base"
              >
                {t('hero.cta.secondary')}
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative w-full aspect-square max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-xl mx-auto">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Formas geométricas decorativas */}
                <motion.div
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 -right-4 w-20 sm:w-24 md:w-36 h-20 sm:h-24 md:h-36 border-2 border-gray-200/50 dark:border-gray-700/50 animate-rotate-slow hidden sm:block"
                  style={{ transform: 'skew(-15deg)' }}
                />
                <motion.div
                  initial={{ opacity: 0, rotate: 15 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="absolute bottom-4 -left-4 w-24 sm:w-28 md:w-44 h-24 sm:h-28 md:h-44 border-2 border-gray-300/50 dark:border-gray-600/50 rounded-sm animate-rotate-reverse hidden sm:block"
                  style={{ transform: 'rotate(45deg)' }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-8 -left-2 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 border-2 border-gray-400/50 dark:border-gray-500/50 animate-rotate-medium hidden sm:block"
                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                />

                {/* Contenedor del logo */}
                <div className="relative w-full h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src="/logo.png"
                      alt="Scrypto Logo"
                      className="w-full h-full object-contain transition-transform duration-300"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 sm:mt-24"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('hero.techTitle')}
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center justify-center p-4 sm:p-6 bg-white dark:bg-dark-200 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-1 sm:p-2">
                  {tech.icon}
                </div>
                <span className="mt-2 sm:mt-3 text-sm sm:text-base font-medium text-gray-900 dark:text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
