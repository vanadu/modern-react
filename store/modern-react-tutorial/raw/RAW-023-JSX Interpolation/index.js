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

const App = () => {
  return  ( // Don't forget the placement of the opening parenth!
  <div>
    This is App component.
  </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"))


