import { Arrow, Eyebrow, Square, WorkRows } from '@/components/portfolio';
import { CaseStudyVisualFrame } from '@/components/case-study-visual';
import { type CaseStudy, type CaseStudySection } from '@/lib/case-studies';
import { FlowLink } from '@/components/ui/flow-button';

function ChapterHeading({ number, section }: { number: string; section: CaseStudySection }) {
  return (
    <header className="case-chapter-heading">
      <Eyebrow>{number} / {section.eyebrow}</Eyebrow>
      <h2>{section.title}<Square /></h2>
    </header>
  );
}

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <main id="main-content" className="case-study-page">
      <header className="project-heading shell">
        <a className="text-link back-link" href="/works"><img className="arrow-icon back-arrow" src="./assets/arrow-red.svg" width="17" height="15" alt="" aria-hidden="true" /><span>All case studies</span></a>
        <Eyebrow>{study.name} · Product design case study</Eyebrow>
        <h1>{study.title}<Square /></h1>
        <p>{study.summary}</p>
        <div className="case-meta-panel">
          <dl className="case-meta">
            <div><dt>My role</dt><dd>{study.role}</dd></div>
            <div><dt>Industry</dt><dd>{study.sector}</dd></div>
            <div><dt>Scope</dt><dd>{study.scope}</dd></div>
            <div><dt>Project</dt><dd>{study.client}<br />{study.date}</dd></div>
          </dl>
          <FlowLink className="text-link case-live-link" href={study.liveUrl} target="_blank" rel="noreferrer">Visit live project</FlowLink>
        </div>
      </header>

      <figure className="case-cover shell">
        <CaseStudyVisualFrame visual={study.cover} />
      </figure>

      <nav className="case-contents shell" aria-label="Case study chapters">
        <span>In this case study</span>
        <ol>
          {study.sections.map((section, index) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {section.eyebrow}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {study.sections.map((section, index) => (
        <section className={`case-story-section${index % 2 ? ' dark' : ''}`} id={section.id} key={section.id}>
          <div className="shell case-story-grid">
            <ChapterHeading number={String(index + 1).padStart(2, '0')} section={section} />
            <div className="case-body">
              {section.quote && <blockquote className="case-source-quote">{section.quote}</blockquote>}
              {section.paragraphs?.map((text) => <p key={text}>{text}</p>)}
              {section.points && (
                <div className="case-source-points">
                  {section.points.map((point) => (
                    <article key={point.title}>
                      <h3>{point.title}</h3>
                      <p>{point.text}</p>
                    </article>
                  ))}
                </div>
              )}
              {section.visuals && (
                <div className={`case-source-visuals case-source-visuals-${Math.min(section.visuals.length, 3)}`}>
                  {section.visuals.map((visual) => (
                    <figure className={`case-visual-${visual.id}`} key={visual.id}>
                      <CaseStudyVisualFrame visual={visual} />
                      {visual.caption && <figcaption>{visual.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="case-more case-section dark" aria-labelledby="more-case-studies-title">
        <div className="shell home-content-shell">
          <div className="section-heading"><Eyebrow>More work</Eyebrow><h2 id="more-case-studies-title">More case studies<Square /></h2></div>
          <WorkRows excludeSlug={study.slug} />
          <a className="text-link case-more-all" href="/works">View all case studies<Arrow /></a>
        </div>
      </section>
    </main>
  );
}
