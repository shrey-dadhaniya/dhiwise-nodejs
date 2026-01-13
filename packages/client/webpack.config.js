const path = require('path');

const config = {
  mode: 'none', // "production" | "development" | "none"
  cache: false,
  resolve: {
    alias: {
      "react/jsx-dev-runtime.js": "react/jsx-runtime",
      "react/jsx-runtime.js": "react/jsx-runtime",
    },
    fallback: {
      'react/jsx-runtime': 'react/jsx-runtime.js',
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js'
    },
    extensions: ['*', '.mjs', '.js', '.jsx', '.json']
  },
  resolveLoader: {
    fallback: path.join(__dirname, './node_modules'),
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ]
  }
};

module.exports = config;
