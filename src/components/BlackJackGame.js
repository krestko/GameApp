import React, { Component } from 'react';
import BlackJackTable from './BlackJackTable'

class BlackJackGame extends Component {
  state = {
    toggleTurn: true,
    toggleDealButton: true,
    dealtCardNumber: 0
  }

  handleDeal = (e) => {
    if(this.state.dealtCardNumber === 3) {
      this.setState({ toggleDealButton: false })
    } else if(this.state.toggleTurn) {
      let holdPlayer = (this.props.handleDeal());
      this.props.handlePlayerHand(holdPlayer);
      this.setState({ toggleTurn: false })
    } else {
      let holdDealer = (this.props.handleDeal());
      this.props.handleDealerHand(holdDealer);
      this.setState({ toggleTurn: true })
    }
    this.setState({ dealtCardNumber: this.state.dealtCardNumber += 1 })
  }

  handlePlayerHit = () => {

  }

  handleDealerHit = () => {

  }

  // displayPlayerCards = () => {
  //   if(this.props.playerHand.length > 0) {
  //     this.props.playerHand.map(card => {
  //       return <p>Hello</p>;
  //     })
  //   }
  // }

  render() {
    // if(this.props.dealerHand.length === 1) {
    //   return <p>Hidden</p>
    // }

    return (
      <div className="App">
        {this.state.toggleDealButton ? <button onClick={this.handleDeal}>Deal</button> : !this.state.toggleDealButton ? <button onClick={this.handleDeal}>Deal Player</button> : null}
        {!this.state.toggleDealButton ? <button onClick={this.handleDeal}>Deal Dealer</button> : null} 
        <BlackJackTable dealerHand={this.props.dealerHand} playerHand={this.props.playerHand}/>
      </div>
    );
  }
}

export default BlackJackGame;