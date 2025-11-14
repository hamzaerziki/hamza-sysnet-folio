import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';

export const Skills = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: 'skills.systems',
      skills: ['Ubuntu', 'Kali', 'Windows Server', 'Active Directory'],
    },
    {
      category: 'skills.virtualization',
      skills: ['VMware ESXi', 'Proxmox', 'Hyper-V', 'Docker'],
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
      category: 'skills.networks',
      skills: ['Cisco', 'VLAN', 'TCP/IP', 'SDN'],
    },
    {
      category: 'skills.languages',
      skills: ['Bash', 'Python', 'SQL', 'HTML/CSS', 'PowerShell'],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              {t('skills.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="p-4 md:p-6 gradient-card shadow-card border-border/50 hover:shadow-purple hover:scale-105 transition-all duration-500 group h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-gradient-primary rounded-full group-hover:h-10 transition-all duration-300"></div>
                      <h3 className="text-base md:text-lg font-bold text-primary group-hover:text-primary-glow transition-colors duration-300">
                        {t(category.category)}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="flex items-center justify-between p-2 md:p-3 rounded-md bg-muted/50 hover:bg-accent hover:scale-105 transition-all duration-300 group/skill"
                        >
                          <span className="text-xs md:text-sm font-medium group-hover/skill:text-primary transition-colors duration-300">{skill}</span>
                          <div className="w-2 h-2 rounded-full bg-primary/50 group-hover/skill:bg-primary group-hover/skill:animate-pulse transition-all duration-300"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};