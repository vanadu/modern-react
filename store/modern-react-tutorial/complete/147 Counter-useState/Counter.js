import React, { useState } from 'react';

// !VA This is where I didn't get the exercise - need to set a default value for state. The default value depends on what type of value set in that piece of state. Here we're dealing with integers, so set it to 0
const Counter = () => {
  // !VA The counter value changes so put it in a piece of state. Initialize both useState values to 0.
  const [ count, setCount ] = useState(0); 

  const onButtonClick = () => {
    console.log('CLICKED');
    // !VA This triggers and error. Can't increment this, have to add the number to it with the addition operator. What's the diff? Answer: you can't mutate state and the increment operator does that. There are a number of answers to this here: 
    // count++;
    // count++;

    setCount(count + 1);
    return count;

  }


  return (
    <div>
      <button 
        className="ui button" 
        // !VA Use an arrow function here to ensure that it doesn't update whenever i.e. the first time the component rerenders
        onClick={ () => onButtonClick()  }
        >Count</button>
      <div className="ui content" >{count}
      </div>  
    </div>
  );
};

export default Counter;