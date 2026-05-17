import type { Metadata } from 'next';
import Image from 'next/image';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';

export const metadata: Metadata = {
  title: 'Компания',
  description:
    'МЕГАСТЕЙТ — независимый оператор стрит-ритейла в Москве и ближнем Подмосковье. Берём помещения в долгосрочную аренду, делим, заселяем, управляем.',
};

const principles = [
  'Один контур ответственности по каждому объекту',
  'Все расчёты ведутся в письменной форме',
  'Договоры с собственниками и арендаторами фиксируют понятные условия',
  'Долгий горизонт важнее быстрой сделки',
];

export default function CompanyPage() {
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
            <h1>О МЕГАСТЕЙТ</h1>
            <p
              style={{
                marginTop: '24px',
                fontSize: '18px',
                color: 'var(--text-muted)',
                maxWidth: '540px',
              }}
            >
              МЕГАСТЕЙТ работает как независимый оператор стрит-ритейла в
              Москве и ближнем Подмосковье. Компания берёт коммерческие
              помещения в долгосрочную аренду, делит площадь на рабочие
              блоки, заселяет арендаторами и ведёт дальнейшее управление
              объектом.
            </p>
          </div>
        </div>
        <div
          className="hidden lg:block"
          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '38%' }}
        >
          <Image
            src="/_images/company_hero.png"
            alt=""
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </section>

      {/* Фокус */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <div style={{ maxWidth: '720px' }}>
              <h2 style={{ marginBottom: '24px' }}>Фокус</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '20px' }}>
                Стрит-ритейл в жилых комплексах эконом-, комфорт-, бизнес- и
                премиум-класса, а также качественный старый фонд при
                подходящих параметрах трафика, ставки и инженерии.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px' }}>
                Компания не работает с торговыми центрами, складами и
                офисными площадями. Это другие форматы недвижимости,
                требующие другой модели управления.
              </p>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* Класс объекта */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <div style={{ maxWidth: '720px' }}>
              <h2 style={{ marginBottom: '24px' }}>Класс объекта как первый фильтр</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px' }}>
                Эконом, комфорт, бизнес и премиум могут давать разную
                экономику в зависимости от трафика, видимости, ставки,
                инженерии и фактического спроса. Поэтому каждый объект
                считается отдельно, и решение об аренде принимается на
                основе расчёта, а не на основе класса жилого комплекса.
              </p>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* Как организована работа */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <div style={{ maxWidth: '720px' }}>
              <h2 style={{ marginBottom: '24px' }}>Как организована работа</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '20px' }}>
                Каждый объект проходит через финансовую модель, переговоры
                с собственником, предварительное подтверждение спроса и
                дальнейшее операторское управление. Компания не входит в
                помещения, где экономика не подтверждена до подписания
                договора.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px' }}>
                Часть технических задач выполняется силами компании. Для
                отдельных работ привлекаются проверенные подрядчики:
                проектировщики, ремонтные команды, специалисты по поиску
                арендаторов, юристы и специалисты по эксплуатации.
                Ответственность перед собственником и арендатором по
                основному договору остаётся на МЕГАСТЕЙТ.
              </p>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* Партнёрские проекты */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <div style={{ maxWidth: '720px' }}>
              <h2 style={{ marginBottom: '24px' }}>Партнёрские проекты</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px' }}>
                Компания рассматривает совместные проекты с владельцами
                помещений, девелоперами и профильными партнёрами. Формат
                участия определяется индивидуально после анализа объекта
                и юридической структуры.
              </p>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* Принципы работы */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <h2 style={{ marginBottom: '40px' }}>Принципы работы</h2>
          </MotionFadeUp>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '640px' }}>
            {principles.map((item, i) => (
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

      <ConnectCTA />
    </>
  );
}
