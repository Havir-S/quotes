import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'quote will go here',
      author: 'author name'
    }
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote() {
    this.props.rollNew();
    this.setState({
      quote: this.props.test.currentQuote.context,
      author: this.props.test.currentQuote.author
    })
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <p>{this.state.quote}</p>
        <p>{this.state.author}</p>
        <br/>
        <button onClick={this.changeQuote}>click me to change quote</button>
      </div>
    )
  }
}

export default App;
