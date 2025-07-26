import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = t('hero.title');

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="mb-6">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              {t('hero.availability')}
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
              {t('hero.subtitle')}
            </h2>
          </div>

          {/* Typewriter Effect */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="inline-block min-h-[1.2em]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="gradient-primary text-white font-semibold shadow-purple"
              onClick={() => scrollToSection('projects')}
            >
              {t('hero.cta.projects')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-accent font-semibold"
              onClick={() => scrollToSection('about')}
            >
              {t('hero.cta.about')}
            </Button>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
            <a 
              href="mailto:hamzaerziki@outlook.com" 
              className="hover:text-primary transition-smooth"
            >
              {t('contact.email')}: hamzaerziki@outlook.com
            </a>
            <a 
              href="tel:0624618601" 
              className="hover:text-primary transition-smooth"
            >
              {t('contact.phone')}: 0624618601
            </a>
            <a 
              href="#" 
              className="hover:text-primary transition-smooth"
            >
              {t('contact.linkedin')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};