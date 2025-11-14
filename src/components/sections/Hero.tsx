import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Availability Badge */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary-glow border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse"></span>
              {t('hero.availability')}
            </span>
          </div>

          {/* Subtitle */}
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t('hero.subtitle')}
          </h2>

          {/* Main Title with Typewriter */}
          <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 px-4 sm:px-0">
              <span className="inline-block min-h-[1.2em] bg-gradient-cyber bg-clip-text text-transparent">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </h1>
            
            {/* Animated Underline */}
            <div className="w-32 h-1 mx-auto rounded-full gradient-primary shadow-glow"></div>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto px-4 leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="group gradient-cyber text-white font-semibold shadow-glow-strong hover:shadow-glow-strong hover:scale-105 transition-all duration-300 w-full sm:w-auto text-base px-8 py-6"
              onClick={() => scrollToSection('projects')}
            >
              {t('hero.cta.projects')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group glass-card font-semibold hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto text-base px-8 py-6"
              onClick={() => scrollToSection('about')}
            >
              {t('hero.cta.about')}
            </Button>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto px-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a 
              href="mailto:hamzaerziki@outlook.com" 
              className="glass-card p-4 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover-lift group"
            >
              <div className="text-xs text-muted-foreground mb-1">{t('contact.email')}</div>
              <div className="text-sm font-medium text-foreground group-hover:text-primary-glow transition-colors">
                hamzaerziki@outlook.com
              </div>
            </a>
            <a 
              href="tel:0624618601" 
              className="glass-card p-4 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover-lift group"
            >
              <div className="text-xs text-muted-foreground mb-1">{t('contact.phone')}</div>
              <div className="text-sm font-medium text-foreground group-hover:text-primary-glow transition-colors">
                0624618601
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/hamza-erziki/" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover-lift group"
            >
              <div className="text-xs text-muted-foreground mb-1">{t('contact.linkedin')}</div>
              <div className="text-sm font-medium text-foreground group-hover:text-primary-glow transition-colors">
                LinkedIn Profile
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};