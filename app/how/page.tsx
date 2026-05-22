import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Как мы работаем',
  description:
    'Шесть шагов от помещения до управления: поиск, финансовая модель, переговоры, подтверждение спроса, деление площади, управление.',
};

const steps = [
  {
    num: '01',
    title: 'Поиск и первичный отбор',
    text: 'Смотрим помещения по нашим параметрам: класс жилого комплекса, локация, транспортная доступность, плотность жителей, конкурентное окружение. Из десяти объектов до второго этапа доходит один или два.',
  },
  {
    num: '02',
    title: 'Финансовая модель',
    text: 'Считаем себестоимость аренды против рыночной ставки по каждому возможному блоку. Проверяем сценарии заселения, сроки выхода на плановый платёжный график и запас прочности на просадку. Если модель не сходится, отказываемся.',
  },
  {
    num: '03',
    title: 'Переговоры с собственником',
    text: 'Договариваемся о ставке, при которой проект сходится. Включаем в договор условия, защищающие обе стороны: фиксированный срок, индексация, право расторжения, понятный порядок передачи помещения.',
  },
  {
    num: '04',
    title: 'Подтверждение спроса',
    text: 'До подписания основного договора подтверждаем спрос минимум на половину площади: собираем предварительные договорённости и подтверждённый интерес от подходящих арендаторов. Если поток арендаторов на эту локацию недостаточный, отказываемся, даже если ставка собственника привлекательная.',
  },
  {
    num: '05',
    title: 'Деление площади и подготовка',
    text: 'Под уже подтверждённых арендаторов делаем нарезку. На свободные блоки оформляем планировку гибко, чтобы можно было перестроить под нового арендатора без капитальной переделки.',
  },
  {
    num: '06',
    title: 'Управление',
    text: 'После запуска объект переходит в управление. Мы ведём коммуникацию с арендаторами, контролируем платежи, работаем с заменой арендаторов и индексируем ставки по условиям договора.',
  },
];

export default function HowPage() {
  return (
    <>
      {/* ─── Hero с фоновой схемой ─── */}
      <section
        style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--line)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 'clamp(480px, 62vh, 680px)',
          display: 'flex',
          alignItems: 'center',
        }}
        className="grain"
      >
        {/* Фоновое изображение — чистое, без замутнения */}
        <Image
          src="/_images/6steps.png"
          alt=""
          fill
          unoptimized
          priority
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
        {/* Лёгкий оверлей только для читаемости текста слева */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(244,241,234,0.82) 30%, rgba(244,241,234,0.3) 60%, transparent 100%)',
          }}
        />

        <div
          className="container-main"
          style={{ paddingBlock: 'clamp(64px, 10vw, 120px)', position: 'relative', zIndex: 1 }}
        >
          <nav className="breadcrumb">
            <Link href="/">Главная</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Как мы работаем</span>
          </nav>
          <SectionLabel num="02" text="Процесс" />
          <MotionFadeUp>
            <h1>Шесть шагов от помещения до управления</h1>
            <span className="hero-line" />
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '560px' }}>
              От первичного отбора до запуска объекта обычно проходит от 3 до
              8 месяцев. Ниже порядок работы на каждом этапе.
            </p>
          </MotionFadeUp>
        </div>
      </section>

      {/* ─── Steps ─── */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="container-main section-gap">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {steps.map((step, i) => (
              <MotionFadeUp key={step.num} delay={Math.min(i * 0.08, 0.4)}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'clamp(60px, 8vw, 120px) 1fr',
                    gap: '32px',
                    paddingBlock: '40px',
                    borderBottom: '1px solid var(--line)',
                    alignItems: 'start',
                  }}
                >
                  <span
                    style={{
                      fontSize: 'clamp(32px, 4vw, 56px)',
                      fontWeight: 600,
                      color: 'var(--accent-soft)',
                      lineHeight: 1,
                      opacity: 0.6,
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3 style={{ marginBottom: '12px' }}>{step.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '17px' }}>{step.text}</p>
                  </div>
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
