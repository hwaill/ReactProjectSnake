import React from 'react';
import SnakeGame from './SnakeGame.js';

class SnakeGameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameInstance: () => <SnakeGame resetGame={this.reset} updateScore={this.props.updateScore} gameOverScore={this.props.gameOverScore} />
    };

    this.reset = this.reset.bind(this);
  }
  reset() {
    this.setState({
      gameInstance: () => <SnakeGame resetGame={this.reset} updateScore={this.props.updateScore} gameOverScore={this.props.gameOverScore} />
    });
  }

  render() {
    const MyGame = this.state.gameInstance;
    return <MyGame />
  }
}

export default SnakeGameContainer;
