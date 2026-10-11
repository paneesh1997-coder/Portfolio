// Set at build time, alongside Next.js basePath. Page links use next/link;
// public files need the prefix explicitly because they bypass the router.
export function publicAssetPath(path: string): string {
  // Resolve ./ paths from the site root so nested pages use the same assets.
  const assetPath = path.startsWith('./') ? path.slice(1) : path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${assetPath}`;
}
