import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Modern image formats (Next.js will serve in order of preference)
    formats: ['image/avif', 'image/webp'],

    // Device sizes for responsive images
    // Used for layout="responsive" or layout="fill"
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],

    // Image sizes for srcset generation
    // Used for layout="intrinsic" or layout="fixed"
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Minimum cache TTL in seconds for optimized images
    minimumCacheTTL: 60,

    // Allowed quality values
    qualities: [75, 90],
  },
};

export default nextConfig;
