var React = require('react')
var ReactDOM = require('react-dom')
var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));

// To create a React component, you use the createClass method on the React object, with the only method on
// the object we are passing is the render method. Every component must have the render method, because render
// is essentially the template for our component. ReactDOM.render takes two arguments, the component that
// should be rendered and the second argument is the DOM node where you want to render the component. You
// usually only have to use ReactDOM.render once because by rendering the most parent component, all child
// components will be rendered as well. If you want the whole app to be React, you would render the component
// to document.body
