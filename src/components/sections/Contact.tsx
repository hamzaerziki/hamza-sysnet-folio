import { Mail, Linkedin, Phone, MessageCircle, Github, FileDown, Copy, Check, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const EMAIL = 'hamzaerziki@outlook.com';
const PHONE_DISPLAY = '+212 6 24 61 86 01';
const PHONE_TEL = '+212624618601';
const WHATSAPP_NUMBER = '212624618601';
const LINKEDIN_URL = 'https://www.linkedin.com/in/hamza-erziki/';
const GITHUB_URL = 'https://github.com/hamzaerziki';
const CV_PATH = '/Hamza_Erziki_CV.pdf';

interface CardDef {
  key: string;
  icon: typeof Mail;
  label: string;
  value: string;
  hint: string;
  href: string;
  external?: boolean;
  copyable?: string;
  download?: boolean;
}

export const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const cards: CardDef[] = [
    {
      key: 'email',
      icon: Mail,
      label: t('contact.card.email.label'),
      value: EMAIL,
      hint: t('contact.card.email.hint'),
      href: `mailto:${EMAIL}`,
      copyable: EMAIL,
    },
    {
      key: 'whatsapp',
      icon: MessageCircle,
      label: t('contact.card.whatsapp.label'),
      value: PHONE_DISPLAY,
      hint: t('contact.card.whatsapp.hint'),
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      external: true,
    },
    {
      key: 'linkedin',
      icon: Linkedin,
      label: t('contact.card.linkedin.label'),
      value: 'in/hamza-erziki',
      hint: t('contact.card.linkedin.hint'),
      href: LINKEDIN_URL,
      external: true,
    },
    {
      key: 'phone',
      icon: Phone,
      label: t('contact.card.phone.label'),
      value: PHONE_DISPLAY,
      hint: t('contact.card.phone.hint'),
      href: `tel:${PHONE_TEL}`,
      copyable: PHONE_DISPLAY,
    },
    {
      key: 'github',
      icon: Github,
      label: t('contact.card.github.label'),
      value: 'github.com/hamzaerziki',
      hint: t('contact.card.github.hint'),
      href: GITHUB_URL,
      external: true,
    },
    {
      key: 'cv',
      icon: FileDown,
      label: t('contact.card.cv.label'),
      value: 'Hamza_Erziki_CV.pdf',
      hint: t('contact.card.cv.hint'),
      href: CV_PATH,
      download: true,
    },
  ];

  const copy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      toast({ title: t('contact.copied') });
      setTimeout(() => setCopiedKey(k => (k === key ? null : k)), 1600);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-6xl mx-auto`}>
          <span className="pill mb-6">{t('contact.eyebrow')}</span>
          <h2 className="font-display font-bold text-[clamp(1.875rem,4vw,3rem)] leading-tight text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground max-w-xl mb-12">{t('contact.sub')}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map(({ key, icon: Icon, label, value, hint, href, external, copyable, download }) => (
              <a
                key={key}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                download={download ? '' : undefined}
                className="group relative flex flex-col gap-3 p-6 rounded-xl border border-border-solid bg-surface hover:bg-surface-2 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-foreground font-medium truncate">{value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{hint}</p>
                </div>
                {copyable && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      copy(key, copyable);
                    }}
                    aria-label="Copy"
                    className="absolute bottom-4 right-4 inline-flex items-center justify-center h-7 w-7 rounded-md border border-border-solid bg-background/60 text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-primary hover:border-primary/40 transition-all"
                  >
                    {copiedKey === key ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
