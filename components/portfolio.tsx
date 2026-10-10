import { BrandLogo } from '@/components/brand-logo';
import { portfolio, story } from '@/lib/portfolio';
import { caseStudies } from '@/lib/case-studies';
import { CaseStudyVisualFrame } from '@/components/case-study-visual';
import { HighlightsBackground } from '@/components/highlights-background';
import { FlowLink } from '@/components/ui/flow-button';

export function Square() { return <span className="red-square" aria-hidden="true" />; }
export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">&lt;{children}&gt;</p>; }
export function Arrow({ red = false }: { red?: boolean }) { return <img className="arrow-icon" src={`/assets/arrow-${red ? 'red' : 'white'}.svg`} width="17" height="15" alt="" aria-hidden="true" />; }
export function PillLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) { return <FlowLink className={`pill-link${light ? ' pill-light' : ''}`} href={href} arrowTone={light ? 'red' : 'white'}>{children}</FlowLink>; }

export function Story({ standalone = false }: { standalone?: boolean }) {
  return <section className={`story-section shell${standalone ? ' story-standalone' : ' home-content-shell'}`} aria-labelledby="story-title">
    <div className="story-paper">
      <div className="section-heading"><Eyebrow>The honest truth</Eyebrow><h2 id="story-title">Rollercoaster of life<br />made me a designer<Square /></h2></div>
      <div className="ruled-story">{story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      {!standalone && <div className="story-cta"><PillLink href="/about">A little more about me</PillLink></div>}
    </div>
  </section>;
}

export function WorkRows({ excludeSlug }: { excludeSlug?: string } = {}) {
  return <div className="work-rows">
    {caseStudies.filter((work) => work.slug !== excludeSlug).map((work) =>
      <article className="work-row" key={work.slug}>
        <div className="work-meta"><Eyebrow>{work.name}</Eyebrow><p className="work-role">{work.role}</p></div>
        <div className="work-copy"><h3><a href={`/works/${work.slug}`}>{work.title}</a></h3><p>{work.description}</p><a className="text-link case-read-link" href={`/works/${work.slug}`}>Read case study<Arrow /><span className="sr-only">: {work.name}</span></a></div>
        <a href={`/works/${work.slug}`} className="work-image-link" aria-label={`Read the ${work.name} case study`}><CaseStudyVisualFrame visual={work.cardCover ?? work.cover} compact /></a>
      </article>)}
  </div>;
}

export function CaseStudies() {
  return <section className="case-section dark" aria-labelledby="work-title"><div className="shell home-content-shell"><div className="section-heading"><Eyebrow>Case studies</Eyebrow><h2 id="work-title">Problems I lived with,<br className="desktop-break" /> designed for, and learned from<Square /></h2></div><WorkRows /></div></section>;
}

export function HighlightsBanner() {
  return <section className="highlights-banner" aria-labelledby="highlights-title"><HighlightsBackground /><div className="highlights-overlay"><h2 id="highlights-title">Life Highlights<Square /></h2><p>I got an opportunity to interview <span>Krishand RK</span>, an Indian film director and a <span>Product designer</span>.</p><FlowLink className="pill-link" href={portfolio.interviewUrl} target="_blank" rel="noreferrer" arrowTone="white">Watch interview clip</FlowLink></div></section>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-inner"><div className="footer-invitation"><h2>Have anything in mind?</h2><p>Complex ideas, new possibilities, or a good conversation.<br />Let’s make it make sense.</p><PillLink href="/contact" light>Get in touch</PillLink></div><nav className="footer-nav" aria-label="Explore"><a href="/works">Works</a><a href="/about">About</a><a href={portfolio.resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="Resume (opens in a new tab)">Resume</a></nav><div className="footer-socials" aria-label="Social profiles">{portfolio.socials.map((social) => social.url ? <a key={social.name} href={social.url} target="_blank" rel="noreferrer">{social.name} ↗</a> : <span key={social.name}>{social.name}</span>)}</div></div><div className="footer-bottom"><a href="/" aria-label="Make It Make Sense — home"><BrandLogo white /></a><p>© {new Date().getFullYear()} Aneesh</p><a href="#main-content">Back to top ↑</a></div></footer>;
}
