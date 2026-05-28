import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';
import SectionLabel from '@/components/ui/SectionLabel';
import FeatureCard from '@/components/ui/FeatureCard';

export const metadata: Metadata = {
  title: 'Подход к объектам',
  description:
    'Принципы отбора объектов МЕГАСТЕЙТ. Проверка до сделки, подтверждённый спрос, устойчивые категории арендаторов, запас прочности.',
};

const principles = [
  {
    num: '01',
    title: 'Сначала проверка, потом сделка',
    text: 'До разговора о делении площади и поиске арендаторов мы отвечаем на один вопрос: стоит ли в этот объект входить вообще. Этот шаг требует отдельного времени, расчёта и проверки.',
  },
  {
    num: '02',
    title: 'Длительный договор только при подтверждённом спросе',
    text: 'Длительный договор имеет смысл только тогда, когда подтверждены спрос, экономика и сценарий заселения. До этого момента основной договор аренды не подписывается, даже если ставка собственника комфортная.',
  },
  {
    num: '03',
    title: 'Категории арендаторов с разной устойчивостью',
    text: 'Мы заселяем свои объекты арендаторами с понятными и прогнозируемыми видами деятельности.',
  },
  {
    num: '04',
    title: 'Запас прочности по ставке и срокам',
    text: 'Мы не считаем модель «впритык». В расчётах закладывается запас на удлинение сроков заселения, индексацию ставки собственника и возможную ротацию арендаторов в течение всего срока действия заключённого основного договора аренды.',
  },
  {
    num: '05',
    title: 'Создаём и ведём',
    text: 'В отрасли работают две модели: создать объект и передать его инвестору или управлять им самостоятельно. МЕГАСТЕЙТ работает по второй модели: создаёт объект и ведёт его в течение всего срока основного договора (если нет предварительно согласованного запроса от собственника на продажу создаваемого ГАБа).',
  },
  {
    num: '06',
    title: 'Гибкое деление объекта',
    text: 'Конфигурация деления площади проектируется так, чтобы была возможность с минимальными затратами быстро адаптировать её под нового арендатора. Категория или вид деятельности может уйти с рынка или не выдержать конкуренции в данной локации, но сам объект продолжит работать, имея заранее заложенную в него гибкость.',
  },
];

export default function ApproachPage() {
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
              <span>Подход</span>
            </nav>
            <SectionLabel num="03" text="Принципы отбора" />
            <MotionFadeUp>
              <h1 style={{ marginBottom: '0' }}>
                Принципы, по которым решаем, входить или нет
              </h1>
              <span className="hero-line" />
              <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '480px' }}>
                Эти правила определяют, какие объекты подходят под долгосрочную
                аренду, деление и дальнейшее управление.
              </p>
            </MotionFadeUp>
          </div>

          <div
            className="split-hero-media img-tint"
            style={{ position: 'relative', overflow: 'hidden', minHeight: '420px' }}
          >
            <Image
              src="/_images/approach_hero.png"
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px',
            }}
          >
            {principles.map((p, i) => (
              <FeatureCard
                key={p.num}
                num={p.num}
                title={p.title}
                text={p.text}
                delay={Math.min(i * 0.08, 0.4)}
              />
            ))}
          </div>
          <MotionFadeUp delay={0.5}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '40px' }}>
              {[
                'Аптеки', 'Продуктовая розница', 'ПВЗ маркетплейсов', 'Франшизные сети',
                'Кафе / кофейни / столовые / кондитерские', 'Бытовые услуги для местных жителей',
                'Цветочные магазины', 'Зоомагазины', 'Бьюти-услуги',
                'Развивающие и образовательные занятия для детей и взрослых',
                'Фитнес / йога / пилатес студии',
                'Медицинские центры / анализы / стоматологии',
                'Офисы турагентств', 'Студии интерьера / мебели / штор',
                'и другие',
              ].map((cat) => (
                <span
                  key={cat}
                  style={{
                    padding: '8px 16px',
                    border: '1px solid var(--line)',
                    borderRadius: '999px',
                    background: 'var(--surface)',
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </MotionFadeUp>
        </div>
      </section>

      <ConnectCTA />
    </>
  );
}
