import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FileText, MapPin, Calendar, Maximize2, Users } from 'lucide-react';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Объекты',
  description: 'Объекты МЕГАСТЕЙТ в работе и в управлении: помещения на стадии расчёта, переговоров, подготовки, заселения и действующие объекты.',
};

const OBJECTS_IN_WORK = [
  {
    id: 'mnevniki',
    address: 'Москва, Нижние Мневники, 7',
    complex: 'ЖК ОСТРОВ',
    pdf: '/presentations/ostrov-mnevniki.pdf',
    status: 'В работе',
  },
  {
    id: 'lobanovskiy',
    address: 'Москва, Лобановский Лес, 9',
    complex: 'ЖК ПРОКШИНО',
    pdf: '/presentations/prokshino-lobanovskiy.pdf',
    status: 'В работе',
  },
  {
    id: 'rublevo',
    address: 'Москва, Рублёвское шоссе, 101',
    complex: 'ЖК ВАНДЕР ПАРК',
    pdf: '/presentations/wander-park-rublevo.pdf',
    status: 'В работе',
  },
];

export default function ObjectsPage() {
  return (
    <>
      {/* ─── Hero ─── */}
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
                Помещения на стадии расчёта, переговоров, подготовки, деления, заселения или тестовой эксплуатации, а также объекты в операторском управлении компании.
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
            <h2 style={{ marginBottom: '8px' }}>Объекты в работе</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.7, marginBottom: '40px', maxWidth: '620px' }}>
              Помещения на стадии расчёта, переговоров, подготовки, деления, заселения или тестовой эксплуатации. По каждому объекту подготовлена презентация с параметрами и условиями.
            </p>
          </MotionFadeUp>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {OBJECTS_IN_WORK.map((obj) => (
              <MotionFadeUp key={obj.id}>
                <div
                  style={{
                    border: '1px solid var(--line)',
                    borderRadius: '12px',
                    padding: '28px',
                    background: 'var(--bg)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    height: '100%',
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        background: 'rgba(30,51,40,0.08)',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        marginBottom: '12px',
                      }}
                    >
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: 'var(--accent)',
                          display: 'inline-block',
                        }}
                      />
                      {obj.status}
                    </span>
                    <p
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: '4px',
                      }}
                    >
                      {obj.complex}
                    </p>
                    <p
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: 'var(--text)',
                        lineHeight: 1.4,
                      }}
                    >
                      {obj.address}
                    </p>
                  </div>

                  <div style={{ marginTop: 'auto' }}>
                    <a
                      href={obj.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        background: 'var(--accent)',
                        color: 'var(--surface)',
                        fontWeight: 600,
                        fontSize: '14px',
                        textDecoration: 'none',
                        transition: 'opacity 150ms ease',
                      }}
                    >
                      <FileText size={15} strokeWidth={1.5} />
                      Открыть презентацию
                    </a>
                  </div>
                </div>
              </MotionFadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 06.2 В управлении ─── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <h2 style={{ marginBottom: '8px' }}>Объекты в управлении</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.7, marginBottom: '48px', maxWidth: '620px' }}>
              Действующие объекты под операторским управлением МЕГАСТЕЙТ.
            </p>
          </MotionFadeUp>

          {/* ── Ривер Парк ── */}
          <MotionFadeUp>
            <div
              style={{
                border: '1px solid var(--line)',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'var(--surface)',
              }}
            >
              {/* Header */}
              <div
                style={{
                  background: 'var(--accent)',
                  padding: '24px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(250,248,243,0.6)',
                      marginBottom: '4px',
                    }}
                  >
                    В управлении
                  </p>
                  <h3 style={{ color: 'var(--surface)', margin: 0, fontSize: 'clamp(18px, 2.5vw, 22px)' }}>
                    ЖК РИВЕР ПАРК
                  </h3>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    background: 'rgba(250,248,243,0.15)',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--surface)',
                    letterSpacing: '0.04em',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6fcf97', display: 'inline-block' }} />
                  Активный объект
                </span>
              </div>

              <div style={{ padding: '32px' }}>
                {/* Stats row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '20px',
                    marginBottom: '32px',
                    paddingBottom: '32px',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <StatCard
                    icon={<MapPin size={16} strokeWidth={1.5} />}
                    label="Адрес"
                    value="Москва, Корабельная, 1"
                  />
                  <StatCard
                    icon={<Calendar size={16} strokeWidth={1.5} />}
                    label="Дата создания"
                    value="— (уточняется)"
                  />
                  <StatCard
                    icon={<Maximize2 size={16} strokeWidth={1.5} />}
                    label="Общая площадь"
                    value="— м²"
                  />
                  <StatCard
                    icon={<Users size={16} strokeWidth={1.5} />}
                    label="Занятая площадь"
                    value="— м²"
                  />
                </div>

                {/* Subtenant activity */}
                <div style={{ marginBottom: '32px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                    Субарендная активность
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7 }}>
                    Данные по субарендаторам и загрузке площадей уточняются.
                  </p>
                </div>

                {/* Photos placeholder */}
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>
                    Фотографии объекта
                  </h4>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '8px',
                      aspectRatio: '3 / 1',
                    }}
                  >
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        style={{
                          background: 'var(--surface-muted, #f0ede6)',
                          borderRadius: '8px',
                          border: '1px dashed var(--line)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: '140px',
                        }}
                      >
                        <span style={{ fontSize: '12px', color: 'var(--text-muted)', opacity: 0.5 }}>
                          Фото {i}
                        </span>
                      </div>
                    ))}
                  </div>
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

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--text-muted)',
          fontSize: '12px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '4px',
        }}
      >
        {icon}
        {label}
      </div>
      <p style={{ fontSize: '17px', fontWeight: 500, color: 'var(--text)', margin: 0 }}>
        {value}
      </p>
    </div>
  );
}
