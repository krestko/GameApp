import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Board from '../components/Board';

class GamePage extends Component {
  state = {
    test: ['Hello', 'Goodbye', 'Hey'][Math.floor(Math.random() * ['Hello', 'Goodbye', 'Hey'].length)].toLowerCase().split(''),
    guess: '',
    guesses: [],
    incorrectGuesses: [],
    invalidGuess: false
  }
  
  handleChange = (e) => {
    this.setState({ guess: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.guesses.includes(this.state.guess)) {
      return this.setState({ 
        guess: '',
        invalidGuess: true
      })
    } else {
      return this.setState({ 
      guesses: [...this.state.guesses, this.state.guess],
      guess: ''
      })
    }
  }

  handleIncorrectGuesses = (guess) => {
    this.setState({ incorrectGuesses: [...this.state.incorrectGuesses, guess] })
  }

  render() {
    if(this.state.guesses.length === 10) {
      return <Redirect to={`/lose`} />
    }

    return (
      <div className="App">
        <Board test={this.state.test} guess={this.state.guess} guesses={this.state.guesses} handleChange={this.handleChange} handleSubmit={this.handleSubmit} incorrectGuesses={this.state.incorrectGuesses} invalidGuess={this.state.invalidGuess} handleIncorrectGuesses={this.handleIncorrectGuesses} />
      </div>
    );
  }
}

export default GamePage;