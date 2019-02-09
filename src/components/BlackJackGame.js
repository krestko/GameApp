import React, { Component } from 'react';
import BlackJackTable from './BlackJackTable';
import HandleScores from './HandleScores'

class BlackJackGame extends Component {

  handlePlayerDeal = (card) => {
    this.props.handlePlayerHand(card);
    this.props.handlePlayerTotal(HandleScores.cardValue(card));
  }

  handleDealerDeal = (card) => {
    this.props.handleDealerHand(card);
    this.props.handleDealerTotal(HandleScores.cardValue(card));
  }

  handleFaceCard = (card) => {
    let checkPlayer = this.props.handleTrackTurns();
    if(this.props.countRound === 0 || this.props.countRound === 2) {
      this.props.savePlayerKey(card);
    }else if(this.props.countRound === 1 || this.props.countRound === 3) {
      this.props.saveDealerKey(card);
    }else if(this.props.countRound > 3 && checkPlayer === 'Player') {
      this.props.savePlayerKey(card);
    }else if(this.props.countRound > 3 && checkPlayer === 'Dealer') {
      this.props.saveDealerKey(card);
    }else{
    return;
    }
  }

  handleDealtCard = () => {
    this.props.handleRound();
    let card = [];
    let face = [];
    let holdCard = this.props.deck[Math.floor(Math.random() * this.props.deck.length)];
    let indexHoldCard = this.props.deck.findIndex(card => card === holdCard)
    card.push(holdCard);
    face.push(this.props.faceCards[indexHoldCard]);
    this.handleFaceCard(face);
    this.props.handleRemoveCard(indexHoldCard);
    return card;
  }

  mapCards = (cards) => {
    let total = 0;
    cards.map(card => {
      for(let key in card) {
        if(card[key].length > 1) {
          total += 11;
        } else {
          total += card[key][0];
        }
      }
    })
    return total;
  }

  checkForNatural = (dealerCards, playerCards) => {
    if(dealerCards === 21 && playerCards === 21) {
      return 'GAME TIE';
    } else if(dealerCards !== 21 && playerCards === 21) {
      return 'PLAYER NATURAL WIN';
    } else if(playerCards !== 21 && dealerCards === 21) {
      return 'DEALER NATURAL WIN';
    }
  }

  handleDeal = (card, player, dealer) => {
    let checkPlayer = this.props.handleTrackTurns();
    if(this.props.countRound === 0 || this.props.countRound === 2) {
      return player(card);
    } else if(this.props.countRound === 1 || this.props.countRound === 3) {
      return dealer(card);
    } else if(this.props.countRound > 3 && checkPlayer === 'Player') {
      return player(card);
    } else if(this.props.countRound > 3 && checkPlayer === 'Dealer') {
      return dealer(card);
    }
  }

  render() {
    if(this.props.dealerTotal > 21) {
      return <p>DEALER BUSTS: {this.props.dealerKeys}</p>
    } else if(this.props.playerTotal > 21) {
      return <p>PLAYER BUSTS</p>
    }

    return (
      <div className="App">
      <div>{this.checkForNatural(this.mapCards(this.props.dealerHand), this.mapCards(this.props.playerHand))}</div>
        <button onClick={() => this.handleDeal(this.handleDealtCard(), this.handlePlayerDeal, this.handleDealerDeal)}>{this.props.dealerHand.length >= 2 ? 'Hit' : 'Deal' }</button>

        {this.props.dealerHand.length >= 2 ? <button onClick={() => this.props.handleStand()}>Stand</button> : null}

        <BlackJackTable cardBack={this.props.cardBack} dealerHand={this.props.dealerHand} playerHand={this.props.playerHand} dealerKeys={this.props.dealerKeys} playerKeys={this.props.playerKeys} faceCards={this.props.faceCards} countRound={this.props.countRound} handleTrackTurns={this.props.handleTrackTurns}/>
      </div>
    );
  }
}

export default BlackJackGame