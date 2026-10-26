import { useEffect, useRef } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import AppPage from './pages/AppPage';
import HomePage from './pages/Home';
import TipTracker from './pages/TipTracker';
import NotFoundPage from './pages/NotFound';
import SupportPage from './pages/Support';
import SiteLayout from './components/SiteLayout';
import { getAppBySlug } from './data/apps';

function UnavailableApp() {
  return <main tabIndex={-1} id="main" className="bw-wrap bw-unavailable"><p className="bw-eyebrow">Brightwood Apps</p><h1>This app page is no longer available.</h1><p>Explore the current Brightwood collection below.</p><Link to="/#apps" className="bw-button">Browse apps →</Link></main>;
}

export default function App() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);
  const removed = /^\/apps\/(heardwell|call-gpt)(?:\/.*)?$/.test(pathname);
  const app = getAppBySlug(pathname.split('/')[2] || '');
  useEffect(() => {
    document.title = app ? `${app.name} — Brightwood Apps` : pathname.startsWith('/support') ? 'Support — Brightwood Apps' : 'Brightwood Apps | Crafted mobile apps';
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', app?.subhead || 'Thoughtful mobile apps for language learning, planning, everyday routines and play. Explore Brightwood Apps.');
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(hash === '#studio' ? 'about' : hash.slice(1))?.scrollIntoView();
      else window.scrollTo(0, 0);
      if (previousPath.current !== pathname && !hash) {
        const main = document.getElementById('main');
        main?.setAttribute('tabindex', '-1');
        main?.focus({ preventScroll: true });
      }
      previousPath.current = pathname;
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, app]);
  return <SiteLayout>{removed ? <UnavailableApp /> : <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/index.html" element={<HomePage />} />
    <Route path="/apps/server-tip-tracker" element={<TipTracker />} />
    <Route path="/apps/server-tip-tracker/server-tip-tracker.html" element={<TipTracker />} />
    <Route path="/apps/:slug/:legacy" element={<AppPage />} />
    <Route path="/apps/:slug" element={<AppPage />} />
    <Route path="/support" element={<SupportPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>}</SiteLayout>;
}
