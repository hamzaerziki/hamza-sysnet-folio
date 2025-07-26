import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: 'skills.systems',
      skills: ['Ubuntu', 'Debian', 'Windows Server', 'Active Directory'],
    },
    {
      category: 'skills.virtualization',
      skills: ['VMware', 'Proxmox', 'Hyper-V', 'VirtualBox'],
    },
    {
      category: 'skills.firewalls',
      skills: ['FortiGate', 'pfSense', 'BIG-IP', 'Sophos'],
    },
    {
      category: 'skills.devops',
      skills: ['Docker', 'Git', 'CI/CD', 'Ansible'],
    },
    {
      category: 'skills.monitoring',
      skills: ['Zabbix', 'Grafana', 'Prometheus', 'PRTG'],
    },
    {
      category: 'skills.networks',
      skills: ['Cisco', 'VLAN', 'TCP/IP', 'EVE-NG'],
    },
    {
      category: 'skills.languages',
      skills: ['Bash', 'Python', 'SQL', 'HTML/CSS'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('skills.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 gradient-card shadow-card border-border/50">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-primary">
                    {t(category.category)}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center justify-between p-2 rounded-md bg-muted/50 hover:bg-accent transition-smooth"
                      >
                        <span className="text-sm font-medium">{skill}</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4].map((dot) => (
                            <div 
                              key={dot}
                              className={`w-2 h-2 rounded-full ${
                                dot <= 3 ? 'bg-primary' : 'bg-border'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
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