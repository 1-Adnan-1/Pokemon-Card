import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./style/Pokedex.css";

import { CiDark, CiLight } from "react-icons/ci";

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    const { darkMode } = this.state;

    return (
      <div className={`Pokedex ${darkMode ? "dark" : "light"}`}>
        {/* Tema Değiştir Butonu */}
        <div className="toggle-btn-container">
          <button className="toggle-btn" onClick={this.toggleTheme}>
            {darkMode ? (
              <CiLight style={{ fontSize: "20px" }} />
            ) : (
              <CiDark style={{ fontSize: "20px" }} />
            )}
          </button>
        </div>

        {/* Kazanan / Kaybeden Durumu */}
        {this.props.isWinner ? (
          <h2 className="Pokedex-winner">Winning Player</h2>
        ) : (
          <h2 className="Pokedex-loser">Losing Player</h2>
        )}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              key={p.id}
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
