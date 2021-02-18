import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
   <div>Hi there!</div>
 );
}

ReactDOM.render(<App />, document.querySelector('#root'));

/* !VA  

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

// !VA Class-based components
// !VA ==================================
Refactor the App component to be class-based, then create a new stateless component that shows the square root of a number. Then refactor that component to a class-based one.

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

// const SquareRoot = () => {
//   const num = 348;
//   const sr = Math.round(Math.sqrt(num));
//   return (
//     <div className="content">
//       <p className="content">The square root of {num} is app. {sr}</p>
//     </div>
//   );
// }


*/