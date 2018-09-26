/* eslint-disable */
const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = () => {
  const plugins = [
    // onBuildExit:['SET /a _counter=%_counter%+1', 'IF /I "_counter" NEQ "0" echo hola']
    new WebpackShellPlugin({onBuildExit:['npm run test']})
  ]

  return {
    entry: ['babel-polyfill', path.resolve(__dirname, './index.js')],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/react_template.js'
    },
    devServer: {
      port: 4200,
      historyApiFallback: true
    },
    plugins: plugins,
    module: {
      rules: [
        {
          // test: que tipo de archivo quiero reconocer,
          // use: que loader se va a encargar del archivo
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2']
            }
          },
        },
        {
          test: /\.css$/,
          use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 1000000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]',
            }
          }
        },
      ]
    }
  }
}