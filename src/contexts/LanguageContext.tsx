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
    'nav.projects': 'Projets',
    'nav.certificates': 'Certificats',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',

    // Hero
    'hero.pill': 'Disponible · Rabat, Maroc',
    'hero.headline.1': 'Construire',
    'hero.headline.2': 'une',
    'hero.headline.3': 'infrastructure',
    'hero.headline.4': 'numérique',
    'hero.headline.5': 'sécurisée.',
    'hero.sub': 'Systèmes · Réseaux · DevOps — je construis et automatise des infrastructures fiables depuis Rabat.',
    'hero.cta.primary': 'Voir mes projets',
    'hero.cta.secondary': 'Télécharger le CV',
    'hero.scroll': 'Défiler',

    // About
    'about.eyebrow': 'À propos',
    'about.title': 'Un parcours, pas un script.',
    'about.p1': "Je m'appelle Hamza. Basé à Rabat, je conçois et opère des infrastructures de bout en bout — du câble réseau au pipeline CI/CD, en passant par les systèmes Linux et Windows, la virtualisation (ESXi, Proxmox) et le cloud privé (OpenStack, Azure). Ce qui me motive, c'est de transformer une idée brute en une plateforme stable, observable et reproductible.",
    'about.p2': "Formé à l'ISTA en Infrastructures Digitales, j'avance par projets concrets : un SIEM MISP + Wazuh, une simulation SD-WAN sous FortiGate, un cloud privé OpenStack, un pipeline DevSecOps durci avec Trivy et Gitleaks, ou encore un système intelligent d'observabilité et d'auto-remédiation. J'aime autant casser un lab pour comprendre que documenter pour transmettre.",
    'about.p3': "Côté terrain, je parle systèmes, réseaux et DevOps — mais aussi développement SaaS et mobile quand il faut livrer un produit complet. Trilingue (FR · EN · AR), curieux par défaut, je cherche des environnements où l'ingénierie sérieuse rencontre des équipes qui ont envie de bien faire.",
    'about.fact.location': 'Localisation',
    'about.fact.location.value': 'Rabat, Maroc',
    'about.fact.focus': 'Focus',
    'about.fact.focus.value': 'Systèmes · Réseaux · DevOps',
    'about.fact.education': 'Formation',
    'about.fact.education.value': 'ISTA — Infrastructures Digitales',
    'about.fact.languages': 'Langues',
    'about.fact.languages.value': 'FR · EN · AR',

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

    // Projects
    'projects.eyebrow': 'Projets',
    'projects.title': 'Ce que j\'ai construit.',
    'projects.featured': 'En vedette',
    'projects.view': 'Étude de cas',

    'projects.infrastructure': 'Infrastructure réseau sécurisée — supervision & détection',
    'projects.infrastructure.desc': 'Architecture complète avec segmentation, supervision (Zabbix, Prometheus, Grafana) et détection. Déployée en lab et documentée.',
    'projects.observability': "Conception et développement d'un système intelligent d'observabilité, de décision et d'auto-remédiation des infrastructures",
    'projects.observability.desc': "Plateforme intelligente combinant supervision, SIEM et SDN pour décider et auto-remédier les incidents d'infrastructure en temps réel.",
    'projects.devsecops': "Mise en œuvre d'un pipeline DevSecOps sécurisé et résilient pour une plateforme",
    'projects.devsecops.desc': "Pipeline CI/CD durci avec analyse de secrets, scan de vulnérabilités d'images et supervision sécurité continue.",
    'projects.nas': 'Serveur NAS sur matériel recyclé',
    'projects.nas.desc': "Conversion d'un PC en serveur NAS sous OpenMediaVault — partages réseau, snapshots, sauvegardes planifiées.",
    'projects.misp': 'Plateforme MISP + Wazuh',
    'projects.misp.desc': 'Threat intelligence intégrée à un SIEM pour la détection et la corrélation d’événements de sécurité.',
    'projects.ista': 'Refonte du parc ISTA Hay Nahda',
    'projects.ista.desc': 'Installation SSD, câblage et déploiement uniforme via Clonezilla sur ~50 postes.',
    'projects.sdwan': 'Simulation SD-WAN avec FortiGate',
    'projects.sdwan.desc': 'Architecture SD-WAN avec routage intelligent et politiques de sécurité par site.',
    'projects.firewall': 'Bench de pare-feux',
    'projects.firewall.desc': 'Comparatif pratique BIG-IP, FortiGate et pfSense sur scénarios réels.',
    'projects.network': 'Architecture réseau Cisco',
    'projects.network.desc': 'Conception et implémentation : VLAN, DHCP, OSPF, redondance.',
    'projects.saas': 'Développement de solutions SaaS & mobile professionnelles et sécurisées',
    'projects.saas.desc': "Conception et développement d'applications SaaS et mobiles à usage professionnel, avec un focus sur la sécurité, la scalabilité et l'expérience utilisateur.",
    'projects.privatecloud': 'Déploiement d\'un cloud privé OpenStack sur infrastructure virtualisée',
    'projects.privatecloud.desc': "Installation et configuration d'OpenStack sur un environnement virtualisé pour bâtir un cloud privé : compute, networking, storage et orchestration.",

    // Certifications
    'certs.eyebrow': 'Certifications',
    'certs.title': 'Validé en chemin.',

    // Contact
    'contact.eyebrow': 'Contact',
    'contact.title': 'Travaillons ensemble.',
    'contact.sub': 'Choisissez le canal qui vous convient — je réponds sous 24 h, jours ouvrés.',
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
    'nav.projects': 'Projects',
    'nav.certificates': 'Certifications',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',

    // Hero
    'hero.pill': 'Available · Rabat, Morocco',
    'hero.headline.1': 'Building',
    'hero.headline.2': 'secure',
    'hero.headline.3': 'digital',
    'hero.headline.4': 'infrastructure.',
    'hero.headline.5': '',
    'hero.sub': 'Systems · Networks · DevOps — building and automating reliable infrastructure from Rabat.',
    'hero.cta.primary': 'See my work',
    'hero.cta.secondary': 'Download CV',
    'hero.scroll': 'Scroll',

    // About
    'about.eyebrow': 'About',
    'about.title': 'A path, not a script.',
    'about.p1': "I'm Hamza. Based in Rabat, I design and operate infrastructure end to end — from the network cable to the CI/CD pipeline, across Linux and Windows systems, virtualization (ESXi, Proxmox) and private cloud (OpenStack, Azure). What drives me is turning a rough idea into a stable, observable, reproducible platform.",
    'about.p2': "Trained at ISTA in Digital Infrastructures, I learn by shipping real projects: a MISP + Wazuh SIEM, a FortiGate SD-WAN simulation, a private OpenStack cloud, a hardened DevSecOps pipeline with Trivy and Gitleaks, and an intelligent observability and auto-remediation system. I like breaking a lab to understand it just as much as documenting it to pass it on.",
    'about.p3': "On the ground I speak systems, networks and DevOps — and also SaaS and mobile development when a full product needs to ship. Trilingual (EN · FR · AR), curious by default, I'm looking for places where serious engineering meets teams who genuinely care about the craft.",
    'about.fact.location': 'Based in',
    'about.fact.location.value': 'Rabat, Morocco',
    'about.fact.focus': 'Focus',
    'about.fact.focus.value': 'Systems · Networks · DevOps',
    'about.fact.education': 'Education',
    'about.fact.education.value': 'ISTA — Digital Infrastructures',
    'about.fact.languages': 'Languages',
    'about.fact.languages.value': 'EN · FR · AR',

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

    // Projects
    'projects.eyebrow': 'Work',
    'projects.title': 'What I have built.',
    'projects.featured': 'Featured',
    'projects.view': 'Case study',

    'projects.infrastructure': 'Secure network infrastructure — monitoring & detection',
    'projects.infrastructure.desc': 'Full architecture with segmentation, monitoring (Zabbix, Prometheus, Grafana) and detection. Built in lab and documented.',
    'projects.observability': "Design and development of an intelligent observability, decision and auto-remediation system for infrastructures",
    'projects.observability.desc': "Intelligent platform combining monitoring, SIEM and SDN to decide and auto-remediate infrastructure incidents in real time.",
    'projects.devsecops': "Implementation of a secure and resilient DevSecOps pipeline for a platform",
    'projects.devsecops.desc': "Hardened CI/CD pipeline with secret scanning, image vulnerability scanning and continuous security monitoring.",
    'projects.nas': 'NAS server on recycled hardware',
    'projects.nas.desc': 'Converted a PC into a NAS running OpenMediaVault — network shares, snapshots, scheduled backups.',
    'projects.misp': 'MISP + Wazuh platform',
    'projects.misp.desc': 'Threat intelligence wired into a SIEM for detection and correlation of security events.',
    'projects.ista': 'ISTA Hay Nahda fleet rebuild',
    'projects.ista.desc': 'SSD installs, cabling, and uniform image deployment via Clonezilla across ~50 workstations.',
    'projects.sdwan': 'SD-WAN simulation with FortiGate',
    'projects.sdwan.desc': 'SD-WAN architecture with intelligent routing and per-site security policies.',
    'projects.firewall': 'Firewall benchmark',
    'projects.firewall.desc': 'Hands-on comparison of BIG-IP, FortiGate and pfSense on real scenarios.',
    'projects.network': 'Cisco network architecture',
    'projects.network.desc': 'Design and implementation: VLAN, DHCP, OSPF, redundancy.',
    'projects.saas': 'Professional & secure SaaS and mobile application development',
    'projects.saas.desc': "Design and development of SaaS and mobile applications for professional use, with a focus on security, scalability and user experience.",
    'projects.privatecloud': 'Private cloud deployment with OpenStack on virtualized infrastructure',
    'projects.privatecloud.desc': "Installation and configuration of OpenStack on a virtualized environment to build a private cloud: compute, networking, storage and orchestration.",

    // Certifications
    'certs.eyebrow': 'Certifications',
    'certs.title': 'Validated along the way.',

    // Contact
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's work together.",
    'contact.sub': 'Pick the channel that suits you — I reply within 24h on business days.',
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
