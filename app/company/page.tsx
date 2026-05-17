import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Компания',
  description:
    'МЕГАСТЕЙТ — независимый оператор стрит-ритейла в Москве и ближнем Подмосковье. Берём помещения в долгосрочную аренду, делим, заселяем, управляем.',
};

const principles = [
  'Один контур ответственности по каждому объекту',
  'Все расчёты ведутся в письменной форме',
  'Договоры с собственниками и арендаторами фиксируют понятные условия',
  'Долгий горизонт важнее быстрой сделки',
];

export default function CompanyPage() {
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
              <span>Компания</span>
            </nav>
            <SectionLabel num="06" text="О компании" />
            <MotionFadeUp>
              <h1 style={{ marginBottom: '0' }}>О МЕГАСТЕЙТ</h1>
              <span className="hero-line" />
              <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '480px' }}>
                МЕГАСТЕЙТ работает как независимый оператор стрит-ритейла в
                Москве и ближнем Подмосковье. Компания берёт коммерческие
                помещения в долгосрочную аренду, делит площадь на рабочие
                блоки, заселяет арендаторами и ведёт дальнейшее управление
                объектом.
              </p>
            </MotionFadeUp>
          </div>

          <div
            className="split-hero-media img-tint"
            style={{ position: 'relative', overflow: 'hidden', minHeight: '420px' }}
          >
            <Image
              src="/_images/company_hero.png"
              alt=""
              fill
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>
      </section>

      {/* ─── Фокус ─── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="01" text="Фокус" />
            <div style={{ maxWidth: '720px' }}>
              <h2 style={{ marginBottom: '24px' }}>Фокус</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.7 }}>
                Стрит-ритейл в жилых комплексах эконом-, комфорт-, бизнес- и
                премиум-класса, а также качественный старый фонд при подходящих
                параметрах трафика, ставки и инженерии.
              </p>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* ─── Модель ─── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="02" text="Модель" />
            <div style={{ maxWidth: '720px' }}>
              <h2 style={{ marginBottom: '24px' }}>Модель работы</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.7, marginBottom: '16px' }}>
                МЕГАСТЕЙТ берёт помещение в долгосрочную аренду у собственника
                — обычно на 5–10 лет — и становится основным арендатором по
                договору. Площадь делится на блоки, которые сдаются
                арендаторам-операторам.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.7 }}>
                Собственник работает с одним контрагентом. МЕГАСТЕЙТ берёт
                на себя риск заселения, управления и замены арендаторов.
              </p>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* ─── Принципы ─── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="03" text="Принципы" />
            <h2 style={{ marginBottom: '32px' }}>Принципы работы</h2>
          </MotionFadeUp>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '640px' }}>
            {principles.map((item, i) => (
              <MotionFadeUp key={i} delay={i * 0.08}>
                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '20px 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--accent-soft)',
                      fontSize: '13px',
                      fontWeight: 600,
                      flexShrink: 0,
                      paddingTop: '2px',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ color: 'var(--text)', fontSize: '17px' }}>{item}</p>
                </div>
              </MotionFadeUp>
            ))}
          </div>
        </div>
      </section>

      <ConnectCTA />
    </>
  );
}
