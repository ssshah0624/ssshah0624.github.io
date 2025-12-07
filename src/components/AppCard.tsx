import { Link } from 'react-router-dom';
import type { AppMeta } from '../data/apps';

type AppCardProps = {
  app: AppMeta;
};

export function AppCard({ app }: AppCardProps) {
  return (
    <article className="app-card">
      <div className="app-card__eyebrow">{app.category}</div>
      <h3>{app.name}</h3>
      <p>{app.subhead}</p>
      <div className="app-card__actions">
        <Link to={`/apps/${app.slug}`} className="btn-inline">
          View app
        </Link>
        <a className="btn-inline" href={app.privacyUrl}>
          Privacy
        </a>
      </div>
    </article>
  );
}

export default AppCard;
