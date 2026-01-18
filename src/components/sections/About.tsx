import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const About = () => {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="about" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-primary/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              {t('about.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <Card className="p-6 md:p-8 lg:p-12 gradient-card shadow-card border-border/50 hover:shadow-purple transition-all duration-500 group hover:scale-[1.02]">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-12 md:h-16 bg-gradient-primary rounded-full flex-shrink-0 group-hover:h-16 md:group-hover:h-20 transition-all duration-300"></div>
                    <div className="flex-1">
                      <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed font-light">
                        {t('about.description')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-border/30">
                    <p className="text-base md:text-lg text-primary font-semibold flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-primary animate-pulse"></div>
                      {t('about.approach')}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Right Profile Card */}
            <div className={`flex justify-center mt-8 lg:mt-0 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <Card className="p-6 md:p-8 gradient-card shadow-card border-border/50 max-w-sm w-full hover:scale-105 transition-all duration-500 group">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden shadow-purple group-hover:shadow-glow transition-all duration-500 ring-4 ring-primary/20 group-hover:ring-primary/40">
                      <img 
                        src="/lovable-uploads/hamza-profile.jpeg" 
                        alt="Hamza Erziki"
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-primary rounded-full flex items-center justify-center animate-bounce shadow-lg">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      Hamza Erziki
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground font-medium">
                      {t('hero.subtitle')}
                    </p>
                    <div className="w-12 md:w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="space-y-3 text-xs md:text-sm">
                    <div className="p-3 bg-muted/30 rounded-lg border border-border/30 hover:bg-muted/50 transition-colors duration-300">
                      <p className="font-medium">{t('about.education')}</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors duration-300">
                      <p className="text-primary font-semibold">
                        {t('hero.availability')}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Bottom Floating Elements */}
          <div className={`flex justify-center mt-20 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex gap-4">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse delay-200"></div>
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};