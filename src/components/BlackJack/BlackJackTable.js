import React, { Component } from 'react';
import './BlackJackTable.css';

class BlackJackTable extends Component {

  displayDealerCards = () => {
    if(this.props.stand) {
      return this.props.dealerKeys.map(card => card);
    } else if(this.props.dealerKeys.length > 0) {
      let dealerHand = this.props.dealerKeys.filter((card, index) => index !== 0);
      dealerHand.unshift(this.props.cardBack);
      return dealerHand.map(card => card);
    }
  }

  displayPlayerCards = () => {
    return this.props.playerKeys.map(none => none);
  }

  render() {
    return (
      <div className="App">
        <h3>Dealer Cards:</h3>
          <div className='dealerCards'>{this.displayDealerCards()}</div>
        <h3>Player Cards:</h3>
          <div className='playerCards'>{this.displayPlayerCards()}</div>
      </div>
    );
  }
}

export default BlackJackTable;