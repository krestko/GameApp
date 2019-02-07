import React, { Component } from 'react';

class BlackJackBoard extends Component {
  state = {
    toggleTurn: true
  }

  handleDeal = (e) => {
    if(this.props.dealerHand.length === 2) {
      return null;
    } else if(this.state.toggleTurn) {
      let holdPlayer = [];
      holdPlayer.push(this.props.handleDeal());
      this.props.handlePlayerHand(holdPlayer);
      this.setState({ toggleTurn: false })
    } else {
      let holdDealer = [];
      holdDealer.push(this.props.handleDeal());
      this.props.handleDealerHand(holdDealer);
      this.setState({ toggleTurn: true })
    }
  }

  render() {
    console.log(this.props.deck)
    console.log('D', this.props.dealerHand)
    console.log('P', this.props.playerHand)
    console.log(this.state.dealCounter)

    return (
      <div className="App">
        <button onClick={this.handleDeal}>Play</button>
      </div>
    );
  }
}

export default BlackJackBoard;