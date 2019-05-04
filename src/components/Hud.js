import React, { Component } from 'react';

class Hud extends Component {

  render() {
    return (
      <div>
      <div>{this.props.character.name}</div>
      <div>HP:
      {this.props.health}
      </div>

      </div>
    );
  }

}

export default Hud;
