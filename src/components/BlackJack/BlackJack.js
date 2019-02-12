import React, { Component } from 'react';
import Cards from './Cards';
import BlackJackRounds from './BlackJackRounds';

class BlackJack extends Component {
  state = {
    cardBack : Cards.cardBack(),
    deck: [{'Two of Hearts': [2]}, {'Three of Hearts': [3]}, {'Four of Hearts': [4]}, {'Five of Hearts': [5]}, {'Six of Hearts': [6]}, {'Seven of Hearts': [7]}, {'Eight of Hearts': [8]}, {'Nine of Hearts': [9]}, {'Ten of Hearts': [10]}, {'Jack of Hearts': [10]}, {'Queen of Hearts': [10]}, {'King of Hearts': [10]}, {'Ace of Hearts': [1, 11]}, {'Two of Diamonds': [2]}, {'Three of Diamonds': [3]}, {'Four of Diamonds': [4]}, {'Five of Diamonds': [5]}, {'Six of Diamonds': [6]}, {'Seven of Diamonds': [7]}, {'Eight of Diamonds': [8]}, {'Nine of Diamonds': [9]}, {'Ten of Diamonds': [10]}, {'Jack of Diamonds': [10]}, {'Queen of Diamonds': [10]}, {'King of Diamonds': [10]}, {'Ace of Diamonds': [1, 11]}, {'Two of Clubs': [2]}, {'Three of Clubs': [3]}, {'Four of Clubs': [4]}, {'Five of Clubs': [5]}, {'Six of Clubs': [6]}, {'Seven of Clubs': [7]}, {'Eight of Clubs': [8]}, {'Nine of Clubs': [9]}, {'Ten of Clubs': [10]}, {'Jack of Clubs': [10]}, {'Queen of Clubs': [10]}, {'King of Clubs': [10]}, {'Ace of Clubs': [1, 11]}, {'Two of Spades': [2]}, {'Three of Spades': [3]}, {'Four of Spades': [4]}, {'Five of Spades': [5]}, {'Six of Spades': [6]}, {'Seven of Spades': [7]}, {'Eight of Spades': [8]}, {'Nine of Spades': [9]}, {'Ten of Spades': [10]}, {'Jack of Spades': [10]}, {'Queen of Spades': [10]}, {'King of Spades': [10]}, {'Ace of Spades': [1, 11]}],
    faceCards: [Cards.twoHearts(), Cards.threeHearts(), Cards.fourHearts(), Cards.fiveHearts(), Cards.sixHearts(), Cards.sevenHearts(), Cards.eightHearts(), Cards.nineHearts(), Cards.tenHearts(), Cards.jHearts(), Cards.qHearts(), Cards.kHearts(), Cards.aHearts(), Cards.twoDiamonds(), Cards.threeDiamonds(), Cards.fourDiamonds(), Cards.fiveDiamonds(), Cards.sixDiamonds(), Cards.sevenDiamonds(), Cards.eightDiamonds(), Cards.nineDiamonds(), Cards.tenDiamonds(), Cards.jDiamonds(), Cards.qDiamonds(), Cards.kDiamonds(), Cards.aDiamonds(), Cards.twoClubs(), Cards.threeClubs(), Cards.fourClubs(), Cards.fiveClubs(), Cards.sixClubs(), Cards.sevenClubs(), Cards.eightClubs(), Cards.nineClubs(), Cards.tenClubs(), Cards.jClubs(), Cards.qClubs(), Cards.kClubs(), Cards.aClubs(), Cards.twoSpades(), Cards.threeSpades(), Cards.fourSpades(), Cards.fiveSpades(), Cards.sixSpades(), Cards.sevenSpades(), Cards.eightSpades(), Cards.nineSpades(), Cards.tenSpades(), Cards.jSpades(), Cards.qSpades(), Cards.kSpades(), Cards.aSpades()],
    cardSelection: [],
    dealerHand: [],
    playerHand: [],
    dealerKeys: [],
    playerKeys: [],
    countRound: 0,
    stand: false
  }

  handleDealState = (dCardVal = [], dCardFace = [], pCardVal = [], pCardFace = [], card = []) => {
    this.setState({
      countRound: this.state.countRound += 1,
      dealerHand: [...this.state.dealerHand, ...dCardVal],
      dealerKeys: [...this.state.dealerKeys, ...dCardFace],
      playerHand: [...this.state.playerHand, ...pCardVal],
      playerKeys: [...this.state.playerKeys, ...pCardFace],
      cardSelection: card
    })
  }

  handleStand = () => {
    this.setState({ stand: !this.state.stand });
  }

  render() {
    // console.log('DEALER TOTAL', this.state.dealerTotal)
    // console.log('PLAYER TOTAL', this.state.playerTotal)
    // console.log('ROUND', this.state.countRound)
    // console.log('DEALER', this.state.dealerHand)
    // console.log('PLAYER', this.state.playerHand)
    // console.log('PLAYER STAND FALSE', this.state.playerStand)
    // console.log('DEALER STAND', this.state.dealerStand)
    // console.log('DECK', this.state.deck)
    // console.log('FACECARDS', this.state.faceCards)
    // console.log('STAND', this.state.stand)
    // console.log('DEALER KEYS', this.state.dealerKeys)
    // console.log('PLAYER KEYS', this.state.playerKeys)

    return (
      <div className="App">
          <BlackJackRounds cardBack={this.state.cardBack} deck={this.state.deck} faceCards={this.state.faceCards} handleDealState={this.handleDealState} dealerKeys={this.state.dealerKeys} playerKeys={this.state.playerKeys} dealerHand={this.state.dealerHand} playerHand={this.state.playerHand} cardSelection={this.state.cardSelection} countRound={this.state.countRound} handleStand={this.handleStand} stand={this.state.stand} handleTotals={this.handleTotals}/>
      </div>
    );
  }
}

export default BlackJack;