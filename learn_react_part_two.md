NPM -- basically like bundler in ruby
Webpack -- at its core is a code bundler, takes code, transforms and bundles it, returning a new version of
your code, you can tell it every transformation your code needs to make, and it will do them and output a
bundle file for you full of those changes. Three main things that webpack needs to know about your application
  - starting point of your app, root JS file
  - which transformations to make on your code
  - which location it should save the new transformed code

- An issue with this webpack set up is that you manage two index.html files, one that you develop and then the
  transformed one, an option of fixing this is that whenever webpack runs, it copies the app/index.html over
  to /dist/index.html, already a webpack tool that allows us to do something similar

- Need to create a new instance of HTMLWebpackPlugin and we will need to specify three things, first give it a
  template of what we want the newly created file to look like, second a filename, what the new file it
  creates will be called, and third is inject and is where you would like to inject that script, the 'head' or
  'body'
- webpack -w will watch your files and rebuild whenever a file changes
- webpack -p will run through normal transformations and then minify your code when deploying to production

- Babel.js is a tool for compiling JS, allows us to transform JSX into JS, you can also opt into future
  versions of JS and use Babel to transform future JS to modern day JS

- Components are the building blocks of React, they are essentially widgets or modules. Component is a
  collection of HTML, CSS, JS, and some internal data specific to that component. They are defined either in
  pure JS or can be defined in JSX. What makes React great for user interfaces is that data is either received
  from a components parent component or it is contained in the component itself
