import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // A plain static site: `next build` writes it to `out/`, ready for any static host.
  output: 'export',
  // No image server in a static export; the page's images are small and already sized.
  images: { unoptimized: true },
};

export default nextConfig;
