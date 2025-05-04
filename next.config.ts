import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'media.licdn.com', // Added LinkedIn media hostname
        port: '',
        pathname: '/dms/image/**', // Allow images from LinkedIn CDN
      },
       {
        protocol: 'https',
        hostname: 'www.electronicsforu.com', // Added for project image
        port: '',
        pathname: '/wp-contents/uploads/**', // Allow images from electronicsforu uploads
      },
    ],
  },
};

export default nextConfig;
