/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 an
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // experimental: {
  //   optimizeCss: true,
  // },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
