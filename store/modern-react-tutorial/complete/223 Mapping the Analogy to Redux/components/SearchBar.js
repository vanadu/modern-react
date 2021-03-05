import { useState } from 'react';

// !VA 207 onFormSubmit is passed down now as a prop
const SearchBar = ({ onFormSubmit }) => {
  const [ term, setTerm] = useState('');

  // !VA Event handler as arrow function
  // !VA 207 Refactor these two event handlers by making them functions rather than methods of the class component. This requires adding the const keyword.
  // !VA 207 The this keyword isn't a concept in functional components, nor is setState.
  // !VA 207 And this function is so short, it can be written inline in the return statement below.
  // const onInputChange = (event) => {
    // !VA Set the state on the event
    // this.setState({ term: event.target.value});
    // !VA 207
    // setTerm(event.target.value);
  // };

  // !VA 207 onFormSubmit is already the name of the prop that will be passed in, so using it as a function name will result in a name conflict. Solution: change the name to onSubmit
  const onSubmit = (event) => {
    event.preventDefault();
  // !VA TODO: Callback from parent component goes here. This will be the onFormSubmit call from the App component, because as of yet, this method doens't do anything. This is where the call to the Youtube API will be made. Here it is -- it passes state.term to the parent where it is called in the SearchBar component's onFormSubmit prop, which runs the onTermSubmit handler.
    // this.props.onFormSubmit(this.state.term);
    // !VA 207 
    onFormSubmit(term);
  };
  // !VA 207 Now update all the JSX: this.onFormSubmit => onSubmit, this.state.term =>  term, this.onInputChange => onInputChange. Then, the onInputChange function above can be written inline below as (event) => setTerm(event.target.value)
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input 
            type="text" 
            value={term}
            // !VA Event Handler Prop
            onChange={ (event) => setTerm(event.target.value)}
            
          />
        </div>
      </form>
    </div>
  ); 

}


export default SearchBar;