import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {askForRoll} from './app/actions.js';

import { Provider, connect } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
import { createStore } from '@reduxjs/toolkit';
import QUOTES from './app/quotes.js';
import BACKGROUNDPICTURES from './app/backgroundpics.js';
const ROLL = 'ROLL';

const defaultState = {
  currentQuote: {context: '',author: ''},
  quotes: QUOTES,
  backgroundpictures: BACKGROUNDPICTURES,
  backgroundPicLink: '',
  newColor: '#826ce0'
}

// const askForRoll = () => {
//   return {
//     type: ROLL
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     currentQuote: state.currentQuote,
//   }
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     rollNew: () => {
//       dispatch(askForRoll());
//     }
//   }
// }
//
// const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(App);



const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case ROLL:
    console.log(state);
    //generate new quote and make sure it's the same
    let chosenNumberQuote = Math.floor(Math.random() * QUOTES.length);
    while (state.currentQuote.context == state.quotes[chosenNumberQuote].context) {
      console.log('had to reroll');
      chosenNumberQuote = Math.floor(Math.random() * QUOTES.length);
    }

    //generate new picture and make sure it's the same
    let chosenNumberPicture = Math.floor(Math.random() * BACKGROUNDPICTURES.length);
    while (state.backgroundPicLink == state.backgroundpictures[chosenNumberPicture]) {
      console.log('had to reroll');
      chosenNumberPicture = Math.floor(Math.random() * BACKGROUNDPICTURES.length);
    }

    //generate random RGB string for a new color
    let newColor = '#', characters = ['0','1','2','3',"4",'5','6','7','8','9','a','b','c','d','e','f'];
    function chooseNewColor() {
      for (let i = 0; i < 6; i++) {
        newColor += characters[Math.floor(Math.random() * characters.length)];
      }
    }
    chooseNewColor();

    while (state.newColor == '#000000' || state.newColor == "#ffffff") {
      chooseNewColor();
    }

    console.log(newColor);
    return Object.assign({}, state, {currentQuote: state.quotes[chosenNumberQuote], backgroundPicLink: state.backgroundpictures[chosenNumberPicture], newColor: newColor});
    break;
    default:
    return state;
  }
}

const store = createStore(reducer);

//HAS TO STAY, FOR SOME REASON IF REMOVED, THE FIRST ROLL WILL ALWAYS BE EMPTY
store.dispatch(askForRoll());



//make it all in one file then reduce to folders

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
