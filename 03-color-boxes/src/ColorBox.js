import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor() {
    this.props.changeColor(this.props.id);
  }

  render() {
    return (
      <div
        className="ColorBox"
        style={{ backgroundColor: this.props.color }}
        onClick={this.handleChangeColor}
      >
        <h2>{this.props.name}</h2>
        <span>{this.props.color}</span>
      </div>
    );
  }
}

export default ColorBox;
