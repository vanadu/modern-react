import React, { Component } from 'react';
import Button from './Button';


class App extends Component {
  render() {
    return (
      <div>
        <Button num={Math.floor(Math.random() * 100)}/>
      </div>
    );
  }
}
export default App;