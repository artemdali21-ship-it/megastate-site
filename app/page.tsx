import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Send, Mail } from 'lucide-react';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';
import { TELEGRAM_URL, MAILTO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Долгосрочная аренда и управление стрит-ритейлом в Москве — МЕГАСТЕЙТ',
  description:
    'МЕГАСТЕЙТ — долгосрочная аренда и операторское управление стрит-ритейлом в Москве. Проверяем экономику до сделки, делим площадь, заселяем арендаторами.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--bg)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="container-main"
          style={{
            paddingBlock: 'clamp(80px, 12vw, 160px)',
            display: 'grid',
            gridTemplateColumns: '1fr',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ maxWidth: '620px' }}>
            <h1 style={{ color: 'var(--text)', marginBottom: '24px' }}>
              Долгосрочная аренда
              <span className="hidden lg:inline">
                <br />
              </span>{' '}
              и управление стрит-ритейлом в Москве
            </h1>

            <MotionFadeUp delay={0.15}>
              <p
                style={{
                  fontSize: '18px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  maxWidth: '580px',
                  marginBottom: '32px',
                }}
              >
                МЕГАСТЕЙТ берёт коммерческие помещения на первых этажах жилых
                домов в долгосрочную аренду, проверяет экономику до сделки,
                делит площадь на рабочие блоки и управляет объектом по
                условиям основного договора.
              </p>
            </MotionFadeUp>

            <MotionFadeUp delay={0.25}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Link
                  href="/#connect"
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
        </div>

        {/* Desktop: right-side image */}
        <div
          className="hidden lg:block"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '42%',
          }}
        >
          <Image
            src="/_images/hero_main.png"
            alt=""
            fill
            priority
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </section>

      {/* Mobile: image below hero text */}
      <div
        className="block lg:hidden container-main"
        style={{ paddingBottom: 'clamp(32px, 6vw, 64px)' }}
      >
        <div
          style={{
            aspectRatio: '3/2',
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Image
            src="/_images/hero_main.png"
            alt=""
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </div>

      {/* Блок 2: Что делаем */}
      <section
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--line)',
        }}
      >
        <div className="container-main section-gap">
          <MotionFadeUp>
            <h2 style={{ marginBottom: '48px' }}>Что делает МЕГАСТЕЙТ</h2>
          </MotionFadeUp>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '48px',
            }}
          >
            {[
              {
                num: '01',
                text: 'Берём помещение в долгосрочную аренду у собственника.',
              },
              {
                num: '02',
                text: 'Проверяем, какие блоки и категории арендаторов выдержит объект.',
              },
              {
                num: '03',
                text: 'Делим площадь, заселяем арендаторами и ведём дальнейшее управление.',
              },
            ].map((item, i) => (
              <MotionFadeUp key={item.num} delay={i * 0.08}>
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '24px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: 'clamp(40px, 5vw, 72px)',
                      fontWeight: 600,
                      color: 'var(--accent-soft)',
                      lineHeight: 1,
                      marginBottom: '16px',
                    }}
                  >
                    {item.num}
                  </span>
                  <p style={{ color: 'var(--text)', fontSize: '17px' }}>{item.text}</p>
                </div>
              </MotionFadeUp>
            ))}
          </div>

          <MotionFadeUp delay={0.24}>
            <p
              style={{
                marginTop: '48px',
                padding: '24px 32px',
                background: 'var(--surface-muted)',
                borderRadius: '12px',
                color: 'var(--text)',
                fontSize: '17px',
                maxWidth: '760px',
              }}
            >
              Компания работает не как посредник, а как оператор: сама
              становится арендатором по основному договору и отвечает за
              объект перед собственником.
            </p>
          </MotionFadeUp>
        </div>
      </section>

      {/* Блок 3: Дисциплина */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <div style={{ maxWidth: '640px' }}>
              <h2 style={{ marginBottom: '24px' }}>Сначала расчёт, потом договор</h2>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '17px',
                  marginBottom: '32px',
                }}
              >
                Перед договором мы проверяем ставку, трафик, видимость,
                инженерию, ликвидность будущих блоков и спрос со стороны
                арендаторов. Если запас прочности недостаточный, мы не входим.
              </p>
              <Link href="/approach/" className="underline-link">
                Подробнее о подходе
                <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* Блок 4: Для кого */}
      <section
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--line)',
        }}
      >
        <div className="container-main section-gap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            <MotionFadeUp>
              <AudienceCard
                title="Собственникам помещений"
                text="Один основной договор, один контрагент и понятный график платежей. МЕГАСТЕЙТ берёт на себя деление, заселение и управление объектом."
                href="/owners/"
                linkLabel="Подробнее"
              />
            </MotionFadeUp>
            <MotionFadeUp delay={0.08}>
              <AudienceCard
                title="Арендаторам"
                text="Готовые блоки в проходных локациях Москвы и ближнего Подмосковья. Понятная конфигурация, условия входа и формат договора."
                href="/tenants/"
                linkLabel="Подробнее"
              />
            </MotionFadeUp>
            <MotionFadeUp delay={0.16}>
              <div
                style={{
                  background: 'var(--surface-muted)',
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                  padding: '32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <h3>Партнёрские проекты</h3>
                <p style={{ color: 'var(--text-muted)', flex: 1 }}>
                  Рассматриваются индивидуально после анализа объекта и
                  юридической структуры.
                </p>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-link"
                >
                  Написать в Telegram
                  <ArrowRight size={15} strokeWidth={1.5} />
                </a>
              </div>
            </MotionFadeUp>
          </div>
        </div>
      </section>

      {/* ConnectCTA */}
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
      style={{
        background: 'var(--surface-muted)',
        border: '1px solid var(--line)',
        borderRadius: '12px',
        padding: '32px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <h3>{title}</h3>
      <p style={{ color: 'var(--text-muted)', flex: 1 }}>{text}</p>
      <Link href={href} className="underline-link">
        {linkLabel}
        <ArrowRight size={15} strokeWidth={1.5} />
      </Link>
    </div>
  );
}
