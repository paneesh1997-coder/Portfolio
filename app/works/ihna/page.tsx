import type { Metadata } from 'next';
import { CaseStudyPage } from '@/components/case-study-page';
import { caseStudies } from '@/lib/case-studies';

const study = caseStudies.find((item) => item.slug === 'ihna')!;

export const metadata: Metadata = { title: 'IHNA Australia — Case study', description: study.description };

export default function IhnaPage() {
  return <CaseStudyPage study={study} />;
}
