// Entry tells webpack where the root JS file is
// Transformations to make is through "loaders"
// First step install the loader we want (use npm), configure our file to be aware of this transformation
// Each loader needs to have 3 things, which file type to run on, which directories should be included or
// excluded, last thing is the specific loader we want to run. The last thing we need to specify is the output
//
// Create a new instance of HtmlWebpackPlugin, give it a template which points to our regular index.html file,
// filename is the output file, inject says to inject a script which references the name of the output file of
// our loaders and put it in the body of this newly created HTML file.
//
// Now if you run webpack we have to files, index_bundle.js and index.html, index_bundle.js is the result of
// taking our entry code and running it through the loaders, while index.html was created on the fly with
// HTMLWebpackPluginConfig

var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig]
}


