import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
      <div>
          <Message header="Changes in Service" message="We just updated our privacy policy here to better service our customers."/>
      </div>
  );
}

const Message = (props) => {
  return (
      <div className="ui message">
          <div className="header">{props.header}</div>
          <p>{props.message}</p>
      </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));


