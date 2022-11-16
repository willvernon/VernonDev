/** @type {import('next').NextConfig} */
module.exports = {
  // @TODO figure out why the swc minifier breaks preview mode
  swcMinify: false,

  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
      { hostname: 'github.com' },
      { hostname: 'tenor.com' }
    ]
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production'
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production'
  },
  future: { webpack5: true, strictPostcssConfiguration: true }
};

console.log('next.config.js', JSON.stringify(module.exports, null, 2));
