import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { NAV_LINKS, EMAIL, ADDRESS_SHORT } from '@/lib/constants';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--accent)', color: 'var(--surface)' }}>
      {/* Brand mark */}
      <div
        style={{
          paddingTop: 'clamp(48px, 6vw, 80px)',
          paddingBottom: '0',
          overflow: 'hidden',
        }}
      >
        <span className="brand-mark">МЕГАСТЕЙТ</span>
      </div>

      {/* Footer content */}
      <div
        className="container-main"
        style={{ paddingBlock: 'clamp(40px, 5vw, 64px)' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
          }}
        >
          <div>
            <div style={{ color: 'var(--surface)' }}>
              <Logo height={20} />
            </div>
            <p
              style={{
                marginTop: '12px',
                fontSize: '14px',
                color: 'rgba(250,248,243,0.55)',
                lineHeight: 1.5,
              }}
            >
              Долгосрочная аренда и управление
              <br />
              стрит-ритейлом в Москве
            </p>
          </div>

          <nav aria-label="Навигация в футере">
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: 'rgba(250,248,243,0.55)',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                    }}
                    className="hover:text-[var(--surface)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/legal/"
                  style={{
                    fontSize: '14px',
                    color: 'rgba(250,248,243,0.55)',
                    textDecoration: 'none',
                    transition: 'color 150ms ease',
                  }}
                  className="hover:text-[var(--surface)]"
                >
                  Реквизиты
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p style={{ fontSize: '14px', color: 'rgba(250,248,243,0.55)', lineHeight: 1.6 }}>
              {ADDRESS_SHORT}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              style={{
                display: 'block',
                marginTop: '8px',
                fontSize: '14px',
                color: 'rgba(250,248,243,0.55)',
                textDecoration: 'none',
                transition: 'color 150ms ease',
              }}
              className="hover:text-[var(--surface)]"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: '40px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(250,248,243,0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '13px', color: 'rgba(250,248,243,0.4)' }}>
            &copy; 2026 ООО «МЕГАСТЕЙТ» · ИНН 9710153625
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { href: '/legal/#privacy', label: 'Политика персональных данных' },
              { href: '/legal/#cookie', label: 'Cookie' },
              { href: '/legal/#terms', label: 'Условия использования' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: '13px',
                  color: 'rgba(250,248,243,0.4)',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }}
                className="hover:text-[rgba(250,248,243,0.7)]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
