import React, { Component } from 'react';
import Cards from './Cards';
import BlackJackGame from '../components/BlackJackGame';
import '../App.css'

class BlackJackPage extends Component {
  state = {
    cardBack : Cards.cardBack(),
    deck: [{'Two of Hearts': [2]}, {'Three of Hearts': [3]}, {'Four of Hearts': [4]}, {'Five of Hearts': [5]}, {'Six of Hearts': [6]}, {'Seven of Hearts': [7]}, {'Eight of Hearts': [8]}, {'Nine of Hearts': [9]}, {'Ten of Hearts': [10]}, {'Jack of Hearts': [10]}, {'Queen of Hearts': [10]}, {'King of Hearts': [10]}, {'Ace of Hearts': [1, 11]}, {'Two of Diamonds': [2]}, {'Three of Diamonds': [3]}, {'Four of Diamonds': [4]}, {'Five of Diamonds': [5]}, {'Six of Diamonds': [6]}, {'Seven of Diamonds': [7]}, {'Eight of Diamonds': [8]}, {'Nine of Diamonds': [9]}, {'Ten of Diamonds': [10]}, {'Jack of Diamonds': [10]}, {'Queen of Diamonds': [10]}, {'King of Diamonds': [10]}, {'Ace of Diamonds': [1, 11]}, {'Two of Clubs': [2]}, {'Three of Clubs': [3]}, {'Four of Clubs': [4]}, {'Five of Clubs': [5]}, {'Six of Clubs': [6]}, {'Seven of Clubs': [7]}, {'Eight of Clubs': [8]}, {'Nine of Clubs': [9]}, {'Ten of Clubs': [10]}, {'Jack of Clubs': [10]}, {'Queen of Clubs': [10]}, {'King of Clubs': [10]}, {'Ace of Clubs': [1, 11]}, {'Two of Spades': [2]}, {'Three of Spades': [3]}, {'Four of Spades': [4]}, {'Five of Spades': [5]}, {'Six of Spades': [6]}, {'Seven of Spades': [7]}, {'Eight of Spades': [8]}, {'Nine of Spades': [9]}, {'Ten of Spades': [10]}, {'Jack of Spades': [10]}, {'Queen of Spades': [10]}, {'King of Spades': [10]}, {'Ace of Spades': [1, 11]}],
    faceCards: [Cards.twoHearts(), Cards.threeHearts(), Cards.fourHearts(), Cards.fiveHearts(), Cards.sixHearts(), Cards.sevenHearts(), Cards.eightHearts(), Cards.nineHearts(), Cards.tenHearts(), Cards.jHearts(), Cards.qHearts(), Cards.kHearts(), Cards.aHearts(), Cards.twoDiamonds(), Cards.threeDiamonds(), Cards.fourDiamonds(), Cards.fiveDiamonds(), Cards.sixDiamonds(), Cards.sevenDiamonds(), Cards.eightDiamonds(), Cards.nineDiamonds(), Cards.tenDiamonds(), Cards.jDiamonds(), Cards.qDiamonds(), Cards.kDiamonds(), Cards.aDiamonds(), Cards.twoClubs(), Cards.threeClubs(), Cards.fourClubs(), Cards.fiveClubs(), Cards.sixClubs(), Cards.sevenClubs(), Cards.eightClubs(), Cards.nineClubs(), Cards.tenClubs(), Cards.jClubs(), Cards.qClubs(), Cards.kClubs(), Cards.aClubs(), Cards.twoSpades(), Cards.threeSpades(), Cards.fourSpades(), Cards.fiveSpades(), Cards.sixSpades(), Cards.sevenSpades(), Cards.eightSpades(), Cards.nineSpades(), Cards.tenSpades(), Cards.jSpades(), Cards.qSpades(), Cards.kSpades(), Cards.aSpades()],
    dealerHand: [],
    playerHand: [],
    dealerKeys: [],
    playerKeys: [],
    dealerTotal: 0,
    playerTotal: 0,
    naturalResults: '',
    countRound: 0,
    dealerStand: false,
    playerStand: false
  }

  saveDealerKey = (faceCard) => {
    this.setState({ dealerKeys: [...this.state.dealerKeys, faceCard] })
  }

