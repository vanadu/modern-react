import './SeasonDisplay.css';
import React from 'react';

// !VA The config object is declared up at the very top of the component, just like any other variable declaration. 
const seasonConfig = {
  summer: { 
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
   },
  winter: { 
    text: 'Brrr, it\'s cold!',
    iconName: 'snowflake'
  }
}

// !VA As a rule it's best to extract as much logic from functional components as possible, so we put the logic for parsing the month above the component declaration. 
// const getSeason = function(lat, month ) {
//   lat = 59;  
//   month = 'January';
// } 
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'summer' : 'winter';
  }
}

const SeasonDisplay = (props) => {
console.log('props.lat :>> ' + props.lat);
// !VA Here we call the function whose logic is defined above. 
const season = getSeason(props.lat, new Date().getMonth());
// !VA Now we destructure the seasonConfig object to get variable names that are easy to work with. 
// !VA NOTE: seasonConfig is called with the season object as parameter. The season object is built using getSeason which returns either 'summer' or 'winter' based on the lat and month argument.
const { text, iconName } = seasonConfig[season];
console.log('season :>> ');
console.log(season);
// !VA This is a construction I wasn't aware of. Basically, it sets a variable to the return value of a ternary expression. I put the parentheses in there for clarity;  they weren't in the original exercise. This will be refactored out, but it's an interesting side-note.
// const text = (season === 'winter' ? 'Brr, it\'s cold!' : 'Let\'s hit the beach!');
// const icon = (season === 'winter' ? 'snowflake' : 'sun');

// !VA Don't forget, we use curly braces every time we want to reference a JavaScript expression. While it's possible to include to restatements within curly braces, it's better to include the logic outside of the return statement and just reference a variable. 
// !VA The icon declaration is quite complicated. That's why the instructor decided to refactor The whole thing into a config object. The icon name is referenced in the CSS file to give styling to the icon and the background. 
  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  );
};

export default SeasonDisplay;