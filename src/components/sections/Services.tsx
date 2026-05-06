import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';
import { ServerCog, ShieldCheck, LayoutDashboard, Smartphone } from 'lucide-react';

export const Services = () => {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const items = [
    { icon: <ServerCog className="h-5 w-5" />, title: t('services.infra.title'), desc: t('services.infra.desc') },
    { icon: <ShieldCheck className="h-5 w-5" />, title: t('services.devsecops.title'), desc: t('services.devsecops.desc') },
    { icon: <LayoutDashboard className="h-5 w-5" />, title: t('services.fullstack.title'), desc: t('services.fullstack.desc') },
    { icon: <Smartphone className="h-5 w-5" />, title: t('services.mobile.title'), desc: t('services.mobile.desc') },
  ];

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-6xl mx-auto`}>
          <span className="pill mb-6">{t('services.eyebrow')}</span>
          <h2 className="font-display font-bold text-[clamp(1.875rem,4vw,3rem)] leading-tight text-foreground mb-3">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground max-w-xl mb-12">{t('services.sub')}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((s, i) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-xl border border-border-solid bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-2 hover:shadow-[0_10px_30px_-15px_hsl(var(--primary)/0.4)]"
                style={{
                  animation: visible ? `fade-in 500ms cubic-bezier(0.16,1,0.3,1) ${120 + i * 80}ms both` : undefined,
                }}
              >
                <div className="absolute top-0 left-0 h-[2px] w-full scale-x-0 origin-left bg-gradient-to-r from-primary to-secondary transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="mt-4 block font-mono text-[10px] text-muted-foreground/50">/ {String(i + 1).padStart(2, '0')}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};