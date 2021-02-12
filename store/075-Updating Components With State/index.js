import React from 'react';
import ReactDOM from 'react-dom';

// !VA Create a component that generates a new random number ever second. NOTE: Again, to render the state before th first setInterval, duplicate the function when state is initiailized.
class App extends React.Component {
  state = { num: Math.floor(Math.random() * 10)};

  componentDidMount() {
    setInterval(() => {
        this.setState({ num: Math.floor(Math.random() * 10) })    
    }, 1000)
  }

  render() {
    return (
      <div className="content">
         The number is {this.state.num}.
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

/* !VA  
// !VA 075 Updating Components with State Solution
// !VA =============================================
class Clock extends React.Component {

  // state = { time: ''};
  // !VA Initialize state to be the current time - otherwise it won't render until the setInterval has passed below - compare above
  state = { time: new Date().toLocaleTimeString()};

  componentDidMount() {
      setInterval(() => {
          this.setState({ time: new Date().toLocaleTimeString() })    
      }, 1000)
  }
  
  render() {
      return (
          <div className="time">
              The time is: {this.state.time}
          </div>
      );
  }
}

// Renders the Clock component into a div with id 'root'
ReactDOM.render(<Clock />, document.querySelector('#root'));


// !VA RANDOM NUMBER: Create a component that generates a new random number ever second
// !VA =================================================================
class App extends React.Component {
  state = { num: Math.floor(Math.random() * 10) };

  componentDidMount() {
    setInterval(() => {
        this.setState({ num: Math.floor(Math.random() * 10) })    
    }, 1000)
  }

  render() {
    return (
      <div className="content">
         The number is {this.state.num}.
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));





*/