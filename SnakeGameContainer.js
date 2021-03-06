import React from 'react';
import SnakeGame from './SnakeGame.js';
import Leaderboard from './Leaderboard.js';
import './snakeGame.css';

class SnakeGameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameInstance: () => <SnakeGame resetGame={this.reset} updateScore={this.updateCurrentScore} gameOverScore={this.gameOverScore} />,
      name: null,
      nameInputIsActive: true,
      textInput: "",
      currentScore: 0,
      updateLeaderboard: false,
      gameOverScore: null
    }


    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.setName = this.setName.bind(this);
    this.updateCurrentScore = this.updateCurrentScore.bind(this);
    this.gameOverScore = this.gameOverScore.bind(this);
    this.finishLeaderboardUpdate = this.finishLeaderboardUpdate.bind(this);

    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      gameInstance: () => <SnakeGame resetGame={this.reset} updateScore={this.updateCurrentScore} gameOverScore={this.gameOverScore} />
    });
  }

  handleTextInputChange(event) {
    this.setState({
      textInput: event.target.value
    });
  }

  setName() {
    this.setState({
      name: this.state.textInput,
      nameInputIsActive: false
    });
  }

  updateCurrentScore(newScore) {
    this.setState({
      currentScore: newScore
    });
  }

  gameOverScore(score) {
    //add to firebase
    this.setState({
      updateLeaderboard: true,
      gameOverScore: score
    });
  }

  finishLeaderboardUpdate() {
    this.setState({
      updateLeaderboard: false
    });
  }

  render() {
    var inputField = null;
    var pageHeader = null;

    if(this.state.nameInputIsActive) {
      inputField = (
        <div id="nameInputContainer">
          <div id="nameInput">
            <h1 id="nameInputHeader">Enter a Display Name</h1>
            <input id="nameInputTextInput" type="text" onChange={this.handleTextInputChange}/>
            <input id="nameInputButtonInput" type="button" value="Continue" onClick={this.setName}/>
          </div>
        </div>
      );
    }

    if(this.state.name != null) {
      pageHeader = (
        <div id="pageHeader">
          <h1 id="pageHeaderName">Let's play, {this.state.name}!</h1>
          <h1 id="pageHeaderScore">Current score: {this.state.currentScore}</h1>
        </div>
      );
    }

    const MyGame = this.state.gameInstance;

    return (
      <div id="pageHolder">
        <div id="headerAndLeaderboard">
          {pageHeader}
          <Leaderboard userName={this.state.name} updateLeaderboard={this.state.updateLeaderboard} gameOverScore={this.state.gameOverScore} finishUpdate={this.finishLeaderboardUpdate}/>
        </div>
        <MyGame />
        {inputField}
      </div>
    );
  }
}

export default SnakeGameContainer;
