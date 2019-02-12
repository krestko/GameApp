import React, { Component } from 'react';
import BlackJackLogic from './BlackJackLogic';

class BlackJackRounds extends Component {

  saveDealer = (dealerH, dealerF, deckIndex) => {
    dealerH.push(this.props.deck[deckIndex]);
    dealerF.push(this.props.faceCards[deckIndex]);
  }

  savePlayer = (playerH, playerF, deckIndex) => {
    playerH.push(this.props.deck[deckIndex]);
    playerF.push(this.props.faceCards[deckIndex]);
  }

  firstHand = (indexNums, dealerHand, dealerFace, playerHand, playerFace) => {
    indexNums.map((deckIndex, gameIndex) => {
      if(gameIndex === 0 || gameIndex % 2 === 0) {
        this.saveDealer(dealerHand, dealerFace, deckIndex);
      } else {
        this.savePlayer(playerHand, playerFace, deckIndex);
      }
    })
  }

  saveDeal = (indexNums, hand) => {
    let dealerHand = [];
    let dealerFace = [];
    let playerHand = [];
    let playerFace = [];
    if(hand === 'first') {
      this.firstHand(indexNums, dealerHand, dealerFace, playerHand, playerFace)
    } else if(hand === 'dealer') {
      this.saveDealer(dealerHand, dealerFace, indexNums[indexNums.length - 1]);
    } else if(hand === 'player') {
      this.savePlayer(playerHand, playerFace, indexNums[indexNums.length - 1]);
    }
    return this.props.handleDealState(dealerHand, dealerFace, playerHand, playerFace, indexNums);
  }

  selectCard = (random) => {
    let deck = Array.from(Array(53).keys());
    let card = deck[Math.floor(Math.random() * deck.length)];
    let cardIndex = deck.indexOf(card);
    if(!random.includes(card) || random.length === 0) {
      return cardIndex;
    } else {
      return this.selectCard(random)
    }
  }

  deal = (count, random, hand) => {
    if(count > 0) {
      let cardIndex = this.selectCard(random);
      random.push(cardIndex)
      this.deal(count -= 1, random, hand);
    } else {
      return this.saveDeal(random, hand);
    }
  }

  calculateTotal = (person) => {
    let aceHolder = [];
    let total = 0;
    person.map(card => {
      for(let key in card) {
        if(card[key].length > 1) {
          total += 11;
          aceHolder.push(card[key]);
        } else {
          total += card[key][0];
        }
      }
    })
    if(total > 21 && aceHolder.length > 0) {
      total = 0;
      person.map(card => {
        for(let key in card) {
          if(card[key].length > 1) {
            total += 1;
            aceHolder.push(card[key]);
          } else {
            total += card[key][0];
          }
        }
      })
      return total;
    } else {
    return total;
    }
  }

  saveDealerState = (hand, dealerHand, cardHolder) => {
    let dealerH = [];
    let dealerF = [];
    if(hand.length > dealerHand.length) {
      cardHolder.map(card => {
        dealerH.push(this.props.deck[card]);
        dealerF.push(this.props.faceCards[card]);
      })
    }
    this.props.handleDealState(dealerH, dealerF);
    this.props.handleStand();
  }

  checkDealerHit = (cards, hand, count, cardHolder) => {
    if(count === 6) {
      cards = cards.filter(card => card);
      hand = hand.filter(card => card);
      this.checkDealerHit(cards, hand, count -= 1, cardHolder);
    } else if(count > 0) {
      let dealerTotal = this.calculateTotal(hand);
      if(dealerTotal >= 17) {
        this.saveDealerState(hand, this.props.dealerHand, cardHolder);
      } else {
        let newCard = this.selectCard(cards);
        cardHolder.push(newCard);
        cards.push(newCard);
        hand.push(this.props.deck[newCard]);
        this.checkDealerHit(cards, hand, count -= 1, cardHolder);
      }
    }
  }

  render() {
    return (
      <div className="App">
        <BlackJackLogic cardBack={this.props.cardBack} deck={this.props.deck} faceCards={this.props.faceCards} handleDealState={this.props.handleDealState} dealerKeys={this.props.dealerKeys} playerKeys={this.props.playerKeys} dealerHand={this.props.dealerHand} playerHand={this.props.playerHand} cardSelection={this.props.cardSelection} countRound={this.props.countRound} handleStand={this.props.handleStand} stand={this.props.stand} handleTotals={this.props.handleTotals} saveDealer={this.saveDealer} saveDeal={this.saveDeal} selectCard={this.selectCard} deal={this.deal} calculateTotal={this.calculateTotal} checkDealerHit={this.checkDealerHit}/>
      </div>
    );
  }
}

export default BlackJackRounds