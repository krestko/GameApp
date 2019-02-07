import React, { Component } from 'react';
import BlackJackTable from './BlackJackTable';
import HandleScores from './HandleScores'

class BlackJackGame extends Component {

  dealFirstHand = (e) => {
    this.props.handleDeal();
  }

  render() {
    console.log(this.props.dealerTotal)
    let dealerBust = HandleScores.checkForBust(this.props.dealerTotal, console.log('DEALER'));
    let playerBust = HandleScores.checkForBust(this.props.playerTotal, console.log('PLAYER'));
    if(dealerBust === 'Bust') {
      return <p>DEALER LOSES</p>
    } else if(playerBust === 'Bust') {
      return <p>PLAYER LOSES</p>
    }
    // console.log('D', this.props.dealerHand)
    // console.log('P', this.props.playerHand)
    // console.log(this.props.dealerHand)

    return (
      <div className="App">
        <button onClick={this.dealFirstHand}>Deal</button>
        {this.props.dealerHand.length === 2 ? <button onClick={this.props.handleStand}>Stand</button> : null}
        <BlackJackTable dealerHand={this.props.dealerHand} playerHand={this.props.playerHand}/>
      </div>
    );
  }
}

export default BlackJackGame;