import type { Metadata } from 'next';
import { CaseStudyPage } from '@/components/case-study-page';
import { caseStudies } from '@/lib/case-studies';
const study = caseStudies.find((item) => item.slug === 'clinsoft')!;
export const metadata: Metadata = { title: 'Clinsoft — Case study', description: study.description };
export default function ClinsoftPage() { return <CaseStudyPage study={study} />; }
