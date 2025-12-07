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
