import React from "react";
import ReactDOM from "react-dom";

// !VA 
const App = () => {
  return (
    <div>
      <Segment>
        <div className="ui icon header">
          <i className="pdf file outline icon" />
          No documents are listed for this customer.
        </div>
        <div className="ui primary button">Add Document</div>
        </Segment>
      <Segment>
        <h4 className="ui header">For Your Information</h4>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
        </Segment>
    </div>
  );
};

const Segment = (props)=> {
  return (
    <div className="ui placeholder segment">{props.children}</div>
  );
}

// Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector("#root"));

