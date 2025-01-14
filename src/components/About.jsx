import {
  ClockIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  WindowIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { memo } from 'react';
import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact
} from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

const TechIcon = memo(({ icon: Icon, color }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{
      scale: 1.1,
      y: -8,
      transition: { type: "spring", stiffness: 300 }
    }}
    transition={{ duration: 0.3 }}
    className="group flex items-center justify-center p-4 bg-white/50 dark:bg-dark-200/50 rounded-2xl shadow-lg hover:shadow-xl transform-gpu backdrop-blur-sm"
  >
    <div className="text-3xl sm:text-4xl transform transition-all duration-300 group-hover:scale-110" style={{ color }}>
      <Icon />
    </div>
  </motion.div>
));

TechIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired,
};

TechIcon.displayName = 'TechIcon';

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

  const team = [
    {
      name: 'Steven',
      role: 'CEO',
      description: t('about.team.members.steven.description'),
      skills: ['Gestión', 'Estrategia', 'Innovación'],
      icon: <CommandLineIcon className="w-8 h-8 text-primary" />,
      bgIcon: <WindowIcon className="w-32 h-32 opacity-5 absolute -right-6 -bottom-6 transform rotate-12" />
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

  const technologies = [
    { icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: FaPhp, name: 'PHP', color: '#777BB4' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: FaBootstrap, name: 'Bootstrap', color: '#7952B3' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: FaDatabase, name: 'Databases', color: '#239120' },
    { icon: SiDotnet, name: '.NET', color: '#512BD4' },
    { icon: FaGithub, name: 'GitHub', color: '#181717' },
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: SiC, name: 'C', color: '#A8B9CC' },
    { icon: SiCplusplus, name: 'C++', color: '#00599C' },
  ];

  return (
    <section id="about" className="relative py-24 bg-white dark:bg-dark-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sobre Scrypto */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8 lg:text-left">
              {t('about.title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 lg:text-left">
              {t('about.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/50 dark:bg-dark-200/50 p-6 rounded-2xl shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    {stat.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {t(stat.label)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-start justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/3 mb-8 lg:mb-0 lg:sticky lg:top-24"
            >
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 lg:text-left">
                {t('about.team.title')}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 lg:text-left">
                {t('about.team.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/3 lg:pl-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white/50 dark:bg-dark-200/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden backdrop-blur-sm"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform group-hover:rotate-6 transition-transform"></div>
                          <div className="relative">
                            {member.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                            {member.name}
                          </h4>
                          <p className="text-primary font-medium">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                        {member.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium"
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
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3 mb-12 lg:mb-0 lg:pl-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 lg:text-right">
              {t('about.techTitle')}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 lg:text-right">
              Nuestro stack tecnológico nos permite crear soluciones robustas y escalables.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <TechIcon icon={tech.icon} color={tech.color} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-medium bg-white/90 dark:bg-dark-200/90 text-primary px-2 py-1 rounded-md">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
