import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Press the button to spawn a quote!',
      author: ''
    }
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote() {
    this.props.rollNew();
    this.setState({
      quote: this.props.currentQuote.context,
      author: this.props.currentQuote.author
    })
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <p>{this.state.quote}</p>
        <p>{this.state.author}</p>
        <br/>
        <button onClick={this.changeQuote}>CLICK ME!</button>
      </div>
    )
  }
}

export default App;
