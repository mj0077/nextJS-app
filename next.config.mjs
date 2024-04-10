/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {hostname: 'images.unsplash.com'}
    // images: {hostname: 'avatars.githubusercontent.com'}
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
