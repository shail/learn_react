NPM -- basically like bundler in ruby
Webpack -- at its core is a code bundler, takes code, transforms and bundles it, returning a new version of
your code, you can tell it every transformation your code needs to make, and it will do them and output a
bundle file for you full of those changes. Three main things that webpack needs to know about your application
  - starting point of your app, root JS file
  - which transformations to make on your code
  - which location it should save the new transformed code
