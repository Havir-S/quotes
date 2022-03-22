import { createStore } from '@reduxjs/toolkit';
import QUOTES from './quotes.js';

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

//PASS FORWARD THE STORE STATE
function mapStateToProps(defaultState) {
  return {

  }
}


//PASS FORWARD THE ROLL FUNCTION
const mapDispatchToProps = (dispatch) => {
  return {
    askForRoll: () => {
      dispatch(askForRoll());
    }
  }
}

const reducer = (defaultState, action) => {
  switch(action.type) {
    case ROLL:
    let chosenNumber = Math.floor(Math.random() * defaultState.quotes.length) + 1;
    return Object.assign({}, defaultState, {currentQuote: defaultState.quotes[chosenNumber]});
    break;
    default:
    return defaultState;
  }
  return {}
}

export const store = createStore(reducer);
