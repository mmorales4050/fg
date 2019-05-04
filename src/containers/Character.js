import React, { Component } from 'react';
import Weapon from '../components/Weapon';
import Armor from '../components/Armor';

class Character extends Component {

  render() {
    return (
      <div>
        {this.props.character.name} Image
        <Weapon />
        <Armor />
      </div>
    );
  }

}

export default Character;
