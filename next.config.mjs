/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com", "plus.unsplash.com"],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 's3.amazonaws.com',
              port: '',
              pathname: '/images.unsplash.com/**',
            },
          ],
    }
};

export default nextConfig;
