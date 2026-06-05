import type { Metadata } from 'next';
import './globals.css';
import { manrope } from '@/lib/fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://megastate.group'),
  title: {
    default: 'МЕГАСТЕЙТ — долгосрочная аренда и управление стрит-ритейлом в Москве',
    template: '%s — МЕГАСТЕЙТ',
  },
  description:
    'МЕГАСТЕЙТ — долгосрочная аренда и операторское управление стрит-ритейлом в Москве. Проверяем экономику до сделки, делим площадь, заселяем арендаторами.',
  openGraph: {
    siteName: 'МЕГАСТЕЙТ',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://cdn.jsdelivr.net/gh/artemdali21-ship-it/megastate-site@main/public/og-megastate.png',
        width: 1200,
        height: 630,
        alt: 'МЕГАСТЕЙТ — оператор коммерческих помещений в Москве',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://cdn.jsdelivr.net/gh/artemdali21-ship-it/megastate-site@main/public/og-megastate.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:px-4 focus:py-2 focus:rounded-md focus:z-[100]"
          style={{
            background: 'var(--accent)',
            color: 'var(--surface)',
          }}
        >
          К основному контенту
        </a>
        <Header />
        <main id="main" style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
