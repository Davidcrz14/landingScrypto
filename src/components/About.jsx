import {
    ChartBarIcon,
    CheckCircleIcon,
    ClockIcon,
    CodeBracketIcon,
    CommandLineIcon,
    CpuChipIcon,
    CubeIcon,
    PaintBrushIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    WindowIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    {
      label: 'about.stats.projects',
      value: '6',
      icon: <RocketLaunchIcon className="w-6 h-6 text-primary" />
    },
    {
      label: 'about.stats.clients',
      value: '10',
      icon: <UserGroupIcon className="w-6 h-6 text-primary" />
    },
    {
      label: 'about.stats.experience',
      value: '1',
      icon: <ClockIcon className="w-6 h-6 text-primary" />
    },
    {
      label: 'about.stats.technologies',
      value: '12+',
      icon: <CpuChipIcon className="w-6 h-6 text-primary" />
    }
  ];

  const features = [
    {
      title: 'about.why.quality.title',
      description: 'about.why.quality.description',
      icon: <CheckCircleIcon className="w-6 h-6" />
    },
    {
      title: 'about.why.performance.title',
      description: 'about.why.performance.description',
      icon: <ChartBarIcon className="w-6 h-6" />
    },
    {
      title: 'about.why.security.title',
      description: 'about.why.security.description',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    }
  ];

  const team = [
    {
      name: 'Steven',
      role: 'CEO',
      description: t('about.team.members.steven.description'),
      skills: ['Gestión', 'Estrategia', 'Innovación'],
      icon: <CommandLineIcon className="w-8 h-8 text-primary" />,
      bgIcon: <CubeIcon className="w-32 h-32 opacity-5 absolute -right-6 -bottom-6 transform rotate-12" />
    },
    {
      name: 'Xavier B',
      role: 'Web Fullstack',
      description: t('about.team.members.xavier.description'),
      skills: ['Backend', 'Frontend', 'DevOps'],
      icon: <CodeBracketIcon className="w-8 h-8 text-primary" />,
      bgIcon: <WindowIcon className="w-32 h-32 opacity-5 absolute -right-6 -bottom-6 transform rotate-12" />
    },
    {
      name: 'DavC',
      role: 'Frontend Web',
      description: t('about.team.members.davc.description'),
      skills: ['UI/UX', 'React', 'Tailwind'],
      icon: <PaintBrushIcon className="w-8 h-8 text-primary" />,
      bgIcon: <CodeBracketIcon className="w-32 h-32 opacity-5 absolute -right-6 -bottom-6 transform rotate-12" />
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-white dark:bg-dark-100 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-dark-200 p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl transform -rotate-1"></div>
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 sm:mb-6">
                  {t('about.title')}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  {t('about.description')}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  {['PHP', 'HTML', 'CSS', 'JavaScript', 'React', 'MySQL', 'Tailwind'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-lg text-xs sm:text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-dark-200 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">
                      {t(stat.label)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              {t('about.team.title')}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
              {t('about.team.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-dark-200 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform group-hover:rotate-6 transition-transform"></div>
                      <div className="relative">
                        {member.icon}
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium text-center mb-3 sm:mb-4 text-sm sm:text-base">
                    {member.role}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center mb-4 sm:mb-6">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary/10 text-primary rounded-lg text-xs sm:text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {member.bgIcon}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('about.why.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('about.why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-dark-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t(feature.title)}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(feature.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
