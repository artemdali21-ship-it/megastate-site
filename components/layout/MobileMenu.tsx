'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X, Send } from 'lucide-react';
import { NAV_LINKS, TELEGRAM_URL } from '@/lib/constants';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(29,29,27,0.4)',
              zIndex: 60,
            }}
          />
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Мобильное меню"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: 'min(420px, 100vw)',
              background: 'var(--surface)',
              zIndex: 70,
              display: 'flex',
              flexDirection: 'column',
              padding: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '40px',
              }}
            >
              <button
                onClick={onClose}
                aria-label="Закрыть меню"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text)',
                  padding: '8px',
                }}
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                flex: 1,
              }}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    style={{
                      display: 'block',
                      padding: '12px 0',
                      fontSize: '20px',
                      fontWeight: 500,
                      color: 'var(--text)',
                      textDecoration: 'none',
                      borderBottom: '1px solid var(--line)',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 24px',
                borderRadius: '8px',
                background: 'var(--accent)',
                color: 'var(--surface)',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                marginTop: '32px',
              }}
            >
              <Send size={16} strokeWidth={1.5} />
              Связаться по объекту
            </a>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
