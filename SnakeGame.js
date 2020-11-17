import React from 'react';
import GameTile from './GameTile.js';
import StartScreen from './StartScreen.js';

class SnakeGame extends React.Component {
  constructor(props) {
    super(props);

    this.gameSize = 12;

    var arrayToAdd = [];
    for(var i = 0; i < this.gameSize; i++) {
      var rowArray = [];
      for(var j = 0; j < this.gameSize; j++) {
        rowArray.push(0);
      }
      arrayToAdd.push(rowArray);
    }

    this.state = {
      snakeLength: 1,
      foodRow: null,
      foodCol: null,
      snakePosRow: 0,
      snakePosCol: 0,
      ageArray: arrayToAdd,
      direction: 0,
      nextDirection: 0,
      hasStarted: false
    };


    this.generateFoodPos = this.generateFoodPos.bind(this);
    this.start = this.start.bind(this);
    this.checkKey = this.checkKey.bind(this);
    this.changeDirection = this.changeDirection.bind(this);
    this.updateGame = this.updateGame.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.checkKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.checkKey);
    clearInterval(this.myInterval);
  }

  checkKey(key) {
    if(this.state.hasStarted) {
      if(key.keyCode == "37") {
        //2 is left
        this.changeDirection(2);
      } else if(key.keyCode == "38") {
        //3 is up
        this.changeDirection(3);
      } else if(key.keyCode == "39") {
        //0 is right
        this.changeDirection(0);
      } else if(key.keyCode == "40") {
        //1 is down
        this.changeDirection(1);
      }
    }
  }

  changeDirection(dir) {
    //keeping track of the next direction allows the next direction to change multiple times between frames the the user presses multiple times
    if(this.state.direction == 0 || this.state.direction == 2) {
      if(dir == 1 || dir == 3) {
        this.setState({nextDirection: dir});
      }
    }
    if(this.state.direction == 1 || this.state.direction == 3) {
      if(dir == 0 || dir == 2) {
        this.setState({nextDirection: dir});
      }
    }
  }

  generateFoodPos() {
    var newFoodRow;
    var newFoodCol;
    var success = false;
    while(!success) {
      newFoodRow = Math.floor(Math.random() * this.gameSize);
      newFoodCol = Math.floor(Math.random() * this.gameSize);

      if((this.state.ageArray[newFoodRow][newFoodCol] == 0) && (newFoodRow != this.state.foodRow || newFoodCol != this.state.foodCol)) {
        success = true;
      }
    }

    this.setState({foodRow: newFoodRow, foodCol: newFoodCol});
  }

  start() {
    this.setState({hasStarted: true});
    var ageArr = this.state.ageArray;
    ageArr[0][0] = 1;
    this.setState({ageArray: ageArr}, function() {
      this.generateFoodPos();
    });
    this.props.updateScore(0);
    this.myInterval = setInterval(() => this.updateGame(), 200);
  }

  updateGame() {
    var ageArrayToUpdate = this.state.ageArray;
    var directionToUpdate;
    var snakeLengthToUpdate = this.state.snakeLength;
    var posRowToUpdate;
    var posColToUpdate;
    var nextRow;
    var nextCol;
    if(this.state.nextDirection == 0) {
      nextRow = this.state.snakePosRow;
      nextCol = this.state.snakePosCol + 1;
    } else if(this.state.nextDirection == 1) {
      nextRow = this.state.snakePosRow + 1;
      nextCol = this.state.snakePosCol;
    } else if(this.state.nextDirection == 2) {
      nextRow = this.state.snakePosRow;
      nextCol = this.state.snakePosCol - 1;
    } else if(this.state.nextDirection == 3) {
      nextRow = this.state.snakePosRow - 1;
      nextCol = this.state.snakePosCol;
    }
    directionToUpdate = this.state.nextDirection;

    if(nextRow < 0 || nextRow >= this.gameSize || nextCol < 0 || nextCol >= this.gameSize) {
      this.gameOver();
      return;
    }

    if(nextRow == this.state.foodRow && nextCol == this.state.foodCol) {
      snakeLengthToUpdate = this.state.snakeLength + 1;
      this.props.updateScore(snakeLengthToUpdate - 1);
      this.generateFoodPos();
    } else {
      for(var i = 0; i < this.gameSize; i++) {
        for(var j = 0; j < this.gameSize; j++) {
          if(ageArrayToUpdate[i][j] != 0) {
            ageArrayToUpdate[i][j]--;
          }
        }
      }
    }

    if(ageArrayToUpdate[nextRow][nextCol] != 0) {
      this.gameOver();
      return;
    }

    ageArrayToUpdate[nextRow][nextCol] = snakeLengthToUpdate;

    posRowToUpdate = nextRow;
    posColToUpdate = nextCol;

    this.setState({
      ageArray: ageArrayToUpdate,
      direction: directionToUpdate,
      snakeLength: snakeLengthToUpdate,
      snakePosRow: posRowToUpdate,
      snakePosCol: posColToUpdate,
    });
  }

  gameOver() {
    clearInterval(this.myInterval);
    //do whatever scoretracking needs to be done and prompting the user
    this.props.gameOverScore(this.state.snakeLength - 1);
    this.props.resetGame();
  }

  render() {
    var tiles = [];
    var currID = "";
    for(var i = 0; i < this.gameSize; i++) {
      for(var j = 0; j < this.gameSize; j++) {
        currID = "r" + i + "c" + j;
        var isFd = (i == this.state.foodRow && j == this.state.foodCol) ? true : false;
        var isSnk = (this.state.ageArray[i][j] != 0);

        tiles.push(<GameTile id={currID} isFood={isFd} isSnake={isSnk}/>);
      }
    }

    return (
      <div id="gameContainer">
        {tiles}
        <StartScreen startGame={this.start}/>
      </div>
    );
  }
}

export default SnakeGame;
