import { Link } from 'react-router-dom';
import { apps } from '../data/apps';
import AppCard from '../components/AppCard';
import PrismBackground from '../components/PrismBackground';

export function HomePage() {
  return (
    <div className="page">
      <PrismBackground>
        <div className="hero__content" id="studio">
          <p className="eyebrow">Mobile product studio</p>
          <h1>
            Building thoughtful mobile apps that solve day-to-day problems for people and teams.
          </h1>
          <p className="lede">
            Strategy, design, engineering, and launch support for iOS. From prototypes to production
            apps, we ship products that feel native from day one.
          </p>
          <div className="hero__actions">
            <Link className="btn-primary" to="/#apps">
              Browse apps
            </Link>
            <a className="btn-secondary" href="mailto:admin@brightwoodapps.com">
              Partner with us
            </a>
          </div>
        </div>
      </PrismBackground>

      <section className="apps-section" id="apps">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Featured portfolio</p>
            <h2>Explore the Brightwood Apps lineup</h2>
            <p className="lede">
              Each app is maintained end-to-end—product strategy, design, engineering, launch, and
              support.
            </p>
          </div>
          <div className="apps-grid">
            {apps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
