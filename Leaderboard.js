import React from 'react';
import LeaderboardItem from './LeaderboardItem.js';
import {firebasedb} from './firebase';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
  }

  // Perform database transaction here
  // use props values: this.props.userName, this.props.gameOverScore
  componentDidUpdate(previousProps) {
    if(this.props.updateLeaderboard && !previousProps.updateLeaderboard) {

      const currentScore = this.props.gameOverScore;
      const player = this.props.userName;
      
      // add record to database
      firebasedb.collection('leaderboard').add();

      //finishUpdate sets updating state to false for leaderboard
      this.props.finishUpdate();
    }
  }

  render() {

    const scoresList = this.state.scores.map((score) =>
      <LeaderboardItem key={score} userName={this.props.userName}score={score}/>
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
