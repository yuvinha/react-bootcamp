import React, { Component } from "react";
import "./../css/Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (number) => (number < 1000 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;

    return (
      <div className="Pokecard">
        <h3 className="Pokecard-title">{name}</h3>
        <div className="Pokecard-image">
          <img src={`${POKE_API}${padToThree(id)}.png`} alt={name} />
        </div>
        <p className="Pokecard-data">
          Type: <span>{type}</span>
        </p>
        <p className="Pokecard-data">
          EXP: <span>{exp}</span>
        </p>
      </div>
    );
  }
}

export default Pokecard;
