import React, { Component } from 'react';
import Monster from '../components/Monster';
import BattleMenu from '../components/BattleMenu';
import Character from './Character';
import CharacterDetails from '../components/CharacterDetails';
import MonsterDetails from '../components/MonsterDetails';
import '../style/battle.css'

class BattleContainer extends Component {

  playerDetails = () => {
    if (this.props.showPlayerDetails) {
      return <CharacterDetails character={this.props.character}/>
    } else {
      return <div className="place-holder"></div>
    }
  }

  monsterDetails = () => {
    if (this.props.showMonsterDetails) {
      return <MonsterDetails monster={this.props.monster}/>
    } else {
      return <div className="place-holder"></div>
    }
  }
  render() {
    return (
      <div className="battle-container">
      {this.playerDetails()}
      <Character character={this.props.character}/>

      <BattleMenu attack={this.props.attack} goHome={this.props.goHome}/>
      
      {this.monsterDetails()}
      <Monster monster={this.props.monster}/>

      </div>
    );
  }

}

export default BattleContainer;
