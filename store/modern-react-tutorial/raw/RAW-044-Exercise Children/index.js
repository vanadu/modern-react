/* !VA  
Create an app that looks like the enclosed screenshot. 
App
Contains two Segment component tags the contain props for each of the content segments shown.

Segment
Contains a prop that displays all the content in the respective Segment tag in the App component.


*/

import React from "react";
import ReactDOM from "react-dom";

// !VA 
const App = () => {
  return (
    <div>
      This is App component.
    </div>
  );
};


// Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector("#root"));

