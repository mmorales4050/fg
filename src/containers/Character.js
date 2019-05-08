import React, { Component } from 'react';
import '../style/character.css'

class Character extends Component {

  render() {
    return (
      <div classNAme="character-container">
      <div className={`character ${this.props.characterTurn ? "animate" : null}`}>
      <div className="weapon"></div>
      <div className="shield"></div>
      <div className="helmet"></div>
      </div>
      </div>

    );
  }

}

export default Character;
