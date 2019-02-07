import React, { Component } from 'react';
import BlackJackGame from '../components/BlackJackGame'

class BlackJackPage extends Component {
  state = {
    deck: [{2: 'hearts'}, {3: 'hearts'}, {4: 'hearts'}, {5: 'hearts'}, {6: 'hearts'}, {7: 'hearts'}, {8: 'hearts'}, {9: 'hearts'}, {10: 'hearts'}, {'jack': 'hearts'}, {'queen': 'hearts'}, {'king': 'hearts'}, {'ace': 'hearts'}, {2: 'diamonds'}, {3: 'diamonds'}, {4: 'diamonds'}, {5: 'diamonds'}, {6: 'diamonds'}, {7: 'diamonds'}, {8: 'diamonds'}, {9: 'diamonds'}, {10: 'diamonds'}, {'jack': 'diamonds'}, {'queen': 'diamonds'}, {'king': 'diamonds'}, {'ace': 'diamonds'}, {2: 'clubs'}, {3: 'clubs'}, {4: 'clubs'}, {5: 'clubs'}, {6: 'clubs'}, {7: 'clubs'}, {8: 'clubs'}, {9: 'clubs'}, {10: 'clubs'}, {'jack': 'clubs'}, {'queen': 'clubs'}, {'king': 'clubs'}, {'ace': 'clubs'}, {2: 'spades'}, {3: 'spades'}, {4: 'spades'}, {5: 'spades'}, {6: 'spades'}, {7: 'spades'}, {8: 'spades'}, {9: 'spades'}, {10: 'spades'}, {'jack': 'spades'}, {'queen': 'spades'}, {'king': 'spades'}, {'ace': 'spades'}],
    dealerHand: [],
    playerHand: []
  }

  handleRemoveCard = (card) => {
    const newDeck = this.state.deck.filter((deckCard, index) => index !== card) 
    this.setState({ deck: newDeck })
  }

  handleDeal = () => {
    let card = [];
    let holdCard = this.state.deck[Math.floor(Math.random() * this.state.deck.length)];
    let indexHoldCard = this.state.deck.findIndex(card => card === holdCard)
    card.push(holdCard);
    this.handleRemoveCard(indexHoldCard)
    return card;
  }

  handleDealerHand = (cards) => {
    this.setState({ dealerHand: [...this.state.dealerHand, ...cards] })
  }

  handlePlayerHand = (cards) => {
    this.setState({ playerHand: [...this.state.playerHand, ...cards] })
  }

  render() {

    return (
      <div className="App">
        <h1>Blackjack</h1>
        <BlackJackGame deck={this.state.deck} dealerHand={this.state.dealerHand} playerHand={this.state.playerHand} handleDeal={this.handleDeal} handleDealerHand={this.handleDealerHand} handlePlayerHand={this.handlePlayerHand}/>
      </div>
    );
  }
}

export default BlackJackPage;