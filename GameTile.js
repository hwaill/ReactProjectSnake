import React from 'react';

//GameTile returns a div with applicable classes
class GameTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //all have the class gameSquare
    var classes = "gameSquare";
    if(this.props.isFood) {
      classes = classes + " food";
    }

    if(this.props.isSnake) {
      classes = classes + " active";
    }

    return <div id={this.props.id} className={classes}></div>
  }
}

export default GameTile;
