const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract({
  reactStrictMode: true,
  transpilePackages: ["@burger/components"],
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
    ]
  },
});