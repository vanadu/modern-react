/* !VA  
App 
Add the Translate component tag
Translate
* Add the data to for the options array to feed to the Dropdown component
* Set up the JSX output for the Translate component:
  div
    div.ui.form
      div.field
        label
        input
* Add the Dropdown component tag and the props to pass to it.
* Add the Convert component and the props to pass to it.
* Initialize useState for the language and text arguments.
Dropdown
* Confirm that this component is unchanged from the Dropdown component used in 171.
Convert
* Import axios
* Create the Convert functional component and pass in the requisite props from the Translate component
* Initialize useState for translated and debouncedText properties
* Set up the debouncer for the input text
* Create the useEffect function with the doTranslation and setTranslated arguments
* Run doTranslation
* Return the translated text in an h1.ui.header tag.



*/


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />, document.querySelector('#root'));