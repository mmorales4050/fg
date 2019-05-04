import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
      <div>
      <div>Fantasy Game</div>
      <div>Game Image</div>
      <button onClick={this.props.startBattle}>Battle!</button>
      <button onClick={this.props.rest}>Rest</button>
      <button>Shop</button>
      <button>Stat Trainers</button>
      <button>Log Out</button>

      </div>
    );
  }

}

export default Home;
