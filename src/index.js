import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
      <div className="content">
         I am a functional component.
      </div>
 );
}

ReactDOM.render(<App />, document.querySelector('#root'));