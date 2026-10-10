import type { Metadata } from 'next';
import { CaseStudyPage } from '@/components/case-study-page';
import { caseStudies } from '@/lib/case-studies';

const study = caseStudies.find((item) => item.slug === 'metaveo')!;

export const metadata: Metadata = { title: 'Metaveo — Case study', description: study.description };

export default function MetaveoPage() {
  return <CaseStudyPage study={study} />;
}
