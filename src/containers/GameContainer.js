import React, { Component } from 'react';

import BattleContainer from './BattleContainer';
import HudContainer from './HudContainer'
import Home from '../components/Home'
import Hud from '../components/Hud';
import '../style/game.css'

var api = "http://localhost:3000/"
class GameContainer extends Component {
  state = {
    page: "battle",
    monsters: [],
    character: {},
    fullCharacterHealth: 0,
    characterHealth: 0,
    currentMonster: {},
    currentMonsterHealth: 0,
    weaponInventory: [],
    equippedWeapon: {base_damage: 6, rand_damage: 10, item_element: "earth", bonus_to_hit: 2, type: "melee", name: "Battleaxe", item_desc: "A simple double bladed axe."},
    equippedArmor: {name: "Steel Plate", earth_armor: -10}
  }

  player_damage_formula = () => {

  }

  monster_damage_formula = () => {

  }

  attack = () => {
    var characterDamage = this.state.equippedWeapon.base_damage

    var monsterDamage = this.state.currentMonster.base_damage

    var updatedMonsterHealth = this.state.currentMonsterHealth - characterDamage

    var updatedCharacterHealth = this.state.characterHealth - monsterDamage
    if (updatedMonsterHealth > 0) {
      this.setState({
        currentMonsterHealth: updatedMonsterHealth
      })
    }
    else {
      this.setState({
        currentMonsterHealth: 0
      })
      this.winGame()
    }
    if (updatedCharacterHealth > 0) {
      this.setState({
        characterHealth: updatedCharacterHealth
      })
    }
    else {
      this.setState({
        characterHealth: 0
      })
      this.loseGame()
    }
  }

  winGame = () => {

  }

  loseGame = () => {

  }

  componentDidMount() {
    // Fetch Character
    fetch(api + "/characters")
    .then(r => r.json())
    .then(characters => {
      this.setState({
        character: characters[0],
        characterHealth: characters[0].level * 100,
        fullCharacterHealth: characters[0].level * 100
      })
    })
    // Fetch Monsters
    fetch(api + "/monsters")
    .then(r => r.json())
    .then(monsters => {
      this.setState({monsters: monsters})
    })
    .then(() => {
      this.setState({
        currentMonster: this.state.monsters[0],
        currentMonsterHealth: this.state.monsters[0].hp
      })
    })
  }

  startBattle = () => {
    this.setState({
      page: "battle"
    })
  }

  goHome = () => {
    this.setState({
      page: "home"
    })
  }

  rest = () => {
    this.setState({
      characterHealth: this.state.fullCharacterHealth
    })
  }
  displayPage = () => {
    if (this.state.page === "battle") {
      return (
        <div className="battle-container">
          <BattleContainer monster={this.state.currentMonster} character={this.state.character} attack={this.attack} goHome={this.goHome}/>

        </div>
      );
    } else if (this.state.page === "home") {
      return (
        <div>
        <Home startBattle={this.startBattle} rest={this.rest}/>

        </div>
      )
    }
  }
  render() {
    return (
      <div className={`game-container ${this.state.page}`}>
      <>
      <div className="content-container">
      {this.displayPage()}
      </div>
      <HudContainer monster={this.state.currentMonster} character={this.state.character} currentMonsterHealth={this.state.currentMonsterHealth} characterHealth={this.state.characterHealth}>
      {this.state.page !== "battle" ? <Hud character={this.state.character} health={this.state.characterHealth} element_class={"player"}/> : <>
      <Hud character={this.state.character} health={this.state.characterHealth} element_class={"player"}/> <Hud character={this.state.currentMonster} health={this.state.currentMonsterHealth} element_class={"enemy"}/>
      </>}
      </HudContainer>
      </>

      </div>
    )


  }

}

export default GameContainer;