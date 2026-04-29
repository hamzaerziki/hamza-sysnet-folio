import { useState } from 'react';
import { z } from 'zod';
import { Mail, Linkedin, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';
import { useToast } from '@/hooks/use-toast';

const schema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(160),
  message: z.string().trim().min(5).max(1000),
});

export const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({ title: t('contact.form.error'), variant: 'destructive' });
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Portfolio — ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:hamzaerziki@outlook.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast({ title: t('contact.form.sent') });
    }, 600);
  };

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-6xl mx-auto`}>
          <span className="pill mb-6">{t('contact.eyebrow')}</span>
          <h2 className="font-display text-[clamp(1.875rem,4vw,3rem)] leading-tight text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground max-w-xl mb-12">{t('contact.sub')}</p>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <form onSubmit={onSubmit} className="lg:col-span-3 space-y-4">
              <div className="float-field">
                <input
                  type="text" id="name" value={form.name} onChange={set('name')}
                  placeholder=" " maxLength={80} required
                />
                <label htmlFor="name">{t('contact.form.name')}</label>
              </div>
              <div className="float-field">
                <input
                  type="email" id="email" value={form.email} onChange={set('email')}
                  placeholder=" " maxLength={160} required
                />
                <label htmlFor="email">{t('contact.form.email')}</label>
              </div>
              <div className="float-field">
                <textarea
                  id="message" value={form.message} onChange={set('message')}
                  placeholder=" " maxLength={1000} required
                />
                <label htmlFor="message">{t('contact.form.message')}</label>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-sm font-medium disabled:opacity-60"
              >
                {sending ? t('contact.form.sending') : t('contact.form.send')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>

            {/* Direct contacts */}
            <aside className="lg:col-span-2 space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                {t('contact.direct')}
              </p>
              <a
                href="mailto:hamzaerziki@outlook.com"
                className="flex items-center gap-3 p-4 rounded-lg border border-border-solid bg-surface hover:bg-surface-2 transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">hamzaerziki@outlook.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hamza-erziki/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-border-solid bg-surface hover:bg-surface-2 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">linkedin.com/in/hamza-erziki</span>
              </a>
              <a
                href="tel:0624618601"
                className="flex items-center gap-3 p-4 rounded-lg border border-border-solid bg-surface hover:bg-surface-2 transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">+212 6 24 61 86 01</span>
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
