import {
  ArrowRightIcon,
  CodeBracketSquareIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  WindowIcon
} from '@heroicons/react/24/outline';
import { motion, useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ServiceCard = memo(({ service, index, t }) => {
  const prefersReducedMotion = useReducedMotion();

  const animationConfig = useMemo(() => ({
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.2,
      delay: Math.min(index * 0.1, 0.3),
      ease: [0.25, 0.1, 0.25, 1]
    },
    viewport: {
      once: true,
      margin: "100px",
      amount: 0.3
    }
  }), [index, prefersReducedMotion]);

  return (
    <motion.div
      {...animationConfig}
      className="relative bg-white dark:bg-dark-200 p-6 sm:p-8 rounded-2xl shadow-lg"
    >
      <div className="relative z-10">
        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
          <div className="text-primary">
            {service.icon}
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
          {t(service.title)}
        </h3>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
          {t(service.description)}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
          {service.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary rounded-lg font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center text-primary hover:text-secondary"
        >
          <span className="text-sm sm:text-base font-medium">{t('services.learnMore')}</span>
          <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
        </a>
      </div>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  t: PropTypes.func.isRequired
};

const Services = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const services = useMemo(() => [
    {
      title: 'services.items.web.title',
      description: 'services.items.web.description',
      icon: <CodeBracketSquareIcon className="w-8 h-8" />,
      tech: ['MERN', 'PERN', 'Next.js', 'TypeScript', 'PHP', 'MySQL']
    },
    {
      title: 'services.items.desktop.title',
      description: 'services.items.desktop.description',
      icon: <WindowIcon className="w-8 h-8" />,
      tech: ['C#', '.NET', 'WPF']
    },
    {
      title: 'services.items.responsive.title',
      description: 'services.items.responsive.description',
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      tech: ['Tailwind', 'CSS', 'Bootstrap']
    },
    {
      title: 'services.items.security.title',
      description: 'services.items.security.description',
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      tech: ['Security', 'Updates', 'Support']
    }
  ], []);

  const titleAnimConfig = useMemo(() => ({
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.3 },
    viewport: { once: true, amount: 0.5 }
  }), [prefersReducedMotion]);

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-white dark:bg-dark-100">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...titleAnimConfig}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 sm:mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed px-4 sm:px-0">
            {t('services.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);
