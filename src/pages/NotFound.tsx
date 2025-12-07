import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="page page--narrow">
      <div className="container content-centered">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="lede">The page you’re looking for has moved. Let’s get you back to the apps.</p>
        <Link className="btn-primary" to="/#apps">
          Browse apps
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
