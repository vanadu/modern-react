/* !VA  
Create an App component and a Message component that allows these two messages to be passed from the App to the Message via props:

App
Include the Message component tag and include the text in the header and message props

Message
Return the following JSX with the header and message text:
  div.ui.message
    div.header - This is where the header goes.
    p - This is where the message goes



*/
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
      <div>
         This is App component.
      </div>
  );
}


ReactDOM.render(<App />, document.querySelector('#root'));


