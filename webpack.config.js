const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules'],
  },
  optimization: {
    minimize: false,
    nodeEnv: 'production',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    iife: false,
  },
};
