import React from 'react';
// !VA import axios above the custom components as per convention
// import axios from 'axios';
// !VA 098 Refactor the import to refer to the unsplash.js file
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

// !VA 091 Refactor this into a class based component
// const App = () => {
//   return (
//     <div className="ui container" style={{marginTop:'10px'}}>
//       <SearchBar />
//     </div>
//   );
// };


class App extends React.Component {
  // !VA 091 Now we implement the search function by creating the onSearchSubmit function. It takes the term parameter, which is the search term captured by the onFormSubmit function.  

  // !VA 096 Set state on the images property on state object. Assuming the images property will contain an array, we initialize it as an array.
  state = { images: [] };

    // !VA 095 Refactor using async and await 
    // !VA 097 Remember that we have to bind 'this' to the correct context. To do that, we make onSearchSubmit an arrow function.  
     onSearchSubmit = async (term) => {
       // !VA 098 Refactored this, see below
      // const response = await axios 
      // !VA 098 Reference unsplash.js
        const response = await unsplash.get('/search/photos', {
        // !VA Moved the root URL to the baseURL function in unsplash.js
        // .get('https://api.unsplash.com/search/photos', {
        // !VA Moved the 'get' to unsplash.js
        // .get('/search/photos', {
          params: { query: term }
          // !VA 098 Moved this into the axios.create function in unsplash.js 
          // headers: {
          //   Authorization: 'Client-ID INpm-yRfMK8IJIeKJP08_wsN9eupEwhiMZwzHlzGVoU' 
          // }
        });
      // !VA 096 Call setState and set it to the images property defined above,  causing the component to rerender
        this.setState({ images: response.data.results })
    // !VA 094 Make the API call. The call returns a Promise which we handle here using a 'then'.
    // onSearchSubmit(term) {
    // axios.get('https://api.unsplash.com/search/photos', {
    //   params: { query: term },
    //   headers: {
    //     Authorization: 'Client-ID INpm-yRfMK8IJIeKJP08_wsN9eupEwhiMZwzHlzGVoU' 
    //   }
    // }).then((response) => {
    //   console.log(response.data.results);
    // });
  }  

  // !VA 091 Below, we pass the term argument down to the SearchBar by calling onSearchSubmit in the onSubmit prop of the SearchBar element. NOTE: onSubmit is not a protected, native property, unlike onChange and onFormSubmit
  // !VA 096 Now, print out the state as defined above. state contains the array of images. We just want the length, so get the length property of the returned array.
  render() { 
    return (
      <div className="ui container" style={{marginTop:'10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      Found: {this.state.images.length} images
    </div> 
    );
  }
}



export default App;