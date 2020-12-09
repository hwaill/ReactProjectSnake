import React from 'react';
import LeaderboardItem from './LeaderboardItem.js';
import {firebasedb} from './firebase';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
  }

  // React hooks: useEffect (effects hook)
  // https://reactjs.org/docs/hooks-effect.html
  // intended to replace componentDidUpdate

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
      <section id="leaderboardContainer">
        <table>
          <thead><tr><h3 id="leaderboardHeader">Leaderboard</h3></tr></thead>
          <tbody>{scoresList}</tbody>
        </table>
      </section>
    );
  }
}

export default Leaderboard;
