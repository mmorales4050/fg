import React, { Component } from 'react';
import '../style/details.css'

class CharacterStats extends Component {

  render() {
    return (
      <>
      <div className="stats">

      <ul>
      <li className="header">ATTRIBUTES</li>
      <li></li>

      </ul>
      <ul className="group-left">
      <li className="header">DEFENSE MODIFIERS</li>
      <li></li>

      </ul>
      </div>
      <div className="group">
      <div className="group">
      <ul>
      <li>Strength</li>
      <li>Dexterity</li>
      <li>Intellect</li>
      <li>Endurance</li>
      <li>Charisma</li>
      <li>Luck</li>
      </ul>
      <ul>
      <li><span>{this.props.character.stre}</span></li>
      <li><span>{this.props.character.dext}</span></li>
      <li><span>{this.props.character.inte}</span></li>
      <li><span>{this.props.character.char}</span></li>
      <li><span>{this.props.character.endu}</span></li>
      <li><span>{this.props.character.luck}</span></li>
      </ul>
      </div>
      <div className="group">
      <ul className="right-list">
      <li>Fire</li>
      <li>Water</li>
      <li>Wind</li>
      <li>Ice</li>
      <li>Earth</li>
      <li>Energy</li>
      <li>Light</li>
      <li>Darkness</li>
      </ul>
      <ul>
      <li><span>{this.props.character.armor_fire + 100}</span> %</li>
      <li><span>{this.props.character.armor_water + 100}</span> %</li>
      <li><span>{this.props.character.armor_wind + 100}</span> %</li>
      <li><span>{this.props.character.armor_ice + 100}</span> %</li>
      <li><span>{this.props.character.armor_earth + 100}</span> %</li>
      <li><span>{this.props.character.armor_energy + 100}</span> %</li>
      <li><span>{this.props.character.armor_light + 100}</span> %</li>
      <li><span>{this.props.character.armor_darkness + 100}</span> %</li>
      </ul>
      </div>
      </div>
      </>
    );
  }

}

export default CharacterStats;
