import { Link } from 'react-router-dom';
import { apps } from '../data/apps';
import StaggeredMenu from './StaggeredMenu';

export function SiteHeader() {
  const primaryItems = [
    { label: 'Studio', href: '/#studio' },
    { label: 'Apps', href: '/#apps' },
    { label: 'Contact', href: 'mailto:admin@brightwoodapps.com' },
  ];

  const exploreItems = apps.map((app) => ({
    label: app.name,
    href: `/apps/${app.slug}`,
  }));

  return (
    <header className="site-header">
      <div className="container header__bar">
        <Link to="/" className="brand">
          Brightwood Apps
        </Link>
        <nav className="header__nav">
          <div className="header__links">
            {primaryItems.map((item) => (
              <Link key={item.label} to={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="header__menu">
            <StaggeredMenu
              buttonLabel="Explore"
              items={[
                ...primaryItems,
                { label: '— Featured apps —', href: '#' },
                ...exploreItems,
              ]}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
