import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./../css/Pokedex.css";

class Pokedex extends Component {
  renderPokecards() {
    return this.props.pokemons.map(({ id, name, type, base_experience }) => {
      return <Pokecard id={id} name={name} type={type} exp={base_experience} />;
    });
  }

  render() {
    return (
      <div className="Pokedex">
        <div
          className={`Pokedex-hand ${
            this.props.isWinner === true ? "winner" : ""
          }`}
        >
          <h2>{this.props.totalExp}</h2>
          {this.props.isWinner === true ? "You Win" : "You Lost"}
        </div>
        <div className="Pokedex-cards">{this.renderPokecards()}</div>
      </div>
    );
  }
}

export default Pokedex;
