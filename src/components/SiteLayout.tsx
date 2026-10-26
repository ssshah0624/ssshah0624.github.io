import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import '../styles/site.css';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="bw">
    <a className="bw-skip" href="#main">Skip to content</a>
    <header className="bw-header"><div className="bw-wrap bw-header-inner">
      <Link className="bw-brand" to="/" aria-label="Brightwood Apps home"><span className="bw-mark" aria-hidden="true">b<span>·</span></span>brightwood<span className="bw-brand-apps">apps</span></Link>
      <nav aria-label="Main navigation"><a href="/#apps">Our apps</a><a href="/#about">About</a><Link to="/support">Support <span aria-hidden="true">↗</span></Link></nav>
    </div></header>
    {children}
    <footer className="bw-footer bw-wrap"><Link className="bw-footer-brand" to="/">Brightwood Apps</Link><span>© {new Date().getFullYear()} Brightwood Apps</span><Link to="/support">Get in touch ↗</Link></footer>
  </div>;
}
