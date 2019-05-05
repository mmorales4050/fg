import React, { Component } from 'react';
import '../style/battle_menu.css'
class BattleMenu extends Component {

  render() {
    return (
      <div className="battle-menu">
        <button className="attack-button" onClick={this.props.attack}>Attack</button>
        <button className="attack-button"  onClick={this.props.goHome}>Spells</button>
        <button onClick={this.props.goHome}>Potions</button>
        <button onClick={this.props.goHome}>Weapons</button>
        <button onClick={this.props.goHome}>Shields</button>
        <button onClick={this.props.goHome}>Armor</button>
        <button onClick={this.props.goHome}>Pets</button>
        <button onClick={this.props.goHome}>Cancel</button>
      </div>
    );
  }

}

export default BattleMenu;
