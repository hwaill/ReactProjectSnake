import React from 'react';

class StartScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isVisible: true};

    this.start = this.start.bind(this);
  }

  start() {
    this.setState({isVisible: false});
    this.props.startGame();
  }

  render() {
    if(this.state.isVisible) {
      return (
        <div className="startScreenContainer">
          <div className="startButton" onClick={this.start}>
            Start Game!
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default StartScreen;
