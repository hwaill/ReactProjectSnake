import React from "react";
import './App.css';
import SnakeGameContainer from './SnakeGameContainer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SnakeGameContainer />;
  }
}

export default App;
