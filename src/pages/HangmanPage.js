import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Hangman from '../components/Hangman'
import Board from '../components/Board';

class HangmanPage extends Component {
  state = {
    test: ['Hello', 'Goodbye', 'Hey'][Math.floor(Math.random() * ['Hello', 'Goodbye', 'Hey'].length)].toLowerCase().split(''),
    guess: '',
    guesses: [],
    incorrectGuesses: [],
    invalidGuess: false
  }
  
  handleChange = (e) => {
    this.setState({ guess: e.target.value.toLowerCase() })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.guesses.includes(this.state.guess)) {
      return this.setState({ 
        guess: '',
        invalidGuess: true
      })
    } else if(!this.state.test.includes(this.state.guess)) {
      return this.setState({ 
        guesses: [...this.state.guesses, this.state.guess],
        incorrectGuesses: [...this.state.incorrectGuesses, this.state.guess],
        guess: ''
      })
    } else {
      return this.setState({ 
        guesses: [...this.state.guesses, this.state.guess],
        guess: ''
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>
        <Hangman incorrectGuesses={this.state.incorrectGuesses} />
        <Board test={this.state.test} guess={this.state.guess} guesses={this.state.guesses} handleChange={this.handleChange} handleSubmit={this.handleSubmit} invalidGuess={this.state.invalidGuess} />
      </div>
    );
  }
}

export default HangmanPage;