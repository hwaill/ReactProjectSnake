import React from 'react';

class LeaderboardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ul>{this.props.userName}: {this.props.score}</ul>
  }
}

export default LeaderboardItem;
