import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';
import { Network, Shield, Server, Wrench, Boxes, Activity, Terminal } from 'lucide-react';

interface BentoCardProps {
  className?: string;
  delay?: number;
  visible: boolean;
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const BentoCard = ({ className = '', delay = 0, visible, icon, title, items }: BentoCardProps) => (
  <div
    className={`group relative rounded-lg border border-border-solid bg-surface p-6 transition-colors hover:bg-surface-2 ${className}`}
    style={{
      animation: visible
        ? `fade-in 500ms cubic-bezier(0.16,1,0.3,1) ${delay}ms both`
        : undefined,
    }}
  >
    <div className="flex items-center gap-3 mb-5 text-primary">
      {icon}
      <h3 className="font-display text-lg text-foreground">{title}</h3>
    </div>
    <ul className="flex flex-wrap gap-2">
      {items.map(s => (
        <li
          key={s}
          className="px-2.5 py-1 rounded-md text-xs bg-surface-offset text-foreground border border-border-solid"
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

  return (
    <section id="skills" className="py-24 md:py-32 bg-surface/40">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-6xl mx-auto`}>
          <span className="pill mb-6">{t('skills.eyebrow')}</span>
          <h2 className="font-display font-bold text-[clamp(1.875rem,4vw,3rem)] leading-tight text-foreground mb-12">
            {t('skills.title')}
          </h2>

          {/* Bento grid: unequal cards */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <BentoCard
              visible={visible}
              delay={120}
              className="md:col-span-3"
              icon={<Network className="h-5 w-5" />}
              title={t('skills.cat.network')}
              items={['Cisco IOS', 'VLAN', 'OSPF', 'BGP', 'TCP/IP', 'NAT', 'SD-WAN', 'SDN']}
            />
            <BentoCard
              visible={visible}
              delay={180}
              className="md:col-span-3"
              icon={<Server className="h-5 w-5" />}
              title={t('skills.cat.systems')}
              items={['Linux', 'Ubuntu', 'RedHat', 'Windows Server', 'Active Directory']}
            />
            <BentoCard
              visible={visible}
              delay={240}
              className="md:col-span-2"
              icon={<Boxes className="h-5 w-5" />}
              title={t('skills.cat.virtualization')}
              items={['VMware ESXi', 'Proxmox', 'Hyper-V']}
            />
            <BentoCard
              visible={visible}
              delay={300}
              className="md:col-span-2"
              icon={<Shield className="h-5 w-5" />}
              title={t('skills.cat.security')}
              items={['FortiGate', 'pfSense', 'BIG-IP', 'MISP', 'Wazuh', 'Nmap', 'Gitleaks', 'Trivy']}
            />
            <BentoCard
              visible={visible}
              delay={360}
              className="md:col-span-2"
              icon={<Activity className="h-5 w-5" />}
              title={t('skills.cat.monitoring')}
              items={['Zabbix', 'Prometheus', 'Grafana']}
            />
            <BentoCard
              visible={visible}
              delay={420}
              className="md:col-span-3"
              icon={<Wrench className="h-5 w-5" />}
              title={t('skills.cat.devops')}
              items={['Docker', 'CI/CD', 'GitHub Actions', 'Git', 'MinIO']}
            />
            <BentoCard
              visible={visible}
              delay={480}
              className="md:col-span-3"
              icon={<Terminal className="h-5 w-5" />}
              title={t('skills.cat.scripting')}
              items={['Bash', 'Python', 'PowerShell', 'YAML']}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
