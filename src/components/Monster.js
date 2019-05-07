import React, { Component } from 'react';
import '../style/monster.css'
class Monster extends Component {

  render() {
    return (
      <div className="monster animate">

        <div className="head"></div>
        <div className="mid-section">
        <div className="front-arm"></div>
          <div className="body"></div>
          <div className="back-arm"></div>
        </div>
        <div className="bottom-section">
      <div className="right-leg"></div>
      <div className="left-leg"></div>
      </div>
      </div>
    );
  }

}

export default Monster;
