import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: false,
    devIndicators: {
        appIsrStatus: false
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.vercel-storage.com'
            }
        ]
    },
    output: 'export'
};

export default nextConfig;
