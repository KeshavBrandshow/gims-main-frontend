/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // option 1: precise pattern for your logo path
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gims.net.in',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],

    // or, simpler alternative:
    // domains: ['www.gims.net.in'],
  },
};

export default nextConfig;
