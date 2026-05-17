import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { NAV_LINKS, EMAIL, ADDRESS_SHORT } from '@/lib/constants';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--line)',
        background: 'var(--surface)',
      }}
    >
      <div
        className="container-main"
        style={{ paddingBlock: 'clamp(48px, 6vw, 80px)' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
          }}
        >
          <div>
            <div style={{ color: 'var(--accent)' }}>
              <Logo height={20} />
            </div>
            <p
              style={{
                marginTop: '12px',
                fontSize: '14px',
                color: 'var(--text-muted)',
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
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                    }}
                    className="hover:text-[var(--text)]"
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
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color 150ms ease',
                  }}
                  className="hover:text-[var(--text)]"
                >
                  Реквизиты
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
              }}
            >
              {ADDRESS_SHORT}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              style={{
                display: 'block',
                marginTop: '8px',
                fontSize: '14px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 150ms ease',
              }}
              className="hover:text-[var(--text)]"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '1px solid var(--line)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            &copy; 2026 ООО «МЕГАСТЕЙТ» · ИНН 9710153625
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/legal/#privacy"
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
              }}
            >
              Политика обработки персональных данных
            </Link>
            <Link
              href="/legal/#cookie"
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
              }}
            >
              Cookie
            </Link>
            <Link
              href="/legal/#terms"
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
              }}
            >
              Условия использования сайта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
