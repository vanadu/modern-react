// !VA Need to import the useState hook that is used below. It's a HOOK, not a 'function', so make sure you call it that.
import React, { useState } from 'react';
import Dropdown from './components/Dropdown';


const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // !VA 173 Initialize state for the list options and initialize to 0.
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          // !VA 173 This is the selected option, which is maintained in state and provided to the dropdown as a prop. NOTE: The name is arbitrary. By convention it uses the same name as the piece of state it references. 
          selected={selected}
           // !VA 173 onSelectedChange references the setter in the useState function. It's kind of an event handler, i.e. a callback to the useState function that tells it that this piece of state has changed and has to be update. NOTE: The prop name is arbitrary. onSelectedChange is used here to reflect the same convention used in event handlers, i.e. on + some indicator of the props' purpose.
          onSelectedChange={setSelected}
          // !VA This is the list of options that will be passed as props to the Dropdown component.  There, in 172 map over the list and build the output JSX.
          options={options}
        />
      ) : null}
    </div>
  );
};
