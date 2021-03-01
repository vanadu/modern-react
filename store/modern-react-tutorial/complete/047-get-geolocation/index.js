import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// !VA We must use a class-based component for this because we need the state in order to make this async.  
class App extends React.Component {
  // !VA The constructor is always called first in a React class component. It's always called with the props object. The first function called within it is the super function which takes the props argument. The super function is a React-native constructor that is required after constructor declaration. Without super, React throws an error on the constructor. This is one way to initialize state.
  // constructor(props) {
    // super(props);
    // !VA Initialize state with the property lat, that will be updated with the latitude, and the errorMessage, that will display the error message returned from getCurrentPosition if the call to it fails. Initialize lat with 'null' and errorMessage with ''. Their properties will be updated with setState once the call returns values.
    // !VA Now we are refactoring to remove this state initialization from the constructor, see below...
    // this.state = { lat: null, errorMessage: '' };

    // !VA In class components, The render method is called very frequently. For that reason it's bad practice to include any function or methods in the render method. It's best to put them in the constructor where they are called were initialized when the component itself is initialized and therefore only run once. Actually, it's best practice NOT to put them here, but rather in the lifecycle methods. Data loading code is generally localized in componentDidMount in order to keep it all in one predictable place. So we moved the data loading call to componentDidMount and now the ONLY purpose this constructor function has is to initialize state!!! 

    // !VA And now we will get rid of the constructor function completely by just initializing state before calling componentDidMount in the body of the class.

  // }

  // !VA Now we have refactored the constructor to initialize state here. This is the short form, compare the long form in the constructor above. This is functionally equivalent to initializing state in the constructor. Which begs the question: What is the constructor needed for anyway?
  state = { lat: null, errorMessage: '' }

  // !VA Now we're going to implement the componentDidMount and componentDidUpdate methods just to show how they work. 
  componentDidMount( ) {
    console.log('My component was rendered to the screen');
    window.navigator.geolocation.getCurrentPosition(
      // !VA Callbacks (success, error ) to getCurrentPosition use a simple arrow function for an expression with a single parameter instead of a function expression. We want to use the position callback to populate our state so it can be updated when the value is returned from getCurrentPosition. So we set the state in the positon callback using setState. setState takes the state object as parameter, i.e. the propety that is defined in this.state above. So we need to set that property to the property of the position object returned by getCurrentPosition, i.e. position.coords.latitude, and we need to set the err callback to set the state to the error message returned by getCurrentPosition if the call to it fails.
      // !VA The following function call can be reduced to a one-liner
      // position => {
      //   this.setState({ lat: position.coords.latitude });
      // },
      position => this.setState({ lat: position.coords.latitude }),
      // !VA This one too
      // err => {
      //   this.setState({ errorMessage: err.message })
      // }
      err => this.setState({ errorMessage: err.message })
    ) 
  }

  componentDidUpdate() {
    console.log('My component was just updated-it RE rendered! ');
  }


  render() {
    // !VA To set conditional JSX output based on the value of state, we do it in the render function:
    // !VA NOTE: There's no point in doing an if else structure here since the call will only be one of three things. A succession of if statements is easier to read so we'll do that. 

    // !VA An error message but no latitude was returned
    if (this.state.errorMessage && !this.state.lat ) {
      return <div className="ui">Error: {this.state.errorMessage}</div>
    // !VA A latitude but no errorMessage was returned
    }

    // !VA This is where the data is returned from the geolocation call. We will replace their return statement with th the SeasonDisplay component. The SeasonDisplay component will parse the latitude and the month and determine whether the season is winter or summer. Don't forget that drops flow from parent to child. Which means that we initialize the props here and assign state to them, which is then picked up and processed by the child component, i.e. SeasonDisplay. So, add the lat prop here and assign this.state.lat to it. NOTE: We are passing state as a prop down to a child component. This is one of the fundamental aspects of state. It means that child components are updated whenever state is updated And that the child component is rerendered along with state.  
    if ( !this.state.errorMesage && this.state.lat) {
      return <SeasonDisplay lat="this.state.lat" /> 
    // !VA state has no value, which means the getCurrentPosition call has not returned yet
    }
    
    // !VA Include the spinner component while we wait for the location call to return. 
    if ( !this.state.errorMessage && !this.state.lat ) {
      return <Spinner />
    } 

    // return (
    //   // !VA Once state has been initialized in the constructor, we can set it to the lat property AND the errorMessage in the JSX.
    //   <div>
    //   Latitude: {this.state.lat} <br/>
    //   Error: {this.state.errorMessage}
    //   </div>
    // );
  }
}

export default App;


// const App = () => {


//   // !VA Callbacks to getCurrentPosition use a simple arrow function for an expression with a single parameter instead of a function expression
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   )
  
//     return (
//       <div className="content">
//          I am a functional component.
//       </div>
//  );
// }

ReactDOM.render(<App />, document.querySelector('#root'));