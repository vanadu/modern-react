import React from 'react';

class SearchBar extends React.Component {
  // !VA Turn the input into a controlled component
  state = { term: ''};

  // !VA Event handler as arrow function
  onInputChange = (event) => {
    // !VA Set the state on the event
    this.setState({ term: event.target.value});
    // !VA Works!
    // console.log('this.state.term :>> ' + this.state.term);
  };

  onFormSubmit = (event) => {
    event.preventDefault();

  // !VA TODO: Callback from parent component goes here. This will be the onFormSubmit call from the App component, because as of yet, this method doens't do anything. This is where the call to the Youtube API will be made. Here it is -- it passes state.term to the parent where it is called in the SearchBar component's onFormSubmit prop, which runs the onTermSubmit handler.
    this.props.onFormSubmit(this.state.term);

  }


  render() {
    // !VA Add the onSubmit prop to do logic when the form is submitted, i.e. when the user hits enter. This is to override the default action, i.e. submitting the form, which will result by default in a page refresh
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text" 
              value={this.state.term}
              // !VA Event Handler Prop
              onChange={this.onInputChange}
              
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;