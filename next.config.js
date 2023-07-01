/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: true,

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['cdn.jsdelivr.net', 'images.unsplash.com', 's3.amazonaws.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // ensure server modules resolution does not throw on the client
      config.resolve.fallback.fs = false;
      config.resolve.fallback.path = false;
    }
    return config;
  },
};


module.exports = config;
