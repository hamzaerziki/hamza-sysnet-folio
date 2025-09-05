import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Certificates = () => {
  const { t } = useLanguage();

  const certificates = [
    {
      title: 'certificates.ccna',
      issuer: 'Cisco',
      type: 'Networking',
    },
    {
      title: 'certificates.python',
      issuer: 'Cisco',
      type: 'Programming',
    },
    {
      title: 'certificates.hardware',
      issuer: 'Cisco',
      type: 'Hardware',
    },
    {
      title: 'certificates.cybersecurity',
      issuer: 'Cisco',
      type: 'Security',
    },
    {
      title: 'certificates.ethicalhacker',
      issuer: 'Cisco',
      type: 'Security',
    },
    {
      title: 'certificates.cybermenaces',
      issuer: 'Cisco',
      type: 'Security',
    },
    {
      title: 'certificates.networksecurity',
      issuer: 'Cisco',
      type: 'Networking',
    },
    {
      title: 'certificates.englishit',
      issuer: 'Cisco',
      type: 'Language',
    },
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('certificates.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="p-6 gradient-card shadow-card border-border/50 hover:shadow-purple transition-smooth">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">
                      {t(cert.title)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {cert.type}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{t('certificates.certified')}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};