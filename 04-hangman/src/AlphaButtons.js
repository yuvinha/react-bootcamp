import React, { Component } from "react";

class AlphaButtons extends Component {
  static defaultProps = {
    letters: "abcdefghijklmnopqrstuvwxyz",
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.props.handleGuess(evt);
  }

  generateButtons() {
    return this.props.letters.split("").map((ltr) => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleClick}
        disabled={this.props.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  render() {
    return <div>{this.generateButtons()}</div>;
  }
}

export default AlphaButtons;
