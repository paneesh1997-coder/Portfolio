import { publicAssetPath } from '@/lib/paths';
export function HighlightsBackground() {
  return (
    <img
      src={publicAssetPath("./assets/interview.webp")}
      width="1280"
      height="720"
      alt=""
      aria-hidden="true"
      loading="lazy"
    />
  );
}
