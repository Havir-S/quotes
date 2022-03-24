import React from 'react';
import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps, askForRoll} from '../app/actions.js';
const ROLL = 'ROLL';
import $ from 'jquery';



class QuoteTab extends React.Component {
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
  componentDidMount() {
    this.changeQuote();
  }

  render() {
    //to fix, doesn't work now
    // $('p').animate(
    //   {
    //     backgroundColor: this.props.newColor,
    //     color: this.props.newColor
    //   }
    //  );
    $('.App, .link, button').css('background-color',this.props.newColor);
    $('#text, #author').css('color',this.props.newColor);

    return (
      <div className='wrapper'>
        <div id='quote-box' >
          <div id='text'>
            <p><i className="bi-quote" style={{fontSize: '2rem', color: this.props.newColor}} />{this.state.quote}</p>
          </div>
          <div id='author'>
            <p>~ {this.state.author}</p>
          </div>
          <div className='services'>
              <div className='linkBox'>
                <a className='link' id='tweet-me' href='twitter.com/intent/tweet'><i className='bi-twitter'/></a>
                <a className='link' id='tweet-me' href='twitter.com/intent/tweet'><i className='bi-facebook'/></a>
                <a className='link' id='tweet-me' href='twitter.com/intent/tweet'><i className='bi-reddit'/></a>
              </div>
              <button onClick={this.changeQuote} id='new-quote'>New Quote</button>
          </div>
          </div>
        <div className='outside'>
            <div className='appAuthorHolder'>
              <span><a>- by Havir</a></span>
            </div>
        </div>
      </div>
    )
  }
}



const ConnectedQuoteTab = connect(mapStateToProps,mapDispatchToProps)(QuoteTab);


export default ConnectedQuoteTab;
