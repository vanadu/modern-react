/* !VA  
App
* Set up the Dropdown component tag and its props
Dropdown
* Set up the Dropdown functional component and pass in its props
* Set up the JSX to render in the return statement:
    div.ui.form
      div.field
        label.label
        div.ui.selection.dropdown
          i.dropdown.icon
          div.text
          div.menu
            This is where the options go
* Initialize useState for open
* Initialize useRef
* Create useEffect to handle event listener for the click event on the body tag to close the dropdown
* Map over the options and output the JSX to render if the selected option has changed from its prior state



*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />, document.querySelector('#root'));