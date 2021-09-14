const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const source = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/main.ts'),
  output: {
    filename: '[name].[hash:7].js',
    path: path.join(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@@': path.resolve(__dirname),
      '@pkg': path.resolve(__dirname, 'packages'),
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: '8888',
    compress: true,
    hot: true,
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
        include: source,
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
    }),
    new VueLoaderPlugin()
  ]
}
