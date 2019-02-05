import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Hangman extends Component {

  handleHangman = () => {
    if(this.props.incorrectGuesses.length === 0) {
      return(<div>
        |<br/>|<br/>|<br/>|<br/>
      </div>)
    } else if(this.props.incorrectGuesses.length === 1) {
      return(<div>
        O<br/>|<br/>|<br/>|<br/>
      </div>)
    } else if(this.props.incorrectGuesses.length === 2) {
      return(<div>
        O<br/>/<br/>|<br/>|<br/>
      </div>)
    } else if(this.props.incorrectGuesses.length === 3) {
      return(<div>
        O<br/>/\<br/>|<br/>
      </div>)
    } else if(this.props.incorrectGuesses.length === 4) {
      return(<div>
        O<br/>/\<br/>|<br/>/
      </div>)
    } else if(this.props.incorrectGuesses.length === 5) {
      return(<div>
        O<br/>/\<br/>|<br/>/\
      </div>)
    }
  }

  render() {
    if(this.props.incorrectGuesses.length === 5) {
      return <Redirect to={`/lose`} />
    }

    return (
      <div className="App">
        {this.handleHangman()}
      </div>
    );
  }
}

export default Hangman;