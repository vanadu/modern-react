/* !VA 
App
Create a function that gets the current time, then display that in the JSX in an h2 and wrap the h2 in a div 400px wide with this structure:
  div.container
    div.ui.card
      h2
As a bonus, make the card 600px X 600px and center the text.

*/
import React from "react";
import ReactDOM from "react-dom";

function getTime() {
  return new Date().toLocaleTimeString();
}

const App = (props) => {
  return  ( // Don't forget the placement of the opening parenth!
  <div className="container" style={{width: '600px'}}>
    <div className="ui card" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '600px'}}>
      <h2>The current time is: {getTime()}</h2>
    </div>
  </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"))


