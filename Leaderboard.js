import React from 'react';
import LeaderboardItem from './LeaderboardItem.js'

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: []
    }
  }

  componentDidUpdate(previousProps) {
    if(this.props.updateLeaderboard && !previousProps.updateLeaderboard) {
      //in here, a game has ended and there's a new score to handle
      //we have access to this.props.gameOverScore , which is that score, and
      //this.props.userName
      var temp = this.state.scores;
      temp.push(this.props.gameOverScore);
      this.setState({
        scores: temp
      });
      //finishUpdate needs to be called at the end
      this.props.finishUpdate();
    }
  }

  render() {
    const scoresList = this.state.scores.map((score) =>
      <LeaderboardItem userName={this.props.userName}score={score}/>
    );

    return (
      <div id="leaderboardContainer">
        <h3 id="leaderboardHeader">Scores</h3>
        <ol>{scoresList}</ol>
      </div>
    );
  }
}

export default Leaderboard;
