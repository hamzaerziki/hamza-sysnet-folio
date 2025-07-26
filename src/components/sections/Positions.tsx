import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

export const Positions = () => {
  const { t } = useLanguage();

  const positions = [
    'positions.admin',
    'positions.security',
    'positions.cloud',
    'positions.datacenter',
    'positions.support',
    'positions.infrastructure',
    'positions.devops',
  ];

  return (
    <section id="positions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('positions.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <Card 
                key={index} 
                className="p-6 gradient-card shadow-card border-border/50 hover:shadow-purple transition-smooth cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-gradient-primary flex-shrink-0 group-hover:shadow-glow transition-smooth"></div>
                  <h3 className="font-semibold text-sm md:text-base group-hover:text-primary transition-smooth">
                    {t(position)}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};