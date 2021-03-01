// !VA The The goal of this exercise is simply too generate some mock thing data in Data component and display it
import React from 'react';
/* !VA Instructions
App
* Set up the data to display in the functional Acc component
* Pass the items array to the Accordion component as props

Accordion
* Create the functional Acc component
* Accept the props from the parent
* Map over the items prop and output JSX to render in a React.Fragment
  div.title
  i.dropdown.icon 
  div.content 
    p
* Add an onClick prop to the title element with the callback onTitleClick
* Add a click handler onTitleClick to the component
* Add an expression that adds the 'active' class to the title and content divs when the title is clicked.
* render the JSX from the map function
* set the key prop on the parent element. Use the title property of the items array as the key. 
*/
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));