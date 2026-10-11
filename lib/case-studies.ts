export type CaseStudyVisual = {
  id: string;
  label: string;
  src: string;
  alt: string;
  caption?: string;
};

type Point = { title: string; text: string };

export type CaseStudySection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs?: string[];
  points?: Point[];
  quote?: string;
  visuals?: CaseStudyVisual[];
};

export type CaseStudy = {
  slug: string;
  name: string;
  title: string;
  description: string;
  sector: string;
  role: string;
  scope: string;
  date: string;
  client: string;
  liveUrl: string;
  summary: string;
  cover: CaseStudyVisual;
  cardCover?: CaseStudyVisual;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'clinsoft',
    name: 'Clinsoft',
    title: 'Clinsoft: From Internal Tool to Market Product',
    description: 'Transforming a powerful internal clinical placement tool into a polished, public-facing SaaS product for Australian RTOs and VET providers.',
    sector: 'Education technology / SaaS',
    role: 'Brand Identity · App Design',
    scope: 'Product design · Brand system · Launch experience',
    date: 'Sep 2025',
    client: 'Clinsoft',
    liveUrl: 'https://www.clinsoft.ai',
    summary: 'Clinsoft did not start as a startup idea; it started as a necessity. It was a powerful custom software built internally for IHNA and IHM to manage complex student clinical placements. It worked brilliantly for us, but it was a kept secret.',
    cover: {
      id: 'clinsoft-cover',
      label: 'Clinsoft mobile interface system',
      src: './assets/case-studies/clinsoft/mobile-system.webp',
      alt: 'A wide collection of Clinsoft mobile application screens.',
    },
    cardCover: { id: 'clinsoft-card-cover', label: 'Clinsoft mobile interface system', src: './assets/case-studies/clinsoft/mobile-system.webp', alt: 'A wide collection of Clinsoft mobile application screens.' },
    sections: [
      {
        id: 'context', eyebrow: 'The context', title: 'The origin story',
        paragraphs: ['Clinsoft did not start as a startup idea; it started as a necessity. It was a powerful custom software built internally for IHNA (Institute of Health & Nursing Australia) and IHM to manage complex student clinical placements. It worked brilliantly for us, but it was a kept secret.'],
        points: [
          { title: 'The Pivot', text: 'We realized that if this solved our pain points as a major Australian education provider, it would solve them for everyone else.' },
          { title: 'The Goal', text: 'Transform this functional internal tool into Clinsoft.ai, a polished, public-facing SaaS product tailored specifically for RTOs (Registered Training Organisations) and VETs across Australia.' },
        ],
        visuals: [{ id: 'clinsoft-logo', label: 'Clinsoft identity', src: './assets/case-studies/clinsoft/logo.webp', alt: 'The Clinsoft logo on a dark gradient background.' }],
      },
      {
        id: 'understanding', eyebrow: 'Understanding the user', title: 'Close the UX gap',
        quote: 'Internal tools have a luxury public products do not: they do not need to sell themselves. Users are forced to use them.',
        paragraphs: ['To take Clinsoft public, I faced two massive hurdles:'],
        points: [
          { title: 'The UX Gap', text: 'The existing interface was utilitarian. It lacked the intuitive flow and aesthetic polish required for a competitive SaaS market where user experience is a buying factor.' },
          { title: 'The Identity Void', text: 'We had no public brand. No compelling logo, no landing page, and no voice. We were entering a market with zero momentum.' },
        ],
        visuals: [{ id: 'clinsoft-website', label: 'Clinsoft marketing website system', src: './assets/case-studies/clinsoft/website.webp', alt: 'A collage of Clinsoft marketing website pages and product features.' }],
      },
      {
        id: 'architecture', eyebrow: 'Information architecture', title: 'Designing the launch',
        quote: 'My role expanded beyond the screen. I was not just designing the product; I was designing the launch.',
        points: [
          { title: 'Phase 1: The Brand Facelift & Governance', text: 'I started by revamping the logo and, critically, defining the entire brand identity. The new identity needed to bridge two worlds: Clinical Precision (Medical/Health) and Software Simplicity (Tech). I designed and documented the comprehensive brand guidelines to ensure consistency across all future touchpoints. The outcome was a modern, trustworthy visual identity that anchors the new website and mobile app.' },
          { title: 'Phase 2: The Pilot Campaign (Australia-Wide)', text: 'We could not just turn the lights on and hope people showed up. I spearheaded the marketing collateral for the November Pilot Launch, targeting RTOs nationwide. I crafted the content and visuals for targeted email campaigns and designed high-conversion social media assets and a dedicated landing page optimized to capture leads.' },
        ],
        visuals: [
          { id: 'clinsoft-brand-poster', label: 'Clinsoft brand expression', src: './assets/case-studies/clinsoft/brand-poster.webp', alt: 'Clinsoft brand poster reading One App. Total Control.' },
          { id: 'clinsoft-brand-poster-blue', label: 'Clinsoft placement proposition', src: './assets/case-studies/clinsoft/brand-poster-blue.webp', alt: 'Blue Clinsoft campaign poster about placement management.' },
        ],
      },
      {
        id: 'process', eyebrow: 'The design process', title: 'A connected product ecosystem',
        quote: 'We did not just launch a website; we launched an ecosystem.',
        paragraphs: ['I redesigned the core platform to focus on the user journeys of RTO administrators and students.', 'The public-facing website (clinsoft.ai) was designed to convert.'],
        points: [
          { title: 'Dashboard Redesign', text: 'Transformed complex data tables into visual dashboards, allowing RTO managers to see placement statuses at a glance.' },
          { title: 'Mobile Experience', text: 'Designed a companion mobile app for students to log hours and check schedules on the go, critical for nursing students who are rarely at a desk.' },
          { title: 'Storytelling', text: 'Instead of listing features, I structured the site to address specific Australian RTO pain points: Compliance, Placement Tracking, and AHPRA requirements.' },
          { title: 'Trust Signals', text: 'Integrated testimonials and Built by Educators messaging to leverage our IHNA heritage.' },
        ],
        visuals: [
          { id: 'clinsoft-mobile-feature', label: 'Clinsoft student mobile experience', src: './assets/case-studies/clinsoft/mobile-feature.webp', alt: 'A Clinsoft mobile dashboard displayed on a phone held in one hand.' },
          { id: 'clinsoft-mobile-system', label: 'Clinsoft project visual', src: './assets/case-studies/clinsoft/cover.webp', alt: 'A woman smiling during a video call, shown in a Clinsoft product mockup.' },
        ],
      },
      {
        id: 'outcome', eyebrow: 'Outcome', title: 'From infrastructure to market contender',
        paragraphs: ['Clinsoft was a lesson in Full-Stack Design. By handling both the core product UX and the marketing strategy, I ensured that the promise we made in our marketing was exactly what we delivered in the product. We successfully took a piece of internal infrastructure and turned it into a market contender for the Australian education sector.'],
      },
    ],
  },
  {
    slug: 'ihna', name: 'IHNA Australia',
    title: 'Digital Ecosystem Transformation: A Strategic Redesign for IHNA',
    description: 'Transforming a legacy education website into a scalable, user-centered student recruitment ecosystem.',
    sector: 'Healthcare education', role: 'Website Redesign · Design System',
    scope: 'UX strategy · Information architecture · Design system',
    date: 'Mar 2025', client: 'IHNA Australia', liveUrl: 'https://uat.hci.edu.au',
    summary: "The Institute of Health and Nursing Australia stands as one of Australia's premier providers of nursing and healthcare education. Its academic reputation was top-tier, but its digital presence lagged significantly behind modern standards.",
    cover: { id: 'ihna-cover', label: 'IHNA Australia project cover', src: './assets/case-studies/ihna/ihna-banner-v2.png', alt: 'Collage of IHNA website pages featuring course information, student profiles, and career content.' },
    cardCover: { id: 'ihna-card-cover', label: 'IHNA modular interface', src: './assets/case-studies/ihna/system-c.webp', alt: 'A laptop displaying the IHNA Australia website experience.' },
    sections: [
      {
        id: 'context', eyebrow: 'The context', title: 'A respected institution with a legacy website',
        paragraphs: ["The Institute of Health and Nursing Australia (IHNA) stands as one of Australia's premier providers of nursing and healthcare education. With a mandate to shape the careers of thousands of students annually, they play a critical role in supplying the national healthcare workforce with qualified professionals.", 'While their academic reputation was top-tier, their digital presence lagged significantly behind modern standards. The existing website suffered from systemic issues that hindered student acquisition.'],
        points: [
          { title: 'Information Overload', text: 'Prospective students struggled to find specific course details amidst a sea of unstructured content. Critical information was often buried within dense text blocks or detached PDFs, creating a high cognitive load.' },
          { title: 'Fragmented Branding', text: 'Over years of rapid campus expansion and program additions, the visual identity had become inconsistent. Disparate portals and landing pages used varying fonts, colors, and layouts, eroding brand trust and recognition.' },
          { title: 'Navigation Friction', text: 'The user pathway to Apply was convoluted and non-linear. This friction in the conversion funnel led to measurable drop-offs, as interested applicants abandoned the process due to complexity.' },
          { title: 'The Mission', text: 'The objective was twofold: to completely redesign the core website for immediate usability improvements and to build a robust, modular Design System to future-proof the brand and streamline subsequent digital development.' },
        ],
        visuals: [{ id: 'ihna-previous-design', label: 'IHNA Australia previous website design', src: './assets/case-studies/ihna/previous-design.png', alt: 'Previous IHNA Australia website, shown as a long page collage of its homepage, course listings, student features, and footer.', caption: 'Previous design' }],
      },
      {
        id: 'understanding', eyebrow: 'Understanding the user', title: 'Two audiences, two sets of needs',
        quote: 'We moved beyond assumptions to ground our design strategy in empirical data. Through extensive user surveys, stakeholder interviews, and a rigorous competitive analysis of other TAFEs and RTOs, clear behavioral patterns emerged.',
        points: [
          { title: 'Key Insight 1: The Two-Audience Dilemma', text: 'Domestic and International students possess vastly different informational needs. International students prioritize CRICOS codes, visa compliance, and English language requirements, whereas domestic students focus on VET Student Loans and local campus proximity. The legacy site conflated these datasets. We needed a mechanism to segment the experience instantaneously without managing two separate websites.' },
          { title: 'Key Insight 2: The Course vs. Career Gap', text: 'Students are not merely shopping for courses or qualifications; they are investing in career outcomes. Users search based on their ambition rather than the specific academic title. The search functionality and content hierarchy needed to bridge academic offerings and industry job roles.' },
        ],
        visuals: [{ id: 'ihna-student-story', label: 'IHNA student experience', src: './assets/case-studies/ihna/student-story.webp', alt: 'Two students sitting together against an orange wall.' }],
      },
      {
        id: 'architecture', eyebrow: 'Information architecture', title: 'Rules for the digital ecosystem',
        quote: 'Before creating individual page layouts, I established the governing rules for the digital ecosystem.',
        points: [
          { title: 'The Design System', text: 'To resolve the fragmented branding issue, I established a centralized, atomic Design System. I standardized interface components from buttons and form fields to navigation bars and card layouts, and re-engineered the color palette and typography hierarchy to adhere to WCAG contrast ratios.' },
          { title: 'Information Architecture', text: 'I completely overhauled the sitemap, moving from an organization-centric structure to a user-centric one, significantly reducing the click-depth required to reach a Course Detail page.' },
          { title: 'Banner Navigation', text: 'We elevated the primary navigation by moving course categories directly into the hero banner. By placing this interaction above the fold, we aligned the interface with the primary user goal: finding a course.' },
        ],
        visuals: [
          { id: 'ihna-system-a', label: 'IHNA design system direction', src: './assets/case-studies/ihna/system-a.webp', alt: 'IHNA digital experience design visual.' },
          { id: 'ihna-system-b', label: 'IHNA website experience', src: './assets/case-studies/ihna/system-b.webp', alt: 'IHNA website design visual.' },
          { id: 'ihna-system-c', label: 'IHNA modular interface', src: './assets/case-studies/ihna/system-c.webp', alt: 'IHNA modular website interface screens.' },
        ],
      },
      {
        id: 'process', eyebrow: 'The design process', title: 'Functional intelligence over decoration',
        quote: 'The final design prioritized functional intelligence over purely aesthetic upgrades. Based on the specific objectives defined during the research phase, we implemented high-impact features designed to reduce friction.',
        visuals: [{ id: 'ihna-experience', label: 'IHNA experience direction', src: './assets/case-studies/ihna/experience.avif', alt: 'An editorial interior image used in the IHNA experience direction.' }],
      },
      {
        id: 'outcome', eyebrow: 'Outcome', title: 'A student recruitment engine',
        paragraphs: ["The redesign successfully transformed IHNA's digital face from a static, legacy repository into a dynamic, user-centered student recruitment engine."],
        points: [
          { title: 'Brand Cohesion', text: 'The new Design System created a single source of truth for the brand, streamlining internal development workflows and helping future pages launch faster with visual consistency.' },
          { title: 'Enhanced Usability', text: 'The Audience Toggle and Floating Tabs directly addressed navigation difficulty. Qualitative feedback indicated less information clutter and improved time-on-task for course discovery.' },
          { title: 'Future-Ready Scalability', text: 'The modular architecture can accommodate new course verticals, campus locations, and regulatory requirements without a foundational rebuild or a broken user experience.' },
        ],
      },
    ],
  },
  {
    slug: 'metaveo', name: 'Metaveo',
    title: 'Metaveo: Architecting a Digital Ecosystem for a Multi-Vertical Agency',
    description: 'Creating one coherent digital ecosystem for an agency spanning productions, automations, and technologies.',
    sector: 'Design and technology agency', role: 'Website Design · User experience',
    scope: 'UX architecture · Web design · Multi-vertical brand system',
    date: 'Nov 2025', client: 'Metaveo', liveUrl: 'https://www.metaveo.ai',
    summary: 'Metaveo is a newly established, forward-thinking design and marketing agency deliberately structured around three distinct, specialized business verticals: Productions, Automations, and Technologies.',
    cover: { id: 'metaveo-cover', label: 'Metaveo project cover', src: './assets/case-studies/metaveo/metaveo-hands.png', alt: 'Two glossy black hands reach toward each other in front of the word Metaveo.' },
    cardCover: { id: 'metaveo-card-cover', label: 'Metaveo website system', src: './assets/case-studies/metaveo/system-c.webp', alt: 'A large Metaveo website system presentation.' },
    sections: [
      {
        id: 'context', eyebrow: 'The context', title: 'Three specialist wings, one agency',
        paragraphs: ['Metaveo is a newly established, forward-thinking design and marketing agency. From its inception, the company was deliberately structured around three distinct, specialized business verticals.', 'As a new market entrant, Metaveo lacked a pre-existing digital footprint. The challenge was to launch a debut website that immediately communicated the breadth and sophistication of this multi-vertical offering without inducing cognitive overload in early adopters.', 'The objective was to architect and deploy a foundational digital ecosystem capable of successfully housing three distinct business wings under a single domain, establishing immediate brand authority from Day One.'],
        points: [
          { title: 'Productions', text: 'Creative content and media services.' },
          { title: 'Automations', text: 'AI-driven workflow solutions.' },
          { title: 'Technologies', text: 'Custom software development, serving as the incubator for the flagship SaaS product, Clinsoft.' },
        ],
        visuals: [
          { id: 'metaveo-vertical-a', label: 'Metaveo Productions visual language', src: './assets/case-studies/metaveo/vertical-a.webp', alt: 'Metaveo Productions visual direction.' },
          { id: 'metaveo-vertical-b', label: 'Metaveo Automations visual language', src: './assets/case-studies/metaveo/vertical-b.webp', alt: 'Metaveo Automations visual direction.' },
          { id: 'metaveo-vertical-c', label: 'Metaveo Technologies visual language', src: './assets/case-studies/metaveo/vertical-c.webp', alt: 'Metaveo Technologies visual direction.' },
        ],
      },
      {
        id: 'understanding', eyebrow: 'Understanding the user', title: 'A hub-and-spoke experience',
        quote: 'Supporting this complex service matrix necessitated the engineering of a Hub and Spoke information architecture. A standard, singular homepage would dilute the specific messaging required for each vertical.',
        paragraphs: ['The website was meticulously designed to function as three distinct user experiences seamlessly unified by a central brand gateway.'],
        points: [
          { title: 'The Gateway', text: 'This central entry point was designed to articulate the parent brand ethos and immediately segment users based on their identified intent or need.' },
          { title: 'The Ecosystem', text: 'Dedicated landing page structures were designed for each operational wing. A user exploring Automations entered a self-contained, tailored environment, free from the distraction of irrelevant Production content.' },
        ],
      },
      {
        id: 'architecture', eyebrow: 'Information architecture', title: 'Unified at the core, distinct in expression',
        paragraphs: ['The visual strategy required careful consideration to balance a unified corporate identity with the essential need for vertical differentiation.'],
        points: [
          { title: 'Unified Core', text: 'A global design system established typography, grid systems, and interaction patterns. While content varied dramatically, the core Metaveo brand identity remained consistent across the domain.' },
          { title: 'Distinct Accents', text: 'Unique hero imagery styles and specific accent color palettes provided immediate visual context, signaling precisely which specialized wing the user was navigating.' },
        ],
        quote: "The Flagship Integration: A critical component of the Technologies wing involved promoting Clinsoft, the agency's first proprietary SaaS product. I engineered the flow to transition interested investors and users from Metaveo Technologies into the dedicated Clinsoft product funnel.",
        visuals: [
          { id: 'metaveo-system-a', label: 'Metaveo visual system', src: './assets/case-studies/metaveo/system-a.webp', alt: 'Metaveo digital ecosystem visual.' },
          { id: 'metaveo-system-b', label: 'Metaveo brand system', src: './assets/case-studies/metaveo/system-b.webp', alt: 'Metaveo brand and website system visual.' },
          { id: 'metaveo-system-c', label: 'Metaveo website system', src: './assets/case-studies/metaveo/system-c.webp', alt: 'A large Metaveo website system presentation.' },
        ],
      },
      {
        id: 'process', eyebrow: 'The design process', title: 'Designing for three motivations',
        paragraphs: ['The foundational design was rooted in a methodical analysis of competitor multi-vertical agencies and a deep understanding of core user motivations. This analysis determined the necessity of the Tri-brid structure.'],
        points: [
          { title: 'The Creative Director (Productions)', text: 'Primary focus is placed on visual portfolio, demonstrable case studies, and emotional connection to the brand.' },
          { title: 'The Operations Manager (Automations)', text: 'Priorities include efficiency metrics, quantifiable Return on Investment, and integration capabilities with existing systems.' },
          { title: 'The Technology Head (Technologies)', text: 'Focus is directed toward technical architecture, demonstrated developer expertise, and security protocols.' },
          { title: 'Design Rationale for Segmentation', text: 'Each wing received a custom landing page with specialized content and Calls-to-Action relevant only to that vertical. The structure also enabled each wing to rank for highly specific, high-intent keywords instead of competing with generic digital agency terms.' },
        ],
        quote: 'A unified, high-level approach would be inadequate for satisfying the specific, deep informational requirements of any single persona.',
      },
    ],
  },
];
