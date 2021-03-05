import React from 'react';

class SearchBar extends React.Component {
  // !VA 081 This method traps the keyboard events into the input element. 
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  // !VA  083 Now, we refactor the onInputChange method from uncontrolled to controlled. First, we set the term property of state. The term property could also be called 'action', I think since it refers to the action being executed by the state. Then, we add the value prop and call this.state.term in it.
  state = { term: ''};
  // !VA And in the onChange prop, we use the alternative method discussed in 082 to set the state of the term property. Then, we're passing the input from state back into the value property of the input, which writes it to the UI. So: 1) User enters input 2) callback is invoked with the onChange prop 3) setState is called, setting the new value of onChange the term property of state, i.e. the value of the keyboard event 4) setState forces a rerender of the component 5) the input element gets its value property from state, writing the value to the DOM. This is a CONTROLLED element.
  
  // !VA 089 In order to bind the value of this and avoid the error message from hell, we have to refactor the on forms submit function to be an arrow function. Don't forget that function expressions using the function key word cannot bind the value of this. For that, you have to use a constructor or an arrow function. 
  // onFormSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state.term);
  // }
  // !VA The below doesn't work, I don't know why. 
  // constructor() {
  //   super();
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  // !VA This is my preferred way to fix the Error message from hell, that is, using an arrow function to create the eventHandler. 
  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term);
    // !VA 091 Here we get access to the onSubmit callback that was passed from the App down to the SearchBar, we call it as a prop here. NOTE: in class components, we have to refer to props with THIS. That is NOT the case with functional components. 
    this.props.onSubmit(this.state.term);
  }
   
  render() {
    return (
      // !VA 081 In the input element add an onchange prop with a value of this.onInputChange. Note that we do not add parentheses to the end, even though this is a callback function to the method (I don't understand why this is a callback, but he specifically uses this term). We are not calling function per se, but rather passing a reference to it. If we call th at function with parentheses it will be one immediately. Instead, we want to call this function at some point in the future. 
      // !VA 082 this section discusses an alternate way to reference a callback: {(event) => console.log(event.target.value)}. This is functionally equivalent to function(e) {console.log(e.target.value);}, and it's basically just bypassing the onInputChange method to call the event object straight from the onChange prop in the input element. 
      // !VA 087 Now we have to disable the default form behavior and trap the enter key, so that when the user presses enter, our custom logic is executed. So create a this.onSubmit callback in the form element.  Then create the onFormSubmit handler in the body of the component and call the event object. Then in the body of the function we include the event.preventDefault to prevent the default action, which is form submission, from executing. 
      // !VA 089 Another way to fix the error message from hell with this is as below. Call onFormSubmit from within the on submit callback using an arrow function. 
      // !VA <form onSubmit={event => this.onFormSubmit(event)}className="ui form">
      <div className="ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;