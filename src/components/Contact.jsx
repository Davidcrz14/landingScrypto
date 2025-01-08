import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa'; // Solo se mantiene GitHub
import { useLanguage } from '../context/LanguageContext';

const socialLinks = [
  { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, href: '#' } // Solo GitHub
];

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    // Aquí iría la lógica real de envío
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: t('contact.form.email'),
      value: 'support@scryptosolutions.com',
      href: 'mailto:contacto@scrypto.com'
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: t('contact.form.phone'),
      value: '0000000000',
      href: 'tel:+12345678900'
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: t('contact.form.location'),
      value: 'No c',
      href: '#'
    }
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
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

            <div className="bg-white dark:bg-dark-200 rounded-2xl shadow-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                {t('contact.info.social')}
              </h3>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-200 rounded-2xl shadow-xl p-6 sm:p-8 space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <UserIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{t('contact.form.name')}</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-dark-400 focus:ring-2 focus:ring-primary focus:border-primary dark:text-white transition-colors text-sm sm:text-base"
                    placeholder={t('contact.form.placeholders.name')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <EnvelopeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{t('contact.form.email')}</span>
                    </div>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-dark-400 focus:ring-2 focus:ring-primary focus:border-primary dark:text-white transition-colors text-sm sm:text-base"
                    placeholder={t('contact.form.placeholders.email')}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <GlobeAltIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{t('contact.form.subject')}</span>
                  </div>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-dark-400 focus:ring-2 focus:ring-primary focus:border-primary dark:text-white transition-colors text-sm sm:text-base"
                  placeholder={t('contact.form.placeholders.subject')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <ChatBubbleLeftRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{t('contact.form.message')}</span>
                  </div>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-dark-400 focus:ring-2 focus:ring-primary focus:border-primary dark:text-white transition-colors resize-none text-sm sm:text-base"
                  placeholder={t('contact.form.placeholders.message')}
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 text-sm sm:text-base ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <span>{isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}</span>
                {!isSubmitting && <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
