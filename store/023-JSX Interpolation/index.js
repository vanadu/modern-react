import React from "react";
import ReactDOM from "react-dom";

// !VA Already archived below
// !VA In the App component, create an object Likes using a constructor function for thinks I like most and least. Note that arrow functions can't be used as constructors. Make it first as a function constructor then as a class constructor.
const App = () => {
  
// !VA This is how to make a function constructor
// function Likes( most, least ) {
//   this.most = most;
//   this.least = least;
// }
// let food = new Likes('Chocolate', 'Lima beans');
// let weather = new Likes('Snow', 'Hot and humid ');

// !VA This is how to make a class constructor
class Likes {
  constructor(most, least) {
    this.most = most;
    this.least = least;
  }
}
 
let food = new Likes( 'Chocolate', 'Lima beans');
let weather = new Likes( 'Snow', 'Hot and humid');

  return (
    <div className="ui container">
      <div className="ui card">
        <div className="ui medium header">Things I Like</div>
        <div className="ui header small">Food</div>
        <div className="ui content">
          <ul className="ui content">
          <li className="ui content"><strong>Most</strong> &mdash;{food.most}</li>
          <li className="ui content"><strong>Least</strong> &mdash;{food.least}</li>
          </ul>
        </div>
      <div className="ui header small">Weather</div>
        <div className="ui content">
          <ul className="ui content">
          <li className="ui content"><strong>Most</strong> &mdash;{weather.most}</li>
          <li className="ui content"><strong>Least</strong> &mdash;{weather.least}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))



/* Scraps

// !VA  create a prop with the user's name
==========================================
const App = props => {
  return (
    <div className="ui card">
      <h2>My name is {myname}. </h2>
    </div>
  );
};
const myname = "Van";


// !VA Return the current time
==============================

function getTime() {
    return new Date().toLocaleTimeString();
}

const App = (props) => {
  return  ( // Don't forget the placement of the opening parenth!
  <div className="container" style={{width: '400px'}}>
    <div className="ui card" style={{width: '100%'}}>
      <h2 style={{ width: '800px'}}>The current time is: {time}</h2>
    </div>
  </div>
  );
}

// !VA My too-much-work solution
const d = new Date().toLocaleString();
console.log('d :>> ');
console.log(d);
let arr = d.split(',');
let time = arr[1];
console.log('time :>> ');
console.log(time);

// !VA  Get the square root of 144 using an arrow function to return the math
==============================================================================
// !VA The easy way
// const blob = Math.sqrt(144);
// !VA Using an arrow function
const blob = () => {
  return Math.sqrt(144);
}

const App = (props)=> {
  return (
    <div className="ui container">
      <div className="ui card">
        <p className="ui">SQRT = {blob()}</p>
      </div>
    </div>
  );
}

// !VA Constructors
// !VA ==========================================
// !VA In the App component, create an object Likes using a constructor function for thinks I like most and least. Note that arrow functions can't be used as constructors. Make it first as a function constructor then as a class constructor.
const App = () => {
  
// !VA This is how to make a function constructor
// function Likes( most, least ) {
//   this.most = most;
//   this.least = least;
// }
// let food = new Likes('Chocolate', 'Lima beans');
// let weather = new Likes('Snow', 'Hot and humid ');

// !VA This is how to make a class constructor
class Likes {
  constructor(most, least) {
    this.most = most;
    this.least = least;
  }
}
 
let food = new Likes( 'Chocolate', 'Lima beans');
let weather = new Likes( 'Snow', 'Hot and humid');

  return (
    <div className="ui container">
      <div className="ui card">
        <div className="ui medium header">Things I Like</div>
        <div className="ui header small">Food</div>
        <div className="ui content">
          <ul className="ui content">
          <li className="ui content"><strong>Most</strong> &mdash;{food.most}</li>
          <li className="ui content"><strong>Least</strong> &mdash;{food.least}</li>
          </ul>
        </div>
      <div className="ui header small">Weather</div>
        <div className="ui content">
          <ul className="ui content">
          <li className="ui content"><strong>Most</strong> &mdash;{weather.most}</li>
          <li className="ui content"><strong>Least</strong> &mdash;{weather.least}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}




*/