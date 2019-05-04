import React, { Component } from 'react';
import Monster from '../components/Monster';
import BattleMenu from '../components/BattleMenu';
import CharacterContainer from './Character';

class BattleContainer extends Component {

  render() {
    return (
      <div>
      <Monster monster={this.props.monster}/>
      <BattleMenu attack={this.props.attack} goHome={this.props.goHome}/>
      <CharacterContainer character={this.props.character}/>
      </div>
    );
  }

}

export default BattleContainer;
