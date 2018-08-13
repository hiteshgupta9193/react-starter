const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

function getDevTool() {
  if (process.env.NODE_ENV !== 'production') {
    return 'source-map'; //enables source map
  }

  return false;
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader'
      //   }
      // }
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader'],
      //   }),
      //   include: /src\/styles/,
      //   exclude: [/src\/(.*\/)?@(.*)?\/.*/]
      // },
      // {
      //   test: /\.scss$/,
      //   loaders: ['style-loader', {
      //     loader: 'css-loader',
      //     options: {
      //       // CSS Loader https://github.com/webpack/css-loader
      //       importLoaders: 1,
      //       sourceMap: true,
      //       context: sourcePath,
      //       // CSS Modules https://github.com/css-modules/css-modules
      //       modules: true,
      //       localIdentName: '[path]-[name]-[local]-[hash:base64:5]',
      //       // CSS Nano http://cssnano.co/options/
      //       discardComments: { removeAll: true },
      //     },
      //   }, 'sass-loader'],
      //   include: [/src\/client\/(.*\/)?@(.*)?\/.*/]
      // },
      // {
      //   test: /\.scss$/,
      //   exclude: [/src\/styles/, /src\/(.*\/)?@(.*)?\/.*/],
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },

      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true
            }
          }
        ]
      }
      // {
      //   test: /\.(gif|png|jpg|jpeg|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      //   use: 'file-loader'
      // }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: getDevTool(),
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
