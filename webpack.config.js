// webpack.config.js
module.exports = {
  entry: './index.js',
  output: {
    filename: 'build.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  }
};
