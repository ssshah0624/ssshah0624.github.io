import { useState } from 'react';
import { Link } from 'react-router-dom';
import { apps } from '../data/apps';

const groups = ['All apps', 'Languages', 'Everyday tools', 'Health & family', 'Play'] as const;
const category = (slug: string) => slug.startsWith('learn-') || slug === 'pronounce-english' ? 'Languages' : ['decaf', 'baby-feeding-tracker'].includes(slug) ? 'Health & family' : ['clipit', 'charadas'].includes(slug) ? 'Play' : 'Everyday tools';
const descriptions: Record<string, string> = {
 'pronounce-english': 'Listen, record and practice your pronunciation.',
 'text-back-ai': 'Find the words for your next reply.', 'trip-planner': 'Bring your itinerary and trip plans together.',
 decaf: 'Keep a clearer picture of your daily caffeine.', 'baby-feeding-tracker': 'A little help keeping track of feeding time.',
 recentcontacts: 'Find the people you recently added.', clipit: 'Save and share your pickleball highlights.',
 charadas: 'Actúa, adivina y juega en español.', 'server-tip-tracker': 'Make sense of your tips, shifts and earnings.',
 mealcal: 'Save recipes and plan the week ahead.',
};

export default function HomePage() {
 const [filter, setFilter] = useState<string>('All apps');
 const shown = apps.filter(app => filter === 'All apps' || category(app.slug) === filter);
 return <main tabIndex={-1} id="main">
  <section className="bw-wrap bw-home-hero">
   <div className="bw-home-intro"><p className="bw-eyebrow"><span/> Small tools. Everyday possibilities.</p>
    <h1>A little more ease.<br/><em>Every day.</em></h1>
    <p className="bw-lede">Apps for the things that fill your life. Learning a language, planning a trip, keeping track of a good day’s work.</p>
    <a className="bw-button" href="#apps">Find your next app <span aria-hidden="true">↓</span></a>
    <p className="bw-quiet">Thoughtfully made for your iPhone.</p>
   </div>
   <Link to="/apps/server-tip-tracker" className="bw-feature" aria-label="Explore Server Tip Tracker">
    <div className="bw-feature-top"><span className="bw-eyebrow">In the spotlight</span><span aria-hidden="true">↗</span></div>
    <div className="bw-feature-image"><img src="/assets/images/tip-store-1.jpg" alt="Server Tip Tracker App Store preview showing the earnings calendar" /></div>
    <div className="bw-feature-bottom"><img src="/assets/images/tip-icon.jpg" alt=""/><div><h2>Server Tip Tracker</h2><p>Every shift tells a story.</p></div><span aria-hidden="true">→</span></div>
   </Link>
  </section>
  <section id="apps" className="bw-catalogue bw-wrap" aria-labelledby="apps-title">
   <div className="bw-section-heading"><div><p className="bw-eyebrow">The collection</p><h2 id="apps-title">Something for your everyday.</h2></div><p>Different routines. Different interests.<br/>Find the app that fits yours.</p></div>
   <div className="bw-filters" role="group" aria-label="Filter apps by category">{groups.map(group=><button key={group} aria-pressed={filter===group} onClick={()=>setFilter(group)}>{group}</button>)}</div>
   <p className="bw-sr" aria-live="polite">{shown.length} apps shown</p>
   <div className="bw-app-grid">{shown.map((app)=><Link to={`/apps/${app.slug}`} key={app.slug} className="bw-app-tile">
    <span className="bw-app-category">{category(app.slug)}</span><span className="bw-tile-arrow" aria-hidden="true">↗</span>
    <div className="bw-tile-name"><img src={app.icon} alt="" width="36" height="36" loading="lazy"/><h3>{app.name}</h3></div><p>{descriptions[app.slug] || `Build your ${app.name.replace('Learn ', '').replace(' Fast','')} skills, one lesson at a time.`}</p>
    <span className="bw-tile-bottom">Explore app <span aria-hidden="true">→</span></span>
   </Link>)}</div>
  </section>
  <section id="about" className="bw-about"><div className="bw-wrap bw-about-grid"><p className="bw-eyebrow">Meet Brightwood</p><div><h2>Useful by nature.<br/>Thoughtful by design.</h2><p>We make mobile apps around everyday needs, from a few minutes of language practice to a week of meal planning. Each one starts with a simple question: how could this be a little easier?</p><Link className="bw-text-link" to="/support">Say hello <span aria-hidden="true">↗</span></Link></div></div></section>
 </main>;
}
