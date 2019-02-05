import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GamePage from './pages/GamePage';
import Winner from './components/WinnerScreen';
import Loser from './components/LoserScreen';
import './App.css';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className='App'>
          <Route exact path='/' component={GamePage} />
          <Route exact path='/win' component={Winner} />
          <Route exact path='/lose' component={Loser} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
