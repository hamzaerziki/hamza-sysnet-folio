import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Projects = () => {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  const projects = [
    {
      title: 'projects.infrastructure',
      description: 'projects.infrastructure.desc',
      technologies: ['Zabbix', 'Prometheus', 'Grafana'],
      featured: true,
    },
    {
      title: 'projects.nas',
      description: 'projects.nas.desc',
      technologies: ['OpenMediaVault', 'Storage', 'Networks', 'Hardware'],
      featured: true,
    },
    {
      title: 'projects.sdwan',
      description: 'projects.sdwan.desc',
      technologies: ['FortiGate', 'SD-WAN', 'Routing', 'Security'],
      featured: true,
    },
    {
      title: 'projects.ista',
      description: 'projects.ista.desc',
      technologies: ['Clonezilla', 'SSD', 'Câblage réseau', 'Déploiement'],
      featured: true,
    },
    {
      title: 'projects.misp',
      description: 'projects.misp.desc',
      technologies: ['MISP', 'Wazuh', 'Threat Intelligence', 'SIEM'],
      featured: true,
    },
    {
      title: 'projects.firewall',
      description: 'projects.firewall.desc',
      technologies: ['BIG-IP', 'FortiGate', 'pfSense', 'Security'],
      featured: false,
    },
    {
      title: 'projects.network',
      description: 'projects.network.desc',
      technologies: ['Cisco', 'VLAN', 'DHCP', 'Routing'],
      featured: false,
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {t('projects.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`p-6 gradient-card shadow-card border-border/50 hover:shadow-purple transition-all duration-500 cursor-pointer group ${
                  project.featured ? 'ring-1 ring-primary/20' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  {project.featured && (
                    <Badge className="gradient-primary text-white text-xs">
                      ⭐ {t('projects.featured')}
                    </Badge>
                  )}
                  
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-smooth">
                      {t(project.title)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(project.description)}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-muted text-foreground hover:bg-accent"
                      >
                        {tech}
                      </Badge>
                    ))}
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