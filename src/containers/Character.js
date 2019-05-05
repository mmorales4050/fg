import React, { Component } from 'react';
import Weapon from '../components/Weapon';
import Armor from '../components/Armor';
import CharacterDetails from '../components/CharacterDetails';
class Character extends Component {

  render() {
    return (
      <div>
        <Weapon />
        <Armor />
      </div>
    );
  }

}

export default Character;
