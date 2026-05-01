import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';
import { Award, Shield, Network, Code, Cpu, Languages } from 'lucide-react';

interface Cert {
  title: string;
  issuer: string;
  year?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CERTS: Cert[] = [
  { title: 'Fortinet Certified Associate in Cybersecurity', issuer: 'Fortinet', icon: Shield },
  { title: 'CTF Competition & Offensive Security', issuer: 'Competition', icon: Shield },
  { title: 'CCNA: Enterprise Networking, Security, Automation', issuer: 'Cisco', icon: Network },
  { title: 'CCNA: Switching, Routing, and Wireless', issuer: 'Cisco', icon: Network },
  { title: 'CCNA Introduction to Networks', issuer: 'Cisco', icon: Network },
  { title: 'Ethical Hacker', issuer: 'Cisco', icon: Shield },
  { title: 'Cyber Threat Management', issuer: 'Cisco', icon: Shield },
  { title: 'Network Support and Security', issuer: 'Cisco', icon: Network },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco', icon: Shield },
  { title: 'Python Essentials 1', issuer: 'Cisco', icon: Code },
  { title: 'Computer Hardware Basics', issuer: 'Cisco', icon: Cpu },
  { title: 'English For IT', issuer: 'Cisco', icon: Languages },
];

export const Certificates = () => {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="certificates" className="py-24 md:py-32 bg-surface/40">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-6xl mx-auto`}>
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <span className="pill mb-6">{t('certs.eyebrow')}</span>
              <h2 className="font-display font-bold text-[clamp(1.875rem,4vw,3rem)] leading-tight text-foreground mt-4">
                {t('certs.title')}
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <Award className="h-4 w-4" />
              <span className="text-sm">{CERTS.length}</span>
            </div>
          </div>

          {/* 3-col desktop, horizontal scroll mobile */}
          <div className="md:grid md:grid-cols-3 md:gap-4 flex gap-3 overflow-x-auto pb-4 md:pb-0 snap-x md:snap-none scrollbar-thin">
            {CERTS.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="snap-start min-w-[260px] md:min-w-0 rounded-lg border border-border-solid bg-surface p-5 hover:bg-surface-2 transition-colors"
                  style={{
                    animation: visible
                      ? `fade-in 500ms cubic-bezier(0.16,1,0.3,1) ${100 + i * 50}ms both`
                      : undefined,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-md bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-foreground leading-snug mb-1">{c.title}</h3>
                      <p className="text-xs text-muted-foreground">{c.issuer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
