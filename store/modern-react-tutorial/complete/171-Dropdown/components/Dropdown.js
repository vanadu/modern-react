import React, { useState, useEffect, useRef } from 'react';

// !VA 173. Add the options, selected, and onSelectedChange props defined in the Dropdown tag in the App component and WIRE THEM UP to the component below. Q: Why are they wrapped in curlies again? Destructuring the JS object?
const Dropdown = ( { label, options, selected, onSelectedChange }) => {
  // !VA 175 Add a piece of state the determines if the dropdown is open or closed. open is the boolean toggle. setOpen is the setter for the piece of state.
  const [open, setOpen] = useState(false);
  // !VA 181 Initialize ref. The ref will be used in the form div to get the top-most parent element in the Dropdown component. This will be used to trap the click event for closing the dropdown conditionally based on which element was clicked.
  const ref = useRef();

  // !VA 184 NOTE: This is the original code before making the changes from 184. 184 refers to and error that doesn't appear in my build - maybe it's a React version thing. I think this issue is fixed with the capture argument, so I'm not going to go through with the 'fix' discuessed in this chapter because it will probably break the existing code.
  // !VA 179 This binds a 'manual' event listener to the React lifecycle with useEffect. 
  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      // !VA This determines whether or not to close the dropdown based on which element was clicked. ref.current is the innate property that returns the element referenced by 'ref'.  So if that exists and if the event target is contained in it, then do nothing because we do NOT want the dropdown to be affected now.
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      // !VA If the event.target is NOT in the current ref, then close the dropdown.
      setOpen(false);
    }, {capture: true});
  }, []);

  // !VA 172 Map over the options list and build the preliminary output JSX.
  const renderedOptions = options.map((option) => { 
    // !VA 174 If the value currently iterated over === the selected options then return null, which in React means render nothing. So if the user selects the currently selected option, nothing happens.
    if (option.value === selected.value) {
      return null;  
    }
    return (
      <div 
        // !VA 172 Build the preliminary JSX that the map will output
        key={option.value}   
        className="item"
        // !VA 173 This is the click handler that calls the onSelectedChange prop which calls the useState setSelected setter and tells useState to update the current selection with the currently selection 'option'. 
        onClick={() => onSelectedChange(option)}
        >
        {option.label}
      </div>
    );
  });
  
  return (
    // !VA 172 Build the JSX for the page HTML elements
    // !VA 173 WIRE UP the pieces of state to the JSX output. 1) Wire up 'selected.label' to the div that displays name of the dropdown option, i.e. the 'label'. That's kind of unfortunate nomenclature, since it's not the HTML label element, but rather just the text of the dropdown option.
    // !VA 175 create an onClick prop to run the setter for opening/closing the dropdown on click. setOpen(!open) sets the open property of state to the opposite of whatever it currently is. IMPORTANT: This ternary uses string templating - the className attribute is wrapped in a string template. Then in the variable, if open === true, then add the quoted text to the className attributte string, if open === false, add an empty string to the className attribute string. This toggles whether those class names are being applied.
    // !VA 181 Get the reference to the form div to use to determine which element was clicked.
    <div ref={ref} className="ui form">
      <div className="field">
        <label htmlFor="" className="label">{label}</label>
        
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ?'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
