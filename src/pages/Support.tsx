import { Link } from 'react-router-dom';

const supportEmail = 'admin@brightwoodapps.com';
const supportHref = `mailto:${supportEmail}?subject=${encodeURIComponent('Brightwood Apps support inquiry')}`;

export function SupportPage() {
  return (
    <main className="page support-page">
      <div className="support-page__glow support-page__glow--blue" aria-hidden="true" />
      <div className="support-page__glow support-page__glow--violet" aria-hidden="true" />

      <section className="container support-hero" aria-labelledby="support-title">
        <div className="support-hero__intro">
          <p className="eyebrow">Brightwood Apps support</p>
          <h1 id="support-title">How can we help?</h1>
          <p className="lede">
            Questions, feedback, or something not working as expected? Send us a note and we’ll help
            you get back to enjoying your app.
          </p>
        </div>

        <div className="support-card">
          <div className="support-card__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 6.75h16v10.5H4V6.75Z" />
              <path d="m5 8 7 5 7-5" />
            </svg>
          </div>
          <div className="support-card__content">
            <p className="support-card__label">Email our support team</p>
            <h2>We’re here for you.</h2>
            <p>
              For support with any Brightwood iOS app, contact us at{' '}
              <a className="support-email" href={supportHref}>
                {supportEmail}
              </a>
              . We read every message and will get back to you as soon as we can.
            </p>
          </div>
          <a className="btn-primary support-card__button" href={supportHref}>
            Email support
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="support-details">
          <div className="support-details__heading">
            <p className="eyebrow">A helpful head start</p>
            <h2>What to include in your message</h2>
            <p>
              A few details can help us understand the issue and respond more quickly. Share only
              what you’re comfortable sending.
            </p>
          </div>
          <ul className="support-checklist">
            <li>
              <span>1</span>
              <div>
                <strong>The app name</strong>
                <p>Tell us which Brightwood app you’re using.</p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <strong>What happened</strong>
                <p>Describe what you expected and what you saw instead.</p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <strong>Your device and iOS version</strong>
                <p>Share your iPhone or iPad model and the iOS version shown in Settings.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="support-footer-cta">
          <p>Looking for one of our apps?</p>
          <Link to="/#apps">Browse all Brightwood apps <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}

export default SupportPage;
