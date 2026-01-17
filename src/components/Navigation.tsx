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

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Hamza_Erziki_CV.pdf';
    link.download = 'Hamza_Erziki_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMobileMenuOpen(false); // Close mobile menu after download
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
          
          {/* CV Download Button - Mobile (centered between name and hamburger) */}
          <div className="flex-1 flex justify-center md:hidden">
            <Button 
              variant="default" 
              size="sm"
              onClick={handleDownloadCV}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-lg text-xs px-3 py-1"
            >
              {t('cv.download')}
            </Button>
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
            
            {/* CV Download Button - Desktop */}
            <Button 
              variant="default" 
              size="sm"
              onClick={handleDownloadCV}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-lg"
            >
              {t('cv.download')}
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
            
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

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        {/* Mobile Navigation Sidebar */}
        <div className={`fixed top-0 left-0 h-screen w-80 max-w-[80vw] bg-background border-r border-border/20 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/10">
              <div className="text-lg font-bold gradient-primary bg-clip-text text-transparent">
                Hamza Erziki
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-accent rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Navigation Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Navigation Links */}
              <div className="space-y-3">
                {[
                  { key: 'about', id: 'about' },
                  { key: 'projects', id: 'projects' },
                  { key: 'skills', id: 'skills' },
                  { key: 'certificates', id: 'certificates' },
                ].map(({ key, id }) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(id)}
                    className="block w-full text-left py-4 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/20"
                  >
                    {t(`nav.${key}`)}
                  </button>
                ))}
              </div>
              
              {/* CV Download Button - Mobile Sidebar */}
              <div className="pt-6 border-t border-border/20 mt-6">
                <Button 
                  variant="default" 
                  size="lg"
                  onClick={handleDownloadCV}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-lg"
                >
                  {t('cv.download')}
                </Button>
              </div>
              
              {/* Language Toggle in Sidebar */}
              <div className="pt-6">
                <div className="flex justify-center">
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};