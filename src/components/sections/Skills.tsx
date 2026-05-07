import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';
import { Network, Shield, Server, Wrench, Boxes } from 'lucide-react';

interface SkillCardProps {
  delay?: number;
  visible: boolean;
  icon: React.ReactNode;
  title: string;
  items: string[];
  index: number;
}

const SkillCard = ({ delay = 0, visible, icon, title, items, index }: SkillCardProps) => (
  <div
    className="group relative overflow-hidden rounded-xl border border-border-solid bg-surface p-6 transition-all duration-300 hover:border-primary/40 hover:bg-surface-2 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_hsl(var(--primary)/0.4)]"
    style={{
      animation: visible
        ? `fade-in 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms both`
        : undefined,
    }}
  >
    {/* Soft accent on hover */}
    <div
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background:
          'radial-gradient(600px circle at 0% 0%, hsl(var(--primary) / 0.08), transparent 40%)',
      }}
    />

    {/* Header */}
    <div className="relative mb-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
      </div>
      <span className="font-mono text-[10px] text-muted-foreground/60">
        {String(index).padStart(2, '0')}
      </span>
    </div>

    {/* Divider */}
    <div className="relative mb-4 h-px w-full bg-gradient-to-r from-border-solid via-border-solid to-transparent" />

    {/* Tags */}
    <ul className="relative flex flex-wrap gap-1.5">
      {items.map((s, i) => (
        <li
          key={s}
          className="rounded-md border border-border-solid bg-surface-offset px-2.5 py-1 text-xs text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          style={{
            animation: visible
              ? `fade-in 400ms cubic-bezier(0.16,1,0.3,1) ${delay + 100 + i * 30}ms both`
              : undefined,
          }}
        >
          {s}
        </li>
      ))}
    </ul>
  </div>
);

export const Skills = () => {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const categories = [
    { icon: <Server className="h-4 w-4" />, title: t('skills.cat.systems'), items: ['Linux', 'Windows Server', 'Active Directory', 'GPO', 'DNS', 'DHCP'] },
    { icon: <Network className="h-4 w-4" />, title: t('skills.cat.network'), items: ['Routing', 'Switching', 'VLAN', 'NAT', 'ACL', 'VPN', 'Firewalling', 'OSPF', 'BGP'] },
    { icon: <Shield className="h-4 w-4" />, title: t('skills.cat.security'), items: ['Hardening', 'Access control', 'FortiGate', 'pfSense', 'Wazuh', 'MISP', 'Threat awareness'] },
    { icon: <Wrench className="h-4 w-4" />, title: t('skills.cat.devops'), items: ['Automation', 'CI/CD', 'GitHub Actions', 'Observability', 'Backup strategy', 'Deployment workflows'] },
    { icon: <Boxes className="h-4 w-4" />, title: t('skills.cat.tools'), items: ['Docker', 'Proxmox', 'VMware', 'Zabbix', 'Prometheus', 'Grafana', 'Bash', 'Python', 'PowerShell'] },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-surface/40">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-6xl mx-auto`}>
          <span className="pill mb-6">{t('skills.eyebrow')}</span>
          <h2 className="font-display font-bold text-[clamp(1.875rem,4vw,3rem)] leading-tight text-foreground mb-12">
            {t('skills.title')}
          </h2>

          {/* Equal grid: clean, readable, smooth */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((c, i) => (
              <SkillCard
                key={c.title}
                visible={visible}
                delay={120 + i * 60}
                index={i + 1}
                icon={c.icon}
                title={c.title}
                items={c.items}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
