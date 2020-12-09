import React from 'react';
import LeaderboardItem from './LeaderboardItem.js';
import {firebasedb} from './firebase';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topScores: [],
      topPlayers: [],
    };

    this.setLeaderboardTopToState = this.setLeaderboardTopToState.bind(this);
  }

  // React hooks: useEffect (effects hook)
  // https://reactjs.org/docs/hooks-effect.html
  // intended to replace componentDidUpdate

  // Perform database transaction here (push)
  // use props values: this.props.userName, this.props.gameOverScore
  componentDidUpdate(previousProps) {
    if(this.props.updateLeaderboard && !previousProps.updateLeaderboard) {

      const currentScore = this.props.gameOverScore;
      const player = this.props.userName;
      
      // add record to database
      firebasedb.collection('leaderboard').add({
        name: player,
        score: currentScore
      });

      //finishUpdate sets updating state to false for leaderboard
      this.props.finishUpdate();
    }
  }

  setLeaderboardTopToState() {
    // perform database transaction here (fetch)
    // spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // array map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    firebasedb.collection('leaderboard').onSnapshot(dataState => {
      const dataContent = dataState.docs.map (entry => ({
        id: entry.id,
        ...entry.data()
        // ...entry.data() should be equivalent to:
        // name: entry.name,
        // score: entry.score
      }));

      const numEntries = dataContent.length;
      var tempTopNames = [];
      var tempTopScores = [];

      // write values to temp arrays
      for (var i=0; i<numEntries; i++) {
        tempTopNames[i] = dataContent[i].name;
        tempTopScores[i] = dataContent[i].score;
      }

      // sort the leaderboard by descending score
      // use insertion sort for small arrays
      for (var i=1; i<numEntries; i++) {
        var currentName = tempTopNames[i];
        var currentScore = tempTopScores[i];
        var position = i-1;
        while(position >= 0 && currentScore > tempTopScores[position]) {
          tempTopScores[position+1] = tempTopScores[position];
          tempTopNames[position+1] = tempTopNames[position];
          position--;
        }
        tempTopScores[position+1] = currentScore;
        tempTopNames[position+1] = currentName;
      }

      // JS array.slice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
      this.setState({
        topScores: tempTopScores.slice(0,10),
        topPlayers: tempTopNames.slice(0,10)
      });

      // database integrity: reduce leaderboard to 10 entries
      // while (numEntries > 10) {
      //   var lowestScore = Number.MAX_SAFE_INTEGER;
      //   var idToRemove;
      //   for (var i ; i<numEntries; i++) {
      //     if (dataContent[i].score < lowestScore) {
      //       lowestScore = dataContent[i].score;
      //       idToRemove = dataContent[i].id;
      //     }
      //   }
      //   firebasedb.collection('leaderboard').doc(idToRemove).delete();
      //   numEntries--;
      // }
    });

  }

  render() {

    this.setLeaderboardTopToState();

    const scoresList = this.state.topScores.map((score, index) =>
      <LeaderboardItem key={index} userName={this.state.topPlayers[index]} score={score}/>
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
