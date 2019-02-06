import React, { Component } from 'react';

class BlackJackBoard extends Component {

  componentDidMount() {
    let holdDealer = [];
    holdDealer.push(this.props.handleDeal());
    holdDealer.push(this.props.handleDeal());
    this.props.handleDealerHand(holdDealer);
    let holdPlayer = [];
    holdPlayer.push(this.props.handleDeal());
    holdPlayer.push(this.props.handleDeal());
    this.props.handlePlayerHand(holdPlayer);
  }

  render() {

    return (
      <div className="App">
      </div>
    );
  }
}

export default BlackJackBoard;