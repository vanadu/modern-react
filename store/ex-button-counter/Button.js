import React, { Component } from 'react';

// export default class Button extends React.Component {
//   render() {
//     let { title, task } = this.props;
//     return (
//         <div style={{display: 'inline'}}>
//           <button className="ui button" onClick= {task}>{title}</button>
//         </div>
//     );
//   }
// }

// !VA Destructure this.props to variables title and task
export default class Button extends Component {
  render() {
    let { title, task } = this.props;
    return <button className="ui button" onClick={task}>{title}</button>;
  }
}

// !VA Don't destructure and write out this.props.title and this.props.task
// export default class Button extends Component {
//   render() {
//     let { title, task } = this.props;
//     return <button className="ui button" onClick={this.props.task}>{this.props.title}</button>;
//   }
// }