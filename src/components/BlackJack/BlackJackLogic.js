import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import BlackJackTable from './BlackJackTable';

class BlackJackLogic extends Component {

  totals = () => {
    let total = {
      dealer: this.props.calculateTotal(this.props.dealerHand),
      player: this.props.calculateTotal(this.props.playerHand)
    }
    return total;
  }

  checkForNatural = (total) => {
    if(total.dealer === 21 && total.player === 21) {
      return <h1>GAME TIE</h1>;
    } else if(total.dealer !== 21 && total.player === 21) {
      return <h1>PLAYER NATURAL WIN</h1>;
    } else if(total.player !== 21 && total.dealer === 21) {
      return <h1>DEALER NATURAL WIN</h1>;
    }
  }

  checkForBust = (total) => {
    if(total.player > 21) {
      return <h1>PLAYER BUST</h1>;
    } else if(total.dealer > 21) {
      return <h1>DEALER BUST</h1>;
    }
  }

  checkForBlackJack = (total) => {
    if(total.dealer === 21) {
      return <h1>DEALER BLACKJACK</h1>
    }
    if(total.player === 21) {
      return <h1>PLAYER BLACKJACK</h1>
    }
  }

  finalScore = (total) => {
    if(total.dealer > total.player && total.dealer < 21) {
      return <h1>DEALER WINS!</h1>
    } else if(total.player > total.dealer && total.player < 21) {
      return <h1>PLAYER WINS!</h1>
    } else if(total.player === total.dealer) {
      return <h1>GAME DRAW</h1>
    }
  }

  render() {
    return (
      <div className="App">
        {this.props.stand === true ? this.finalScore(this.totals()) : null}
        {this.props.countRound > 1 ? this.checkForBlackJack(this.totals()) : null}
        {this.props.countRound === 1 ? this.checkForNatural(this.totals()) : null}
        {this.props.countRound >= 1 ? this.checkForBust(this.totals()) : null}

        {this.props.countRound < 1 ? <button onClick={() => this.props.deal(4, [], 'first')}>DEAL</button> : null}

        {!this.props.stand ? <button onClick={() => this.props.deal(1, this.props.cardSelection, 'player')}>HIT</button> : null}

        {!this.props.stand ? <button onClick={(cards, person, count) => this.props.checkDealerHit(this.props.cardSelection, this.props.dealerHand, 6, [])}>STAND</button> : null}

        <BlackJackTable cardBack={this.props.cardBack} dealerHand={this.props.dealerHand} playerHand={this.props.playerHand} dealerKeys={this.props.dealerKeys} playerKeys={this.props.playerKeys} faceCards={this.props.faceCards} stand={this.props.stand}/>

        <Link to='/playblackjack'>NEW GAME</Link>
      </div>
    );
  }
}

export default BlackJackLogic;