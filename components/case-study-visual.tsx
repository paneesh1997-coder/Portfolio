import type { CaseStudyVisual } from '@/lib/case-studies';

export function CaseStudyVisualFrame({ visual, compact = false }: { visual: CaseStudyVisual; compact?: boolean }) {
  return <img className={`case-real-screen${compact ? ' case-real-screen-compact' : ''}`} src={visual.src} alt={visual.alt} width="1440" height="900" loading="lazy" />;
}
