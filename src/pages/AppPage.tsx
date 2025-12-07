import { Link, useParams } from 'react-router-dom';
import DotGrid from '../components/DotGrid';
import { getAppBySlug } from '../data/apps';

export function AppPage() {
  const { slug } = useParams();
  const app = slug ? getAppBySlug(slug) : undefined;

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
