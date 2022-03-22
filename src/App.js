import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'quote will go here',
      author: 'author name'
    }
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.quote}</p>
        <p>{this.state.author}</p>
        <br/>
        <button>click me to change quote</button>
      </div>
    )
  }
}

export default App;
