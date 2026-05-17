import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import MotionFadeUp from '@/components/ui/MotionFadeUp';

export const metadata: Metadata = {
  title: 'Реквизиты и документы',
  description: 'Реквизиты ООО «МЕГАСТЕЙТ» и юридические документы.',
};

const requisites = [
  { label: 'Полное наименование', value: 'ООО «МЕГАСТЕЙТ»' },
  { label: 'ИНН', value: '9710153625' },
  { label: 'КПП', value: '771001001' },
  { label: 'Расчётный счёт', value: '40702810501380004343' },
  { label: 'Банк', value: 'АО «АЛЬФА-БАНК»' },
  { label: 'БИК', value: '044525593' },
  { label: 'Корреспондентский счёт', value: '30101810200000000593' },
  {
    label: 'Юридический адрес',
    value: 'Москва, улица Садовая-Триумфальная, 16, строение 3, помещение 2А/1',
  },
];

const docs = [
  { href: '/legal/privacy/', label: 'Политика обработки персональных данных', id: 'privacy' },
  { href: '/legal/cookie/', label: 'Политика использования Cookie', id: 'cookie' },
  { href: '/legal/terms/', label: 'Условия использования сайта', id: 'terms' },
  { href: '/legal/offer/', label: 'Публичная оферта', id: 'offer' },
];

export default function LegalPage() {
  return (
    <>
      <section
        style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--line)',
          paddingBlock: 'clamp(96px, 14vw, 200px)',
        }}
      >
        <div className="container-main">
          <MotionFadeUp>
            <h1>Юридическая информация</h1>
          </MotionFadeUp>
        </div>
      </section>

      {/* Реквизиты */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <h2 style={{ marginBottom: '40px' }}>Реквизиты</h2>
            <dl
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(140px, 40%) 1fr',
                gap: '0',
                maxWidth: '720px',
              }}
            >
              {requisites.map((r, i) => (
                [
                  <dt
                    key={`dt-${i}`}
                    style={{
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      padding: '14px 16px 14px 0',
                      borderBottom: '1px solid var(--line)',
                    }}
                  >
                    {r.label}
                  </dt>,
                  <dd
                    key={`dd-${i}`}
                    style={{
                      fontSize: '15px',
                      color: 'var(--text)',
                      fontWeight: 500,
                      padding: '14px 0',
                      borderBottom: '1px solid var(--line)',
                      fontVariantNumeric: 'tabular-nums',
                      wordBreak: 'break-all',
                    }}
                  >
                    {r.value}
                  </dd>,
                ]
              ))}
            </dl>
          </MotionFadeUp>
        </div>
      </section>

      {/* Документы */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container-main section-gap">
          <MotionFadeUp>
            <h2 style={{ marginBottom: '32px' }}>Документы</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '600px' }}>
              {docs.map((doc) => (
                <div
                  key={doc.id}
                  id={doc.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBlock: '20px',
                    borderBottom: '1px solid var(--line)',
                    gap: '16px',
                  }}
                >
                  <p style={{ color: 'var(--text)', fontSize: '16px' }}>{doc.label}</p>
                  <Link
                    href={doc.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      flexShrink: 0,
                      border: '1px solid var(--line)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      transition: 'background 150ms ease',
                    }}
                  >
                    Читать
                    <ArrowRight size={12} strokeWidth={1.5} />
                  </Link>
                </div>
              ))}
            </div>
          </MotionFadeUp>
        </div>
      </section>
    </>
  );
}
