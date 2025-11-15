import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Certificates = () => {
  const { t } = useLanguage();

  const certificates = [
    {
      title: 'certificates.networksecurity',
      issuer: 'Cisco',
      type: 'Networking',
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
      title: 'certificates.ccna',
      issuer: 'Cisco',
      type: 'Networking',
    },
    {
      title: 'certificates.cybersecurity',
      issuer: 'Cisco',
      type: 'Security',
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
      title: 'certificates.englishit',
      issuer: 'Cisco',
      type: 'Language',
    },
  ];

  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              {t('certificates.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full shadow-glow"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Certifications professionnelles en réseau, sécurité et technologies IT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card 
                key={index} 
                className="group p-8 glass-card border border-border/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-6">
                    {/* Certificate Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-purple group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <span className="text-2xl">🎓</span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                          {t(cert.title)}
                        </h3>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                          {cert.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  
                  {/* Verified Badge */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-glow transition-all duration-300">
                      <span className="text-white text-lg font-bold">✓</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {t('certificates.certified')}
                    </span>
                    <div className="flex-1"></div>
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};