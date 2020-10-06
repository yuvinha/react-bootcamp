import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { choice } from "./helpers";
import "./ColorContainer.css";

class ColorContainer extends Component {
  static defaultProps = {
    numBoxes: 20,
    colors: [
      { name: "red", value: "#f44336" },
      { name: "pink", value: "#e91e63" },
      { name: "purple", value: "#9c27b0" },
      { name: "deepPurple", value: "#673ab7" },
      { name: "indigo", value: "#3f51b5" },
      { name: "blue", value: "#2196f3" },
      { name: "lightBlue", value: "#03a9f4" },
      { name: "cyan", value: "#00bcd4" },
      { name: "teal", value: "#009688" },
      { name: "green", value: "#4caf50" },
      { name: "lightGreen", value: "#8bc34a" },
      { name: "lime", value: "#cddc39" },
      { name: "yellow", value: "#ffeb3b" },
      { name: "amber", value: "#ffc107" },
      { name: "orange", value: "#ff9800" },
      { name: "deepOrange", value: "#ff5722" },
      { name: "brown", value: "#795548" },
      { name: "blueGrey", value: "#607d8b" },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      boxes: Array.from({ length: this.props.numBoxes }, (v, i) => {
        return { id: i, color: choice(this.props.colors) };
      }),
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(id) {
    // Copy the the current state
    let newBoxes = [...this.state.boxes];
    // New Color
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor.value === this.state.boxes[id].value);

    // Replace the old color with new color
    newBoxes.splice(id, 1, {
      ...newBoxes[id],
      color: newColor,
    });
    // Update State
    this.setState({
      boxes: newBoxes,
    });
  }

  renderBoxes() {
    return this.state.boxes.map((box) => (
      <ColorBox color={box.color} id={box.id} changeColor={this.changeColor} />
    ));
  }

  render() {
    return <div className="ColorContainer">{this.renderBoxes()}</div>;
  }
}

export default ColorContainer;
