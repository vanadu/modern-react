/* !VA  
078 Create components subfolder. In that, create at JS file with a functional component (rsc). Import app component into index.js. Don't include any components in index.js. All we're doing is rendering the App component in the render statement at the bottom of the file.
079 Create SearchBar component as class component. Import SearchBar into App.js. In the SearchBar component add a form element with an input element. 
080 In the SearchBar component, add class ui and class segment to the wrapper div around the form element. In the form element add a  class ui and the class form. Add a wrapper div to the input element and give it a class field. Add a label element and give it the text image search. In the app component, add a class ui and a class container to the SearchBar wrapper div.  In the SearcjBar wrapper div, add an inline style of marginTop for 10 pixels. 
081 In the top of the SearchBar component statement, add an onInputChange method as function expression. In the input element add an onchange prop with a value of this.onInputChange. Note that we do not add parentheses to the end, even though this is a callback function to the method (I don't understand why this is a callback, but he specifically uses this term). We are not calling function per se, but rather passing a reference to it. If we call that function with parentheses it will be one immediately. Instead, we want to call this function at some point in the future. What that point is, is unclear to me as yet. But the instructor makes it clear that we do not call the function when ever we include a reference in an event handler prop like onChange. Now, to the onInputChange callback we add the parameter event and inside the body of the function we call event.target.value. This traps the user input in the input    element. Now stopping test what we have so far by outputting event target value to the console.
// !VA Now we continue writing comments in the body the code. 

*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';



ReactDOM.render(<App />, document.querySelector('#root'));