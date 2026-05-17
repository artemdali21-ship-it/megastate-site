import type { Metadata } from 'next';
import Image from 'next/image';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';

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
    title: 'Долгий договор только при подтверждённом спросе',
    text: 'Долгий договор имеет смысл только тогда, когда подтверждены спрос, экономика и сценарий заселения. До этого момента основной договор аренды не подписывается, даже если ставка собственника комфортная.',
  },
  {
    num: '03',
    title: 'Категории арендаторов с разной устойчивостью',
    text: 'Мы держим в работе понятный набор категорий: аптеки, продуктовая розница, точки сетевых маркетплейсов, бытовая химия, медицинские кабинеты, столовые, услуги для жителей жилого комплекса, детские развивающие занятия, бытовые мастерские. Это категории повседневного спроса, которые обычно устойчивее к рыночным колебаниям, чем случайная розница и импульсные форматы.',
  },
  {
    num: '04',
    title: 'Запас прочности по ставке и срокам',
    text: 'Мы не считаем модель «впритык». В расчётах закладывается запас на удлинение сроков заселения, индексацию ставки собственника и возможную смену арендатора в первые два года.',
  },
  {
    num: '05',
    title: 'Создаём и ведём',
    text: 'В отрасли есть две модели: подготовить объект к передаче следующему участнику или оставить его в долгосрочном управлении. МЕГАСТЕЙТ работает во второй модели: создаёт объект и ведёт его дальше.',
  },
  {
    num: '06',
    title: 'Гибкая нарезка',
    text: 'Любая первоначальная конфигурация площади проектируется так, чтобы её можно было перестроить под нового арендатора. Категория может уйти с рынка, конкретный арендатор может разориться, объект продолжает работать.',
  },
];

export default function ApproachPage() {
  return (
    <>
      {/* Hero с картинкой */}
      <section
        style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--line)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '420px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          className="container-main"
          style={{ paddingBlock: 'clamp(80px, 12vw, 160px)', position: 'relative', zIndex: 1 }}
        >
          <div style={{ maxWidth: '620px' }}>
            <h1>Принципы, по которым решаем, входить или нет.</h1>
            <p
              style={{
                marginTop: '24px',
                fontSize: '18px',
                color: 'var(--text-muted)',
                maxWidth: '560px',
              }}
            >
              Эти правила определяют, какие объекты подходят под долгосрочную
              аренду, деление и дальнейшее управление. Они помогают не входить
              в помещения, где экономика держится только на оптимистичном
              сценарии.
            </p>
          </div>
        </div>
        <div
          className="hidden lg:block"
          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '38%' }}
        >
          <Image
            src="/_images/approach_hero.png"
            alt=""
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </section>

      {/* Принципы */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="container-main section-gap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '0 48px',
            }}
          >
            {principles.map((p, i) => (
              <MotionFadeUp key={p.num} delay={Math.min(i * 0.1, 0.4)}>
                <div
                  style={{
                    borderTop: '1px solid var(--line)',
                    paddingTop: '32px',
                    paddingBottom: '48px',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: 'clamp(48px, 6vw, 96px)',
                      fontWeight: 600,
                      color: 'var(--accent-soft)',
                      lineHeight: 1,
                      marginBottom: '16px',
                    }}
                  >
                    {p.num}
                  </span>
                  <h3 style={{ marginBottom: '12px' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '17px' }}>
                    {p.text}
                  </p>
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
