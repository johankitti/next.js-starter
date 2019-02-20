const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

const sassConfig = { cssModules: true };
const bundleAnalyzerConfig = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundle-analyze/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundle-analyze/client.html',
    },
  },
};

module.exports = withPlugins([[withTypescript], [withSass, sassConfig], [withBundleAnalyzer, bundleAnalyzerConfig]]);
