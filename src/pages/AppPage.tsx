import { Link, useParams } from 'react-router-dom';
import { apps, getAppBySlug } from '../data/apps';
import NotFoundPage from './NotFound';

const lines = (text: string) => text.split('\n').map((line, index) => index ? <em key={line}><br />{line}</em> : line);

export default function AppPage() {
  const { slug, legacy } = useParams();
  const app = slug ? getAppBySlug(slug) : undefined;
  if (!app || (legacy && legacy !== `${slug}.html`)) return <NotFoundPage />;
  const es = app.slug === 'charadas';
  const related = apps.filter(other => other.slug !== app.slug && other.category === app.category).slice(0, 2);
  const download = es ? 'Ver en el App Store' : 'View on the App Store';
  const purchase = es ? 'Descarga de pago · Consulta el precio local' : app.purchase;
  return <main tabIndex={-1} id="main" lang={es ? 'es' : 'en'}>
    <div className="bw-wrap"><Link className="bw-breadcrumb" to="/#apps">← {es ? 'Todas las apps' : 'All apps'}</Link></div>
    <section className="bw-wrap bw-tip-hero bw-product-hero">
      <div>
        <div className="bw-app-identity"><img src={app.icon} alt="" width="48" height="48" /><span>{app.name}</span></div>
        <p className="bw-eyebrow">{app.category}</p>
        <h1>{lines(app.headline)}</h1>
        <p className="bw-lede">{app.subhead}</p>
        <a className="bw-button" href={app.appStoreUrl}>{download} <span aria-hidden="true">↗</span></a>
        <p className="bw-quiet">{purchase}</p>
        {app.storeName !== app.name && <p className="bw-store-name">{es ? 'En el App Store:' : 'On the App Store:'} {app.storeName}</p>}
      </div>
      <figure className="bw-product-visual">
        <img src={app.screenshots[0]} alt={es ? 'Vista oficial de Charadas en el App Store' : `Official App Store preview of ${app.name}`} fetchPriority="high" />
        <figcaption>{es ? 'Vista oficial del App Store' : 'Official App Store preview'}</figcaption>
      </figure>
    </section>
    <dl className="bw-wrap bw-facts bw-product-facts">
      <div><dt>{es ? 'Disponible para' : 'Made for'}</dt><dd>{app.platform}</dd></div>
      <div><dt>{es ? 'Requiere' : 'Requires'}</dt><dd>iOS {app.minimumOs} {es ? 'o posterior' : 'or later'}</dd></div>
      <div><dt>{es ? 'Para empezar' : 'At a glance'}</dt><dd>{app.features[0]}</dd></div>
      <div><dt>{es ? 'También incluye' : 'Also inside'}</dt><dd>{app.features[1]}</dd></div>
    </dl>
    <section className="bw-wrap bw-workflow">
      <div><p className="bw-eyebrow">{es ? 'Así funciona' : 'How it works'}</p><h2>{es ? 'Empieza por aquí.' : 'A simple place\nto start.'.split('\n').map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h2><p>{app.features[2]}</p></div>
      <ol>{app.workflow.map((step, index) => <li key={step.title}><span className="bw-step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}</ol>
    </section>
    <section className="bw-insight"><div className="bw-wrap bw-insight-grid">
      <figure className="bw-product-detail"><img src={app.screenshots[1]} loading="lazy" alt={es ? 'Otra vista oficial de Charadas' : `A second official App Store view of ${app.name}`} /><figcaption>{es ? 'Imágenes oficiales del App Store' : 'Official App Store imagery'}</figcaption></figure>
      <div><p className="bw-eyebrow">{app.name}</p><h2>{lines(app.insightTitle)}</h2><p>{app.insightBody}</p>{app.note && <p className="bw-note">{app.note}</p>}</div>
    </div></section>
    <section className="bw-wrap bw-faq"><div><p className="bw-eyebrow">{es ? 'Antes de empezar' : 'Good to know'}</p><h2>{es ? 'Unos detalles útiles.' : 'A few practical details.'}</h2></div><div>
      <details><summary>{es ? '¿Dónde veo el precio?' : 'What does it cost?'}</summary><p>{purchase}. {es ? 'El App Store muestra el precio de tu región antes de la compra.' : 'The App Store and the app show current options and local pricing before purchase.'}</p></details>
      <details><summary>{es ? '¿Dónde puedo pedir ayuda?' : 'Where can I get help?'}</summary><p>{es ? 'Escríbenos a' : 'Email'} <a href={`mailto:${app.supportEmail}?subject=${encodeURIComponent(app.name)}`}>{app.supportEmail}</a> {es ? 'con el nombre de la app y una descripción del problema.' : 'with the app name and a description of the issue.'}</p></details>
    </div></section>
    {related.length > 0 && <section className="bw-wrap bw-related"><p className="bw-eyebrow">More to explore</p><div className="bw-related-grid">{related.map(other => <Link to={`/apps/${other.slug}`} key={other.slug}><img src={other.icon} alt="" width="44" height="44" loading="lazy" /><span>{other.name}</span><span aria-hidden="true">→</span></Link>)}</div></section>}
    <section className="bw-wrap bw-final-cta"><p className="bw-eyebrow">{app.name}</p><h2>{es ? '¿Listos para jugar?' : 'Make it part of\nyour everyday.'.split('\n').map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h2><a className="bw-button bw-button-light" href={app.appStoreUrl}>{download} ↗</a><p>{purchase}</p></section>
    <div className="bw-wrap bw-legal"><a href={app.privacyUrl}>{es ? 'Privacidad' : 'Privacy policy'}</a><a href={app.termsUrl}>{es ? 'Condiciones de uso' : 'Terms of use'}</a><Link to="/support">{es ? 'Ayuda' : 'Support'}</Link></div>
  </main>;
}
