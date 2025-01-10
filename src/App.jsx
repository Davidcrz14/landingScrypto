import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import FloatingChat from './components/FloatingChat';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const { t } = useLanguage();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verificar preferencia de modo oscuro del sistema
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDark);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-100 relative overflow-x-hidden w-full">
      <div className="relative">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <main className="w-full">
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <footer className="bg-transparent py-8 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300">
                © {new Date().getFullYear()} Scrypto. {t('footer.rights')}
              </p>
            </div>
          </div>
        </footer>
        <FloatingChat />
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
