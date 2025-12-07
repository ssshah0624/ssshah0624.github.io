import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export type MenuItem = {
  label: string;
  href: string;
};

type StaggeredMenuProps = {
  items: MenuItem[];
  buttonLabel?: string;
};

const listVariants = {
  open: {
    transition: { staggerChildren: 0.06, delayChildren: 0.02 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 18 } },
  closed: { opacity: 0, y: -10, transition: { duration: 0.15 } },
};

export function StaggeredMenu({ items, buttonLabel = 'Menu' }: StaggeredMenuProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);

  // Close when route changes
  useEffect(() => {
    close();
  }, [location]);

  const renderLink = (item: MenuItem) => {
    const isMail = item.href.startsWith('mailto:');
    const isHash = item.href.startsWith('#') || item.href.includes('#');
    if (isMail || item.href.startsWith('http')) {
      return (
        <a href={item.href} onClick={close}>
          {item.label}
        </a>
      );
    }
    if (isHash) {
      return (
        <a href={item.href} onClick={close}>
          {item.label}
        </a>
      );
    }
    return (
      <Link to={item.href} onClick={close}>
        {item.label}
      </Link>
    );
  };

  return (
    <div className="staggered-menu">
      <button className="menu-toggle" onClick={() => setOpen((prev) => !prev)} aria-expanded={open}>
        <span className="menu-toggle__dot" />
        <span className="menu-toggle__dot" />
        <span className="menu-toggle__dot" />
        <span className="menu-toggle__label">{buttonLabel}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="menu-panel"
            role="menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={listVariants}
          >
            {items.map((item) => (
              <motion.li key={item.label} variants={itemVariants} role="menuitem">
                {renderLink(item)}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default StaggeredMenu;
