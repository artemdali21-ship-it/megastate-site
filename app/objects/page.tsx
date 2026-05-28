import type { Metadata } from 'next';
import Link from 'next/link';
import { Send, Mail, ExternalLink } from 'lucide-react';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';
import SectionLabel from '@/components/ui/SectionLabel';
import { TELEGRAM_URL, MAILTO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Объекты — МЕГАСТЕЙТ',
  description: 'Объекты МЕГАСТЕЙТ в работе и в управлении: помещения на стадии расчёта, переговоров, подготовки, заселения и действующие объекты.',
};

export default function ObjectsPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section style={{ background: 'var(--bg)', borderBottom: '1px solid var(--line)' }} className="grain">
        <div className="container-main" style={{ paddingTop: 'clamp(48px, 8vw, 100px)', paddingBottom: 'clamp(48px, 8vw, 100px)' }}>
          <nav className="breadcrumb">
            <Link href="/">Главная</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Объекты</span>
          </nav>
          <SectionLabel num="06" text="Объекты" />
          <MotionFadeUp>
            <h1 style={{ marginBottom: '0' }}>Объекты</h1>
            <span className="hero-line" />
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '560px' }}>
              Помещения на стадии расчёта, переговоров, подготовки, деления, заселения или тестовой эксплуатации, а также объекты, запущенные и находящиеся в операторском управлении компании.
            </p>
          </MotionFadeUp>
        </div>
      </section>

      {/* ─── 06.1 В работе ─── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="06.1" text="В работе" />
            <h2 style={{ marginBottom: '24px' }}>Объекты в работе</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.7, marginBottom: '16px', maxWidth: '640px' }}>
              Помещения на стадии расчёта, переговоров, подготовки, деления, заселения или тестовой эксплуатации.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.7, marginBottom: '32px', maxWidth: '640px' }}>
              По каждому объекту мы готовим подробную презентацию: локация, параметры помещения, формат деления, статус и условия для потенциальных арендаторов.
            </p>
            <a
              href="https://megastate.group/moskva-nizhnie-mnevniki-7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-arrow btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '8px',
                background: 'var(--accent)',
                color: 'var(--surface)',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              <ExternalLink size={15} strokeWidth={1.5} />
              Смотреть объекты в работе
            </a>
          </MotionFadeUp>
        </div>
      </section>

      {/* ─── 06.2 В управлении ─── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="06.2" text="В управлении" />
            <h2 style={{ marginBottom: '24px' }}>Объекты в управлении</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.7, marginBottom: '16px', maxWidth: '640px' }}>
              Действующие объекты под операторским управлением МЕГАСТЕЙТ.
            </p>
            <p
              style={{
                marginBottom: '32px',
                padding: '24px 28px',
                background: 'var(--surface)',
                borderRadius: '12px',
                color: 'var(--text-muted)',
                fontSize: '16px',
                maxWidth: '640px',
                borderLeft: '2px solid var(--accent-soft)',
                lineHeight: 1.7,
              }}
            >
              Первые объекты появятся здесь по мере запуска. Если вы рассматриваете передачу своего помещения под операторское управление — напишите нам в Telegram или на почту.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-arrow btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  color: 'var(--surface)',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                }}
              >
                <Send size={16} strokeWidth={1.5} />
                Написать в Telegram
              </a>
              <a
                href={MAILTO}
                className="btn-arrow"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: '1px solid var(--line)',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                }}
              >
                <Mail size={16} strokeWidth={1.5} />
                Написать на почту
              </a>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      <ConnectCTA />
    </>
  );
}
