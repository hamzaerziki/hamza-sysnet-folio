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
      technologies: ['OpenMediaVault', 'Storage', 'Networks'],
      featured: true,
    },
    {
      title: 'projects.network',
      description: 'projects.network.desc',
      technologies: ['Cisco', 'VLAN', 'DHCP', 'Routing'],
      featured: false,
    },
    {
      title: 'projects.monitoring',
      description: 'projects.monitoring.desc',
      technologies: ['Zabbix', 'Prometheus', 'Grafana', 'Monitoring'],
      featured: false,
    },
    {
      title: 'projects.misp',
      description: 'projects.misp.desc',
      technologies: ['MISP', 'Threat Intelligence', 'IOCs'],
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('projects.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`p-6 gradient-card shadow-card border-border/50 hover:shadow-purple transition-smooth cursor-pointer group ${
                  project.featured ? 'ring-1 ring-primary/20' : ''
                }`}
              >
                <div className="space-y-4">
                  {project.featured && (
                    <Badge className="gradient-primary text-white text-xs">
                      ⭐ Featured
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
                        className="text-xs bg-muted hover:bg-accent"
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