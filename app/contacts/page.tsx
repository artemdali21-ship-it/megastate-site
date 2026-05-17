import type { Metadata } from 'next';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import { TELEGRAM_URL, MAILTO, EMAIL, PHONE, PHONE_TEL, ADDRESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Связаться с МЕГАСТЕЙТ. Telegram, телефон, адрес офиса в Москве.',
};

export default function ContactsPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--line)',
          paddingBlock: 'clamp(96px, 14vw, 200px)',
        }}
      >
        <div className="container-main">
          <MotionFadeUp>
            <h1>Связаться с МЕГАСТЕЙТ</h1>
            <p
              style={{
                marginTop: '24px',
                fontSize: '18px',
                color: 'var(--text-muted)',
                maxWidth: '560px',
              }}
            >
              По вопросам помещений, аренды и партнёрских проектов напишите
              нам в Telegram или на почту.
            </p>
          </MotionFadeUp>
        </div>
      </section>

      {/* Контакты */}
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
                <h2 style={{ marginBottom: '32px', fontSize: 'clamp(20px, 2.5vw, 32px)' }}>
                  Напишите нам
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-arrow"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 24px',
                      borderRadius: '8px',
                      background: 'var(--accent)',
                      color: 'var(--surface)',
                      fontWeight: 600,
                      fontSize: '15px',
                      textDecoration: 'none',
                      transition: 'background 200ms ease',
                    }}
                  >
                    <Send size={18} strokeWidth={1.5} />
                    @MEGASTATE_GROUP
                  </a>
                  <a
                    href={MAILTO}
                    className="btn-arrow"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 24px',
                      borderRadius: '8px',
                      border: '1px solid var(--line)',
                      color: 'var(--accent)',
                      fontWeight: 600,
                      fontSize: '15px',
                      textDecoration: 'none',
                      transition: 'background 200ms ease',
                    }}
                  >
                    <Mail size={18} strokeWidth={1.5} />
                    {EMAIL}
                  </a>
                </div>
              </div>
            </MotionFadeUp>

            <MotionFadeUp delay={0.1}>
              <div>
                <h2 style={{ marginBottom: '32px', fontSize: 'clamp(20px, 2.5vw, 32px)' }}>
                  Реквизиты связи
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Phone
                      size={18}
                      strokeWidth={1.5}
                      style={{ color: 'var(--accent-soft)', flexShrink: 0, marginTop: '2px' }}
                    />
                    <div>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                        Телефон
                      </p>
                      <a
                        href={PHONE_TEL}
                        style={{
                          color: 'var(--text)',
                          fontWeight: 500,
                          fontSize: '17px',
                          textDecoration: 'none',
                        }}
                      >
                        {PHONE}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <MapPin
                      size={18}
                      strokeWidth={1.5}
                      style={{ color: 'var(--accent-soft)', flexShrink: 0, marginTop: '2px' }}
                    />
                    <div>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                        Адрес офиса
                      </p>
                      <p style={{ color: 'var(--text)', fontSize: '17px' }}>{ADDRESS}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Clock
                      size={18}
                      strokeWidth={1.5}
                      style={{ color: 'var(--accent-soft)', flexShrink: 0, marginTop: '2px' }}
                    />
                    <div>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                        Часы работы
                      </p>
                      <p style={{ color: 'var(--text)', fontSize: '17px' }}>
                        понедельник–пятница, 10:00–19:00
                      </p>
                    </div>
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
