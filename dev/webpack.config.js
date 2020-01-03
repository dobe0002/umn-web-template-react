const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index.jsx',
  devtool: '#source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  devServer: {
    publicPath: '/dev/build',
    contentBase: './dev/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules(?!\/webpack-dev-server)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
