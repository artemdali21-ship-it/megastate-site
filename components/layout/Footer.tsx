import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { EMAIL, ADDRESS_SHORT } from '@/lib/constants';

const NAV_COL1 = [
  { href: '/', label: 'Главная' },
  { href: '/how/', label: 'Как мы работаем' },
  { href: '/approach/', label: 'Подход' },
];

const NAV_COL2 = [
  { href: '/owners/', label: 'Собственникам' },
  { href: '/tenants/', label: 'Арендаторам' },
  { href: '/company/', label: 'Компания' },
];

const NAV_COL3 = [
  { href: '/contacts/', label: 'Контакты' },
  { href: '/legal/', label: 'Реквизиты' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--accent)', color: 'var(--surface)' }}>
      {/* Brand mark */}
      <div style={{ paddingTop: 'clamp(48px, 6vw, 80px)', overflow: 'hidden' }}>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '40px',
          }}
        >
          {/* Brand col */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ color: 'var(--surface)' }}>
              <Logo height={20} />
            </div>
            <p
              style={{
                marginTop: '12px',
                fontSize: '14px',
                color: 'rgba(250,248,243,0.5)',
                lineHeight: 1.55,
              }}
            >
              Долгосрочная аренда и управление
              <br />
              стрит-ритейлом в Москве
            </p>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(250,248,243,0.35)' }}>
              {ADDRESS_SHORT}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              style={{
                display: 'block',
                marginTop: '6px',
                fontSize: '13px',
                color: 'rgba(250,248,243,0.35)',
                textDecoration: 'none',
                transition: 'color 150ms ease',
              }}
              className="hover:text-[rgba(250,248,243,0.7)]"
            >
              {EMAIL}
            </a>
          </div>

          {/* Nav col 1 */}
          <nav aria-label="Навигация">
            <NavList items={NAV_COL1} />
          </nav>

          {/* Nav col 2 */}
          <nav>
            <NavList items={NAV_COL2} />
          </nav>

          {/* Nav col 3 */}
          <nav>
            <NavList items={NAV_COL3} />
          </nav>
        </div>

        {/* Bottom bar */}
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
          <p style={{ fontSize: '13px', color: 'rgba(250,248,243,0.35)' }}>
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
                  color: 'rgba(250,248,243,0.35)',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }}
                className="hover:text-[rgba(250,248,243,0.65)]"
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

function NavList({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {items.map((link) => (
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
    </ul>
  );
}
