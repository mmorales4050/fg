import React, { Component } from 'react';

import BattleContainer from './BattleContainer';
import HudContainer from './HudContainer'
import Home from '../components/Home'
import Hud from '../components/Hud';
import ShopContainer from '../containers/ShopContainer';
import '../style/game.css'

var api = "http://localhost:3000/"
class GameContainer extends Component {
  state = {
    page: "home",
    weapons: [],
    armors: [],
    monsters: [],
    character: {},
    fullCharacterHealth: 0,
    characterHealth: 0,
    currentMonster: {},
    currentMonsterHealth: 0,
    weaponInventory: [],
    armorInventory: [],
    equippedWeapon: {},
    equippedArmor: {},
    showMonsterDetails: false,
    showPlayerDetails: false
    }

    showMonsterDetails = () => {
      this.setState({
        showMonsterDetails: true
      })
    }

    hideMonsterDetails = () => {
      this.setState({
        showMonsterDetails: false
      })
    }

    showPlayerDetails = () => {
      this.setState({
        showPlayerDetails: true
      })
    }

    hidePlayerDetails = () => {
      this.setState({
        showPlayerDetails: false
      })
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
    .then(() => {
      // Fetch Monsters
      fetch(api + "/monsters")
      .then(r => r.json())
      .then(monsters => {
        this.setState({monsters: monsters})
      })
      .then(() => {
        this.setState({
          currentMonster: this.state.monsters[Math.floor(Math.random() * 63)]
        })
        this.setState({
          currentMonsterHealth: this.state.currentMonster.hp
        })
      })
      .then(() => {
        while (this.state.currentMonster.level < this.state.character.level - 5 || this.state.currentMonster.level > this.state.character.level + 5) {
          this.setState({
            currentMonster: this.state.monsters[Math.floor(Math.random() * 63)]
          })
          this.setState({
            currentMonsterHealth: this.state.currentMonster.hp
          })
        }
      })
    })
    // Fetch Weapons
    fetch(api + "/weapons")
    .then(r => r.json())
    .then(weapons => {
      this.setState({weapons: weapons})
    })
    .then(() => {
      // Fetch Armors
      fetch(api + "/armors")
      .then(r => r.json())
      .then(armors => {
        this.setState({armors: armors})
      })
    })
    .then(() => {
      // Fetch Weapon Inventory
      fetch(api +"/character_weapons")
      .then(r => r.json())
      .then(character_weapons => {
        var weaponIds = []
        character_weapons.forEach((character_weapon) => {
          if (character_weapon.character_id === this.state.character.id) {
            weaponIds.push(character_weapon.weapon_id)
          }
        })
        console.log(weaponIds)
        var weaponInventory = this.state.weapons.filter(weapon => {
          return weaponIds.includes(weapon.id)
        })

        this.setState({
          weaponInventory: weaponInventory,
          equippedWeapon: weaponInventory[0]
        })
      })
      // Fetch Armor Inventory
      fetch(api +"/character_armors")
      .then(r => r.json())
      .then(character_armors => {
        var armorIds = []
        character_armors.forEach((character_armor) => {
          if (character_armor.character_id === this.state.character.id) {
            armorIds.push(character_armor.armor_id)
          }
        })
        console.log(armorIds)
        var armorInventory = this.state.armors.filter(armor => {
          return armorIds.includes(armor.id)
        })
        this.setState({
          armorInventory: armorInventory,
          equippedArmor: armorInventory[0]
        })
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

  goShopping = () => {
    this.setState({
      page: "shop"
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
          <BattleContainer monster={this.state.currentMonster} character={this.state.character} attack={this.attack} goHome={this.goHome} showMonsterDetails={this.state.showMonsterDetails} showPlayerDetails={this.state.showPlayerDetails}/>

        </div>
      );
    } else if (this.state.page === "home") {
      return (
        <div>
        <Home startBattle={this.startBattle} rest={this.rest} character={this.state.character} showDetails={this.state.showPlayerDetails} goShopping={this.goShopping}/>
        </div>
      )
    } else if (this.state.page === "shop") {
      return (
        <div>
        <ShopContainer armors={this.state.armors} weapons={this.state.weapons} goHome={this.goHome} character={this.state.character} showDetails={this.state.showPlayerDetails}/>
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
      {this.state.page !== "battle" ? <Hud character={this.state.character} health={this.state.characterHealth} element_class={"player"} showDetails={this.showPlayerDetails} hideDetails={this.hidePlayerDetails}/> : <>
      <Hud character={this.state.character} health={this.state.characterHealth} element_class={"player"}  showDetails={this.showPlayerDetails} hideDetails={this.hidePlayerDetails}/> <Hud character={this.state.currentMonster} health={this.state.currentMonsterHealth} element_class={"enemy"} showDetails={this.showMonsterDetails} hideDetails={this.hideMonsterDetails}/>
      </>}
      </HudContainer>
      </>

      </div>
    )


  }

}

export default GameContainer;
