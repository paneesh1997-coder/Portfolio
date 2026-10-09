export type PlaygroundItem = {
  title: string;
  description: string;
  category: 'Logo' | 'Creative' | 'Photography';
  src: string;
  alt: string;
};

export const playgroundItems: PlaygroundItem[] = [
  { title: 'Clinsoft Identity', description: 'A simple product mark built to make clinical education software feel clear and dependable.', category: 'Logo', src: '/assets/case-studies/clinsoft/logo.webp', alt: 'Clinsoft logo exploration.' },
  { title: 'Care in Motion', description: 'A warm campaign image connecting student ambition with hands-on healthcare learning.', category: 'Photography', src: '/assets/case-studies/clinsoft/cover.webp', alt: 'A woman smiling toward a phone camera.' },
  { title: 'Blue System', description: 'A bold visual direction for Clinsoft built around clarity, contrast, and modular product stories.', category: 'Creative', src: '/assets/case-studies/clinsoft/brand-poster-blue.webp', alt: 'Blue Clinsoft brand poster.' },
  { title: 'Clinsoft Poster', description: 'An editorial brand composition that brings the product idea into a more human setting.', category: 'Creative', src: '/assets/case-studies/clinsoft/brand-poster.webp', alt: 'Clinsoft editorial brand poster.' },
  { title: 'Learning Together', description: 'A candid student moment used to make the IHNA experience feel approachable and real.', category: 'Photography', src: '/assets/case-studies/ihna/student-story.webp', alt: 'Two students sitting together against an orange wall.' },
  { title: 'IHNA Mark', description: 'A focused identity moment for a healthcare education brand with a long institutional history.', category: 'Logo', src: '/assets/case-studies/ihna/brand.webp', alt: 'IHNA Australia identity on a dark green field.' },
  { title: 'Student Life', description: 'A relaxed photograph chosen to express belonging beyond the classroom.', category: 'Photography', src: '/assets/case-studies/ihna/cover.webp', alt: 'A group of students relaxing together.' },
  { title: 'Editorial Space', description: 'Architecture and atmosphere used as a quieter visual counterpoint in the learning journey.', category: 'Photography', src: '/assets/case-studies/ihna/experience.avif', alt: 'Editorial photograph of an interior space.' },
  { title: 'Mineral Form', description: 'An image-led exploration of material, texture, and industrial precision.', category: 'Creative', src: '/assets/case-studies/maxworth/mineral-visual.webp', alt: 'Mineral-inspired visual made for Maxworth Minerals.' },
  { title: 'Sustainability', description: 'An aerial landscape expressing scale, responsibility, and the source of natural materials.', category: 'Photography', src: '/assets/case-studies/maxworth/forest.webp', alt: 'Aerial photograph of a dense green forest.' },
  { title: 'Metaveo Productions', description: 'A cinematic art direction for the creative-production side of the Metaveo ecosystem.', category: 'Creative', src: '/assets/case-studies/metaveo/vertical-a.webp', alt: 'Metaveo Productions visual direction.' },
  { title: 'Metaveo Automations', description: 'A graphic language created for systems, intelligence, and automated work.', category: 'Creative', src: '/assets/case-studies/metaveo/vertical-b.webp', alt: 'Metaveo Automations visual direction.' },
  { title: 'Metaveo Technologies', description: 'A technology-focused visual built to sit inside one connected multi-brand world.', category: 'Creative', src: '/assets/case-studies/metaveo/vertical-c.webp', alt: 'Metaveo Technologies visual direction.' },
  { title: 'A Shared Curiosity', description: 'A frame from my conversation with filmmaker and product designer Krishand RK.', category: 'Photography', src: '/assets/interview-poster.png', alt: 'Aneesh in conversation with Krishand RK.' },
  { title: 'Portrait Study', description: 'A monochrome self-portrait about calm, observation, and making sense of the details.', category: 'Photography', src: '/assets/aneesh-portrait.png', alt: 'Black and white portrait of Aneesh.' },
];
