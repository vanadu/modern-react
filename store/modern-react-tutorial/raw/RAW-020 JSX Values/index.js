/* !VA  
App
* Create the functional App component
* Create a variable containing an object with the text property = 'Button Text'
* Create a variable with a labelText of 'Enter name:'
* Return the following JSX:
    div
      label.label for='name'
      input#name type=text
      button

* Set the background color of the button to blue and the text color to white using JSX style properties.
* Set the button tet to the buttonText property

*/
import React from 'react';
import ReactDOM from 'react-dom';

// !VA The Javascript way = call  {getButtonText()} in the innerHTML of the button
// function getButtonText() {
//   return 'Click on me!';
// }



// Create a react component
const App = () => {
  return (
    <div>
      This is the App component
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
