import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'projects.sdwan',
      description: 'projects.sdwan.desc',
      technologies: ['FortiGate', 'SD-WAN', 'Routing', 'Security'],
      featured: true,
    },
    {
      title: 'projects.firewall',
      description: 'projects.firewall.desc',
      technologies: ['BIG-IP', 'FortiGate', 'pfSense', 'Security'],
      featured: false,
    },
    {
      title: 'projects.nas',
      description: 'projects.nas.desc',
      technologies: ['OpenMediaVault', 'Storage', 'Networks', 'Hardware'],
      featured: true,
    },
    {
      title: 'projects.network',
      description: 'projects.network.desc',
      technologies: ['Cisco', 'VLAN', 'DHCP', 'Routing'],
      featured: false,
    },
    {
      title: 'projects.misp',
      description: 'projects.misp.desc',
      technologies: ['MISP', 'Wazuh', 'Threat Intelligence', 'SIEM'],
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-20 left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 animate-fade-in">
              {t('projects.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full shadow-glow"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez mes projets techniques en infrastructure, sécurité et réseaux
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group relative p-8 glass-card border border-border/20 hover:border-primary/40 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-glow ${
                  project.featured ? 'ring-2 ring-primary/30 shadow-purple' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500"></div>
                
                <div className="relative space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-purple group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                      <span className="text-2xl">🚀</span>
                    </div>
                    {project.featured && (
                      <Badge className="bg-gradient-primary text-white text-xs border-none shadow-glow animate-glow-pulse">
                        ⭐ Featured
                      </Badge>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {t(project.title)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(project.description)}
                    </p>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-border/30">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-muted/50 hover:bg-primary/20 hover:text-primary border border-border/30 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary">→</span>
                    </div>
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