/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['playwright-core', '@sparticuz/chromium'],
  turbopack: {
    resolveAlias: {
      'playwright': 'playwright-core',
    },
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.alias['playwright'] = 'playwright-core';
    }
    return config;
  },
};

export default nextConfig;
