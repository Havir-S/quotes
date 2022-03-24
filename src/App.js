import React from 'react';
import './App.scss';
import ConnectedQuoteTab from './components/quote-tab.js';




class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
      <ConnectedQuoteTab />
      </div>
    )
  }
}

export default App;
