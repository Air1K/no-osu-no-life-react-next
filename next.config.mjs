/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'letsenhance.io',
            },
        ],
    },
};

export default nextConfig;
