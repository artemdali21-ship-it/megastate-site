import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Объекты',
  description:
    'Объекты МЕГАСТЕЙТ в работе и в управлении. Помещения на стадии подготовки и заселения, а также запущенные объекты под операторским управлением.',
};

const objectsInProgress = [
  {
    id: 'nizhnie-mnevniki',
    address: 'Нижние Мневники, Москва',
    area: null,
    status: 'В заселении',
    format: 'Стрит-ритейл',
    description:
      'Объект проходит стадию деления, согласования условий и заселения арендаторами с взаимно дополняющими видами деятельности.',
    presentationUrl: 'https://megastate.group/moskva-nizhnie-mnevniki-7',
  },
];

const statusColors: Record<string, string> = {
  'На расчёте': '#8A876E',
  'В переговорах': '#8A876E',
  'В подготовке': '#8A876E',
  'В заселении': '#1E3328',
  'В тестовой эксплуатации': '#1E3328',
};

export default function ObjectsPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section
        style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}
        className="grain"
      >
        <div
          className="container-main"
          style={{
            paddingTop: 'clamp(64px, 10vw, 120px)',
            paddingBottom: 'clamp(48px, 8vw, 96px)',
          }}
        >
          <nav className="breadcrumb">
            <Link href="/">Главная</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Объекты</span>
          </nav>
          <SectionLabel num="07" text="Объекты" />
          <MotionFadeUp>
            <h1 style={{ marginBottom: '0' }}>Объекты МЕГАСТЕЙТ</h1>
            <span className="hero-line" />
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px' }}>
              Помещения, которые проходят расчёт, подготовку и заселение, а также
              объекты, запущенные и находящиеся в операторском управлении компании.
            </p>
          </MotionFadeUp>
        </div>
      </section>

      {/* ─── В работе ─── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="01" text="В работе" />
            <h2 style={{ marginBottom: '12px' }}>Объекты в работе</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '48px', maxWidth: '560px' }}>
              Помещения на стадии расчёта, подготовки, деления, заселения или
              тестовой эксплуатации.
            </p>
          </MotionFadeUp>

          <div className="objects-grid">
            {objectsInProgress.map((obj, i) => (
              <MotionFadeUp key={obj.id} delay={i * 0.08}>
                <div className="object-card">
                  <div className="object-card-top">
                    <span
                      className="object-status"
                      style={{ background: statusColors[obj.status] ?? 'var(--accent)' }}
                    >
                      {obj.status}
                    </span>
                    <span className="object-format">{obj.format}</span>
                  </div>
                  <h3 className="object-address">{obj.address}</h3>
                  {obj.area && (
                    <p className="object-area">{obj.area}</p>
                  )}
                  <p className="object-desc">{obj.description}</p>
                  <a
                    href={obj.presentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="object-link btn-arrow"
                  >
                    <ExternalLink size={14} strokeWidth={1.5} />
                    Открыть презентацию
                  </a>
                </div>
              </MotionFadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── В управлении ─── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="02" text="В управлении" />
            <h2 style={{ marginBottom: '12px' }}>Объекты в управлении</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '48px', maxWidth: '560px' }}>
              Запущенные объекты, которые находятся в операторском управлении МЕГАСТЕЙТ.
            </p>
          </MotionFadeUp>

          {/* Placeholder — заполним когда Олег даст данные */}
          <MotionFadeUp>
            <div
              style={{
                border: '1px solid var(--line)',
                borderRadius: '16px',
                padding: 'clamp(40px, 6vw, 80px)',
                textAlign: 'center',
                background: 'var(--surface)',
              }}
            >
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', margin: 0 }}>
                Информация об объектах в управлении готовится.<br />
                Свяжитесь с нами, чтобы узнать подробнее.
              </p>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      <ConnectCTA />
    </>
  );
}
