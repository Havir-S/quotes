import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider, connect } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
import { createStore } from '@reduxjs/toolkit';
import QUOTES from './app/quotes.js';
const ROLL = 'ROLL';

const defaultState = {
  currentQuote: {context: '',author: ''},
  quotes: QUOTES
}

const askForRoll = () => {
  return {
    type: ROLL
  }
}

const mapStateToProps = (state) => {
  return {
    test: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    rollNew: () => {
      dispatch(askForRoll());
    }
  }
}

const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(App);



const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case ROLL:
    let chosenNumber = Math.floor(Math.random() * QUOTES.length) + 1;
    console.log(chosenNumber);
    return Object.assign({}, state, {currentQuote: state.quotes[chosenNumber]});
    break;
    default:
    return state;
  }
}

const store = createStore(reducer);

console.log(store.dispatch(askForRoll()));
console.log(store.getState());
console.log(store.dispatch(askForRoll()));
console.log(store.getState());
console.log(store.dispatch(askForRoll()));
console.log(store.getState());

//make it all in one file then reduce to folders

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <ConnectedApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
