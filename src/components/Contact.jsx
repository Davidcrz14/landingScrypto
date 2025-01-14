import {
  ArrowRightIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = useMemo(() => [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: t('contact.form.email'),
      value: 'support@scryptosolutions.com',
      href: 'mailto:support@scryptosolutions.com'
    },
    {
      icon: <FaDiscord className="w-6 h-6" />,
      title: 'Discord',
      value: 'scryptosolutions',
      href: 'https://discord.gg/fmYnnhEzHe'
    }
  ], [t]);

  return (
    <section id="contact" className="relative py-24 bg-white dark:bg-dark-100">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 sm:mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4 sm:px-0">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-12"
          >
            <div className="bg-white dark:bg-dark-200 rounded-2xl shadow-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                {t('contact.info.title')}
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group flex items-center space-x-3 sm:space-x-4 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="text-primary">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                        {item.title}
                      </p>
                      <p className="text-sm sm:text-base font-medium">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="mailto:support@scryptosolutions.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <EnvelopeIcon className="w-5 h-5 mr-2" />
                  {t('contact.cta.email')}
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </motion.a>
                <motion.a
                  href="https://discord.gg/fmYnnhEzHe"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-[#5865F2] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <FaDiscord className="w-5 h-5 mr-2" />
                  Únete a Discord
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
