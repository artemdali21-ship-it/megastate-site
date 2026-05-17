import type { Metadata } from 'next';
import Image from 'next/image';
import { Send, Mail } from 'lucide-react';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';
import { TELEGRAM_URL, MAILTO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Арендаторам',
  description:
    'Готовые блоки в проходных локациях Москвы и ближнего Подмосковья. Аптеки, продуктовый ретейл, медицина, услуги.',
};

const categories = [
  'Аптеки',
  'Продуктовая розница',
  'Точки сетевых маркетплейсов',
  'Бытовая химия',
  'Медицинские кабинеты',
  'Столовые и точки общепита',
  'Услуги для жителей жилого комплекса',
  'Детские развивающие занятия',
  'Бытовые мастерские',
  'Ателье и ремонт',
];

const offers = [
  'Договор на 11 месяцев с пролонгацией или долгосрочный договор с фиксированной индексацией',
  'Депозит один месяц',
  'Готовая площадь под отделку или с базовым ремонтом',
  'Возможность согласовать конфигурацию блока под ваш формат',
  'Прозрачные условия по входу, срокам, платежам и выходу из договора',
];

export default function TenantsPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--line)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          className="container-main"
          style={{ paddingBlock: 'clamp(80px, 12vw, 160px)', position: 'relative', zIndex: 1 }}
        >
          <div style={{ maxWidth: '580px' }}>
            <h1>Готовые блоки в проходных локациях</h1>
            <p
              style={{
                marginTop: '24px',
                fontSize: '18px',
                color: 'var(--text-muted)',
                maxWidth: '540px',
              }}
            >
              Если вы развиваете сеть, открываете точку или ищете помещение
              под существующий бизнес, мы можем предложить блоки в
              подготовленных объектах с понятной экономикой.
            </p>
          </div>
        </div>
        <div
          className="hidden lg:block"
          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '38%' }}
        >
          <Image
            src="/_images/tenants_hero.png"
            alt=""
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </section>

      {/* Категории */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <h2 style={{ marginBottom: '32px' }}>С какими категориями работаем</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => (
                <span
                  key={cat}
                  style={{
                    border: '1px solid var(--line)',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* Что предлагаем */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <h2 style={{ marginBottom: '40px' }}>Что мы предлагаем</h2>
          </MotionFadeUp>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {offers.map((item, i) => (
              <MotionFadeUp key={i} delay={Math.min(i * 0.08, 0.4)}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    paddingBlock: '20px',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--accent-soft)',
                      flexShrink: 0,
                      paddingTop: '3px',
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

      {/* Как получить предложение */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <div style={{ maxWidth: '640px' }}>
              <h2 style={{ marginBottom: '24px' }}>Как получить предложение</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '28px' }}>
                Напишите нам в Telegram или на почту. В сообщении укажите
                формат бизнеса, желаемую площадь и предпочтительные районы.
                Мы ответим, есть ли подходящие варианты под ваш формат, и
                покажем условия по ним.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-arrow"
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
                    transition: 'background 200ms ease',
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
