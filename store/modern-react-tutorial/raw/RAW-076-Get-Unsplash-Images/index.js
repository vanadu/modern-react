/* !VA  
This is a very difficult exercise.

api
* Create the api folder and create unsplash.js
* THis is where the axios call goes, so import axios and export an instance of the axios client. In it, declare the baseURL and the headers properties, where the Auth key is provided.

App
* Initialize state with an array 'images' with a default value of an empty array
* Do an async/await on the unsplash.get call, passing in the URL of the unsplash API and the params property.
* Set state to the response, i.e. the data.results property of the return object.
* In the render function, return:
  div.ui.container
    <SearchBar ..../> and the code to submit the form
    <ImageList .../> and the code to pass the images as props
SearchBar
  * Initialize state with the term, i.e. the search term
  * In the component body, include the event handler for form submission.
  * In the render function, return this JSX:
      div.ui.segment
      form.ui.form
      div.field
        input - and the appropriate value prop and onChange callback

ImageCard
  * Initialize state to the spans property to 0 - the spans property will contain a number.
  * Initialise the ref to get the image dimensions
  * Call a load eventListeneron the ref with a callback to the setSpans function
  * Declare the setSpans funciton that gets the height of the current image and sets its 'spans'.
  * In the render function, get the props from the image and destricture them into their respective properties
  * Return this JSX:
      div
        img - and include the description, the src and ref props


ImageList
  * This is a functional component, so get the props.
  * Map over the props and return the <ImageCard component tag with the key prop and image prop.
  * Return out this JSX:
    div.image-list - and include the images prop.



*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';



ReactDOM.render(<App />, document.querySelector('#root'));