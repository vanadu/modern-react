import React, { Component } from 'react';
// import Data from './Data';

class Patient extends Component {
  render() {
    return (
      <div className="ui segment">
        <div className="ui list">
          <div className="item">
            {this.props.name}
          </div>

          {/* <Data /> */}
        </div>
      </div>
    );
  }
}

export default Patient;