import React from 'react';


/////////////////////////////////////////////
const ROLL = 'ROLL';
////////////////////////////////////////////
//default action type, asks for reroll
const askForRoll = () => {
  return {
    type: ROLL
  }
}

//////////////////////////////////////
//giving current quote and backgroundpic to components
const mapStateToProps = (state) => {
  return {
    currentQuote: state.currentQuote,
    backgroundPicLink: state.backgroundPicLink,
    newColor: state.newColor
  }
};

//askforroll is the function to roll for another quote
const mapDispatchToProps = (dispatch) => {
  return {
    rollNew: () => {
      dispatch(askForRoll());
    }
  }
}

export {mapDispatchToProps, mapStateToProps, askForRoll}
