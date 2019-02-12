import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlackJack from './BlackJack/BlackJack'

class Games extends Component {
  state = {
    test: false
  }

  displayBlackJack = () => {
    this.setState({ test: !this.state.test })
  }

  render() {
    let blackjack = null;
    if( this.state.test ) {
      blackjack = <div><BlackJack /></div>
    }

    return (
        <div className='App'>
          <h2>GAMES:</h2>
          <button onClick={() => this.displayBlackJack()}>BlackJack</button>
          {blackjack}
        </div>
    );
  }
}

export default Games;