import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  calcTeamExp(team) {
    return team
      .map((el) => el.base_experience)
      .reduce((acc, cur) => acc + cur, 0);
  }

  render() {
    // Randomly Split into two hands
    let hand1 = [];
    let hand2 = [...this.props.pokemons];

    while (hand1.length < hand2.length) {
      let randomIndex = Math.floor(Math.random() * hand2.length);
      let randomPokemon = hand2.splice(randomIndex, 1)[0];
      hand1.push(randomPokemon);
    }

    // Total experiences
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
      <div className="Pokegame">
        <Pokedex pokemons={hand1} totalExp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemons={hand2} totalExp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame;
