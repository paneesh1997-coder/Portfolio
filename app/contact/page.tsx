import type { Metadata } from 'next';
import { Arrow, Eyebrow, Square } from '@/components/portfolio';
import { portfolio } from '@/lib/portfolio';

export const metadata: Metadata = {
  title: 'Get in touch',
  description: 'Have anything in mind? Start a conversation with Aneesh about product design, UI and UX.',
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="contact-layout shell" aria-labelledby="contact-title">
        <div className="contact-intro">
          <Eyebrow>Let’s talk</Eyebrow>
          <h1 id="contact-title">Have anything<br />in mind?<Square /></h1>
          <p>A complex idea, a new possibility,<br />or just a good conversation.</p>
          <p className="contact-signoff">Let’s make it make sense.</p>
          <nav className="contact-socials" aria-label="Find Aneesh online">
            {portfolio.socials.map((social) => (
              <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer">
                {social.name}<span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="contact-paper">
          <Eyebrow>A conversation starts here</Eyebrow>
          <h2>Reach me directly<Square /></h2>
          <p className="contact-card-note">For a project, a collaboration, or a good conversation.</p>
          <div className="contact-channels">
            <a className="contact-channel" href={`mailto:${portfolio.email}`}>
              <span className="contact-channel-copy"><span className="contact-channel-label">Email me</span><span className="contact-channel-value">{portfolio.email}</span></span>
              <span className="contact-channel-arrow" aria-hidden="true"><Arrow red /></span>
            </a>
            <a className="contact-channel" href={portfolio.phoneUrl}>
              <span className="contact-channel-copy"><span className="contact-channel-label">Call me</span><span className="contact-channel-value">{portfolio.phone}</span></span>
              <span className="contact-channel-arrow" aria-hidden="true"><Arrow red /></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
