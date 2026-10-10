export function BrandLogo({ white = false }: { white?: boolean }) {
  return <img className={`brand-logo${white ? ' brand-logo-white' : ''}`} src="/assets/frame-2147224091.svg" width="180" height="15.27" alt="Make It Make Sense" />;
}
