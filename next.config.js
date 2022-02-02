module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    // Making require('fs') work: https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application
    config.resolve.fallback = { fs: false };

    return config;
  }
}
