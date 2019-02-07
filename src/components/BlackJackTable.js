import React, { Component } from 'react';
import HandleScores from './HandleScores'
import './BlackJackTable.css';

class BlackJackTable extends Component {

  render() {
    let playerKeys = [];
      this.props.playerHand.map(card => {
        for(let key in card) {
          playerKeys.push(key);
        }
      })

    let dealerKeys = [];
      this.props.dealerHand.map(card => {
        for(let key in card) {
          dealerKeys.push(key);
        }
    })

    return (
      <div className="App">
        <h3>Player Cards:</h3>
        {playerKeys.map((key, index) => <div key={index} className='card'>{key}</div>)}
        <h3>Dealer Cards:</h3>
        {dealerKeys.map((key, index) => index === 0 ? <div key={index} className='card'>-------------</div> : <div key={index} className='card'>{key}</div>)}
      </div>
    );
  }
}

export default BlackJackTable;