import { Link } from 'react-router-dom';
export default function NotFoundPage() {
  return <main tabIndex={-1} id="main" className="bw-wrap bw-unavailable"><p className="bw-eyebrow">404 · Page not found</p><h1>Nothing growing<br />here just yet.</h1><p>We couldn’t find that page. Explore the current Brightwood collection.</p><Link className="bw-button" to="/#apps">Browse apps →</Link></main>;
}
