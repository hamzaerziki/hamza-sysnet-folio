import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { useState, useEffect } from 'react';

export const Navigation = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-smooth ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-xl font-bold gradient-primary bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Hamza Erziki
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {[
              { key: 'about', id: 'about' },
              { key: 'positions', id: 'positions' },
              { key: 'projects', id: 'projects' },
              { key: 'skills', id: 'skills' },
              { key: 'certificates', id: 'certificates' },
            ].map(({ key, id }) => (
              <button
                key={key}
                onClick={() => scrollToSection(id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              >
                {t(`nav.${key}`)}
              </button>
            ))}
          </div>

          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};