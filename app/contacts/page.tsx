import type { Metadata } from 'next';
import Link from 'next/link';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import SectionLabel from '@/components/ui/SectionLabel';
import { ShaderAnimation } from '@/components/ui/ShaderAnimation';
import { TELEGRAM_URL, MAILTO, EMAIL, PHONE, PHONE_TEL, ADDRESS_SHORT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Связаться с МЕГАСТЕЙТ. Telegram, телефон, адрес офиса в Москве.',
};

export default function ContactsPage() {
  return (
    <>
      {/* ─── Hero с шейдером ─── */}
      <section
        style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--line)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="grain"
      >
        {/* Shader animation — overlay с олива-тонами, multiply blend */}
        <ShaderAnimation />

        <div
          className="container-main"
          style={{ paddingBlock: 'clamp(64px, 10vw, 140px)', position: 'relative', zIndex: 1 }}
        >
          <nav className="breadcrumb">
            <Link href="/">Главная</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Контакты</span>
          </nav>
          <SectionLabel num="08" text="Контакты" />
          <MotionFadeUp>
            <h1>Связаться с МЕГАСТЕЙТ</h1>
            <span className="hero-line" />
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '560px' }}>
              По вопросам помещений, аренды и партнёрских проектов напишите
              нам в Telegram или на почту.
            </p>
          </MotionFadeUp>
        </div>
      </section>

      {/* ─── Контакты ─── */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="container-main section-gap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '48px',
            }}
          >
            <MotionFadeUp>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
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
                      transition: 'background 200ms ease',
                    }}
                  >
                    <Mail size={16} strokeWidth={1.5} />
                    Написать на почту
                  </a>
                </div>
              </div>
            </MotionFadeUp>

            <MotionFadeUp delay={0.1}>
              <div>
                <SectionLabel num="08.2" text="Координаты" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Phone size={16} strokeWidth={1.5} style={{ color: 'var(--accent-soft)', marginTop: '3px', flexShrink: 0 }} />
                    <a href={`tel:${PHONE_TEL}`} style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '16px' }}>
                      {PHONE}
                    </a>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Mail size={16} strokeWidth={1.5} style={{ color: 'var(--accent-soft)', marginTop: '3px', flexShrink: 0 }} />
                    <a href={MAILTO} style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '16px' }}>
                      {EMAIL}
                    </a>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <MapPin size={16} strokeWidth={1.5} style={{ color: 'var(--accent-soft)', marginTop: '3px', flexShrink: 0 }} />
                    <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.5 }}>{ADDRESS_SHORT}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Clock size={16} strokeWidth={1.5} style={{ color: 'var(--accent-soft)', marginTop: '3px', flexShrink: 0 }} />
                    <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>Пн–Пт, 10:00–19:00</p>
                  </div>
                </div>
              </div>
            </MotionFadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
