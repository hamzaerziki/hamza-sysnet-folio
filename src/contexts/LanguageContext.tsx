import { createContext, useContext, useState, ReactNode } from 'react';

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
    'nav.skills': 'Compétences',
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.certificates': 'Certificats',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',

    // Hero
    'hero.pill': 'Rabat, Maroc',
    'hero.headline.1': 'Systèmes,',
    'hero.headline.2': 'réseaux,',
    'hero.headline.3': 'sécurité',
    'hero.headline.4': 'et',
    'hero.headline.5': 'DevOps.',
    'hero.sub': "Construction d'infrastructures fiables, de systèmes sécurisés et de solutions techniques concrètes — avec un focus sur le réseau, l'automatisation, l'observabilité et la qualité opérationnelle.",
    'hero.cta.primary': 'Voir les projets',
    'hero.cta.secondary': 'Me contacter',
    'hero.scroll': 'Défiler',

    // About
    'about.eyebrow': 'À propos',
    'about.title': 'Une approche technique, hands-on.',
    'about.p1': "Mon travail s'articule autour des systèmes, du réseau, de la sécurité et du DevOps avec une approche concrète : construire, améliorer et sécuriser des environnements techniques par l'implémentation, l'automatisation et la supervision.",
    'about.p2': "Je privilégie la fiabilité, la clarté d'architecture et la résolution structurée des problèmes — du durcissement d'un serveur à la mise en place d'un pipeline observable.",
    'about.p3': "Stack quotidien : Linux, Windows Server, Proxmox, FortiGate, pfSense, Wazuh, Docker, Zabbix, Prometheus, Grafana, Bash, Python, PowerShell.",
    'about.fact.location': 'Localisation',
    'about.fact.location.value': 'Rabat, Maroc',
    'about.fact.focus': 'Domaines',
    'about.fact.focus.value': 'Systèmes · Réseaux · Sécurité · DevOps',
    'about.fact.education': 'Approche',
    'about.fact.education.value': 'Hands-on · Automatisation · Fiabilité',
    'about.fact.languages': 'Langues',
    'about.fact.languages.value': 'FR · EN · AR',

    // Services / Core focus areas
    'services.eyebrow': 'Domaines',
    'services.title': "Domaines d'expertise.",
    'services.sub': "Quatre piliers techniques, un même standard d'exécution.",
    'services.infra.title': 'Administration systèmes',
    'services.infra.desc': "Environnements Linux et Windows, configuration des services, contrôle d'accès, gestion serveur et support opérationnel.",
    'services.devsecops.title': 'Réseaux',
    'services.devsecops.desc': "Routage, switching, segmentation, VPN, firewalling et connectivité d'infrastructure.",
    'services.fullstack.title': 'Sécurité',
    'services.fullstack.desc': "Durcissement, protection des accès, conscience des menaces, réduction des incidents et conception orientée sécurité.",
    'services.mobile.title': 'DevOps',
    'services.mobile.desc': "Automatisation, workflows de déploiement, observabilité, stratégie de sauvegarde et fiabilité opérationnelle.",

    // Skills
    'skills.eyebrow': 'Compétences',
    'skills.title': 'Stack & outils.',
    'skills.cat.network': 'Réseau & infrastructure',
    'skills.cat.systems': 'Systèmes',
    'skills.cat.virtualization': 'Virtualisation',
    'skills.cat.security': 'Sécurité',
    'skills.cat.monitoring': 'Supervision',
    'skills.cat.devops': 'DevOps',
    'skills.cat.scripting': 'Scripting',
    'skills.cat.database': 'Base de données',
    'skills.cat.cloud': 'Cloud',
    'skills.cat.fullstack': 'Full-Stack',
    'skills.cat.tools': 'Outils',

    // Projects
    'projects.eyebrow': 'Projets',
    'projects.title': 'Plateformes livrées et infrastructures opérées.',
    'projects.featured': 'En vedette',
    'projects.details': 'Détails',
    'projects.problem': 'Problème',
    'projects.solution': 'Solution',
    'projects.role': 'Mon rôle',
    'projects.stack': 'Stack',
    'projects.features': 'Fonctionnalités',
    'projects.impact': 'Impact',

    // Certifications
    'certs.eyebrow': 'Certifications',
    'certs.title': 'Validé en chemin.',

    // Contact
    'contact.eyebrow': 'Contact',
    'contact.title': 'Échangeons sur un sujet technique.',
    'contact.sub': "Discussion technique, opportunité ou collaboration sur des sujets systèmes, réseau, sécurité ou DevOps — je réponds sous 24 h en semaine.",
    'contact.cta': 'Me contacter',
    'contact.card.email.label': 'E-mail',
    'contact.card.email.hint': 'Réponse sous 24 h',
    'contact.card.linkedin.label': 'LinkedIn',
    'contact.card.linkedin.hint': 'Connectons-nous',
    'contact.card.whatsapp.label': 'WhatsApp',
    'contact.card.whatsapp.hint': 'Discussion rapide',
    'contact.card.phone.label': 'Téléphone',
    'contact.card.phone.hint': 'Lun–Ven · 9h–18h',
    'contact.card.github.label': 'GitHub',
    'contact.card.github.hint': 'Voir mes dépôts',
    'contact.card.cv.label': 'CV PDF',
    'contact.card.cv.hint': 'Téléchargement direct',
    'contact.copied': 'Copié dans le presse-papiers',

    // Footer
    'footer.built': 'Conçu et codé à la main.',
    'footer.rights': 'Tous droits réservés.',

    // CV
    'cv.download': 'Télécharger le CV',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.certificates': 'Certifications',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',

    // Hero
    'hero.pill': 'Rabat, Morocco',
    'hero.headline.1': 'Systems,',
    'hero.headline.2': 'networks,',
    'hero.headline.3': 'security',
    'hero.headline.4': 'and',
    'hero.headline.5': 'DevOps.',
    'hero.sub': "Building reliable infrastructure, secure systems, and practical technical solutions with a strong focus on networking, automation, observability and operational quality.",
    'hero.cta.primary': 'View projects',
    'hero.cta.secondary': 'Contact me',
    'hero.scroll': 'Scroll',

    // About
    'about.eyebrow': 'About',
    'about.title': 'A hands-on technical mindset.',
    'about.p1': "My work is centered on systems, networking, security and DevOps with a hands-on mindset — building, improving and securing technical environments through practical implementation, automation and structured problem-solving.",
    'about.p2': "I value reliability, architectural clarity and continuous technical improvement — from server hardening to standing up an observable, automated pipeline.",
    'about.p3': "Daily stack: Linux, Windows Server, Proxmox, FortiGate, pfSense, Wazuh, Docker, Zabbix, Prometheus, Grafana, Bash, Python, PowerShell.",
    'about.fact.location': 'Based in',
    'about.fact.location.value': 'Rabat, Morocco',
    'about.fact.focus': 'Focus areas',
    'about.fact.focus.value': 'Systems · Networks · Security · DevOps',
    'about.fact.education': 'Approach',
    'about.fact.education.value': 'Hands-on · Automation · Reliability',
    'about.fact.languages': 'Languages',
    'about.fact.languages.value': 'EN · FR · AR',

    // Services / Core focus areas
    'services.eyebrow': 'Focus areas',
    'services.title': 'Core focus areas.',
    'services.sub': 'Four technical pillars, one execution standard.',
    'services.infra.title': 'Systems Administration',
    'services.infra.desc': 'Linux and Windows environments, service configuration, access control, server management and operational support.',
    'services.devsecops.title': 'Networking',
    'services.devsecops.desc': 'Routing, switching, segmentation, VPNs, firewalling and infrastructure connectivity.',
    'services.fullstack.title': 'Security',
    'services.fullstack.desc': 'Hardening, access protection, threat awareness, incident reduction and security-oriented system design.',
    'services.mobile.title': 'DevOps',
    'services.mobile.desc': 'Automation, deployment workflows, observability, backup strategy and operational reliability.',

    // Skills
    'skills.eyebrow': 'Skills',
    'skills.title': 'Stack & tooling.',
    'skills.cat.network': 'Network & Infrastructure',
    'skills.cat.systems': 'Systems',
    'skills.cat.virtualization': 'Virtualization',
    'skills.cat.security': 'Security',
    'skills.cat.monitoring': 'Monitoring',
    'skills.cat.devops': 'DevOps',
    'skills.cat.scripting': 'Scripting',
    'skills.cat.database': 'Database',
    'skills.cat.cloud': 'Cloud',
    'skills.cat.fullstack': 'Full-Stack',
    'skills.cat.tools': 'Tools',

    // Projects
    'projects.eyebrow': 'Work',
    'projects.title': 'Shipped platforms, operated infrastructure.',
    'projects.featured': 'Featured',
    'projects.details': 'Details',
    'projects.problem': 'Problem',
    'projects.solution': 'Solution',
    'projects.role': 'My role',
    'projects.stack': 'Stack',
    'projects.features': 'Key features',
    'projects.impact': 'Impact',

    // Certifications
    'certs.eyebrow': 'Certifications',
    'certs.title': 'Validated along the way.',

    // Contact
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's talk technical.",
    'contact.sub': "Open to technical discussions, collaborations and opportunities around systems, networking, security and DevOps. Reply within 24h on business days.",
    'contact.cta': 'Get in touch',
    'contact.card.email.label': 'Email',
    'contact.card.email.hint': 'Reply within 24h',
    'contact.card.linkedin.label': 'LinkedIn',
    'contact.card.linkedin.hint': "Let's connect",
    'contact.card.whatsapp.label': 'WhatsApp',
    'contact.card.whatsapp.hint': 'Quick chat',
    'contact.card.phone.label': 'Phone',
    'contact.card.phone.hint': 'Mon–Fri · 9am–6pm',
    'contact.card.github.label': 'GitHub',
    'contact.card.github.hint': 'See my repos',
    'contact.card.cv.label': 'CV PDF',
    'contact.card.cv.hint': 'Direct download',
    'contact.copied': 'Copied to clipboard',

    // Footer
    'footer.built': 'Designed & coded by hand.',
    'footer.rights': 'All rights reserved.',

    // CV
    'cv.download': 'Download CV',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const t = (key: string): string => {
    const val = translations[language][key as keyof typeof translations['en']];
    return val !== undefined ? val : key;
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
