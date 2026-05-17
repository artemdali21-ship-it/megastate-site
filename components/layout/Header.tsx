'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import MobileMenu from '@/components/layout/MobileMenu';
import { NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          transition:
            'background 200ms ease, backdrop-filter 200ms ease, border-color 200ms ease',
          background: scrolled ? 'rgba(244,241,234,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px) saturate(140%)' : 'none',
          WebkitBackdropFilter: scrolled
            ? 'blur(12px) saturate(140%)'
            : 'none',
          borderBottom: scrolled
            ? '1px solid var(--line)'
            : '1px solid transparent',
          color: 'var(--text)',
        }}
      >
        <div
          className="container-main"
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          <div style={{ color: 'var(--accent)', flexShrink: 0 }}>
            <Logo height={22} />
          </div>

          <nav
            aria-label="Основная навигация"
            style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
            className="hidden lg:flex"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '6px 10px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'background 150ms ease',
                  whiteSpace: 'nowrap',
                }}
                className="hover:bg-[var(--surface-muted)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <Link
              href="/#connect"
              className="hidden sm:inline-flex"
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                background: 'var(--accent)',
                color: 'var(--surface)',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'background 200ms ease',
              }}
            >
              Связаться по объекту
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Открыть меню"
              className="lg:hidden"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text)',
                padding: '6px',
              }}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
