'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { portfolio } from '@/lib/portfolio';
import { BrandLogo } from '@/components/brand-logo';

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home', newTab: false },
    { href: '/works', label: 'Works', newTab: false },
    { href: '/about', label: 'About', newTab: false },
    {
      href: portfolio.resumeUrl,
      label: 'Resume',
      newTab: true,
    },
  ];

  // Remove the GitHub Pages base path when checking active routes.
  const basePath = '/Portfolio';
  const currentPath =
    pathname === basePath
      ? '/'
      : pathname.startsWith(`${basePath}/`)
        ? pathname.slice(basePath.length)
        : pathname;

  return (
    <header className={`site-header${menuOpen ? ' menu-open' : ''}`}>
      <Link
        className="wordmark"
        href="/"
        aria-label="Make It Make Sense — home"
        onClick={() => setMenuOpen(false)}
      >
        <BrandLogo />
      </Link>

      <button
        className="mobile-menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={
          menuOpen ? 'Close navigation menu' : 'Open navigation menu'
        }
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="mobile-menu-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      <nav
        className={`main-nav${menuOpen ? ' is-open' : ''}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {links.map(({ href, label, newTab }) => {
          const active =
            !newTab &&
            (href === '/'
              ? currentPath === '/'
              : currentPath === href ||
                currentPath.startsWith(`${href}/`));

          if (newTab) {
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in a new tab)`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            );
          }

          return (
            <Link
              key={href}
              href={href}
              className={active ? 'active' : undefined}
              aria-current={active ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {active && <span aria-hidden="true">&lt; </span>}
              {label}
              {active && <span aria-hidden="true"> &gt;</span>}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}