import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';
import { ArrowUpRight, Sparkles, ChevronDown, Activity, Server, Shield, Network, HardDrive, Cloud, Container, Radar } from 'lucide-react';
import { useState, ReactNode, Fragment } from 'react';

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
      featured: true,
    },
    {
      id: 'sdwan',
      icon: <Network className="h-4 w-4" />,
      category: FR ? 'Réseaux · SD-WAN' : 'Networking · SD-WAN',
      title: FR ? 'Simulation SD-WAN avec FortiGate' : 'SD-WAN simulation with FortiGate',
      tagline: FR
        ? "Maquette SD-WAN multi-sites avec FortiGate : routage dynamique, tunnels et basculement automatique."
        : 'Multi-site SD-WAN lab on FortiGate: dynamic routing, tunnels and automated failover.',
      problem: FR
        ? "Les architectures WAN traditionnelles peinent à offrir résilience, sélection de chemin et optimisation des liens entre sites distants."
        : 'Traditional WAN designs struggle to deliver resilience, path selection and link optimization across remote sites.',
      solution: FR
        ? "Conception et déploiement d'une topologie SD-WAN sur FortiGate avec tunnels IPsec, SD-WAN rules, monitoring SLA et bascule automatique en cas de dégradation de lien."
        : 'Design and deployment of an SD-WAN topology on FortiGate with IPsec tunnels, SD-WAN rules, SLA monitoring and automatic failover on link degradation.',
      role: FR
        ? "Conception de la topologie, configuration des FortiGate, mise en place des règles SD-WAN et tests de bascule."
        : 'Topology design, FortiGate configuration, SD-WAN rules setup and failover testing.',
      features: FR
        ? [
            'Tunnels IPsec site-à-site',
            'Règles SD-WAN par application',
            'Monitoring SLA des liens',
            'Basculement automatique',
            'Politiques de sécurité unifiées',
          ]
        : [
            'Site-to-site IPsec tunnels',
            'Application-aware SD-WAN rules',
            'Per-link SLA monitoring',
            'Automatic link failover',
            'Unified security policies',
          ],
      impact: FR
        ? "Connectivité inter-sites résiliente avec sélection de chemin intelligente et continuité de service en cas de panne."
        : 'Resilient inter-site connectivity with intelligent path selection and service continuity on link failure.',
      tags: ['FortiGate', 'SD-WAN', 'IPsec', 'BGP', 'Routing'],
    },
    {
      id: 'firewall',
      icon: <Shield className="h-4 w-4" />,
      category: FR ? 'Sécurité · Pare-feux' : 'Security · Firewalls',
      title: FR ? 'Benchmark de pare-feux nouvelle génération' : 'Next-gen firewall benchmark',
      tagline: FR
        ? "Comparatif pratique FortiGate, pfSense et BIG-IP sur des cas réseau et sécurité concrets."
        : 'Hands-on comparison of FortiGate, pfSense and BIG-IP across real networking and security scenarios.',
      problem: FR
        ? "Choisir un pare-feu sans tests réels conduit à des architectures sous-dimensionnées ou mal adaptées au trafic et aux besoins de filtrage."
        : 'Choosing a firewall without real testing leads to under-sized architectures that do not match real traffic and filtering needs.',
      solution: FR
        ? "Maquette en lab des trois solutions (FortiGate, pfSense, BIG-IP) avec mêmes scénarios : NAT, VPN, IPS, filtrage applicatif et load-balancing — puis comparatif documenté."
        : 'Lab setup of the three solutions (FortiGate, pfSense, BIG-IP) on identical scenarios: NAT, VPN, IPS, application filtering and load-balancing — followed by a documented comparison.',
      role: FR
        ? "Conception du protocole de test, déploiement des appliances, configuration et rédaction du comparatif."
        : 'Test protocol design, appliance deployment, configuration and benchmark writeup.',
      features: FR
        ? [
            'NAT, routage et VPN IPsec',
            'IPS et filtrage applicatif',
            'Load-balancing avec BIG-IP',
            'Logs et reporting centralisés',
            'Politiques sécurité comparables',
          ]
        : [
            'NAT, routing and IPsec VPN',
            'IPS and application filtering',
            'Load-balancing with BIG-IP',
            'Centralized logs and reporting',
            'Comparable security policies',
          ],
      impact: FR
        ? "Décision d'architecture pare-feu basée sur des mesures concrètes, pas sur des fiches produit."
        : 'Firewall architecture decisions backed by hands-on measurements, not by datasheets.',
      tags: ['FortiGate', 'pfSense', 'BIG-IP', 'IPS', 'VPN'],
    },
    {
      id: 'misp',
      icon: <Radar className="h-4 w-4" />,
      category: FR ? 'Cybersécurité · Threat Intel' : 'Cybersecurity · Threat Intel',
      title: FR ? 'Plateforme MISP — Threat Intelligence & IOCs' : 'MISP platform — Threat Intelligence & IOCs',
      tagline: FR
        ? "Déploiement d'une plateforme MISP pour collecter, corréler et partager des indicateurs de compromission."
        : 'MISP deployment to collect, correlate and share indicators of compromise.',
      problem: FR
        ? "Sans threat intel structurée, les indicateurs de compromission restent dispersés et difficilement exploitables par les équipes sécurité."
        : 'Without structured threat intel, indicators of compromise stay scattered and hard to operationalize for security teams.',
      solution: FR
        ? "Déploiement et durcissement d'une instance MISP : feeds, taxonomies, partage entre communautés, et intégration avec un SIEM Wazuh pour enrichissement des alertes."
        : 'Deployment and hardening of a MISP instance: feeds, taxonomies, community sharing, and integration with a Wazuh SIEM to enrich alerts.',
      role: FR
        ? "Installation, durcissement, configuration des feeds et intégration avec la stack de monitoring."
        : 'Installation, hardening, feed configuration and integration with the monitoring stack.',
      features: FR
        ? [
            'Feeds publics et privés',
            'Taxonomies et galaxies',
            'Partage inter-communautés',
            'Intégration SIEM Wazuh',
            'API pour automatisation',
          ]
        : [
            'Public and private feeds',
            'Taxonomies and galaxies',
            'Cross-community sharing',
            'Wazuh SIEM integration',
            'API for automation',
          ],
      impact: FR
        ? "Détection enrichie par du contexte de menace réel et capitalisation sur les incidents précédents."
        : 'Detection enriched with real threat context and capitalization on previous incidents.',
      tags: ['MISP', 'Wazuh', 'SIEM', 'Threat Intel', 'IOCs'],
    },
    {
      id: 'monitoring-stack',
      icon: <Activity className="h-4 w-4" />,
      category: FR ? 'Supervision · Observabilité' : 'Monitoring · Observability',
      title: FR ? 'Stack de supervision Zabbix, Prometheus & Grafana' : 'Zabbix, Prometheus & Grafana monitoring stack',
      tagline: FR
        ? "Supervision unifiée d'infrastructures hétérogènes avec dashboards et alerting."
        : 'Unified monitoring for heterogeneous infrastructure with dashboards and alerting.',
      problem: FR
        ? "Les pannes sont détectées trop tard faute d'une vue consolidée des serveurs, services et équipements réseau."
        : 'Outages are detected too late because there is no consolidated view of servers, services and network devices.',
      solution: FR
        ? "Mise en place d'une stack de supervision combinant Zabbix pour les équipements, Prometheus pour les services et Grafana pour la visualisation, avec alerting multi-canal."
        : 'A monitoring stack combining Zabbix for devices, Prometheus for services and Grafana for visualization, with multi-channel alerting.',
      role: FR
        ? "Architecture, déploiement, création des dashboards et règles d'alerte."
        : 'Architecture, deployment, dashboard creation and alert rule design.',
      features: FR
        ? [
            'Templates Zabbix pour réseau et systèmes',
            'Exporters Prometheus dédiés',
            'Dashboards Grafana métiers',
            'Alerting email / chat',
            'Rétention et historisation',
          ]
        : [
            'Zabbix templates for network and systems',
            'Dedicated Prometheus exporters',
            'Business-oriented Grafana dashboards',
            'Email / chat alerting',
            'Retention and historization',
          ],
      impact: FR
        ? "Détection proactive des incidents et baisse significative du temps moyen de diagnostic."
        : 'Proactive incident detection and a significant drop in mean time to diagnose.',
      tags: ['Zabbix', 'Prometheus', 'Grafana', 'Alerting', 'Linux'],
    },
    {
      id: 'nas',
      icon: <HardDrive className="h-4 w-4" />,
      category: FR ? 'Systèmes · Stockage' : 'Systems · Storage',
      title: FR ? 'Conversion d’un PC en NAS (OpenMediaVault)' : 'Repurposing a PC into a NAS (OpenMediaVault)',
      tagline: FR
        ? "NAS auto-hébergé sur matériel recyclé : partages, snapshots et sauvegardes automatisées."
        : 'Self-hosted NAS on recycled hardware: shares, snapshots and automated backups.',
      problem: FR
        ? "Besoin d'un stockage centralisé, fiable et sauvegardé sans investir dans un NAS commercial."
        : 'Need for centralized, reliable and backed-up storage without investing in a commercial NAS.',
      solution: FR
        ? "Installation d'OpenMediaVault sur PC recyclé, configuration RAID, partages SMB/NFS, snapshots et stratégie de sauvegarde déportée."
        : 'OpenMediaVault install on a repurposed PC, RAID configuration, SMB/NFS shares, snapshots and offsite backup strategy.',
      role: FR
        ? "Conception, installation, durcissement et automatisation des sauvegardes."
        : 'Design, installation, hardening and backup automation.',
      features: FR
        ? [
            'RAID logiciel et monitoring SMART',
            'Partages SMB / NFS',
            'Snapshots planifiés',
            'Sauvegardes déportées chiffrées',
            'Accès distant sécurisé (VPN)',
          ]
        : [
            'Software RAID with SMART monitoring',
            'SMB / NFS shares',
            'Scheduled snapshots',
            'Encrypted offsite backups',
            'Secure remote access (VPN)',
          ],
      impact: FR
        ? "Stockage fiable, sauvegardé et accessible à distance pour un coût matériel quasi nul."
        : 'Reliable, backed-up storage with secure remote access at near-zero hardware cost.',
      tags: ['OpenMediaVault', 'Linux', 'RAID', 'SMB', 'NFS', 'Backup'],
    },
    {
      id: 'devops-ci',
      icon: <Container className="h-4 w-4" />,
      category: FR ? 'DevOps · Conteneurs' : 'DevOps · Containers',
      title: FR ? 'Conteneurisation et CI/CD avec Docker' : 'Containerization and CI/CD with Docker',
      tagline: FR
        ? "Pipelines CI/CD pour livrer des services conteneurisés de manière reproductible."
        : 'CI/CD pipelines to deliver containerized services in a reproducible way.',
      problem: FR
        ? "Déploiements manuels, incohérences entre environnements et absence de retour rapide en cas de régression."
        : 'Manual deployments, drift between environments and no fast feedback on regressions.',
      solution: FR
        ? "Mise en conteneurs des services, écriture de pipelines GitHub Actions (build, test, scan, deploy) et déploiement reproductible via Docker Compose."
        : 'Service containerization, GitHub Actions pipelines (build, test, scan, deploy) and reproducible deployments via Docker Compose.',
      role: FR
        ? "Conception des pipelines, écriture des Dockerfiles et industrialisation du déploiement."
        : 'Pipeline design, Dockerfile authoring and deployment industrialization.',
      features: FR
        ? [
            'Builds Docker multi-stage',
            'Pipelines GitHub Actions',
            'Scan vulnérabilités (Trivy)',
            'Déploiement Docker Compose',
            'Versionnage et rollback',
          ]
        : [
            'Multi-stage Docker builds',
            'GitHub Actions pipelines',
            'Vulnerability scanning (Trivy)',
            'Docker Compose deployment',
            'Versioning and rollback',
          ],
      impact: FR
        ? "Livraison plus rapide, environnements cohérents et régressions détectées en amont."
        : 'Faster delivery, consistent environments and regressions caught early.',
      tags: ['Docker', 'GitHub Actions', 'CI/CD', 'Trivy', 'Compose'],
    },
    {
      id: 'openstack',
      icon: <Cloud className="h-4 w-4" />,
      category: FR ? 'Cloud · Privé' : 'Cloud · Private',
      title: FR ? 'Cloud privé OpenStack' : 'OpenStack private cloud',
      tagline: FR
        ? "Déploiement d'un cloud privé OpenStack pour provisionner instances, réseaux et stockage à la demande."
        : 'Private OpenStack cloud to provision instances, networks and storage on demand.',
      problem: FR
        ? "Besoin d'un environnement cloud souverain pour provisionner rapidement des ressources sans dépendre d'un fournisseur public."
        : 'Need for a sovereign cloud environment to quickly provision resources without depending on a public provider.',
      solution: FR
        ? "Déploiement d'OpenStack (Nova, Neutron, Cinder, Glance, Keystone) sur un cluster, avec gestion des projets, quotas et réseaux virtuels."
        : 'OpenStack deployment (Nova, Neutron, Cinder, Glance, Keystone) on a cluster, with project, quota and virtual network management.',
      role: FR
        ? "Architecture, installation des services, configuration réseau et tests de provisionnement."
        : 'Architecture, service install, network configuration and provisioning tests.',
      features: FR
        ? [
            'Compute Nova multi-noeuds',
            'Réseaux virtuels Neutron',
            'Stockage bloc Cinder',
            'Catalogue d’images Glance',
            'Quotas et projets isolés',
          ]
        : [
            'Multi-node Nova compute',
            'Neutron virtual networks',
            'Cinder block storage',
            'Glance image catalog',
            'Isolated projects and quotas',
          ],
      impact: FR
        ? "Provisionnement de ressources cloud à la demande sur infrastructure interne."
        : 'On-demand cloud resource provisioning on internal infrastructure.',
      tags: ['OpenStack', 'Nova', 'Neutron', 'KVM', 'Linux'],
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
              <Fragment key={p.id}>
                <ProjectCard
                  p={p}
                  visible={visible}
                  delay={220 + i * 60}
                  index={i + 2}
                  onOpen={() => setOpenId(p.id)}
                />
                {opened && opened.id === p.id && (
                  <DetailBlock p={opened} onClose={() => setOpenId(null)} />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
