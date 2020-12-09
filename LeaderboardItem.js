import React from 'react';

class LeaderboardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.userName}</td>
        <td>{this.props.score}</td>
      </tr>
    );
  }
}

export default LeaderboardItem;
