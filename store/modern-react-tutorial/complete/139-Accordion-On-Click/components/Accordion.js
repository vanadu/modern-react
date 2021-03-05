import React, { useState } from 'react';
 
// !VA items is the prop array passed from App
const Accordion = ({items}) => {
  // !VA 142 initialize state using the useState hook. Gives access to the state system in a functional component. Uses array destructuring, similar to object destructuring. 
  const [ activeIndex, setActiveIndex ] = useState(null);
  // !VA 141 Helper function for logic to run when the user clicks on a title. See the title div for onClick handler
  // !VA 142 index is the index property of the title div element. activeIndex is the piece of state that refers to some variable that will change over time. setActiveIndex is a setter function that we call whever we want to change our activeIndex piece of state. So when the user clicks, onClick is called, which runs the helper function onTitleClic, which runs setActiveIndex 
  const onTitleClick = (index) => {
    // !VA 141 You can include multiple arguments in a console.log
    // console.log('Title clicked', index);
    // !VA 142
    console.log('index :>> ');
    console.log(index);
    setActiveIndex(index);
  };


  const renderedItems = items.map((item, index) => {
    // 145 !VA If the index value equals the activeIndex state, set the active variable to the string 'active' and open the accordion, otherwise set it to null and do nothing. This is a ternary expression that returns a bool.
    const active = index === activeIndex ? 'active' : '';
 
    // !VA I often see empty divs instead of React.Fragments. 
     return <React.Fragment key={item.title}>
       <div 
       // !VA 145 Set the class name to the return of the ternary expression above.
       className={`title ${active}`}
       // !VA 141 You have to wrap the helper function call in an arrow function, otherwise it will run everytime the page is refreshed  instead of only when the onClick method is invoked. Not sure why, or when exactly that pertains...
        onClick={ () => onTitleClick(index)}
       >
         <i className="dropdown icon"></i>
          {item.title}
       </div>
       <div className={`content ${active}`}>
          <p>{item.content}</p>
       </div>
     </React.Fragment>
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  ); 
};

export default Accordion;

