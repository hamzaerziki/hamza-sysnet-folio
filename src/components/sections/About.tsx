import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

export const About = () => {
  const { t } = useLanguage();

  const passions = [
    'about.passion.systems',
    'about.passion.virtualization',
    'about.passion.networks',
    'about.passion.containers',
    'about.passion.security',
    'about.passion.monitoring',
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('about.title')}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {t('about.passion')}
                </h3>
                <ul className="space-y-3">
                  {passions.map((passion, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{t(passion)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4">
                <p className="text-primary font-semibold">
                  {t('about.approach')}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Card className="p-8 gradient-card shadow-card border-border/50 max-w-sm">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-purple">
                    <span className="text-2xl font-bold text-white">HE</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Hamza Erziki</h3>
                    <p className="text-muted-foreground">{t('hero.subtitle')}</p>
                  </div>
                  <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                    <p>2ᵉ année - Infrastructures Digitales</p>
                    <p className="text-primary font-medium">{t('hero.availability')}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};