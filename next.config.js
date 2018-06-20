const { IgnorePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');
const optimizedImages = require('next-optimized-images');
const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpack: (config, { dev }) => {
    const webpackPlugins = config.plugins;
    const webpackRules = config.module.rules;

    const customWebpackConfig = {
      plugins: {
        base: [
          new IgnorePlugin(
            /^\.\/locale$/,
            /apollo-server-express$/,
            /body-parser$/,
            /compression$/,
            /cors$/,
            /emotion-server$/,
            /graphql$/,
            /graphql-tools$/,
            /express$/,
            /moment$/,
            /signale$/,
            /uuid$/
          ),
          new Dotenv({ path: './.env', systemvars: true })
        ],
        prod: [
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
          })
        ]
      },
      rules: {
        base: [
          // url loader no longer needed after using next-images
        ]
      }
    };

    if (!dev) {
      webpackPlugins.push(...customWebpackConfig.plugins.prod);
    }

    webpackRules.push(...customWebpackConfig.rules.base);
    webpackPlugins.push(...customWebpackConfig.plugins.base);

    config.stats = { colors: true };

    return config;
  }
};

module.exports = withPlugins([optimizedImages], nextConfig);
