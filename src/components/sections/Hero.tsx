import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useEffect, useState, lazy, Suspense } from 'react';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { useIsMobile } from '@/hooks/use-mobile';

const ParticleField = lazy(() =>
  import('@/components/3d/ParticleField').then((m) => ({ default: m.ParticleField }))
);

export const Hero = () => {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = t('hero.title');
  const mouse = useMouseParallax(15);
  const isMobile = useIsMobile();

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
      {/* 3D Particles - only on desktop */}
      {!isMobile && (
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      )}

      {/* Fallback background effects for mobile */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div
        className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        style={!isMobile ? { transform: `translate(${mouse.x}px, ${mouse.y}px)` } : undefined}
      />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        style={!isMobile ? { transform: `translate(${-mouse.x * 0.7}px, ${-mouse.y * 0.7}px)` } : undefined}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className="text-center max-w-4xl mx-auto"
          style={!isMobile ? { transform: `translate(${mouse.x * 0.3}px, ${mouse.y * 0.3}px)` } : undefined}
        >
          {/* Main Content */}
          <div className="mb-6 animate-fade-in">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase animate-pulse">
              {t('hero.availability')}
            </p>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-4">
              {t('hero.subtitle')}
            </h2>
          </div>

          {/* Typewriter Effect */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 px-4 sm:px-0">
              <span className="inline-block min-h-[1.2em]">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
            <Button 
              size="lg" 
              className="gradient-primary text-white font-semibold shadow-purple hover:shadow-glow hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() => scrollToSection('projects')}
            >
              {t('hero.cta.projects')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-accent font-semibold hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() => scrollToSection('about')}
            >
              {t('hero.cta.about')}
            </Button>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-sm text-muted-foreground px-4">
            <a 
              href="mailto:hamzaerziki@outlook.com" 
              className="hover:text-primary transition-all duration-300 hover:scale-105 text-center sm:text-left"
            >
              {t('contact.email')}: hamzaerziki@outlook.com
            </a>
            <a 
              href="tel:0624618601" 
              className="hover:text-primary transition-all duration-300 hover:scale-105 text-center sm:text-left"
            >
              {t('contact.phone')}: 0624618601
            </a>
            <a 
              href="https://www.linkedin.com/in/hamza-erziki/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-all duration-300 hover:scale-105 text-center sm:text-left"
            >
              {t('contact.linkedin')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
