'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { portfolio } from '@/lib/portfolio';
import { BrandLogo } from '@/components/brand-logo';
import Link from 'next/link';
export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [{ href: 'Portfolio/', label: 'Home', newTab: false }, { href: 'Portfolio/works', label: 'Works', newTab: false }, { href: 'Portfolio/about', label: 'About', newTab: false }, { href: portfolio.resumeUrl, label: 'Resume', newTab: true }];
  return (
    <header className={`site-header${menuOpen ? ' menu-open' : ''}`}>
      <a className="wordmark" href="/" aria-label="Make It Make Sense — home"><BrandLogo /></a>
      <button className="mobile-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpen((open) => !open)}>
        <span className="mobile-menu-dots" aria-hidden="true"><i /><i /><i /></span>
      </button>
      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} id="primary-navigation" aria-label="Main navigation">
        {links.map(({ href, label, newTab }) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
          return <a key={href} href={href} target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener noreferrer' : undefined} aria-label={newTab ? `${label} (opens in a new tab)` : undefined} className={active ? 'active' : undefined} aria-current={active ? (pathname === href ? 'page' : 'location') : undefined} onClick={() => setMenuOpen(false)}>{active && <span aria-hidden="true">&lt; </span>}{label}{active && <span aria-hidden="true"> &gt;</span>}</a>;
        })}
      </nav>
    </header>
  );
}
