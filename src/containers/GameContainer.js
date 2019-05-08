import React, { Component } from 'react';

import BattleContainer from './BattleContainer';
import HudContainer from './HudContainer'
import Home from '../components/Home'
import Hud from '../components/Hud';
import ShopContainer from '../containers/ShopContainer';
import '../style/game.css'

var api = "http://localhost:3000"
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
    showPlayerDetails: false,
    winGame: false,
    loseGame: false,
    loading: [],
    monsterTurn: false,
    characterTurn: false,
    attackPhase: false
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

  monsterTurn = (updatedCharacterHealth, monsterDamage) => {
    if (updatedCharacterHealth > 0) {
      this.setState({
        monsterTurn: true
      }, ()=> {setTimeout(() => {
        this.setState({
          monsterTurn: false,
          attackPhase: false,
          characterHealth: updatedCharacterHealth
        })
      }, 1000)

      })
    }
    else {
      this.setState({
        characterHealth: 0
      })
      this.loseGame()
    }

  }
  // Each Attack does:
  // level * 3 + 100 %
  // basedamage
  // random
  // level * 7.5 + 100 %
  // stats
  // base bth:
  // level / 10
  //
  // stats damage :
  // str/8
  attack = () => {
    this.setState({
      attackPhase: true
    }, () => {
      console.log("battle " + this.state.attackPhase)
      var characterDamage = this.state.equippedWeapon.base_damage + (Math.floor(Math.random() * this.state.equippedWeapon.random_damage) + 1)

      //calculate damage based on level
      characterDamage = characterDamage * ((this.state.character.level * 3 + 100)/100)
      // Calculate damage based on element
      characterDamage = characterDamage * ((100 - this.state.currentMonster[`armor_${this.state.equippedWeapon.item_element.toLowerCase()}`])/100)

      characterDamage = Math.round(characterDamage)

      var monsterDamage = this.state.currentMonster.base_damage + (Math.floor(Math.random() * this.state.currentMonster.random_damage) + 1)

      //calculate damage based on level
      monsterDamage = monsterDamage * ((this.state.currentMonster.level * 3 + 100)/100)

      // Calculate damage based on element
      monsterDamage = monsterDamage * ((100 - this.state.equippedArmor[`armor_${this.state.currentMonster.weapon_element.toLowerCase()}`])/100)
      monsterDamage = Math.round(monsterDamage)

      var updatedMonsterHealth = this.state.currentMonsterHealth - characterDamage

      var updatedCharacterHealth = this.state.characterHealth - monsterDamage

      if (updatedMonsterHealth > 0) {
        this.setState({
          characterTurn: true
        }, ()=> {setTimeout(() => {
          this.setState({
            characterTurn: false,
            currentMonsterHealth: updatedMonsterHealth
          }, ()=>this.monsterTurn(updatedCharacterHealth, monsterDamage))
        }, 1000)
      })
      }
      else {
        this.setState({
          characterTurn: true
        }, ()=> {setTimeout(() => {
          this.setState({
            characterTurn: false,
            currentMonsterHealth: 0
          }, ()=>this.winGame())
        }, 1000)
      })
      }
    })


  }

  winGame = () => {
    this.setState({
      winGame: true
    })
    fetch((api + `/characters/${this.state.character.id}`), {
      method: "PATCH",
      body: JSON.stringify({character: {exp: this.state.character.exp + this.state.currentMonster.exp, gold: this.state.character.gold + this.state.currentMonster.gold}}),
      headers: {"Content-Type":"application/json"}
    }).then(() => {
      this.setState({
        character: {
          ...this.state.character,
          gold: this.state.character.gold + this.state.currentMonster.gold,
          exp: this.state.character.exp + this.state.currentMonster.exp
        }
      })
    })
    .then(() => {
      if (this.state.character.exp > this.state.character.exp_needed) {
        fetch((api + `/characters/${this.state.character.id}`), {
          method: "PATCH",
          body: JSON.stringify({character: {exp: this.state.character.exp - this.state.character.exp_needed, exp_needed: (this.state.character.exp_needed * (this.state.character.level - 1) * 1.1), level: this.state.character.level + 1 }}),
          headers: {"Content-Type":"application/json"}
        })
        .then(() => {
          this.setState({
            character: {
              ...this.state.character,
              exp: this.state.character.exp - this.state.character.exp_needed,
              exp_needed: (this.state.character.exp_needed * (this.state.character.level - 1) * 1.1),
              level: this.state.character.level + 1
            }
          })
        })
      }
    })
  }

  loseGame = () => {
    this.setState({
      loseGame: true
    })
  }

  continueGame = () => {
    this.setState({
      page: "home",
      loseGame: false,
      winGame: false,
      attackPhase: false
    })
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

        var weaponInventory = this.state.weapons.filter(weapon => {
          return weaponIds.includes(weapon.id)
        })

        this.setState({
          weaponInventory: weaponInventory,
          equippedWeapon: weaponInventory[0]
        })
      })

    })
    .then(() => {
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
    var monstersToFight = this.state.monsters.filter(monster => {
      if (monster.level >= this.state.character.level - 5 && monster.level <= this.state.character.level + 5) {
        return true
      } else {
        return false
      }
    })
    var newMonster = monstersToFight[Math.floor(Math.random() * monstersToFight.length)]
    this.setState({
      currentMonster: newMonster,
      currentMonsterHealth: newMonster.hp,
    })
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
          <BattleContainer monster={this.state.currentMonster} character={this.state.character} equippedArmor={this.state.equippedArmor} attack={this.attack} goHome={this.goHome} showMonsterDetails={this.state.showMonsterDetails} showPlayerDetails={this.state.showPlayerDetails} winGame={this.state.winGame} loseGame={this.state.loseGame} continueGame={this.continueGame} characterTurn={this.state.characterTurn} monsterTurn={this.state.monsterTurn} attackPhase={this.state.attackPhase}/>

        </div>
      );
    } else if (this.state.page === "home") {
      return (
        <div>
        <Home startBattle={this.startBattle} rest={this.rest} character={this.state.character} showDetails={this.state.showPlayerDetails} goShopping={this.goShopping} equippedArmor={this.state.equippedArmor}/>
        </div>
      )
    } else if (this.state.page === "shop") {
      return (
        <div>
        <ShopContainer armors={this.state.armors} weapons={this.state.weapons} goHome={this.goHome} character={this.state.character} equippedArmor={this.state.equippedArmor} showDetails={this.state.showPlayerDetails}/>
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
