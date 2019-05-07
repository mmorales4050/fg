import React, { Component } from 'react';
import Weapon from '../components/Weapon';
import Armor from '../components/Armor';
import '../style/character.css'

class Character extends Component {

  render() {
    return (
      <div className="character animate">
        <Weapon />
        <Armor />
      </div>
    );
  }

}

export default Character;
