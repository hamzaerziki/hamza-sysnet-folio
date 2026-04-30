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
    'hero.pill': 'Disponible · Maroc',
    'hero.headline.1': 'Construire',
    'hero.headline.2': 'une',
    'hero.headline.3': 'infrastructure',
    'hero.headline.4': 'numérique',
    'hero.headline.5': 'sécurisée.',
    'hero.sub': 'Professionnel IT & cybersécurité — réseaux, systèmes, et tout ce qui se passe entre les deux.',
    'hero.cta.primary': 'Voir mes projets',
    'hero.cta.secondary': 'Télécharger le CV',
    'hero.scroll': 'Défiler',

    // About
    'about.eyebrow': 'À propos',
    'about.title': 'Un parcours, pas un script.',
    'about.p1': "Pour moi, l'informatique n'est pas seulement un domaine d'étude — c'est une façon de résoudre des problèmes concrets. J'aime comprendre comment les systèmes, les réseaux et la sécurité s'imbriquent pour créer des solutions fiables.",
    'about.p2': "Curieux de nature, j'apprends en construisant : labs virtuels, automatisation, supervision, durcissement réseau. Ce portfolio est une trace honnête de ce parcours.",
    'about.fact.location': 'Localisation',
    'about.fact.location.value': 'Casablanca, Maroc',
    'about.fact.focus': 'Focus',
    'about.fact.focus.value': 'Réseaux & cybersécurité',
    'about.fact.education': 'Formation',
    'about.fact.education.value': 'ISTA — Infrastructures Digitales',
    'about.fact.languages': 'Langues',
    'about.fact.languages.value': 'FR · EN · AR',

    // Skills
    'skills.eyebrow': 'Compétences',
    'skills.title': 'Stack & outils.',
    'skills.cat.network': 'Réseau & infrastructure',
    'skills.cat.security': 'Sécurité',
    'skills.cat.systems': 'Systèmes',
    'skills.cat.tools': 'Outils & DevOps',

    // Projects
    'projects.eyebrow': 'Projets',
    'projects.title': 'Ce que j\'ai construit.',
    'projects.featured': 'En vedette',
    'projects.view': 'Étude de cas',

    'projects.infrastructure': 'Infrastructure réseau sécurisée — supervision & détection',
    'projects.infrastructure.desc': 'Architecture complète avec segmentation, supervision (Zabbix, Prometheus, Grafana) et détection. Déployée en lab et documentée.',
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

    // Certifications
    'certs.eyebrow': 'Certifications',
    'certs.title': 'Validé en chemin.',

    // Contact
    'contact.eyebrow': 'Contact',
    'contact.title': 'Discutons.',
    'contact.sub': 'Ouvert aux opportunités, collaborations, ou simplement à une conversation autour des réseaux.',
    'contact.form.name': 'Votre nom',
    'contact.form.email': 'Adresse e-mail',
    'contact.form.message': 'Votre message',
    'contact.form.send': 'Envoyer',
    'contact.form.sending': 'Envoi…',
    'contact.form.sent': 'Message prêt — votre client mail va s\'ouvrir.',
    'contact.form.error': 'Veuillez remplir tous les champs correctement.',
    'contact.direct': 'Ou écrivez-moi directement',

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
    'hero.pill': 'Available · Morocco',
    'hero.headline.1': 'Building',
    'hero.headline.2': 'secure',
    'hero.headline.3': 'digital',
    'hero.headline.4': 'infrastructure.',
    'hero.headline.5': '',
    'hero.sub': 'IT & Cybersecurity professional — networks, systems, and the spaces in between.',
    'hero.cta.primary': 'See my work',
    'hero.cta.secondary': 'Download CV',
    'hero.scroll': 'Scroll',

    // About
    'about.eyebrow': 'About',
    'about.title': 'A path, not a script.',
    'about.p1': "Tech, for me, is not just a field of study — it's a way to solve real problems. I like understanding how systems, networks, and security fit together to make something reliable.",
    'about.p2': "Curious by default, I learn by building: virtual labs, automation, monitoring, network hardening. This portfolio is an honest trace of that path.",
    'about.fact.location': 'Based in',
    'about.fact.location.value': 'Casablanca, Morocco',
    'about.fact.focus': 'Focus',
    'about.fact.focus.value': 'Networks & cybersecurity',
    'about.fact.education': 'Education',
    'about.fact.education.value': 'ISTA — Digital Infrastructures',
    'about.fact.languages': 'Languages',
    'about.fact.languages.value': 'EN · FR · AR',

    // Skills
    'skills.eyebrow': 'Skills',
    'skills.title': 'Stack & tooling.',
    'skills.cat.network': 'Network & Infrastructure',
    'skills.cat.security': 'Security',
    'skills.cat.systems': 'Systems',
    'skills.cat.tools': 'Tools & DevOps',

    // Projects
    'projects.eyebrow': 'Work',
    'projects.title': 'What I have built.',
    'projects.featured': 'Featured',
    'projects.view': 'Case study',

    'projects.infrastructure': 'Secure network infrastructure — monitoring & detection',
    'projects.infrastructure.desc': 'Full architecture with segmentation, monitoring (Zabbix, Prometheus, Grafana) and detection. Built in lab and documented.',
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

    // Certifications
    'certs.eyebrow': 'Certifications',
    'certs.title': 'Validated along the way.',

    // Contact
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's connect.",
    'contact.sub': 'Open to opportunities, collaborations, or just a conversation about networks.',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Email address',
    'contact.form.message': 'Your message',
    'contact.form.send': 'Send',
    'contact.form.sending': 'Sending…',
    'contact.form.sent': 'Message ready — your mail client will open.',
    'contact.form.error': 'Please fill all fields correctly.',
    'contact.direct': 'Or write directly',

    // Footer
    'footer.built': 'Designed & coded by hand.',
    'footer.rights': 'All rights reserved.',

    // CV
    'cv.download': 'Download CV',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
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
