import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';
import { ArrowUpRight, Sparkles } from 'lucide-react';

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
  { titleKey: 'projects.firewall', descKey: 'projects.firewall.desc', tags: ['FortiGate', 'BIG-IP', 'pfSense'] },
];

/* ---------- Featured Hero Card ---------- */
const FeaturedCard = ({ p, visible, delay }: { p: ProjectItem; visible: boolean; delay: number }) => {
  const { t } = useLanguage();
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-surface to-surface-2 p-8 md:p-10 transition-all duration-500 hover:border-primary/60 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.5)]"
      style={{
        animation: visible
          ? `fade-in 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms both`
          : undefined,
      }}
    >
      {/* Glow accent */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: 'hsl(var(--primary))' }}
      />
      {/* Grid pattern overlay */}
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
          <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight max-w-3xl">
          {t(p.titleKey)}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
          {t(p.descKey)}
        </p>
        <div className="flex flex-wrap gap-2">
          {p.tags.map(tag => (
            <span
              key={tag}
              className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

/* ---------- Compact Index Card ---------- */
const IndexCard = ({
  p, visible, delay, index,
}: { p: ProjectItem; visible: boolean; delay: number; index: number }) => {
  const { t } = useLanguage();
  return (
    <article
      className="group relative overflow-hidden rounded-xl border border-border-solid bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-2 hover:shadow-[0_10px_30px_-15px_hsl(var(--primary)/0.4)]"
      style={{
        animation: visible
          ? `fade-in 500ms cubic-bezier(0.16,1,0.3,1) ${delay}ms both`
          : undefined,
      }}
    >
      {/* Animated left accent line */}
      <div className="absolute left-0 top-0 h-full w-[3px] origin-bottom scale-y-0 bg-gradient-to-b from-primary to-secondary transition-transform duration-500 group-hover:scale-y-100" />

      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="font-mono text-xs text-muted-foreground/60 transition-colors group-hover:text-primary">
          / {String(index).padStart(2, '0')}
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>

      <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug transition-colors group-hover:text-primary">
        {t(p.titleKey)}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
        {t(p.descKey)}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {p.tags.slice(0, 4).map(tag => (
          <span
            key={tag}
            className="rounded-md border border-border-solid bg-surface-offset px-2 py-0.5 text-[11px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
        {p.tags.length > 4 && (
          <span className="rounded-md px-2 py-0.5 text-[11px] text-muted-foreground/60">
            +{p.tags.length - 4}
          </span>
        )}
      </div>
    </article>
  );
};

export const Projects = () => {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const featured = PROJECTS.find(p => p.featured);
  const rest = PROJECTS.filter(p => !p.featured);

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
              {String(PROJECTS.length).padStart(2, '0')} projects
            </span>
          </div>

          {/* Featured */}
          {featured && (
            <div className="mb-6">
              <FeaturedCard p={featured} visible={visible} delay={120} />
            </div>
          )}

          {/* Grid of remaining */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((p, i) => (
              <IndexCard
                key={p.titleKey}
                p={p}
                visible={visible}
                delay={220 + i * 60}
                index={i + 2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
