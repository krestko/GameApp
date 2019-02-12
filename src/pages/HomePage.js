import React, { Component } from 'react';
import Games from '../components/Games';
// import GamesPage from './GamesPage';
// import HangmanPage from './HangmanPage';
// import BlackJackPage from './BlackJackPage';
// import Winner from './components/WinnerScreen';
// import Loser from './components/LoserScreen';

class HomePage extends Component {
  render() {
    return (
        <div className='App'>
          <h1>Kat Restko</h1>
          <h3>Web Developer</h3>
          <Games />
        </div>
    );
  }
}

export default HomePage;