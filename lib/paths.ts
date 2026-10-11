// Set at build time, alongside Next.js basePath. Page links use next/link;
// public files need the prefix explicitly because they bypass the router.
export function publicAssetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
