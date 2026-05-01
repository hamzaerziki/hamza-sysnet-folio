import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';
import { ArrowUpRight } from 'lucide-react';

interface ProjectItem {
  titleKey: string;
  descKey: string;
  tags: string[];
  featured?: boolean;
}

const PROJECTS: ProjectItem[] = [
  {
    titleKey: 'projects.observability',
    descKey: 'projects.observability.desc',
    tags: ['Zabbix', 'Prometheus', 'Grafana', 'SIEM', 'SDN', 'TypeScript', 'ZeroTier'],
    featured: true,
  },
  {
    titleKey: 'projects.devsecops',
    descKey: 'projects.devsecops.desc',
    tags: ['GitHub Actions', 'Gitleaks', 'Trivy', 'Docker', 'Wazuh', 'CI/CD', 'MinIO'],
  },
  {
    titleKey: 'projects.privatecloud',
    descKey: 'projects.privatecloud.desc',
    tags: ['OpenStack', 'KVM', 'Virtualization', 'Private Cloud'],
  },
  {
    titleKey: 'projects.saas',
    descKey: 'projects.saas.desc',
    tags: ['SaaS', 'Mobile', 'TypeScript', 'Security'],
  },
  { titleKey: 'projects.misp',  descKey: 'projects.misp.desc',  tags: ['MISP', 'Wazuh', 'SIEM'] },
  { titleKey: 'projects.sdwan', descKey: 'projects.sdwan.desc', tags: ['FortiGate', 'SD-WAN'] },
  { titleKey: 'projects.nas',   descKey: 'projects.nas.desc',   tags: ['OpenMediaVault', 'Storage'] },
  { titleKey: 'projects.ista',  descKey: 'projects.ista.desc',  tags: ['Clonezilla', 'Deployment'] },
  { titleKey: 'projects.firewall', descKey: 'projects.firewall.desc', tags: ['BIG-IP', 'pfSense'] },
];

const Card = ({
  p, featured, visible, delay,
}: { p: ProjectItem; featured?: boolean; visible: boolean; delay: number }) => {
  const { t } = useLanguage();
  return (
    <article
      className={`group relative rounded-lg border border-border-solid bg-surface p-6 md:p-8 transition-colors hover:bg-surface-2 ${
        featured ? 'md:col-span-2' : ''
      }`}
      style={{
        animation: visible
          ? `fade-in 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms both`
          : undefined,
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        {featured && <span className="pill">{t('projects.featured')}</span>}
        <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <h3 className={`font-display text-foreground mb-3 leading-tight ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
        {t(p.titleKey)}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-prose">
        {t(p.descKey)}
      </p>
      <div className="flex flex-wrap gap-2">
        {p.tags.map(tag => (
          <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-surface-offset text-muted-foreground border border-border-solid">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export const Projects = () => {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-6xl mx-auto`}>
          <span className="pill mb-6">{t('projects.eyebrow')}</span>
          <h2 className="font-display font-bold text-[clamp(1.875rem,4vw,3rem)] leading-tight text-foreground mb-12">
            {t('projects.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {PROJECTS.map((p, i) => (
              <Card key={p.titleKey} p={p} featured={p.featured} visible={visible} delay={120 + i * 70} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
