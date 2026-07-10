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
import HeroPlanOverlay from '@/components/ui/HeroPlanOverlay';
import { TELEGRAM_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Превращаем пустое помещение в доходный объект — МЕГАСТЕЙТ' },
  description:
    'МЕГАСТЕЙТ превращает пустое коммерческое помещение в доходный объект. Долгосрочная аренда в формате ГАБ на 7–20 лет в Москве.',
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
      {/* ─── Hero v3 — фото + SVG план + текст ─── */}
      <section
        className="hero-v3"
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: 'clamp(520px, 80vh, 860px)',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid var(--line)',
        }}
      >
        {/* Слой 1: фото */}
        <Image
          src="/_images/hero_main.png"
          alt=""
          fill
          priority
          unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
        />

        {/* Слой 2: tint overlay — тёмный слева для читаемости текста */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(to right, rgba(20,28,22,0.82) 0%, rgba(20,28,22,0.55) 42%, rgba(20,28,22,0.0) 68%),
              linear-gradient(to top, rgba(20,28,22,0.35) 0%, transparent 40%)
            `,
            zIndex: 1,
          }}
        />

        {/* Слой 3: SVG архитектурные линии */}
        <HeroPlanOverlay />

        {/* Слой 4: текст */}
        <div
          className="container-main"
          style={{ paddingBlock: 'clamp(64px, 10vw, 120px)', position: 'relative', zIndex: 3, width: '100%' }}
        >
          {/* Content column — capped width so it never overlaps the SVG plan */}
          <div className="hero-v3-content">
            {/* Small logo — белый на тёмном фоне */}
            <div style={{ marginBottom: '28px', color: 'var(--surface)' }}>
              <Logo height={30} />
            </div>
            <MotionFadeUp>
              <h1
                style={{
                  fontSize: 'clamp(28px, 3.2vw, 50px)',
                  color: 'var(--surface)',
                  lineHeight: 1.1,
                }}
              >
                ИЗ ПРОСТРАНСТВА ДЕЛАЕМ АКТИВ
              </h1>
              <span className="hero-line" style={{ borderColor: 'rgba(250,248,243,0.3)' }} />
              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(250,248,243,0.7)',
                  marginBottom: '32px',
                  lineHeight: 1.6,
                }}
              >
                Долгосрочная аренда и управление коммерческими помещениями в формате ГАБ на 7–20 лет. Один договор, один оператор, понятный график платежей по основному договору.
              </p>
            </MotionFadeUp>
            <MotionFadeUp delay={0.15}>
              <div className="hero-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
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
                    background: 'rgba(244,241,234,0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(29,29,27,0.12)',
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
        </div>
      </section>

      {/* ─── Marquee strip ─── */}
      <MarqueeStrip items={MARQUEE_ITEMS} duration={30} />

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
              { num: '7–20 лет', label: 'срок основного договора аренды' },
              { num: '4 сегмента', label: 'эконом · комфорт · бизнес · премиум' },
              { num: '23 вида деятельности', label: 'арендаторов в создаваемых объектах' },
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
            <h2 style={{ marginBottom: '48px' }}>Считаем. Создаём. Ведём.</h2>
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
              text="Полный анализ рынка, локации, конкурентов, вариантов деления и составление финмодели (3 сценария: консервативный / средний / оптимистичный) до подписания договора. Если запас прочности недостаточный — не входим."
              delay={0}
            />
            <FeatureCard
              num="02"
              title="Создаём"
              text="Собираем пул арендаторов, проводим ремонт, заселяем, запускаем объект."
              delay={0.08}
            />
            <FeatureCard
              num="03"
              title="Ведём"
              text="После запуска коммуницируем с арендаторами, контролируем платежи, осуществляем ротацию (при необходимости)."
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
              МЕГАСТЕЙТ работает не как посредник — становится арендатором по основному договору и отвечает за объект перед собственником.
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
                <h2 style={{ marginBottom: '24px' }}>Сначала просчёт — потом договор</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '32px' }}>
                  Анализируем трафик, инженерную оснащённость объекта, востребованность блоков для будущих арендаторов, ставки — 27 параметров в чек-листе. Если запас прочности недостаточный — не входим.
                </p>
                <Link href="/approach/" className="underline-link btn-arrow">
                  Подробнее о подходе
                  <ArrowRight size={15} strokeWidth={1.5} />
                </Link>
              </div>
              <div className="approach-img-mobile" style={{ display: 'flex', justifyContent: 'center' }}>
                <Image
                  src="/_images/1_law.png"
                  alt=""
                  width={440}
                  height={294}
                  unoptimized
                  style={{ objectFit: 'contain', filter: 'drop-shadow(0 24px 48px rgba(30,51,40,0.15))' }}
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
                text="Один основной договор, один контрагент, строгое соблюдение графика платежей. МЕГАСТЕЙТ берёт на себя просчёт, создание и управление ГАБом."
                href="/owners/"
                linkLabel="Подробнее"
              />
            </MotionFadeUp>
            <MotionFadeUp delay={0.12}>
              <AudienceCard
                title="Арендаторам"
                text="Оптимальные размеры площадей в подходящих для бизнеса локациях. Понятная юридическая конфигурация, лояльные условия на старт, адекватная стабильная рыночная ставка."
                href="/tenants/"
                linkLabel="Подробнее"
              />
            </MotionFadeUp>
            <MotionFadeUp delay={0.2}>
              <div className="feature-card">
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Партнёрские проекты</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '16px', flex: 1, marginBottom: '24px' }}>
                  Создание ГАБа для продажи. Формат и условия обсуждаются индивидуально.
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
