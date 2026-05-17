import type { Metadata } from 'next';
import Image from 'next/image';
import { Send, Mail } from 'lucide-react';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import ConnectCTA from '@/components/sections/ConnectCTA';
import { TELEGRAM_URL, MAILTO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Собственникам',
  description:
    'Сдайте коммерческое помещение в долгосрочную аренду МЕГАСТЕЙТ. Один договор, стабильный платёж по графику, долгий горизонт.',
};

export default function OwnersPage() {
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
            <h1>Если вы хотите сдать помещение на долгий срок</h1>
            <p
              style={{
                marginTop: '24px',
                fontSize: '18px',
                color: 'var(--text-muted)',
                maxWidth: '540px',
              }}
            >
              МЕГАСТЕЙТ может взять помещение в долгосрочную аренду на 5–10
              лет, разделить площадь под несколько арендаторов и платить
              согласованную ставку по графику основного договора.
            </p>
          </div>
        </div>
        <div
          className="hidden lg:block"
          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '38%' }}
        >
          <Image
            src="/_images/owners_hero.png"
            alt=""
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </section>

      {/* Что получаете */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <h2 style={{ marginBottom: '40px' }}>Что вы получаете</h2>
          </MotionFadeUp>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              'Один договор и один контрагент вместо десятка',
              'Платёж по графику основного договора',
              'Долгий горизонт: мы заинтересованы в сохранности помещения',
              'Прозрачная индексация в договоре',
              'Понятный порядок передачи помещения и возврата по окончании срока',
            ].map((item, i) => (
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

      {/* С какими помещениями работаем */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <h2 style={{ marginBottom: '32px' }}>С какими помещениями работаем</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '640px' }}>
              {[
                'Стрит-ритейл в жилых комплексах эконом-, комфорт-, бизнес- и премиум-класса',
                'Помещения свободного назначения от 80 м² в Москве и ближнем Подмосковье',
                'Качественный старый фонд при подходящем трафике и ставке',
              ].map((item, i) => (
                <p key={i} style={{ color: 'var(--text-muted)', fontSize: '17px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
                  {item}
                </p>
              ))}
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* Как происходит первый разговор */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <div style={{ maxWidth: '640px' }}>
              <h2 style={{ marginBottom: '24px' }}>Как происходит первый разговор</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '40px' }}>
                Один созвон. Один выезд на объект. Расчёт по нашей модели.
                Если объект подходит, письменное предложение со ставкой и
                условиями. Без затягивания и без избыточного давления.
              </p>
              <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>Как написать</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '28px' }}>
                Напишите нам в Telegram или на почту. В сообщении можно сразу
                указать адрес объекта, площадь, текущую ставку (если объект
                уже сдавался) и срок, на который рассматриваете договор.
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
