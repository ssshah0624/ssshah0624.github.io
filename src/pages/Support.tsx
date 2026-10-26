import { Link } from 'react-router-dom';
import { apps } from '../data/apps';

export default function SupportPage() {
  return <main tabIndex={-1} id="main" className="bw-wrap bw-support">
    <p className="bw-eyebrow">Brightwood Apps support</p>
    <h1>A little help,<br /><em>when you need it.</em></h1>
    <p className="bw-lede">A question, an idea, or something not working as expected? Send us a note.</p>
    <a className="bw-button" href="mailto:admin@brightwoodapps.com?subject=Brightwood%20Apps%20support">Email support ↗</a>
    <p className="bw-quiet"><a href="mailto:admin@brightwoodapps.com">admin@brightwoodapps.com</a></p>
    <div className="bw-support-details"><div><h2>Help us help you.</h2><p>Include the app name, your device and iOS version, and a short description of what happened. Please leave out passwords and sensitive personal information.</p></div><div><h2>Looking for an app?</h2><p>Each app page has its download link, privacy policy and purchase details.</p><Link className="bw-text-link" to="/#apps">Browse all apps →</Link></div></div>
    <section className="bw-support-apps" aria-labelledby="support-apps"><h2 id="support-apps">Find your app</h2><div>{apps.map(app => <Link to={`/apps/${app.slug}`} key={app.slug}>{app.name} <span aria-hidden="true">↗</span></Link>)}</div></section>
  </main>;
}
