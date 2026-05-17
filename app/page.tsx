import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';
import SectionLabel from '@/components/ui/SectionLabel';
import FeatureCard from '@/components/ui/FeatureCard';
import MarqueeStrip from '@/components/ui/Marquee';
import WordReveal from '@/components/ui/WordReveal';
import ParallaxLogo from '@/components/ui/ParallaxLogo';
import { ShaderAnimation } from '@/components/ui/ShaderAnimation';
import { TELEGRAM_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Долгосрочная аренда и управление стрит-ритейлом в Москве — МЕГАСТЕЙТ',
  description:
    'МЕГАСТЕЙТ — долгосрочная аренда и операторское управление стрит-ритейлом в Москве. Проверяем экономику до сделки, делим площадь, заселяем арендаторами.',
};

const MARQUEE_ITEMS = [
  'Аптеки',
  'Продуктовая розница',
  'Бытовая химия',
  'Медицинские кабинеты',
  'Точки маркетплейсов',
  'Столовые',
  'Услуги для жителей',
  'Детские занятия',
  'Бытовые мастерские',
  'Ателье и ремонт',
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section
        style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--line)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        className="grain"
      >
        <ShaderAnimation />

        <div
          className="container-main"
          style={{
            paddingBlock: 'clamp(80px, 12vw, 140px)',
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Parallax logo */}
          <div style={{ marginBottom: 'clamp(40px, 6vw, 80px)' }}>
            <ParallaxLogo />
          </div>

          {/* Word-reveal H1 */}
          <WordReveal
            text="Превращаем коммерческие помещения в управляемые арендные объекты"
            style={{
              maxWidth: '760px',
              marginBottom: 0,
              fontSize: 'clamp(26px, 3.8vw, 50px)',
            }}
            stagger={0.05}
          />

          {/* Divider */}
          <MotionFadeUp delay={0.22}>
            <span className="hero-line" style={{ display: 'block', margin: '28px auto' }} />
          </MotionFadeUp>

          {/* Subtitle */}
          <MotionFadeUp delay={0.28}>
            <p
              style={{
                fontSize: '18px',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                maxWidth: '620px',
                marginBottom: '40px',
              }}
            >
              МЕГАСТЕЙТ берёт на себя расчёт, деление площади, заселение арендаторами и дальнейшее
              управление. Для собственника это один основной договор, один ответственный оператор и
              понятный график платежей.
            </p>
          </MotionFadeUp>

          {/* CTAs */}
          <MotionFadeUp delay={0.35}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
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
      <MarqueeStrip items={MARQUEE_ITEMS} duration={55} />

      {/* ─── Stats row ─── */}
      <section
        style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div
          className="container-main"
          style={{ paddingBlock: 'clamp(40px, 5vw, 72px)' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '0',
            }}
          >
            {[
              { num: '7–10 лет', label: 'срок основного договора' },
              { num: '4 сегмента', label: 'эконом · комфорт · бизнес · премиум' },
              { num: '23 категории', label: 'арендаторов с проверенной устойчивостью' },
            ].map((stat, i) => (
              <MotionFadeUp key={stat.num} delay={i * 0.12}>
                <div
                  style={{
                    padding: 'clamp(20px, 3vw, 32px)',
                    borderLeft: i > 0 ? '1px solid var(--line)' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(28px, 3.5vw, 44px)',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      marginTop: '6px',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.03em',
                    }}
                  >
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
              арендатором по основному договору и отвечает за объект перед
              собственником.
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
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image
                  src="/_images/3d-element-chart-growth-abstract.png"
                  alt=""
                  width={240}
                  height={240}
                  unoptimized
                  style={{
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 40px rgba(30,51,40,0.14))',
                  }}
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
  title,
  text,
  href,
  linkLabel,
}: {
  title: string;
  text: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div
      className="feature-card"
      style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
    >
      <h3 style={{ fontSize: '20px' }}>{title}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '16px', flex: 1 }}>{text}</p>
      <Link href={href} className="underline-link btn-arrow">
        {linkLabel}
        <ArrowRight size={15} strokeWidth={1.5} />
      </Link>
    </div>
  );
}
