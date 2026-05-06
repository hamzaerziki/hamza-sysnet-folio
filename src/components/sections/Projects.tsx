import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';
import { ArrowUpRight, Sparkles, ChevronDown, Building2, ShieldCheck, GraduationCap, Smartphone, Activity, Server } from 'lucide-react';
import { useState, ReactNode } from 'react';

interface ProjectItem {
  id: string;
  icon: ReactNode;
  category: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  impact: string;
  tags: string[];
  featured?: boolean;
}

const useProjects = (): ProjectItem[] => {
  const { t, language } = useLanguage();
  const FR = language === 'fr';

  return [
    {
      id: 'iydati',
      icon: <Building2 className="h-4 w-4" />,
      category: FR ? 'ERP · SaaS' : 'ERP · SaaS',
      title: 'IYDATI ERP',
      tagline: FR
        ? "ERP complet pour la gestion de cabinet : patients, agendas, facturation et stock."
        : 'Full ERP for cabinet management: patients, schedules, billing and inventory.',
      problem: FR
        ? "Les cabinets médicaux et professionnels gèrent encore agendas, dossiers patients, facturation et stock sur des outils dispersés (Excel, papier, logiciels isolés), ce qui multiplie les erreurs et fait perdre un temps considérable."
        : 'Medical and professional cabinets still manage schedules, patient records, billing and stock across scattered tools (Excel, paper, siloed software), causing errors and major time loss.',
      solution: FR
        ? "Un ERP unifié, modulaire et sécurisé centralisant la gestion du cabinet : fiches patients, prises de rendez-vous, ordonnances, facturation, paiements, stock et reporting — accessible en SaaS, multi-utilisateurs avec rôles."
        : 'A unified, modular and secure ERP centralizing cabinet management: patient records, appointments, prescriptions, billing, payments, stock and reporting — delivered as SaaS, multi-user with role-based access.',
      role: FR
        ? "Conception produit, architecture technique, développement full-stack, sécurisation, déploiement et accompagnement client."
        : 'Product design, technical architecture, full-stack development, hardening, deployment and customer onboarding.',
      features: FR
        ? [
            'Gestion patients & dossiers médicaux',
            'Agenda multi-praticiens et rappels',
            'Facturation, devis et suivi des paiements',
            'Gestion du stock et alertes seuils',
            'Rôles & permissions granulaires',
            'Tableaux de bord et exports',
          ]
        : [
            'Patient management & medical records',
            'Multi-practitioner agenda & reminders',
            'Billing, quotes and payment tracking',
            'Inventory management with low-stock alerts',
            'Granular roles & permissions',
            'Dashboards and data exports',
          ],
      impact: FR
        ? "Réduction drastique du temps administratif, fiabilisation de la facturation et vision 360° du cabinet en un seul outil."
        : 'Drastic reduction of admin time, reliable billing, and a 360° view of the cabinet in a single tool.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'SaaS', 'RBAC'],
      featured: true,
    },
    {
      id: 'monitoring',
      icon: <Activity className="h-4 w-4" />,
      category: FR ? 'Observabilité · Auto-remédiation' : 'Observability · Auto-remediation',
      title: FR
        ? "Plateforme intelligente d'observabilité & d'auto-remédiation"
        : 'Intelligent observability & auto-remediation platform',
      tagline: FR
        ? "Supervision, décision et auto-remédiation des incidents d'infrastructure en temps réel."
        : 'Monitoring, decision-making and auto-remediation of infrastructure incidents in real time.',
      problem: FR
        ? "Les équipes IT subissent les incidents : alertes en silos, diagnostics manuels et longues fenêtres de résolution. La détection seule ne suffit plus."
        : 'IT teams suffer through incidents: siloed alerts, manual diagnostics, long resolution windows. Detection alone is no longer enough.',
      solution: FR
        ? "Une plateforme combinant collecte de métriques, SIEM et SDN, capable de corréler, décider puis exécuter automatiquement des actions de remédiation (rerouting, isolation, redémarrage) avec traçabilité complète."
        : 'A platform combining metrics collection, SIEM and SDN, able to correlate, decide and automatically execute remediation actions (rerouting, isolation, restarts) with full audit trail.',
      role: FR
        ? "Architecture, intégration des outils, développement du moteur de décision et des runbooks d'auto-remédiation."
        : 'Architecture, tool integration, development of the decision engine and auto-remediation runbooks.',
      features: FR
        ? [
            'Dashboards Grafana temps réel',
            'Alerting multi-canal',
            'Corrélation événements via SIEM',
            'Moteur de décision basé règles',
            'Auto-remédiation pilotée SDN',
            'Audit trail des actions',
          ]
        : [
            'Real-time Grafana dashboards',
            'Multi-channel alerting',
            'Event correlation via SIEM',
            'Rule-based decision engine',
            'SDN-driven auto-remediation',
            'Full action audit trail',
          ],
      impact: FR
        ? "MTTR réduit, équipes déchargées des incidents répétitifs et infrastructure auto-réparante sur les scénarios connus."
        : 'Reduced MTTR, teams freed from repetitive incidents, and self-healing infrastructure on known scenarios.',
      tags: ['Zabbix', 'Prometheus', 'Grafana', 'SIEM', 'SDN', 'TypeScript'],
    },
    {
      id: 'edumanage',
      icon: <GraduationCap className="h-4 w-4" />,
      category: FR ? 'SaaS · Éducation' : 'SaaS · Education',
      title: 'Edumanage SaaS',
      tagline: FR
        ? "Plateforme SaaS de gestion pour écoles et centres de formation."
        : 'SaaS platform for managing schools and training centers.',
      problem: FR
        ? "Écoles et centres jonglent entre inscriptions papier, plannings Excel, suivi des paiements et communication parents — sans vision consolidée."
        : 'Schools and centers juggle paper enrollments, Excel schedules, payment tracking and parent communication — with no consolidated view.',
      solution: FR
        ? "Une plateforme SaaS multi-rôles (admin, enseignants, étudiants, parents) couvrant inscriptions, emplois du temps, présences, notes, paiements et communication interne."
        : 'A multi-role SaaS platform (admin, teachers, students, parents) covering enrollments, schedules, attendance, grades, payments and internal communication.',
      role: FR
        ? "Conception produit, modélisation des rôles, développement full-stack, déploiement et support."
        : 'Product design, role modeling, full-stack development, deployment and support.',
      features: FR
        ? [
            'Inscriptions & dossiers étudiants',
            'Emplois du temps et présences',
            'Notes, bulletins et évaluations',
            'Paiements et reçus',
            'Espace parents & enseignants',
            'Notifications et messagerie',
          ]
        : [
            'Enrollments & student records',
            'Schedules and attendance',
            'Grades, transcripts and assessments',
            'Payments and receipts',
            'Parent & teacher portals',
            'Notifications and messaging',
          ],
      impact: FR
        ? "Pilotage centralisé de l'établissement, communication fluide avec les familles et reporting fiable pour la direction."
        : 'Centralized institution management, smooth family communication, and reliable reporting for leadership.',
      tags: ['SaaS', 'React', 'Node.js', 'PostgreSQL', 'Multi-tenant'],
    },
    {
      id: 'insurance',
      icon: <ShieldCheck className="h-4 w-4" />,
      category: FR ? 'Application locale · Assurance' : 'Local app · Insurance',
      title: FR
        ? "Logiciel de gestion pour cabinet d'assurance"
        : 'Insurance cabinet management system',
      tagline: FR
        ? "Application locale avec module de réservation client pour cabinets d'assurance."
        : 'Local application with client-side reservation module for insurance cabinets.',
      problem: FR
        ? "Les cabinets d'assurance traitent contrats, sinistres et rendez-vous sur des outils manuels, sans coordination entre l'accueil client et la gestion interne."
        : 'Insurance cabinets handle contracts, claims and appointments through manual tools, with no coordination between the client front desk and internal operations.',
      solution: FR
        ? "Un logiciel local sécurisé pour la gestion des clients, contrats et sinistres, couplé à un module de réservation côté client pour planifier rendez-vous et déclarations à distance."
        : 'A secure local software for managing clients, contracts and claims, paired with a client-side reservation module to schedule appointments and declarations remotely.',
      role: FR
        ? "Analyse métier, conception, développement de l'application desktop et du module de réservation, sécurisation des données."
        : 'Business analysis, design, development of the desktop app and reservation module, data hardening.',
      features: FR
        ? [
            'Fiches clients et contrats',
            'Suivi des sinistres et échéances',
            'Module de réservation en ligne',
            'Notifications de rendez-vous',
            'Historique et journal d’activité',
            'Sauvegardes locales chiffrées',
          ]
        : [
            'Client and contract records',
            'Claims and renewal tracking',
            'Online reservation module',
            'Appointment notifications',
            'Full activity log and history',
            'Encrypted local backups',
          ],
      impact: FR
        ? "Workflow fluide entre client et cabinet, moins d'oublis sur les renouvellements et meilleure expérience client."
        : 'Smooth workflow between client and cabinet, fewer missed renewals, and a better client experience.',
      tags: ['Desktop', 'TypeScript', 'SQLite', 'Reservations'],
    },
    {
      id: 'parent',
      icon: <Smartphone className="h-4 w-4" />,
      category: FR ? 'Mobile · Parental control' : 'Mobile · Parental control',
      title: FR ? 'Application mobile parentale' : 'Parent mobile app',
      tagline: FR
        ? "Pilotage et supervision de l'usage du téléphone par les enfants."
        : "Manage and monitor children's phone usage.",
      problem: FR
        ? "Les parents manquent d'outils simples pour encadrer le temps d'écran, les applications utilisées et la sécurité numérique de leurs enfants."
        : 'Parents lack simple tools to control screen time, app usage and the digital safety of their children.',
      solution: FR
        ? "Une application mobile permettant aux parents de superviser à distance l'appareil de l'enfant : limites de temps, blocage d'apps, filtrage de contenu et alertes en cas d'usage suspect."
        : "A mobile app letting parents remotely supervise the child's device: time limits, app blocking, content filtering and alerts on suspicious usage.",
      role: FR
        ? "Conception UX, développement mobile, intégration des contrôles système et sécurisation des échanges."
        : 'UX design, mobile development, integration of system-level controls and securing all communications.',
      features: FR
        ? [
            'Limites de temps par app',
            'Blocage et liste blanche',
            'Filtrage de contenu',
            'Localisation sécurisée',
            'Rapports d’usage quotidiens',
            'Alertes en temps réel',
          ]
        : [
            'Per-app time limits',
            'App blocking and allow-list',
            'Content filtering',
            'Secure location sharing',
            'Daily usage reports',
            'Real-time alerts',
          ],
      impact: FR
        ? "Tranquillité d'esprit pour les parents et environnement numérique plus sûr pour les enfants."
        : 'Peace of mind for parents and a safer digital environment for children.',
      tags: ['React Native', 'Mobile', 'Security', 'Push'],
    },
    {
      id: 'homelab',
      icon: <Server className="h-4 w-4" />,
      category: FR ? 'Homelab · Infra' : 'Homelab · Infra',
      title: FR
        ? 'Homelab : NAS, virtualisation & sécurité'
        : 'Homelab: NAS, virtualization & security',
      tagline: FR
        ? "Plateau d'expérimentation hands-on : NAS, hyperviseurs, pare-feux et SIEM."
        : 'Hands-on experimentation platform: NAS, hypervisors, firewalls and SIEM.',
      problem: FR
        ? "Tester réellement des architectures (segmentation, sauvegarde, détection) demande un environnement représentatif et reproductible."
        : 'Truly testing architectures (segmentation, backup, detection) requires a representative and reproducible environment.',
      solution: FR
        ? "Un homelab regroupant un NAS OpenMediaVault sur matériel recyclé, des hyperviseurs (Proxmox/ESXi), un pare-feu pfSense/FortiGate et une stack MISP + Wazuh pour la threat intel et la corrélation."
        : 'A homelab combining an OpenMediaVault NAS on recycled hardware, hypervisors (Proxmox/ESXi), a pfSense/FortiGate firewall, and a MISP + Wazuh stack for threat intel and correlation.',
      role: FR
        ? "Conception, déploiement, durcissement, supervision et documentation complète."
        : 'Design, deployment, hardening, monitoring and full documentation.',
      features: FR
        ? [
            'NAS avec snapshots et sauvegardes',
            'Segmentation réseau VLAN',
            'Pare-feu et règles strictes',
            'SIEM Wazuh + threat intel MISP',
            'Simulation SD-WAN avec FortiGate',
            'Cloud privé OpenStack virtualisé',
          ]
        : [
            'NAS with snapshots and backups',
            'VLAN network segmentation',
            'Firewall with strict rule set',
            'Wazuh SIEM + MISP threat intel',
            'SD-WAN simulation on FortiGate',
            'Virtualized OpenStack private cloud',
          ],
      impact: FR
        ? "Environnement réel pour valider architectures et procédures avant production."
        : 'A real environment to validate architectures and procedures before production.',
      tags: ['OpenMediaVault', 'Proxmox', 'pfSense', 'FortiGate', 'Wazuh', 'OpenStack'],
    },
  ];
};

