import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';
import SectionLabel from '@/components/ui/SectionLabel';
import FeatureCard from '@/components/ui/FeatureCard';
import MarqueeStrip from '@/components/ui/Marquee';
import Logo from '@/components/ui/Logo';
import { ShaderAnimation } from '@/components/ui/ShaderAnimation';
import { TELEGRAM_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Превращаем коммерческие помещения в управляемые арендные объекты — МЕГАСТЕЙТ',
  description:
    'МЕГАСТЕЙТ — долгосрочная аренда и операторское управление стрит-ритейлом в Москве. Проверяем экономику до сделки, делим площадь, заселяем арендаторами.',
};

const MARQUEE_ITEMS = [
  'Аптеки',
  'Продуктовая розница',
  'Медицина',
  'Услуги для жителей',
  'Пункты выдачи',
  'Бытовые сервисы',
  'Общепит',
  'Детские занятия',
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero — 1 в 1 как /contacts ─── */}
      <section
        style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--line)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="grain"
      >
        <ShaderAnimation />

        <div
          className="container-main"
          style={{ paddingBlock: 'clamp(64px, 10vw, 140px)', position: 'relative', zIndex: 1 }}
        >
          {/* Small logo — left-aligned brand mark */}
          <div style={{ marginBottom: '28px', color: 'var(--accent)' }}>
            <Logo height={30} />
          </div>
          <MotionFadeUp>
            <h1 style={{ maxWidth: '760px', fontSize: 'clamp(28px, 3.2vw, 48px)' }}>
              Превращаем коммерческие помещения в управляемые арендные объекты
            </h1>
            <span className="hero-line" />
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '560px', marginBottom: '32px' }}>
              Долгосрочная аренда и операторское управление стрит-ритейлом в Москве.
              Один договор, один оператор, понятный график платежей.
            </p>
          </MotionFadeUp>
          <MotionFadeUp delay={0.15}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link
                href="/#connect"
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
                Связаться по объекту
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link
                href="/how/"
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
                Как мы работаем
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* ─── Marquee strip ─── */}
      <MarqueeStrip items={MARQUEE_ITEMS} duration={60} />

      {/* ─── Stats row ─── */}
      <section style={{ background: 'var(--bg)', borderBottom: '1px solid var(--line)' }}>
        <div className="container-main" style={{ paddingBlock: 'clamp(40px, 5vw, 72px)' }}>
          <div
            className="stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              { num: '7–10 лет', label: 'срок основного договора' },
              { num: '4 сегмента', label: 'эконом · комфорт · бизнес · премиум' },
              { num: '23 категории', label: 'анализируем при отборе арендаторов' },
            ].map((stat, i) => (
              <MotionFadeUp key={stat.num} delay={i * 0.1}>
                <div
                  style={{
                    padding: 'clamp(20px, 2.5vw, 28px)',
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                    borderRadius: '12px',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(26px, 3vw, 40px)',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div style={{ marginTop: '8px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {stat.label}
                  </div>
                </div>
              </MotionFadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Что делает МЕГАСТЕЙТ ─── */}
      <section
        style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)', position: 'relative' }}
        className="grain"
      >
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="01" text="Что делает МЕГАСТЕЙТ" />
            <h2 style={{ marginBottom: '48px' }}>Считаем. Делим. Ведём.</h2>
          </MotionFadeUp>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            <FeatureCard
              num="01"
              title="Считаем"
              text="Проверяем экономику объекта до подписания договора. Если запас прочности недостаточный, не входим."
              delay={0}
            />
            <FeatureCard
              num="02"
              title="Делим"
              text="Проектируем нарезку площади под подтверждённых арендаторов и под гибкую перестройку в будущем."
              delay={0.08}
            />
            <FeatureCard
              num="03"
              title="Ведём"
              text="После запуска ведём коммуникацию с арендаторами, контролируем платежи, индексируем ставки."
              delay={0.16}
            />
          </div>

          <MotionFadeUp delay={0.24}>
            <p
              style={{
                marginTop: '40px',
                padding: '24px 28px',
                background: 'var(--surface-muted)',
                borderRadius: '12px',
                color: 'var(--text-muted)',
                fontSize: '16px',
                maxWidth: '720px',
                borderLeft: '2px solid var(--accent-soft)',
              }}
            >
              Компания работает не как посредник, а как оператор: сама становится
              арендатором по основному договору и отвечает за объект перед собственником.
            </p>
          </MotionFadeUp>
        </div>
      </section>

      {/* ─── Подход ─── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="02" text="Подход" />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '48px',
                alignItems: 'center',
              }}
            >
              <div style={{ maxWidth: '560px' }}>
                <h2 style={{ marginBottom: '24px' }}>Сначала расчёт, потом договор</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '32px' }}>
                  Перед договором мы проверяем ставку, трафик, видимость, инженерию,
                  ликвидность будущих блоков и спрос со стороны арендаторов. Если
                  запас прочности недостаточный, мы не входим.
                </p>
                <Link href="/approach/" className="underline-link btn-arrow">
                  Подробнее о подходе
                  <ArrowRight size={15} strokeWidth={1.5} />
                </Link>
              </div>
              <div className="approach-img-mobile" style={{ display: 'flex', justifyContent: 'center' }}>
                <Image
                  src="/_images/3d-element-chart-growth-abstract.png"
                  alt=""
                  width={340}
                  height={340}
                  unoptimized
                  className="float-3d"
                  style={{ objectFit: 'contain', filter: 'drop-shadow(0 24px 48px rgba(30,51,40,0.18))' }}
                />
              </div>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* ─── Для кого ─── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="03" text="Для кого" />
          </MotionFadeUp>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            <MotionFadeUp delay={0.04}>
              <AudienceCard
                title="Собственникам помещений"
                text="Один основной договор, один контрагент и понятный график платежей. МЕГАСТЕЙТ берёт на себя деление, заселение и управление объектом."
                href="/owners/"
                linkLabel="Подробнее"
              />
            </MotionFadeUp>
            <MotionFadeUp delay={0.12}>
              <AudienceCard
                title="Арендаторам"
                text="Готовые блоки в проходных локациях Москвы и ближнего Подмосковья. Понятная конфигурация, условия входа и формат договора."
                href="/tenants/"
                linkLabel="Подробнее"
              />
            </MotionFadeUp>
            <MotionFadeUp delay={0.2}>
              <div className="feature-card">
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Партнёрские проекты</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '16px', flex: 1, marginBottom: '24px' }}>
                  Рассматриваются индивидуально после анализа объекта и юридической структуры.
                </p>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-link btn-arrow"
                >
                  Написать в Telegram
                  <ArrowRight size={15} strokeWidth={1.5} />
                </a>
              </div>
            </MotionFadeUp>
          </div>
        </div>
      </section>

      <ConnectCTA />
    </>
  );
}

function AudienceCard({
  title, text, href, linkLabel,
}: {
  title: string; text: string; href: string; linkLabel: string;
}) {
  return (
    <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h3 style={{ fontSize: '20px' }}>{title}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '16px', flex: 1 }}>{text}</p>
      <Link href={href} className="underline-link btn-arrow">
        {linkLabel}
        <ArrowRight size={15} strokeWidth={1.5} />
      </Link>
    </div>
  );
}
