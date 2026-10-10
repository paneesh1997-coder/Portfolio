import { CaseStudies, HighlightsBanner, Story } from '@/components/portfolio';
import { TypingRoles } from '@/components/typing-roles';

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero" aria-labelledby="hero-title">
        <p className="introduction">Hi there, I am Aneesh! <TypingRoles /></p>
        <h1 id="hero-title">Make It Make Sense<span className="red-square" aria-hidden="true" /></h1>
        <p className="hero-description">A personal design space where complex ideas become clear, useful digital experiences.</p>
        <img className="hero-portrait" src="/assets/aneesh-portrait.png" alt="Black and white portrait of Aneesh standing with his arms crossed." width="618" height="878" fetchPriority="high" />
      </section>
      <Story />
      <CaseStudies />
      <HighlightsBanner />
    </main>
  );
}
