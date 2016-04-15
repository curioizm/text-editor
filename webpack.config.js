var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var merge = require('webpack-merge')

const TARGET = process.env.npm_lifecycle_event

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const common = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'build.js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'text-editor'
    })
  ]
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, { })
}

if (TARGET === 'build') {
  module.exports = merge(common, { })
}
