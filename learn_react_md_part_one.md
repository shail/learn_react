# Imperative vs Declarative

Imperative (how) -- giving program explicit list 

var numbers = [4,3,2,6];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i]
}

Declarative (what) -- reduce allows us to run a function and have an accumulator
var numbers = [4,2,3,4]
numbers.reduce(function (previous, current) {
  return previous + current
})

-- Declarative reduces side effects
-- minimize mutability
-- more readable code
-- less bugs

React is mostly declarative, removing state from the DOM and moving it into the components. Still a little
imperative because you have to set state. React components can be thought about like functions, broken up
and composed just like functions

React has explicit mutations, with this.setState

React Router allows us to map components to certain URLs

Webpack -- bundle your code into one file, have it do certain transformations based on loaders and then
spit that out

Babel -- allows you to do the transformers, convert JSX to regular Javascript

Axios -- just getting HTTP requests
