import React, { Component } from 'react';
import '../style/hud.css'

class HudContainer extends Component {

  render() {
    return (
      <div className="hud-container">
        {this.props.children}
      </div>
    );
  }

}

export default HudContainer;
