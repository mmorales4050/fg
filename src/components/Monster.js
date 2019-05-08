import React, { Component } from 'react';
import '../style/monster.css'
class Monster extends Component {

  render() {
    console.log(this.props.monsterTurn)
    return (
      <div className={`monster ${this.props.monsterTurn ? "animate" : null}`}>
      </div>
    );
  }

}

export default Monster;
