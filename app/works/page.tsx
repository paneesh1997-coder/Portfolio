import type { Metadata } from 'next';
import { Eyebrow, Square, WorkRows } from '@/components/portfolio';
import { caseStudies } from '@/lib/case-studies';
export const metadata: Metadata = { title: 'Works — Case studies', description: 'Product design case studies by Aneesh across SaaS, education, and multi-vertical digital experiences.' };
export default function WorksPage() {
  return <main id="main-content"><section className="page-heading shell"><Eyebrow>Selected case studies</Eyebrow><h1>Ideas are a start.<br />Clarity is the work<Square /></h1><p>Projects across product, brand, systems, and digital experience.</p></section><section className="works-collection dark"><div className="shell home-content-shell"><div className="collection-label"><span>{String(caseStudies.length).padStart(2, '0')} case studies</span><span>Product design · UI / UX</span></div><WorkRows /></div></section></main>;
}
