import React, { Component } from 'react';
import '../style/battle_menu.css'
class BattleMenu extends Component {

  render() {
    return (
      <div className="battle-menu">
        <button onClick={this.props.attack}>Attack</button>
        <button onClick={this.props.goHome}>Cancel</button>
      </div>
    );
  }

}

export default BattleMenu;
