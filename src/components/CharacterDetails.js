import React, { Component } from 'react';
import '../style/details.css'

class CharacterDetails extends Component {

  render() {
    return (
      <div className="details">
      <div className="character-name">{this.props.character.name}</div>
      <div className="group">
        <ul>
        <li>Class </li>
        <li>Race </li>
        <li>Sub Race </li>
        <li>Clan </li>
        </ul>
        <ul>
        <li><span>{this.props.character.klass}</span></li>
        <li><span>{this.props.character.race}</span></li>
        <li><span>{this.props.character.sub_race}</span></li>
        <li><span>{this.props.character.clan}</span></li>
        </ul>
        </div>
        <div className="group">
        <ul>
        <li className="header info">INFO</li>
        <li></li>

        </ul>
        <ul className="group-left">
        <li className="header def">DEFENSE</li>
        <li></li>

        </ul>
        </div>
        <div className="top-container">
        <div className="group">
          <ul>
          <li>Level </li>
          <li>Exp </li>
          <li>Gold </li>
          </ul>
          <ul className="info-left">
          <li><span>{this.props.character.level}</span></li>
          <li><span>{this.props.character.exp}</span></li>
          <li><span>{this.props.character.gold}</span></li>
          </ul>
        </div>
        <div className="group">
        <ul>
        <li>Melee </li>
        <li>Ranged </li>
        <li>Magic </li>
        </ul>
        <ul>
        <li><span>{this.props.equippedArmor.armor_melee}</span></li>
        <li><span>{this.props.equippedArmor.armor_ranged}</span></li>
        <li><span>{this.props.equippedArmor.armor_magic}</span></li>
        </ul>
        </div>

        </div>
        <div className="stats">

        <ul>
        <li className="header attr">ATTRIBUTES</li>
        <li></li>

        </ul>
        <ul className="group-left">
        <li className="header">DEFENSE MODIFIERS</li>
        <li></li>

        </ul>
        </div>
        <div className="group">
        <div className="group">
        <ul className="right-list">
        <li>Strength</li>
        <li>Dexterity</li>
        <li>Intellect</li>
        <li>Endurance</li>
        <li>Charisma</li>
        <li>Luck</li>
        </ul>
        <ul className="left-list attr-list">
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
          <ul className="defense-mod">
          <li><span>{this.props.equippedArmor.armor_fire + 100}</span> <span className="percent">%</span></li>
          <li><span>{this.props.equippedArmor.armor_water + 100}</span> <span className="percent">%</span></li>
          <li><span>{this.props.equippedArmor.armor_wind + 100}</span> <span className="percent">%</span></li>
          <li><span>{this.props.equippedArmor.armor_ice + 100}</span> <span className="percent">%</span></li>
          <li><span>{this.props.equippedArmor.armor_earth + 100}</span> <span className="percent">%</span></li>
          <li><span>{this.props.equippedArmor.armor_energy + 100}</span> <span className="percent">%</span></li>
          <li><span>{this.props.equippedArmor.armor_light + 100}</span> <span className="percent">%</span></li>
          <li><span>{this.props.equippedArmor.armor_darkness + 100}</span> <span className="percent">%</span></li>
          </ul>
        </div>
        </div>
        <ul>
        <li className="header">EQUIPMENT</li>
        <li className="description">{this.props.character.character_desc}</li>

        </ul>
      </div>
    );
  }

}

export default CharacterDetails;
