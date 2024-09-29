/** @type {import('next').NextConfig} */
import 'dotenv/config';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.sivillage.com', 'cdn-mo.sivillage.com', 'mintpim.com'],
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};

export default nextConfig;
