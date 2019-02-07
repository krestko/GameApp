import React, { Component } from 'react';

class BlackJackTable extends Component {

  render() {
    let playerKeys = [];
    let playerProperties = [];
      this.props.playerHand.map(card => {
        for(let key in card) {
          playerKeys.push(key);
          playerProperties.push(card[key]);
        }
      })

    let dealerKeys = [];
    let dealerProperties = [];
      this.props.dealerHand.map(card => {
        for(let key in card) {
          dealerKeys.push(key);
          dealerProperties.push(card[key]);
        }
    })
console.log(dealerKeys)
    return (
      <div className="App">
        <h3>Player Cards:</h3>
        <p>{playerKeys.map(key => `${key} `)}</p>
        <p>{playerProperties.map(property => `${property} `)}</p>
        <h3>Dealer Cards:</h3>
        <p>{dealerKeys[1]}</p>
        <p>{dealerProperties[1]}</p>
      </div>
    );
  }
}

export default BlackJackTable;