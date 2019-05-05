import React, { Component } from 'react';

class CharacterDetails extends Component {

  render() {
    return (
      <div className="character-details">
      <div>{this.props.character.name}</div>
      </div>
    );
  }

}

export default CharacterDetails;
