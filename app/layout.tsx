import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/portfolio';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://aneesh-make-it-make-sense.hcigroup-1491.chatgpt.site'),
  title: { default: 'Aneesh — Make It Make Sense', template: '%s — Aneesh' },
  description: 'Aneesh’s personal design space. A UI/UX and product designer turning complex ideas into clear, useful digital experiences.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
