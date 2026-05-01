import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';

export const About = () => {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const facts = [
    { k: 'about.fact.location', v: 'about.fact.location.value' },
    { k: 'about.fact.focus', v: 'about.fact.focus.value' },
    { k: 'about.fact.education', v: 'about.fact.education.value' },
    { k: 'about.fact.languages', v: 'about.fact.languages.value' },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-5xl`}>
          <span className="pill mb-6">{t('about.eyebrow')}</span>
          <h2 className="font-display font-bold text-[clamp(1.875rem,4vw,3rem)] leading-tight text-foreground mb-12">
            {t('about.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Bio */}
            <div className="space-y-5">
              <p className="text-foreground leading-relaxed">{t('about.p1')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('about.p2')}</p>
            </div>

            {/* Facts grid with stagger */}
            <dl className="grid grid-cols-2 gap-px bg-border-solid border border-border-solid rounded-lg overflow-hidden">
              {facts.map((f, i) => (
                <div
                  key={f.k}
                  className="bg-surface p-5"
                  style={{
                    animation: visible
                      ? `fade-in 500ms cubic-bezier(0.16,1,0.3,1) ${200 + i * 80}ms both`
                      : undefined,
                  }}
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    {t(f.k)}
                  </dt>
                  <dd className="text-sm text-foreground">{t(f.v)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
