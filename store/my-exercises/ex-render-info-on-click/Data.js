import React, { Component } from 'react';

class Data extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="item">
          Age: {this.props.age}
        </div>
        <div className="item">
          Gender: { this.props.gender }
        </div>
        <div className="item">
          Injury: {this.props.injury}
        </div>
      </React.Fragment>

    );
  }
}

export default Data;
