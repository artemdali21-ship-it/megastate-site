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
  title: 'Собственникам',
  description:
    'Сдайте коммерческое помещение в долгосрочную аренду МЕГАСТЕЙТ. Один договор, стабильный платёж по графику, долгий горизонт.',
};

const benefits = [
  'Один договор и один контрагент вместо 3–10',
  'Соблюдение графика арендных платежей',
  'Длительный горизонт планирования: мы заинтересованы в сохранности помещения и пролонгации договора',
  'Рост арендной ставки благодаря рыночной индексации',
  'Подробный договор с учётом реальностей рынка — полная прозрачность от старта до завершения',
  'Возможность смены стратегии и продажи объекта в качестве ГАБ с дополнительной премией',
];

export default function OwnersPage() {
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
              <span>Собственникам</span>
            </nav>

            <SectionLabel num="04" text="Для собственников" />

            <h1 style={{ marginBottom: '0' }}>
              Если вы хотите сдать помещение на долгий срок
            </h1>
            <span className="hero-line" />
            <p
              style={{
                fontSize: '18px',
                color: 'var(--text-muted)',
                maxWidth: '480px',
              }}
            >
              МЕГАСТЕЙТ берёт помещение в долгосрочную аренду на 7–15
              лет, разделяет площадь под несколько арендаторов и платит
              согласованную ставку по графику основного договора.
            </p>
          </div>

          <div
            className="split-hero-media img-tint"
            style={{ position: 'relative', overflow: 'hidden', minHeight: '420px' }}
          >
            <Image
              src="/_images/owners_hero.png"
              alt=""
              fill
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>
      </section>

      {/* ─── Что получаете ─── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="01" text="Что вы получаете" />
            <h2 style={{ marginBottom: '40px' }}>Что вы получаете</h2>
          </MotionFadeUp>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {benefits.map((item, i) => (
              <FeatureCard
                key={i}
                num={String(i + 1).padStart(2, '0')}
                title={item}
                text=""
                delay={Math.min(i * 0.08, 0.32)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── С какими помещениями ─── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="02" text="С какими помещениями" />
            <h2 style={{ marginBottom: '32px' }}>С какими помещениями работаем</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '680px' }}>
              {[
                'Стрит-ритейл в жилых комплексах эконом-, комфорт-, бизнес- и премиум-класса',
                'Помещения свободного назначения от 80 м² в Москве и ближнем Подмосковье',
                'Качественный старый фонд при подходящем трафике и ставке',
              ].map((item, i) => (
                <MotionFadeUp key={i} delay={i * 0.1}>
                  <div
                    style={{
                      padding: '20px 0',
                      borderBottom: '1px solid var(--line)',
                      color: 'var(--text)',
                      fontSize: '17px',
                      display: 'flex',
                      gap: '16px',
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
                    {item}
                  </div>
                </MotionFadeUp>
              ))}
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* ─── Первый разговор ─── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <SectionLabel num="03" text="Первый контакт" />
            <div style={{ maxWidth: '640px' }}>
              <h2 style={{ marginBottom: '24px' }}>Как происходит первый разговор</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '24px' }}>
                Один созвон. Один выезд на объект. Расчёт по нашей модели.
                Если объект подходит, письменное предложение со ставкой и
                условиями. Без затягивания и без избыточного давления.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '32px' }}>
                Напишите нам в Telegram или на почту. В сообщении можно сразу
                указать адрес объекта, площадь, текущую ставку (если объект
                уже сдавался) и срок, на который рассматриваете договор.
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
