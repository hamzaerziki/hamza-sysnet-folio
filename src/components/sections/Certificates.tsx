import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';
import { Award, Shield, Network, Code, Cpu, Languages } from 'lucide-react';

export const Certificates = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeIssuer, setActiveIssuer] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('certificates');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      title: 'certificates.fortinet',
      issuer: 'Fortinet',
      type: 'certificates.type.security',
      icon: Shield,
    },
    {
      title: 'certificates.ctf',
      issuer: 'Competition',
      type: 'certificates.type.security',
      icon: Shield,
    },
    {
      title: 'certificates.networksecurity',
      issuer: 'Cisco',
      type: 'certificates.type.networking',
      icon: Network,
    },
    {
      title: 'certificates.ethicalhacker',
      issuer: 'Cisco',
      type: 'certificates.type.security',
      icon: Shield,
    },
    {
      title: 'certificates.cybermenaces',
      issuer: 'Cisco',
      type: 'certificates.type.security',
      icon: Shield,
    },
    {
      title: 'certificates.ccna',
      issuer: 'Cisco',
      type: 'certificates.type.networking',
      icon: Network,
    },
    {
      title: 'certificates.ccnasrw',
      issuer: 'Cisco',
      type: 'certificates.type.networking',
      icon: Network,
    },
    {
      title: 'certificates.ccnaensa',
      issuer: 'Cisco',
      type: 'certificates.type.networking',
      icon: Network,
    },
    {
      title: 'certificates.cybersecurity',
      issuer: 'Cisco',
      type: 'certificates.type.security',
      icon: Shield,
    },
    {
      title: 'certificates.python',
      issuer: 'Cisco',
      type: 'certificates.type.programming',
      icon: Code,
    },
    {
      title: 'certificates.hardware',
      issuer: 'Cisco',
      type: 'certificates.type.hardware',
      icon: Cpu,
    },
    {
      title: 'certificates.englishit',
      issuer: 'Cisco',
      type: 'certificates.type.language',
      icon: Languages,
    },
  ];

  const issuers = ['all', ...new Set(certificates.map(c => c.issuer))];
  
  const filteredCerts = activeIssuer === 'all' 
    ? certificates 
    : certificates.filter(c => c.issuer === activeIssuer);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'certificates.type.security': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'certificates.type.networking': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'certificates.type.programming': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'certificates.type.hardware': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'certificates.type.language': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default: return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <section id="certificates" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              {t('certificates.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
            <div className="flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">{certificates.length} {t('certificates.certified')}</span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className={`flex flex-wrap justify-center gap-2 mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {issuers.map((issuer) => (
              <button
                key={issuer}
                onClick={() => setActiveIssuer(issuer)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIssuer === issuer
                    ? 'bg-gradient-primary text-white shadow-purple'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {issuer === 'all' ? t('certificates.all') : issuer}
                <span className="ml-2 text-xs opacity-70">
                  ({issuer === 'all' ? certificates.length : certificates.filter(c => c.issuer === issuer).length})
                </span>
              </button>
            ))}
          </div>

          {/* Certificates Grid - Compact Design */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {filteredCerts.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  className="group relative p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-purple hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold leading-tight mb-1 group-hover:text-primary transition-colors duration-300">
                        {t(cert.title)}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                        <Badge variant="outline" className={`text-[10px] px-2 py-0 ${getTypeColor(cert.type)}`}>
                          {t(cert.type)}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
