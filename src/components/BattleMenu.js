import React, { Component } from 'react';

class BattleMenu extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.attack}>Attack</button>
        <button onClick={this.props.goHome}>Cancel</button>
      </div>
    );
  }

}

export default BattleMenu;
