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
    'hero.pill': 'Disponible · Rabat, Maroc',
    'hero.headline.1': 'Je conçois,',
    'hero.headline.2': 'sécurise',
    'hero.headline.3': 'et',
    'hero.headline.4': 'automatise',
    'hero.headline.5': 'vos systèmes.',
    'hero.sub': "Ingénieur Systèmes & Réseaux, DevSecOps et développeur full-stack. Je livre des plateformes SaaS, ERP, web et mobiles ainsi que des infrastructures sécurisées et automatisées — du switch au pipeline CI/CD.",
    'hero.cta.primary': 'Voir les projets',
    'hero.cta.secondary': 'Télécharger le CV',
    'hero.scroll': 'Défiler',

    // About
    'about.eyebrow': 'À propos',
    'about.title': 'Profil ingénieur, livraison produit.',
    'about.p1': "J'opère sur deux fronts : l'infrastructure et le produit. Côté infra, je conçois des systèmes Linux/Windows, des réseaux segmentés et des pipelines DevSecOps observables et auto-remédiés.",
    'about.p2': "Côté produit, je développe des plateformes SaaS, des ERP métier, des applications web, locales et mobiles — pensées pour la sécurité, la performance et l'usage réel sur le terrain.",
    'about.p3': "Stack quotidien : Linux, OpenStack, Azure, FortiGate, Wazuh, Docker, GitHub Actions, TypeScript, React, Node.js, PostgreSQL. Trilingue FR · EN · AR, orienté résultats et SLA.",
    'about.fact.location': 'Localisation',
    'about.fact.location.value': 'Rabat, Maroc',
    'about.fact.focus': 'Focus',
    'about.fact.focus.value': 'Infra · DevSecOps · Full-Stack',
    'about.fact.education': 'Services',
    'about.fact.education.value': 'SaaS · ERP · Web · Mobile',
    'about.fact.languages': 'Langues',
    'about.fact.languages.value': 'FR · EN · AR',

    // Services
    'services.eyebrow': 'Services',
    'services.title': "Ce sur quoi j'interviens.",
    'services.sub': "Quatre domaines, un seul standard d'exécution.",
    'services.infra.title': 'Systèmes & Réseaux',
    'services.infra.desc': "Conception, durcissement et exploitation d'infrastructures Linux/Windows, virtualisation et réseaux segmentés.",
    'services.devsecops.title': 'DevSecOps & Automatisation',
    'services.devsecops.desc': "Pipelines CI/CD sécurisés, IaC, supervision, scan de vulnérabilités et auto-remédiation.",
    'services.fullstack.title': 'SaaS, ERP & Web',
    'services.fullstack.desc': "Développement de plateformes SaaS, ERP métier et applications web sécurisées de bout en bout.",
    'services.mobile.title': 'Mobile & Apps locales',
    'services.mobile.desc': "Applications mobiles et logiciels desktop pour usages professionnels, sécuritaires et terrain.",

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
    'contact.title': 'Disponible pour vos projets en freelance.',
    'contact.sub': "Plateformes SaaS, ERP, applications mobiles, infrastructure ou DevSecOps — discutons de votre besoin. Réponse sous 24 h, jours ouvrés.",
    'contact.cta': 'Démarrer un projet',
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
    'hero.pill': 'Available · Rabat, Morocco',
    'hero.headline.1': 'I design,',
    'hero.headline.2': 'secure',
    'hero.headline.3': 'and',
    'hero.headline.4': 'automate',
    'hero.headline.5': 'your systems.',
    'hero.sub': "Systems & Networks engineer, DevSecOps and full-stack developer. I ship SaaS platforms, ERP solutions, web and mobile apps, and operate secure, automated infrastructure — from the switch to the CI/CD pipeline.",
    'hero.cta.primary': 'See projects',
    'hero.cta.secondary': 'Download CV',
    'hero.scroll': 'Scroll',

    // About
    'about.eyebrow': 'About',
    'about.title': 'Engineer profile, product delivery.',
    'about.p1': "I work on two fronts: infrastructure and product. On the infra side, I design Linux/Windows systems, segmented networks, and observable DevSecOps pipelines with auto-remediation.",
    'about.p2': "On the product side, I build SaaS platforms, business ERPs, web, desktop and mobile apps — engineered for security, performance and real-world field use.",
    'about.p3': "Daily stack: Linux, OpenStack, Azure, FortiGate, Wazuh, Docker, GitHub Actions, TypeScript, React, Node.js, PostgreSQL. Trilingual EN · FR · AR, results and SLA driven.",
    'about.fact.location': 'Based in',
    'about.fact.location.value': 'Rabat, Morocco',
    'about.fact.focus': 'Focus',
    'about.fact.focus.value': 'Infra · DevSecOps · Full-Stack',
    'about.fact.education': 'Services',
    'about.fact.education.value': 'SaaS · ERP · Web · Mobile',
    'about.fact.languages': 'Languages',
    'about.fact.languages.value': 'EN · FR · AR',

    // Services
    'services.eyebrow': 'Services',
    'services.title': 'What I deliver.',
    'services.sub': 'Four domains, one execution standard.',
    'services.infra.title': 'Systems & Networks',
    'services.infra.desc': 'Design, hardening and operation of Linux/Windows infrastructure, virtualization and segmented networks.',
    'services.devsecops.title': 'DevSecOps & Automation',
    'services.devsecops.desc': 'Secure CI/CD pipelines, IaC, monitoring, vulnerability scanning and auto-remediation.',
    'services.fullstack.title': 'SaaS, ERP & Web',
    'services.fullstack.desc': 'End-to-end development of SaaS platforms, business ERPs and secure web applications.',
    'services.mobile.title': 'Mobile & Local Apps',
    'services.mobile.desc': 'Mobile applications and desktop software for professional, security-sensitive and field use.',

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
    'contact.title': 'Available for freelance work.',
    'contact.sub': "SaaS platforms, ERPs, mobile apps, infrastructure or DevSecOps — let's talk about your project. Reply within 24h on business days.",
    'contact.cta': 'Start a project',
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
