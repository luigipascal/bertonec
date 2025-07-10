// next.config.js

const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Alias '@' to './src'
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    return config;
  },
};