import React, { Component } from 'react';
import BlackJackTable from './BlackJackTable';
import HandleScores from './HandleScores'

class BlackJackGame extends Component {
  state = {
    toggleTurn: true
  }

  handlePlayerDeal = () => {
    let holdPlayer = (this.props.handleDeal());
    this.props.handlePlayerHand(holdPlayer);
  }

  handleDealerDeal = () => {
    let holdDealer = (this.props.handleDeal());
    this.props.handleDealerHand(holdDealer);
  }

  handleDeal = (e) => {
    if(this.state.toggleTurn) {
      this.handlePlayerDeal();
      this.setState({ toggleTurn: false })
    } else {
      this.handleDealerDeal();
      if(this.props.playerHand.length === 2) {
        HandleScores.checkForNatural(HandleScores.mapCards(this.props.dealerHand), HandleScores.mapCards(this.props.playerHand));
        this.setState({ toggleTurn: null })
      } else {
        this.setState({ toggleTurn: true })
      }
    }
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
        {this.state.toggleTurn !== null ? <button onClick={this.handleDeal}>Deal</button> : this.state.toggleTurn === null ? <button onClick={this.handlePlayerDeal}>Deal Player</button> : null}
        {this.state.toggleTurn === null ? <button onClick={this.handleDealerDeal}>Deal Dealer</button> : null} 
        <BlackJackTable dealerHand={this.props.dealerHand} playerHand={this.props.playerHand}/>
      </div>
    );
  }
}

export default BlackJackGame;