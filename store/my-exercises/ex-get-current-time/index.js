import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  // function curTime() {
  //   let now = new Date().toLocaleTimeString(); ;
  //   return now;
  // }
  
  const curTime = () => {
    let now = new Date().toLocaleTimeString();
  return now;
  }



  return (
  <div>
    <div>Current Time:</div>
  <h3>{curTime()}</h3>
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

