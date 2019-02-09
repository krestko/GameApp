import React, { Component } from 'react';
import HandleScores from './HandleScores'
import './BlackJackTable.css';

class BlackJackTable extends Component {

  displayDealerCards = () => {
    if(this.props.countRound > 3 && this.props.handleTrackTurns() === 'Dealer') {
      return this.props.dealerKeys.map(card => card);
    }
    let firstHand = this.props.dealerKeys.filter((card, index) => index !== 0);
    firstHand.unshift(this.props.cardBack);
    return firstHand.map(card => card);
  }

  displayPlayerCards = () => {
    return this.props.playerKeys.map(none => none);
  }

  render() {
    return (
      <div className="App">
      {/* {this.props.cardBack} */}
        <h3>Dealer Cards:</h3>
          <div className='dealerCards'>{this.props.dealerKeys.length > 0 ? this.displayDealerCards() : null}</div>
        <h3>Player Cards:</h3>
          <div className='playerCards'>{this.displayPlayerCards()}</div>
      </div>
    );
  }
}

export default BlackJackTable;