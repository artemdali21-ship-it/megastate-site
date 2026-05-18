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

      {/* Building — anchored to bottom-right */}
      <div
        className="cta-3d-decor"
        style={{
          position: 'absolute',
          right: 'clamp(20px, 4vw, 80px)',
          bottom: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {/* Shadow ellipse under building */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '24px',
            background: 'radial-gradient(ellipse 50% 100% at 50% 100%, rgba(0,0,0,0.28), transparent)',
            pointerEvents: 'none',
          }}
        />
        <Image
          src="/_images/object_green.png"
          alt=""
          width={460}
          height={460}
          unoptimized
          style={{
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>

      <div
        className="container-main grain"
        style={{ paddingBlock: 'clamp(64px, 10vw, 128px)', position: 'relative', zIndex: 1 }}
      >
        <MotionFadeUp>
          <h2 style={{ color: 'var(--surface)' }}>
            Проверим, подходит ли<br />объект под нашу модель
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

          {/* Mobile-only: building image below buttons */}
          <div className="cta-3d-mobile">
            <Image
              src="/_images/object_green.png"
              alt=""
              width={320}
              height={320}
              unoptimized
              style={{ objectFit: 'contain' }}
            />
          </div>
        </MotionFadeUp>
      </div>
    </section>
  );
}
