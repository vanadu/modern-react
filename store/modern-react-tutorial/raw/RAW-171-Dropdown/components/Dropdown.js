import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ( { label, options, selected, onSelectedChange }) => {

  const [open, setOpen] = useState(false);
  const ref = useRef();

  // !VA 184 NOTE: This is the original code before making the changes from 184. 184 refers to and error that doesn't appear in my build - maybe it's a React version thing. I think this issue is fixed with the capture argument, so I'm not going to go through with the 'fix' discuessed in this chapter because it will probably break the existing code.
  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    }, {capture: true});
  }, []);

  const renderedOptions = options.map((option) => { 
    if (option.value === selected.value) {
      return null;  
    }
    return (
      <div 
        key={option.value}   
        className="item"
        onClick={() => onSelectedChange(option)}
        >
        {option.label}
      </div>
    );
  });
  
  return (
    <div> 
      This is Dropdown component
    </div>
  );
}

export default Dropdown;