/* ---------- Featured Hero Card ---------- */
const FeaturedCard = ({ p, visible, delay, onOpen }: { p: ProjectItem; visible: boolean; delay: number; onOpen: () => void }) => {
  const { t } = useLanguage();
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-surface to-surface-2 p-8 md:p-10 transition-all duration-500 hover:border-primary/60 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.5)]"
      style={{
        animation: visible ? `fade-in 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms both` : undefined,
      }}
    >
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: 'hsl(var(--primary))' }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative">
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3 w-3" />
            {t('projects.featured')}
          </span>
          <span className="font-mono text-[11px] text-muted-foreground/70">{p.category}</span>
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight max-w-3xl">
          {p.title}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">{p.tagline}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tags.map(tag => (
            <span key={tag} className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs text-primary">
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
        >
          {t('projects.details')} <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
};

/* ---------- Compact Card ---------- */
const ProjectCard = ({ p, visible, delay, index, onOpen }: { p: ProjectItem; visible: boolean; delay: number; index: number; onOpen: () => void }) => {
  const { t } = useLanguage();
  return (
    <article
      className="group relative overflow-hidden rounded-xl border border-border-solid bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-2 hover:shadow-[0_10px_30px_-15px_hsl(var(--primary)/0.4)] flex flex-col"
      style={{
        animation: visible ? `fade-in 500ms cubic-bezier(0.16,1,0.3,1) ${delay}ms both` : undefined,
      }}
    >
      <div className="absolute left-0 top-0 h-full w-[3px] origin-bottom scale-y-0 bg-gradient-to-b from-primary to-secondary transition-transform duration-500 group-hover:scale-y-100" />
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
          {p.icon}
        </div>
        <span className="font-mono text-xs text-muted-foreground/60">/ {String(index).padStart(2, '0')}</span>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70 mb-1">{p.category}</span>
      <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">{p.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.tagline}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {p.tags.slice(0, 4).map(tag => (
          <span key={tag} className="rounded-md border border-border-solid bg-surface-offset px-2 py-0.5 text-[11px] text-muted-foreground">
            {tag}
          </span>
        ))}
        {p.tags.length > 4 && (
          <span className="rounded-md px-2 py-0.5 text-[11px] text-muted-foreground/60">+{p.tags.length - 4}</span>
        )}
      </div>
      <button
        onClick={onOpen}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:gap-2 transition-all self-start"
      >
        {t('projects.details')} <ChevronDown className="h-3.5 w-3.5" />
      </button>
    </article>
  );
};

