import React, { Component } from 'react';
import '../style/details.css'
import CharacterStats from '../components/CharacterStats';
class MonsterDetails extends Component {

  render() {
    return (
      <div className="details">
      <div className="monster-name">{this.props.monster.name}</div>
        <div className="top-container">
        <div className="group">
          <ul>
          <li>Level </li>
          <li>Exp </li>
          <li>Gold </li>
          </ul>
          <ul className="info-left">
          <li><span>{this.props.monster.level}</span></li>
          <li><span>{this.props.monster.exp}</span></li>
          <li><span>{this.props.monster.gold}</span></li>
          </ul>
        </div>
        <div className="group">
        <ul>
        <li>Melee </li>
        <li>Ranged </li>
        <li>Magic </li>
        </ul>
        <ul>
        <li><span>{this.props.monster.armor_melee}</span></li>
        <li><span>{this.props.monster.armor_ranged}</span></li>
        <li><span>{this.props.monster.armor_magic}</span></li>
        </ul>
        </div>

        </div>
        < CharacterStats character={this.props.monster}/>
        <ul>
        <li className="header">DESCRIPTION</li>
        <li className="description">{this.props.monster.monster_desc}</li>

        </ul>
      </div>
    );
  }

}

export default MonsterDetails;
