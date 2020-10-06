import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceOne: "one",
      diceTwo: "one",
      isRolling: false,
    };
    this.roll = this.roll.bind(this);
  }

  static defaultProps = {
    faces: ["one", "two", "three", "four", "five", "six"],
  };

  roll() {
    this.setState({ isRolling: true });

    setTimeout(() => {
      const idxOne = Math.floor(Math.random() * this.props.faces.length);
      const idxTwo = Math.floor(Math.random() * this.props.faces.length);

      this.setState({
        diceOne: this.props.faces[idxOne],
        diceTwo: this.props.faces[idxTwo],
        isRolling: false,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-dice">
          <Die num={this.state.diceOne} isRolling={this.state.isRolling} />
          <Die num={this.state.diceTwo} isRolling={this.state.isRolling} />
        </div>
        <button
          className="RollDice-btn"
          onClick={this.roll}
          disabled={this.state.isRolling}
        >
          {this.state.isRolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default RollDice;
