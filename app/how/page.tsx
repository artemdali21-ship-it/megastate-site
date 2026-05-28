import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Как мы работаем',
  description:
    'Шесть шагов МЕГАСТЕЙТ от квадратных метров до Готового Арендного Бизнеса. От первичного анализа до запуска объекта — 2–10 месяцев.',
};

const steps = [
  {
    num: '01',
    title: 'Поиск и первичный анализ',
    text: 'Постоянный мониторинг помещений по динамическому чек-листу: must-list — 8 параметров, hope-list — 19 параметров. Текущая статистика: на следующий этап анализа переходит не более 7% объектов.',
  },
  {
    num: '02',
    title: 'Финансовая модель',
    text: 'Анализируем и тестируем арендные ставки по каждому блоку и виду деятельности. Моделируем сценарии (не менее 3-х) заселения, сроки выхода арендаторов на необходимый платёжный график, учитываем риски и возможные просадки. Если финмодель «не взлетает» — отказываемся.',
  },
  {
    num: '03',
    title: 'Переговоры с собственником',
    text: 'Договариваемся об основных условиях договора, которые учитывают интересы обеих сторон: срок, ставка и ступени по ней, индексация, обязательства и штрафные санкции, условия расторжения.',
  },
  {
    num: '04',
    title: 'Подтверждение спроса',
    text: 'До подписания основного договора аренды тестируем фактический спрос в течение кратчайшего периода времени: обеспечиваем предварительные договорённости с потенциальными арендаторами не менее чем на 50% площади объекта. Если спрос по локации, ставке или площади недостаточный — динамически перестраиваем финмодель под реальный спрос. Если «не взлетает» — отказываемся.',
  },
  {
    num: '05',
    title: 'Подготовка объекта',
    text: 'После заключения основного договора аренды проводим фактическое деление объекта на площади под собранный пул арендаторов, обеспечиваем каждый блок необходимыми инженерными коммуникациями. На свободные части создаём гибкую планировку с максимальным учётом возможных запросов будущих арендаторов. Заселяем объект на 100%. Обеспечиваем отсутствие прямых конкурентов внутри объекта.',
  },
  {
    num: '06',
    title: 'Управление',
    text: 'Ведём коммуникацию с арендаторами, Управляющей Компанией, ресурсоснабжающими и подрядными организациями, контролируем платежи, осуществляем ротацию арендаторов (при необходимости), индексируем ставки в соответствии с условиями подписанных договоров.',
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
            <h1>Шесть шагов от квадратных метров до ГАБа</h1>
            <span className="hero-line" />
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '560px' }}>
              От первичного анализа до рабочего объекта обычно проходит от 2 до 10 месяцев. Этапы процесса:
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
