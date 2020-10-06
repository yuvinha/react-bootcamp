import React, { Component } from "react";
import ColorContainerKey from "./ColorContainerKey";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorContainerKey numBoxes={25} />
      </div>
    );
  }
}

export default App;
