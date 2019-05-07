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
      return <CharacterDetails character={this.props.character} equippedArmor={this.props.equippedArmor}/>
    } else {
    }
  }

  monsterDetails = () => {
    if (this.props.showMonsterDetails) {
      return <MonsterDetails monster={this.props.monster}/>
    } else {
    }
  }

  showGame = () => {
    if (this.props.loseGame === true) {
      return (
        <div>Yout Lose
        <button onClick={this.props.continueGame}>Continue</button>
        </div>
      )
    }
    else if (this.props.winGame === true) {
      return (
        <div className="victory-message-container">
        <div className="victory-message">Victory!</div>
        <div className="reward">+ {this.props.monster.exp} EXP</div>
        <div className="reward">+ {this.props.monster.gold} GOLD</div>
        <button onClick={this.props.continueGame}>Next</button>
        </div>
      )
    }
    else {
      return <BattleMenu attack={this.props.attack} goHome={this.props.goHome}/>
    }
  }
  render() {
    return (
      <div className="battle-container">
      {this.playerDetails()}
      <Character character={this.props.character} equippedArmor={this.props.equippedArmor}/>
      {
        this.showGame()
      }
      {this.monsterDetails()}
      <Monster monster={this.props.monster}/>

      </div>
    );
  }

}

export default BattleContainer;
