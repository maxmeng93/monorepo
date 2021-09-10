const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'docs/main.ts'),
  output: {
    filename: '[name].[hash:7].js',
    path: path.join(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: '8888',
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    hot: true,
    quiet: true,
    progress: false,
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /(\.jsx|\.js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'mono',
      template: './public/index.html'
    })
  ]
}
