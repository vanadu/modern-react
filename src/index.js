import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// !VA Custom imports
import App from './components/App';
import reducers from './reducers';
// !VA NOTE: The order of redux and react-redux install is important, otherwise you get an error. Must be: npm install --save redux react-redux




ReactDOM.render(
<Provider store={ createStore(reducers) }>
  <App />
</Provider>, document.querySelector('#root')
);