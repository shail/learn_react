// Entry tells webpack where the root JS file is
// Transformations to make is through "loaders"
// First step install the loader we want (use npm), configure our file to be aware of this transformation
// Each loader needs to have 3 things, which file type to run on, which directories should be included or
// excluded, last thing is the specific loader we want to run. The last thing we need to specify is the output
module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: []
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
}


