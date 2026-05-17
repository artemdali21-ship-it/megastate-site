import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Send, Mail } from 'lucide-react';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';
import SectionLabel from '@/components/ui/SectionLabel';
import FeatureCard from '@/components/ui/FeatureCard';
import { TELEGRAM_URL, MAILTO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Арендаторам',
  description:
    'Готовые блоки в проходных локациях Москвы и ближнего Подмосковья. Аптеки, продуктовый ретейл, медицина, услуги.',
};

const categories = [
  'Аптеки', 'Продуктовая розница', 'Точки сетевых маркетплейсов',
  'Бытовая химия', 'Медицинские кабинеты', 'Столовые и точки общепита',
  'Услуги для жителей жилого комплекса', 'Детские развивающие занятия',
  'Бытовые мастерские', 'Ателье и ремонт',
];

const offers = [
  { title: 'Договор аренды', text: '11 месяцев с пролонгацией или долгосрочный с фиксированной индексацией' },
  { title: 'Депозит', text: 'Один месяц' },
  { title: 'Помещение', text: 'Готовая площадь под отделку или с базовым ремонтом' },
  { title: 'Конфигурация', text: 'Возможность согласовать конфигурацию блока под ваш формат' },
  { title: 'Прозрачные условия', text: 'Понятные условия по входу, срокам, платежам и выходу из договора' },
];

export default function TenantsPage() {
  return (
    <>
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
              <span>Арендаторам</span>
            </nav>
            <SectionLabel num="05" text="Для арендаторов" />
            <MotionFadeUp>
              <h1 style={{ marginBottom: '0' }}>
                Готовые блоки в проходных локациях
              </h1>
              <span className="hero-line" />
              <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '480px' }}>
                Если вы развиваете сеть, открываете точку или ищете помещение
                под существующий бизнес, мы можем предложить блоки в
                подготовленных объектах с понятной экономикой.
              </p>
            </MotionFadeUp>
          </div>

          <div
            className="split-hero-media img-tint"
            style={{ position: 'relative', overflow: 'hidden', minHeight: '420px' }}
          >
            <Image
              src="/_images/tenants_hero.png"
              alt=""
              fill
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="01" text="Категории" />
            <h2 style={{ marginBottom: '32px' }}>С кем мы работаем</h2>
          </MotionFadeUp>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categories.map((cat, i) => (
              <MotionFadeUp key={cat} delay={Math.min(i * 0.04, 0.24)}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    color: 'var(--text)',
                    background: 'var(--surface)',
                  }}
                >
                  {cat}
                </span>
              </MotionFadeUp>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="02" text="Что мы предлагаем" />
            <h2 style={{ marginBottom: '40px' }}>Что мы предлагаем</h2>
          </MotionFadeUp>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {offers.map((offer, i) => (
              <FeatureCard
                key={offer.title}
                num={String(i + 1).padStart(2, '0')}
                title={offer.title}
                text={offer.text}
                delay={Math.min(i * 0.08, 0.32)}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="03" text="Контакт" />
            <div style={{ maxWidth: '560px' }}>
              <h2 style={{ marginBottom: '20px' }}>Как написать</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '32px' }}>
                Напишите в Telegram или на почту. Укажите формат бизнеса,
                желаемую площадь, локацию и ориентировочный бюджет на аренду.
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
                    transition: 'background 200ms ease',
                  }}
                >
                  <Mail size={16} strokeWidth={1.5} />
                  Написать на почту
                </a>
              </div>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      <ConnectCTA />
    </>
  );
}
