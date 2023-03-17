/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:true
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;

    return config;
  },
  images: {
    domains: [
      "assets.website-files.com",
      "ik.imagekit.io",
      "website-files.com",
    ],
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.js",
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
