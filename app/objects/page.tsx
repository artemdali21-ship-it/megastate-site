import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Send, Mail, ExternalLink } from 'lucide-react';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';
import SectionLabel from '@/components/ui/SectionLabel';
import { TELEGRAM_URL, MAILTO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Объекты',
  description: 'Объекты МЕГАСТЕЙТ в работе и в управлении: помещения на стадии расчёта, переговоров, подготовки, заселения и действующие объекты.',
};

export default function ObjectsPage() {
  return (
    <>
      {/* ─── Hero (split grid) ─── */}
      <section
        style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}
        className="grain"
      >
        <div className="split-hero">
          <div
            className="container-main"
            style={{
              paddingTop: 'clamp(48px, 8vw, 100px)',
              paddingBottom: 'clamp(48px, 8vw, 100px)',
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <nav className="breadcrumb">
              <Link href="/">Главная</Link>
              <span className="breadcrumb-sep">/</span>
              <span>Объекты</span>
            </nav>
            <SectionLabel num="06" text="Объекты" />
            <MotionFadeUp>
              <h1 style={{ marginBottom: '0' }}>Объекты</h1>
              <span className="hero-line" />
              <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '480px' }}>
                Помещения на стадии расчёта, переговоров, подготовки, деления, заселения или тестовой эксплуатации, а также объекты, запущенные и находящиеся в операторском управлении компании.
              </p>
            </MotionFadeUp>
          </div>

          <div
            className="split-hero-media img-tint"
            style={{ position: 'relative', overflow: 'hidden', minHeight: '420px' }}
          >
            <Image
              src="/_images/objects_hero.png"
              alt=""
              fill
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>
      </section>

      {/* ─── 06.1 В работе ─── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '48px',
                alignItems: 'center',
              }}
            >
              <div>
                <h2 style={{ marginBottom: '24px' }}>Объекты в работе</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.7, marginBottom: '16px' }}>
                  Помещения на стадии расчёта, переговоров, подготовки, деления, заселения или тестовой эксплуатации.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.7, marginBottom: '32px' }}>
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
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  src="/_images/focus.png"
                  alt=""
                  width={460}
                  height={344}
                  unoptimized
                  style={{ objectFit: 'contain', maxWidth: '100%' }}
                />
              </div>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* ─── 06.2 В управлении ─── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '48px',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: -1 }}>
                <Image
                  src="/_images/object_green.png"
                  alt=""
                  width={460}
                  height={460}
                  unoptimized
                  style={{ objectFit: 'contain', maxWidth: '100%' }}
                />
              </div>
              <div>
                <h2 style={{ marginBottom: '24px' }}>Объекты в управлении</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.7, marginBottom: '16px' }}>
                  Действующие объекты под операторским управлением МЕГАСТЕЙТ.
                </p>
                <div style={{ marginBottom: '20px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    borderRadius: '999px',
                    background: 'var(--surface-muted)',
                    border: '1px solid var(--line)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em',
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-soft)', display: 'inline-block' }} />
                    В разработке
                  </span>
                </div>
                <p
                  style={{
                    marginBottom: '32px',
                    padding: '24px 28px',
                    background: 'var(--surface)',
                    borderRadius: '12px',
                    color: 'var(--text-muted)',
                    fontSize: '16px',
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
              </div>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      <ConnectCTA />
    </>
  );
}
