module.exports = {
  entry: './source/client.js',
  output: {
    filename: 'app.js',
    path: './built/statics'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['latest-minimal', 'react']
        }
      }
    ]
  },
  target: 'web',
}