import React, { Component } from "react";
import Button from "./Button";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="ui card">
        <div>
          <div className="ui">
            <h3 style={{ display: 'inline'}}>Count:</h3>
            <h1 style={{ display: 'inline'}}>{count}</h1>
          </div>
          <div className="buttons">
            <Button title={"-"} task={this.decrementCount} />
            <Button title={"+"} task={this.incrementCount} />
          </div>
        </div>
      </div>
    );
  }
}