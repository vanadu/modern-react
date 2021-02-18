import React, { useState } from 'react';
 
const Accordion = ({items}) => {
  // !VA 142 initialize state using the useState hook. Gives access to the state system in a functional component. Uses array destructuring, similar to object destructuring. 
  const [ activeIndex, setActiveIndex ] = useState(null);
  // !VA 141 Helper function for logic to run when the user clicks on a title. See the title div for onClick handler
  // !VA 142 index is the index property of the title div element
  const onTitleClick = (index) => {
    // !VA 141 You can include multiple arguments in a console.log
    // console.log('Title clicked', index);
    // !VA 142
    setActiveIndex(index);
  };


  const renderedItems = items.map((item, index) => {
    // 145 !VA If the index value equals the activeIndex state, set the active variable to the string 'active' and open the accordion, otherwise set it to null and do nothing. This is a ternary expression that returns a bool.
    const active = index === activeIndex ? 'active' : '';
 

     return <React.Fragment key={item.title}>
       <div 
       // !VA 145 Set the class name to the return of the ternary expression above.
       className={`title ${active}`}
       // !VA 141 You have to wrap the helper function call in an arrow function, otherwise it will run everytime the page is refreshed instead of only when the onClick method is invoked. Not sure why, or when exactly that pertains...
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
