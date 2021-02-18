import React from 'react';
import ReactDOM from 'react-dom';

function Patient( id, name, addiction, age) {
  this.id = id;
  this.name = name;
  this.addiction = addiction;
  this.age = age;
}


const patient1 = new Patient( 1, 'Ralph', 'Sex', 35);
const patient2 = new Patient( 2, 'Joe', 'Gambling', 30);
const patient3 = new Patient( 3, 'Art', 'Cocaine', 22);

// !VA Class Components
// class App extends React.Component {
//   render() {
//     return (
//       <div className="ui segment">
//         <ul className="ui content">
//           <li className="ui content">
//             <Child id={patient1.id} name={patient1.name} addiction={patient1.addiction} age={patient1.age} />
//           </li>
//           <li className="ui content">
//           <Child id={patient2.id} name={patient2.name} addiction={patient2.addiction} age={patient2.age} />
//           </li>
//           <li className="ui content">
//           <Child id={patient3.id} name={patient3.name} addiction={patient3.addiction} age={patient3.age} />
//           </li>
//         </ul>
//       </div>
//     ); 
//   }
// }

// class Child extends React.Component {
//   render() {
//     return (
//       <div>
//         Patient {this.props.id}: 
//         <ul className="ui content">
//           <li className="ui content">
//             Name: {this.props.name}
//           </li>
//           <li className="ui content">
//             Addiction: {this.props.addiction}
//           </li>
//           <li className="ui content">
//           Age: {this.props.age}
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }


// !VA Functional
const App = () => {
  return (
    <div className="ui segment">
      <div className="ui segment">
        <ul className="ui content">
          <li className="ui content">
            <Child id={patient1.id} name={patient1.name} addiction={patient1.addiction} age={patient1.age} />
          </li>
          <li className="ui content">
          <Child id={patient2.id} name={patient2.name} addiction={patient2.addiction} age={patient2.age} />
          </li>
          <li className="ui content">
          <Child id={patient3.id} name={patient3.name} addiction={patient3.addiction} age={patient3.age} />
          </li>
        </ul>
      </div>
    </div>
  );
}

// !VA DO NOT NEED TO INCLUDE THIS IN THE PROPS CALL
const Child = (props) => {
  return (
    <div>
      Patient {props.id}: 
      <ul className="ui content">
        <li className="ui content">
          Name: {props.name}
        </li>
        <li className="ui content">
          Addiction: {props.addiction}
        </li>
        <li className="ui content">
        Age: {props.age}
        </li>
      </ul>
    </div>
  )
};


ReactDOM.render(<App />, document.querySelector('#root'));