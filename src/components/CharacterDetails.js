import React, { Component } from 'react';
import '../style/details.css'
import CharacterStats from '../components/CharacterStats';

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
        <li><span>{this.props.character.armor_melee}</span></li>
        <li><span>{this.props.character.armor_ranged}</span></li>
        <li><span>{this.props.character.armor_magic}</span></li>
        </ul>
        </div>

        </div>
        {
          < CharacterStats character={this.props.character}/>
        }
        <ul>
        <li className="header">EQUIPMENT</li>
        <li className="description">{this.props.character.character_desc}</li>

        </ul>
      </div>
    );
  }

}

export default CharacterDetails;
