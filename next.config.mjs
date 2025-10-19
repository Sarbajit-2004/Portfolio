/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { optimizeCss: true },
  images: { remotePatterns: [{protocol:'https',hostname:'**'},{protocol:'http',hostname:'**'}] }
};
export default nextConfig;