  savePlayerKey = (faceCard) => {
    this.setState({ playerKeys: [...this.state.playerKeys, faceCard] })
  }

  handleDealerHand = (cards) => {
    this.setState({ dealerHand: [...this.state.dealerHand, ...cards] })
  }

  handlePlayerHand = (cards) => {
    this.setState({ playerHand: [...this.state.playerHand, ...cards] })
  }

  handleTrackTurns = () => {
    if(this.state.countRound === 0 || this.state.countRound === 2) {
      return 'Player';
    } else if(this.state.countRound === 1 || this.state.countRound === 3) {
      return 'Dealer';
    } else if(this.state.countRound > 3 && this.state.playerStand === false) {
      return 'Player';
    } else if(this.state.playerStand === true && this.state.dealerStand === false) {
      return 'Dealer';
    }
  }

  handleStand = () => {
    if(this.state.playerHand.length >= this.state.dealerHand.length && this.state.playerStand === false) {
      this.setState({ playerStand: true });
    } else if(this.state.playerStand === true) {
      this.setState({ dealerStand: true });
    }
  }

  handleRound = () => {
    this.setState({ countRound: this.state.countRound += 1})
  }

  handleDealerTotal = (value) => {
    this.setState({ dealerTotal: this.state.dealerTotal += value })
  }

  handlePlayerTotal = (value) => {
    this.setState({ playerTotal: this.state.playerTotal += value })
  }

  handleRemoveCard = (card) => {
    const newFaceDeck = this.state.faceCards.filter((faceCard, index) => index !== card);
    const newDeck = this.state.deck.filter((deckCard, index) => index !== card); 
    this.setState({ 
      deck: newDeck,
      faceCards: newFaceDeck
    })
  }

  // handleNatural = (result) => {
  //   this.setState({ naturalResults: result })
  // }

  render() {
    if(this.state.dealerTotal === 21) {
      return <p>DEALER BLACKJACK</p>
    }
    if(this.state.playerTotal === 21) {
      return <p>PLAYER BLACKJACK</p>
    }
    if(this.state.dealerStand && this.state.playerStand) {
      if(this.state.dealerTotal > this.state.playerTotal) {
        return <p>DEALER WINS!</p>
      } else if(this.state.playerTotal > this.state.dealerTotal) {
        return <p>PLAYER WINS!</p>
      } else if(this.state.playerTotal === this.state.dealerTotal) {
        return <p>GAME DRAW</p>
      }
    }
    console.log('DEALER TOTAL', this.state.dealerTotal)
    console.log('PLAYER TOTAL', this.state.playerTotal)
    console.log('ROUND', this.state.countRound)
    console.log('DEALER', this.state.dealerHand)
    console.log('PLAYER', this.state.playerHand)
    console.log('PLAYER STAND FALSE', this.state.playerStand)
    console.log('DEALER STAND', this.state.dealerStand)
    console.log('DECK', this.state.deck)
    console.log('FACECARDS', this.state.faceCards)
    console.log('PLAYER STAND TRUE', !this.state.playerStand)
    console.log('DEALER KEYS', this.state.dealerKeys)
    console.log('PLAYER KEYS', this.state.playerKeys)

    return (
      <div className="App">
        <h1>Blackjack</h1>
          {this.handleTrackTurns()}
          <BlackJackGame cardBack={this.state.cardBack} deck={this.state.deck} faceCards={this.state.faceCards} dealerHand={this.state.dealerHand} playerHand={this.state.playerHand} handleDealerHand={this.handleDealerHand} handlePlayerHand={this.handlePlayerHand} dealerTotal={this.state.dealerTotal} playerTotal={this.state.playerTotal} handleStand={this.handleStand} countRound={this.state.countRound} handleRound={this.handleRound}handlePlayerTotal={this.handlePlayerTotal} handleDealerTotal={this.handleDealerTotal} handleRemoveCard={this.handleRemoveCard} saveDealerKey={this.saveDealerKey} savePlayerKey={this.savePlayerKey} dealerKeys={this.state.dealerKeys} playerKeys={this.state.playerKeys} handleTrackTurns={this.handleTrackTurns} />
      </div>
    );
  }
}

export default BlackJackPage;