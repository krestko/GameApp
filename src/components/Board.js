import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Hangman from '../components/Hangman'

class Board extends Component {

  boardResults = () => {
    let counter = 0;
    return this.props.test.map((letter, index) => {
      if(this.props.guesses.includes(letter)) {
        counter += 1;
        if(counter === this.props.test.length) {
          return <Redirect to={`/win`} />
        } else {
          return letter;
      }} else {
        return '- '
      }
    })
  }

  board = () => {
    if(this.props.guesses === []) {
      return this.props.test.map( letter => '- ')
    } else {
      return this.boardResults();
    }
  }

  render() {
    return (
      <div className="App">
        <Hangman />
        {this.board()}
        <form onSubmit={this.props.handleSubmit}>
          <input type='text' value={this.props.guess} onChange={this.props.handleChange} maxLength='1'/>
          <button type="submit">Submit</button><br/>
          {this.props.invalidGuess ? 'Nope': null}
        </form>
        {this.props.guesses}
      </div>
    );
  }
}

export default Board;