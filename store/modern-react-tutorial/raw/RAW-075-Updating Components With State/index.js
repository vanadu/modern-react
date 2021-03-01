import React from 'react';
import ReactDOM from 'react-dom';

// !VA Create a component that generates a new random number ever second. NOTE: Again, to render the state before th first setInterval, duplicate the function when state is initiailized.
class App extends React.Component {

  render() {
    return (
      <div className="content">
         This is App component.
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