/* ---------- Detail Block (in-place expand) ---------- */
const DetailBlock = ({ p, onClose }: { p: ProjectItem; onClose: () => void }) => {
  const { t } = useLanguage();
  const sections = [
    { label: t('projects.problem'), value: p.problem },
    { label: t('projects.solution'), value: p.solution },
    { label: t('projects.role'), value: p.role },
    { label: t('projects.impact'), value: p.impact },
  ];
  return (
    <div
      className="relative col-span-full rounded-2xl border border-primary/30 bg-surface-2 p-8 md:p-10"
      style={{ animation: `fade-in 400ms cubic-bezier(0.16,1,0.3,1) both` }}
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-primary/80">{p.category}</span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">{p.title}</h3>
        </div>
        <button
          onClick={onClose}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border-solid text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
        {sections.map(s => (
          <div key={s.label}>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{s.label}</h4>
            <p className="text-sm text-foreground leading-relaxed">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">{t('projects.features')}</h4>
        <ul className="grid sm:grid-cols-2 gap-2">
          {p.features.map(f => (
            <li key={f} className="flex items-start gap-2 text-sm text-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">{t('projects.stack')}</h4>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map(tag => (
            <span key={tag} className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs text-primary">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const projects = useProjects();
  const [openId, setOpenId] = useState<string | null>(null);

  const featured = projects.find(p => p.featured)!;
  const rest = projects.filter(p => !p.featured);
  const opened = projects.find(p => p.id === openId);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-6xl mx-auto`}>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <span className="pill mb-6">{t('projects.eyebrow')}</span>
              <h2 className="font-display font-bold text-[clamp(1.875rem,4vw,3rem)] leading-tight text-foreground">
                {t('projects.title')}
              </h2>
            </div>
            <span className="hidden md:block font-mono text-xs text-muted-foreground/60">
              {String(projects.length).padStart(2, '0')} projects
            </span>
          </div>

          <div className="mb-6">
            <FeaturedCard p={featured} visible={visible} delay={120} onOpen={() => setOpenId(featured.id)} />
          </div>

          {opened && opened.id === featured.id && (
            <div className="mb-6">
              <DetailBlock p={opened} onClose={() => setOpenId(null)} />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((p, i) => (
              <>
                <ProjectCard
                  key={p.id}
                  p={p}
                  visible={visible}
                  delay={220 + i * 60}
                  index={i + 2}
                  onOpen={() => setOpenId(p.id)}
                />
                {opened && opened.id === p.id && (
                  <DetailBlock key={`${p.id}-detail`} p={opened} onClose={() => setOpenId(null)} />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
