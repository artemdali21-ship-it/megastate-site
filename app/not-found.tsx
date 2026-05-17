import Link from 'next/link';

export default function NotFound() {
  return (
    <section
      style={{
        background: 'var(--bg)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container-main" style={{ paddingBlock: 'clamp(80px, 12vw, 160px)' }}>
        <h1 style={{ marginBottom: '16px' }}>Страница не найдена</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '40px' }}>
          Похоже, такой страницы у нас нет.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
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
          На главную
        </Link>
      </div>
    </section>
  );
}
