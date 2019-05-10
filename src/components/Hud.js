import React, { Component } from 'react';

class Hud extends Component {

  render() {
    return (
      <div className={`character-icon-container ${this.props.element_class}`}>
      {this.props.element_class === "enemy" ?
        <>
        <div className={`character-icon-name ${this.props.element_class}`}>{this.props.character.name}
          <div className="health">{this.props.health}</div>
          <div className="mana">{this.props.character.mp}</div>
        </div>
        <div onMouseEnter={this.props.showDetails} onMouseLeave={this.props.hideDetails} className={`circle ${this.props.element_class}`}>
          <img src={""} height="140" alt="" />
        </div>
        </>
      :
        <>
        <div onMouseEnter={this.props.showDetails} onMouseLeave={this.props.hideDetails} className={`circle ${this.props.element_class}`}>
          <img src={""} width="120"alt="" />
        </div>

        <div className={`character-icon-name ${this.props.element_class}`}>
        {this.props.character.name}

          <div className="health">{this.props.health}</div>
          <div className="mana">100</div>

        </div>
        </>
      }

      </div>
    );
  }

}

export default Hud;
