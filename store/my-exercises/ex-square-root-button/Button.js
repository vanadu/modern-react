import React, { Component } from 'react';




class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { sqrt: '' };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({ sqrt: Math.sqrt(this.props.num)});
  };

  render() {
    return (
      <div>
        <h3 className="ui content">The square root of {this.props.num} is:  </h3>
        <br/>
        <button 
          className="ui button"
          onClick={this.handleClick}>Get Square Root</button>
          <h2 className="ui">{this.state.sqrt}</h2>
      </div>
    );
  }
}

export default Button;