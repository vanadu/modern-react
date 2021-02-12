// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// !VA The Javascript way = call  {getButtonText()} in the innerHTML of the button
// function getButtonText() {
//   return 'Click on me!';
// }



// Create a react component
const App = () => {
  // const buttonText = ['WTF']; //or...
  // const buttonText = 'WTF'; //or...
  // const buttonText = [10, 10, 10]; // or
  //const buttonText = [ 'W', 'T', 'F']; //or
  const buttonText = { text: 'WTF'}; // use buttonText.text instead of button.Text
  const labelText = 'Enter Name:'; // Don't forget JSX requires htmlFor instead of just the HTML attribute 'for' in labels
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
