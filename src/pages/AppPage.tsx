import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DotGrid from '../components/DotGrid';
import { getAppBySlug } from '../data/apps';

export function AppPage() {
  const { slug } = useParams();
  const app = slug ? getAppBySlug(slug) : undefined;
  const isCallGpt = app?.slug === 'call-gpt';

  useEffect(() => {
    document.body.classList.toggle('callgpt-body', isCallGpt);
    return () => {
      document.body.classList.remove('callgpt-body');
    };
  }, [isCallGpt]);

  if (!app) {
    return (
      <div className="page page--narrow">
        <div className="container content-centered">
          <p className="eyebrow">Not found</p>
          <h1>We couldn’t find that app.</h1>
          <p className="lede">Try heading back to the app list.</p>
          <Link className="btn-primary" to="/#apps">
            View all apps
          </Link>
        </div>
      </div>
    );
  }

  const supportEmail = `mailto:${app.supportEmail ?? 'admin@brightwoodapps.com'}?subject=${encodeURIComponent(app.name)}`;

  if (app.slug === 'call-gpt') {
    return (
      <div className="page page--light callgpt-page">
        <section className="callgpt-hero">
          <div className="container callgpt-hero__grid">
            <div className="callgpt-hero__content">
              <span className="callgpt-badge">ChatGPT app</span>
              <p className="eyebrow">{app.category}</p>
              <h1>Call GPT</h1>
              <p className="lede">
                Book appointments directly from ChatGPT. Call GPT initiates real calls to barbers, doctors' offices, and
                local services so you can get confirmations without leaving your chat.
              </p>
              <div className="callgpt-hero__actions">
                <a className="btn-primary" href={supportEmail}>
                  Request access
                </a>
                <a className="btn-secondary" href={app.privacyUrl}>
                  Privacy Policy
                </a>
                <a className="btn-ghost" href="/legal/call-gpt/call-gpt-terms.html">
                  Terms of Service
                </a>
              </div>
              <div className="callgpt-tags">
                <span>Works inside ChatGPT</span>
                <span>Live call updates</span>
                <span>Appointment-ready confirmations</span>
              </div>
            </div>
            <div className="callgpt-hero__preview">
              <div className="callgpt-preview">
                <div className="callgpt-panel">
                  <div className="callgpt-panel__header">
                    <span>Call GPT</span>
                    <span className="callgpt-panel__status">Calling now</span>
                  </div>
                  <p>"Book a haircut at Maple St. Barbers for Tuesday after 3."</p>
                </div>
                <div className="callgpt-panel callgpt-panel--accent">
                  <div className="callgpt-panel__header">
                    <span>Update</span>
                    <span>Confirmed</span>
                  </div>
                  <ul>
                    <li>Tuesday, 3:30 PM</li>
                    <li>27 Maple St</li>
                    <li>Added to calendar</li>
                  </ul>
                </div>
              </div>
              <p className="callgpt-caption">
                No mobile app required; everything happens inside your ChatGPT conversation.
              </p>
            </div>
          </div>
        </section>

        <section className="callgpt-section callgpt-section--alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Built for real-world scheduling</p>
              <h2>Appointments done in minutes</h2>
              <p className="lede">
                Turn a single request into a confirmed appointment with clear, readable updates.
              </p>
            </div>
            <div className="callgpt-feature-grid">
              <div className="callgpt-card">
                <h3>One prompt to a booked slot</h3>
                <p>Tell Call GPT the business, preferred times, and details. We handle the call and report back fast.</p>
              </div>
              <div className="callgpt-card">
                <h3>Built for real-world places</h3>
                <p>Perfect for barbers, clinics, auto shops, and any office that still books by phone.</p>
              </div>
              <div className="callgpt-card">
                <h3>Clear confirmations</h3>
                <p>Get a clean summary with the time, address, and instructions so you can move on with your day.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="callgpt-section callgpt-section--workflow">
          <div className="container">
            <div className="callgpt-workflow">
              <div>
                <p className="eyebrow">How it works</p>
                <h2>From ask to confirmation</h2>
              </div>
              <ol>
                <li>
                  <strong>Share the ask.</strong> Mention the business, time windows, and any preferences or constraints.
                </li>
                <li>
                  <strong>We place the call.</strong> Call GPT reaches out, navigates hold times, and secures an opening.
                </li>
                <li>
                  <strong>Approve and go.</strong> Confirm the slot and receive a summary right in your chat.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="callgpt-section callgpt-section--cta">
          <div className="container">
            <div className="callgpt-cta">
              <div>
                <p className="eyebrow">Get started</p>
                <h2>Book the call. Keep the chat.</h2>
                <p className="lede">
                  Call GPT keeps appointments moving while you stay focused on the rest of your day.
                </p>
              </div>
              <div className="callgpt-cta__actions">
                <a className="btn-primary" href={supportEmail}>
                  Request access
                </a>
                <a className="btn-secondary" href="/legal/call-gpt/call-gpt-terms.html">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="callgpt-section callgpt-section--legal">
          <div className="container">
            <div className="callgpt-legal">
              <div>
                <h3>Legal</h3>
                <p className="lede">Review how Call GPT handles data and usage.</p>
              </div>
              <div className="callgpt-legal__actions">
                <a className="btn-secondary" href={app.privacyUrl}>
                  Privacy Policy
                </a>
                <a className="btn-secondary" href="/legal/call-gpt/call-gpt-terms.html">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (app.slug === 'server-tip-tracker') {
    return (
      <div className="page page--narrow page--light">
        <section className="app-hero-plain">
          <div className="container app-hero-plain__grid">
            <div className="app-hero-plain__content">
              <p className="eyebrow">{app.category}</p>
              <h1>See where every shift pays best</h1>
              <p className="lede">
                Server Tip Tracker keeps tips, wages, and hours in one simple view so you can choose the shifts, roles, and locations that earn the most.
              </p>
              <div className="pill-row">
                <span>Log tips, wages, and hours in seconds</span>
                <span>Trends by day, location, and role</span>
                <span>Weekly summaries you can trust</span>
              </div>
              <div className="hero__actions">
                <a className="btn-primary" href={`mailto:admin@brightwoodapps.com?subject=${encodeURIComponent(app.name)}`}>
                  Get early access
                </a>
                <a className="btn-secondary" href={supportEmail}>
                  Contact support
                </a>
                <a className="btn-ghost" href={app.privacyUrl}>
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="app-hero-plain__feature-card">
              <p className="eyebrow">What you get</p>
              <h2 className="app-hero-plain__card-title">Clear numbers without spreadsheets</h2>
              <ul className="feature-list feature-list--left">
                {app.features.map((feature) => (
                  <li key={feature}>
                    <span className="checkmark" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="support-note">
                Need help? Email <a href={supportEmail}>admin@brightwoodapps.com</a> and we’ll respond quickly.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page page--narrow">
      <section className="app-hero-block">
        <div className="app-hero-bg" aria-hidden="true">
          <DotGrid
            dotSize={10}
            gap={15}
            baseColor="#5227FF"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
          <div className="app-hero-overlay" />
        </div>
        <div className="container content-centered app-hero-content">
          <p className="eyebrow">{app.category}</p>
          <h1>{app.headline}</h1>
          <p className="lede">{app.subhead}</p>
          <div className="hero__actions">
            <a className="btn-primary" href={app.appStoreUrl} target="_blank" rel="noreferrer">
              Download on App Store
            </a>
            <a className="btn-secondary" href={app.privacyUrl}>
              View Privacy Policy
            </a>
            <a className="btn-ghost" href={supportEmail}>
              Contact Support
            </a>
          </div>
          <ul className="feature-list">
            {app.features.map((feature) => (
              <li key={feature}>
                <span className="checkmark" aria-hidden="true">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AppPage;
