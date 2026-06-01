import type { Metadata } from 'next';
import Link from 'next/link';
import MotionFadeUp from '@/components/ui/MotionFadeUp';

export const metadata: Metadata = {
  title: 'Политика использования Cookie',
  description: 'Политика использования файлов cookie на сайте megastate.group.',
};

export default function CookiePage() {
  return (
    <>
      <section
        style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--line)',
          paddingBlock: 'clamp(72px, 10vw, 120px)',
        }}
      >
        <div className="container-main">
          <nav className="breadcrumb">
            <Link href="/">Главная</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/legal/">Юридическая информация</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Cookie</span>
          </nav>
          <MotionFadeUp>
            <h1>Политика использования Cookie</h1>
            <span className="hero-line" />
            <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>
              Последнее обновление: 18 мая 2026 г.
            </p>
          </MotionFadeUp>
        </div>
      </section>

      <section style={{ background: 'var(--surface)' }}>
        <div className="container-main" style={{ paddingBlock: 'clamp(48px, 7vw, 96px)' }}>
          <MotionFadeUp>
            <article style={{ maxWidth: '720px' }} className="legal-article">

              <h2>1. Что такое файлы cookie</h2>
              <p>
                Cookie — небольшие текстовые файлы, которые сохраняются браузером при посещении
                сайта и позволяют запоминать настройки и действия пользователя. Cookie не содержат
                исполняемого кода и не могут использоваться для доступа к данным на устройстве.
              </p>

              <h2>2. Использование cookie на megastate.group</h2>
              <p>
                Сайт megastate.group не устанавливает собственных маркетинговых или аналитических
                файлов cookie. На Сайте отсутствуют:
              </p>
              <ul>
                <li>рекламные трекеры и пиксели;</li>
                <li>аналитические системы (Google Analytics, Яндекс.Метрика и аналоги);</li>
                <li>файлы cookie для авторизации или персонализации.</li>
              </ul>

              <h2>3. Технические данные хостинга</h2>
              <p>
                Хостинг-провайдер в стандартном режиме работы сервера обрабатывает IP-адреса
                и технические заголовки запросов. Эти данные не используются для идентификации
                конкретных пользователей и хранятся на территории Российской Федерации.
              </p>

              <h2>4. Внешние сервисы</h2>
              <p>
                Сайт содержит ссылки на Telegram. При переходе по таким ссылкам внешние сервисы
                могут устанавливать собственные файлы cookie в соответствии со своими политиками.
                ООО «МЕГАСТЕЙТ» не контролирует эти файлы.
              </p>

              <h2>5. Управление cookie в браузере</h2>
              <p>
                Вы можете настроить браузер на блокировку или удаление файлов cookie в любое время.
                Инструкции доступны в документации вашего браузера. Поскольку Сайт не устанавливает
                собственных cookie, его функциональность не зависит от ваших настроек.
              </p>

              <h2>6. Изменения политики</h2>
              <p>
                При подключении аналитических или иных инструментов, использующих cookie, настоящая
                политика будет обновлена заблаговременно. Актуальная версия публикуется по адресу{' '}
                <Link href="/legal/cookie/">megastate.group/legal/cookie/</Link>.
              </p>

              <h2>7. Контакты</h2>
              <p>
                Вопросы по использованию cookie направляйте по адресу:{' '}
                <a href="mailto:info@megastate.group">info@megastate.group</a>.
              </p>

            </article>
          </MotionFadeUp>
        </div>
      </section>
    </>
  );
}
