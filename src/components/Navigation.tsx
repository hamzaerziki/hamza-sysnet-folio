import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-smooth ${
      isScrolled ? 'bg-background/95 backdrop-blur-xl shadow-card border-b border-border/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-xl font-bold gradient-primary bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => scrollToSection('hero')}
          >
            Hamza Erziki
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { key: 'about', id: 'about' },
              { key: 'projects', id: 'projects' },
              { key: 'skills', id: 'skills' },
              { key: 'certificates', id: 'certificates' },
            ].map(({ key, id }) => (
              <button
                key={key}
                onClick={() => scrollToSection(id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {t(`nav.${key}`)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2 hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden fixed left-0 right-0 top-full bg-background/98 backdrop-blur-xl border-b border-border/20 shadow-lg z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
          <div className="container mx-auto px-4 py-6 space-y-2">
            {[
              { key: 'about', id: 'about' },
              { key: 'projects', id: 'projects' },
              { key: 'skills', id: 'skills' },
              { key: 'certificates', id: 'certificates' },
            ].map(({ key, id }) => (
              <button
                key={key}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left py-4 px-4 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-300 border border-border/10 hover:border-primary/20"
              >
                {t(`nav.${key}`)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};