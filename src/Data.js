import React from 'react';

const Data = (props) => {
  return (
    <div>
        <div className="ui card">
          <ul className="ui content">
            <li className="ui list">
              Age: {this.props.age}
            </li>
            <li className="ui list">
              Gender: {this.props.gender}
            </li>
            <li className="ui list">
              Addiction: {this.props.addiction}
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Data;