import React from 'react';
import ReactDOM from 'react-dom';

// !VA 074 Class-Based Components Solution
// !VA ================================================
// !VA Refactor the commented stateless component to a class-based component

// const UserForm = () => {
//   return (
//       <form>
//           <label>Enter a username:</label>
//           <input />
//       </form>
//   );
// }

class UserForm extends React.Component {
  render() {
    return (
      <form>
        <label>Enter a username:</label>
        <input />
      </form>
    );
  }
}

ReactDOM.render(<UserForm />, document.querySelector('#root'));



