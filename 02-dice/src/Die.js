import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <div className={`Die ${this.props.isRolling && "rolling"}`}>
        <i className={`fas fa-dice-${this.props.num}`}></i>
      </div>
    );
  }
}

export default Die;
