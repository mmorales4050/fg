import React, { Component } from 'react';

class HudContainer extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

}

export default HudContainer;
