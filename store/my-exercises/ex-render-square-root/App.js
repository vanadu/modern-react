import React from 'react';

class App extends React.Component{
  render() {
    return (
      <div className="ui content">
        <SquareRoot />
      </div>
    );
  }
}

class SquareRoot extends React.Component {
  render() {
    const num = 348;
    const sr = Math.round(Math.sqrt(num));
    return (
    <div className="content">
      <p className="content">The square root of {num} is app. {sr}</p>
    </div>
    );
  }
}


export default App;