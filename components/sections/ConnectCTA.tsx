import Image from 'next/image';
import { Send, Mail } from 'lucide-react';
import MotionFadeUp from '@/components/ui/MotionFadeUp';
import { TELEGRAM_URL, MAILTO } from '@/lib/constants';

export default function ConnectCTA() {
  return (
    <section
      style={{ background: 'var(--accent)', color: 'var(--surface)', position: 'relative', overflow: 'hidden' }}
      id="connect"
    >
      {/* Aurora background */}
      <div className="aurora-dark" />

      {/* Floating cube — decorative, right side */}
      <div
        style={{
          position: 'absolute',
          right: 'clamp(20px, 4vw, 80px)',
          top: '50%',
          transform: 'translateY(-55%)',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.55,
        }}
      >
        <Image
          src="/_images/3d-element-glass-building-abstract.png"
          alt=""
          width={500}
          height={500}
          unoptimized
          className="float-3d"
          style={{
            objectFit: 'contain',
            filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.4)) brightness(1.15)',
          }}
        />
      </div>

      <div
        className="container-main grain"
        style={{ paddingBlock: 'clamp(64px, 10vw, 128px)', position: 'relative', zIndex: 1 }}
      >
        <MotionFadeUp>
          <h2 style={{ color: 'var(--surface)' }}>
            Проверим, подходит ли объект под нашу модель
          </h2>
          <p
            style={{
              color: 'var(--surface)',
              opacity: 0.7,
              marginTop: '16px',
              maxWidth: '560px',
              fontSize: '17px',
            }}
          >
            Если у вас есть коммерческое помещение или вы рассматриваете покупку
            объекта под сдачу, напишите нам. В сообщении можно указать адрес,
            площадь, текущую ставку и коротко описать задачу.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginTop: '32px',
            }}
          >
            {/* Primary: surface bg + accent text */}
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
                background: 'var(--surface)',
                color: 'var(--accent)',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              <Send size={16} strokeWidth={1.5} />
              Написать в Telegram
            </a>
            {/* Secondary: transparent + surface border */}
            <a
              href={MAILTO}
              className="btn-arrow"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '8px',
                border: '1px solid rgba(250,248,243,0.35)',
                color: 'var(--surface)',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'border-color 200ms ease',
              }}
            >
              <Mail size={16} strokeWidth={1.5} />
              Написать на почту
            </a>
          </div>
        </MotionFadeUp>
      </div>
    </section>
  );
}
