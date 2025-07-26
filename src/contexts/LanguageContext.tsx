import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.positions': 'Postes visés',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.certificates': 'Certificats',
    'nav.cv': 'CV',
    
    // Hero Section
    'hero.title': 'Étudiant en systèmes et réseaux informatiques',
    'hero.subtitle': 'Technicien Systèmes & Réseaux',
    'hero.description': 'Passionné par les infrastructures digitales, la cybersécurité et le DevOps',
    'hero.cta.projects': 'Voir mes projets',
    'hero.cta.about': 'En savoir plus',
    'hero.availability': 'Ouvert aux opportunités',
    
    // About Section
    'about.title': 'À propos de moi',
    'about.description': 'Je suis un étudiant en 2ᵉ année de Technicien spécialisé – Infrastructures Digitales, passionné par les technologies systèmes et réseaux.',
    'about.passion': 'Mes domaines de passion :',
    'about.passion.systems': 'Administration systèmes (Linux, Windows)',
    'about.passion.virtualization': 'Virtualisation (VMware, Proxmox)',
    'about.passion.networks': 'Réseaux & protocoles (VLAN, DHCP, NAT)',
    'about.passion.containers': 'Containerisation (Docker)',
    'about.passion.security': 'Cybersecurity (MISP, pare-feux)',
    'about.passion.monitoring': 'Supervision & Monitoring (Grafana, Zabbix)',
    'about.approach': 'Approche orientée pratique et projets concrets',
    
    // Positions Section
    'positions.title': 'Postes visés',
    'positions.admin': 'Administrateur systèmes et réseaux',
    'positions.security': 'Technicien cybersécurité',
    'positions.cloud': 'Technicien cloud / virtualisation',
    'positions.datacenter': 'Technicien datacenter / monitoring',
    'positions.support': 'Technicien support IT / Helpdesk',
    'positions.infrastructure': 'Assistant infrastructure',
    'positions.devops': 'DevOps junior',
    
    // Projects Section
    'projects.title': 'Projets réalisés',
    'projects.sdwan': 'Simulation SD-WAN avec FortiGate',
    'projects.sdwan.desc': 'Mise en place d\'une architecture SD-WAN complète avec routage intelligent et politiques de sécurité',
    'projects.firewall': 'Simulation de pare-feux',
    'projects.firewall.desc': 'Configuration et déploiement de solutions de sécurité avec BIG-IP, FortiGate et pfSense',
    'projects.nas': 'Conversion PC en NAS',
    'projects.nas.desc': 'Transformation d\'un PC en serveur de stockage réseau avec OpenMediaVault',
    'projects.network': 'Architecture réseau complexe',
    'projects.network.desc': 'Conception et implémentation d\'infrastructures réseau avec Cisco, VLAN et DHCP',
    'projects.monitoring': 'Système de monitoring',
    'projects.monitoring.desc': 'Déploiement de solutions de supervision avec Zabbix, Prometheus et Grafana',
    'projects.misp': 'Plateforme MISP – Cybersécurité',
    'projects.misp.desc': 'Configuration d\'une plateforme de partage d\'indicateurs de compromission',
    'projects.devops': 'Containerisation DevOps',
    'projects.devops.desc': 'Automatisation avec Docker, Git et pipelines CI/CD',
    
    // Skills Section
    'skills.title': 'Compétences techniques',
    'skills.systems': 'Systèmes',
    'skills.virtualization': 'Virtualisation',
    'skills.firewalls': 'Pare-feux',
    'skills.devops': 'DevOps',
    'skills.monitoring': 'Monitoring',
    'skills.networks': 'Réseaux',
    'skills.languages': 'Langages',
    
    // Certificates Section
    'certificates.title': 'Certificats professionnels',
    'certificates.ccna': 'CCNA Introduction aux réseaux',
    'certificates.python': 'Python Essentials 1',
    'certificates.hardware': 'Les bases du matériel informatique',
    'certificates.cybersecurity': 'Introduction à la cybersécurité',
    
    // CV Section
    'cv.title': 'Télécharger mon CV',
    'cv.download': 'Télécharger le CV',
    'cv.description': 'Consultez mon parcours complet et mes expériences',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    
    // Contact
    'contact.email': 'E-mail',
    'contact.phone': 'Téléphone',
    'contact.linkedin': 'LinkedIn',
    
    // Certificates
    'certificates.certified': 'Certifié',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.positions': 'Target Roles',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.certificates': 'Certificates',
    'nav.cv': 'CV',
    
    // Hero Section
    'hero.title': 'Student in Computer Systems and Networks',
    'hero.subtitle': 'Systems & Networks Technician',
    'hero.description': 'Passionate about digital infrastructures, cybersecurity and DevOps',
    'hero.cta.projects': 'View my projects',
    'hero.cta.about': 'Learn more',
    'hero.availability': 'Open to opportunities',
    
    // About Section
    'about.title': 'About me',
    'about.description': 'I am a 2nd year student in Specialized Technician – Digital Infrastructures, passionate about systems and networks technologies.',
    'about.passion': 'My areas of passion:',
    'about.passion.systems': 'Systems Administration (Linux, Windows)',
    'about.passion.virtualization': 'Virtualization (VMware, Proxmox)',
    'about.passion.networks': 'Networks & protocols (VLAN, DHCP, NAT)',
    'about.passion.containers': 'Containerization (Docker)',
    'about.passion.security': 'Cybersecurity (MISP, firewalls)',
    'about.passion.monitoring': 'Supervision & Monitoring (Grafana, Zabbix)',
    'about.approach': 'Practical approach focused on concrete projects',
    
    // Positions Section
    'positions.title': 'Target roles',
    'positions.admin': 'Systems and Networks Administrator',
    'positions.security': 'Cybersecurity Technician',
    'positions.cloud': 'Cloud / Virtualization Technician',
    'positions.datacenter': 'Datacenter / Monitoring Technician',
    'positions.support': 'IT Support / Helpdesk Technician',
    'positions.infrastructure': 'Infrastructure Assistant',
    'positions.devops': 'Junior DevOps',
    
    // Projects Section
    'projects.title': 'Completed projects',
    'projects.sdwan': 'SD-WAN Simulation with FortiGate',
    'projects.sdwan.desc': 'Implementation of complete SD-WAN architecture with intelligent routing and security policies',
    'projects.firewall': 'Firewall Simulation',
    'projects.firewall.desc': 'Configuration and deployment of security solutions with BIG-IP, FortiGate and pfSense',
    'projects.nas': 'PC to NAS Conversion',
    'projects.nas.desc': 'Transformation of a PC into a network storage server with OpenMediaVault',
    'projects.network': 'Complex Network Architecture',
    'projects.network.desc': 'Design and implementation of network infrastructures with Cisco, VLAN and DHCP',
    'projects.monitoring': 'Monitoring System',
    'projects.monitoring.desc': 'Deployment of monitoring solutions with Zabbix, Prometheus and Grafana',
    'projects.misp': 'MISP Platform – Cybersecurity',
    'projects.misp.desc': 'Configuration of a threat intelligence sharing platform',
    'projects.devops': 'DevOps Containerization',
    'projects.devops.desc': 'Automation with Docker, Git and CI/CD pipelines',
    
    // Skills Section
    'skills.title': 'Technical skills',
    'skills.systems': 'Systems',
    'skills.virtualization': 'Virtualization',
    'skills.firewalls': 'Firewalls',
    'skills.devops': 'DevOps',
    'skills.monitoring': 'Monitoring',
    'skills.networks': 'Networks',
    'skills.languages': 'Languages',
    
    // Certificates Section
    'certificates.title': 'Professional certificates',
    'certificates.ccna': 'CCNA Introduction to Networks',
    'certificates.python': 'Python Essentials 1',
    'certificates.hardware': 'Computer Hardware Basics',
    'certificates.cybersecurity': 'Introduction to Cybersecurity',
    
    // CV Section
    'cv.title': 'Download my CV',
    'cv.download': 'Download CV',
    'cv.description': 'View my complete background and experiences',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    
    // Contact
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.linkedin': 'LinkedIn',
    
    // Certificates
    'certificates.certified': 'Certified',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};