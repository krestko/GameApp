import React, { Component } from 'react';
import BlackJackBoard from '../components/BlackJackBoard'

class BlackJackPage extends Component {
  state = {
    deckNumCards: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'],
    deckFaceCards: ['hearts', 'diamonds', 'clubs', 'spades'],
    dealerHand: null,
    playerHand: null
  }

  handleDeal = () => {
    let numCards = [];
    numCards.push(this.state.deckNumCards[Math.floor(Math.random() * this.state.deckNumCards.length)]);
    numCards.push(this.state.deckFaceCards[Math.floor(Math.random() * this.state.deckFaceCards.length)]);
    return numCards;
  }

  handleDealerHand = (cards) => {
    this.setState({ dealerHand: cards })
  }

  handlePlayerHand = (cards) => {
    this.setState({ playerHand: cards })
  }

  render() {
    return (
      <div className="App">
        <h1>Blackjack</h1>
        <BlackJackBoard deckNumCards={this.state.deckNumCards} deckFaceCards={this.state.deckFaceCards} dealerHand={this.state.dealerHand} playerHand={this.state.playerHand} handleDeal={this.handleDeal} handleDealerHand={this.handleDealerHand} handlePlayerHand={this.handlePlayerHand}/>
      </div>
    );
  }
}

export default BlackJackPage;