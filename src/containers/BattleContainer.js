import React, { Component } from 'react';
import Monster from '../components/Monster';
import BattleMenu from '../components/BattleMenu';
import CharacterContainer from './Character';
import CharacterDetails from '../components/CharacterDetails';
import MonsterDetails from '../components/MonsterDetails';
import '../style/battle.css'

class BattleContainer extends Component {

  render() {
    return (
      <div className="battle-container">
      {//<MonsterDetails monster={this.props.monster}/>
      }
      <Monster monster={this.props.monster}/>
      <BattleMenu attack={this.props.attack} goHome={this.props.goHome}/>
      <CharacterDetails character={this.props.character}
      />
      <CharacterContainer character={this.props.character}/>
      </div>
    );
  }

}

export default BattleContainer;
