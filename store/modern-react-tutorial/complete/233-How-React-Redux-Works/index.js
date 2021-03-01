// !VA Third-party dependency imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// !VA Custom imports - defined by me. reducers are the reducers defined in the index.js in the /reducers subfolder - don't forget that if the filename in the folder is index.js, then the filename doesn't have to be explicity stated.
import App from './components/App';
import reducers from './reducers';
// !VA NOTE: The order of redux and react-redux install is important, otherwise you get an error. Must be: npm install --save redux react-redux



// !VA 237 The Provider tag needs to be the top-most tag in the render tree. 
// !VA 237 The Provider gets a single prop: store, which gets the function in the createStore import and the reducers is the reducers defined in index.js in the /reducers folder.
ReactDOM.render(
<Provider store={ createStore(reducers) }>
  <App />
</Provider>, document.querySelector('#root')
);