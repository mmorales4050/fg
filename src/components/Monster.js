import React, { Component } from 'react';

class Monster extends Component {

  render() {
    return (
      <div>
      {this.props.monster.name} Image
      </div>
    );
  }

}

export default Monster;
