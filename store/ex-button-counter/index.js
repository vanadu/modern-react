/* !VA  
ex-button-counter - Example button counter from https://www.techomoro.com/how-to-build-a-simple-counter-app-in-react/ 
NOTE: The tutorial in the link doesn't match the codesandbox. The example below is a mix out of both of those things to make it work
=================
Create two buttons: one that increments the value displayed in an element and one that decrements it.
1) export App class component from App.js
2) import App component to index.js
3) create and export the Button component as class in Button.js (react-export-default-class)
4) Add the button element to the Button component
5) Set the props in the render function of the Button component. 
  NOTE: a single element with closing tag can go on a single line after the return statement
  NOTE: props can be destructured to variables
  NOTE: props are defined in the CHILD component and populated with values in the PARENT component 
6) Set the onClick event on the button element to the task prop and the innerHTML of the button element to the title prop
7) Declare a constructor in the App component. It goes right after the export statement
8) Declare the super method in the constructor
9) declare the this.state method, setting the count property of state to 0
10) Create the incrementCount function, using this.setState to increment the count property to this.state.count + 1
11) Create the decrementCount function, using this.setState to decrement the count property to this.state.count + 1
12) In the render function of the App component, set the count property to this.state
13) Add the JSX to be rendeed to the App component's render function. This includes the elements in which the count will be displayed, the label for the count element as well as the two Button components.
14) Set the title and task prop values in the Button component tags in the App component. title is the innerHTML, task is the functions defined after the constructor that sets the state.
*/
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// !VA Note that there is no code here except that the imported App component is rendered below.
ReactDOM.render(<App />, document.querySelector('#root'));