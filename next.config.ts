import type { NextConfig } from 'next';

const nextConfig = {
  output: 'export',
  basePath: '/YOUR_REPO',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
