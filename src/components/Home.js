import React, { Component } from 'react';
import '../style/home.css'
import CharacterDetails from '../components/CharacterDetails'

class Home extends Component {

  render() {
    return (

      <div className="home-container">
      <div className="details-home">
      {this.props.showDetails ? <CharacterDetails character={this.props.character}/> : <div className="place-holder"></div>}
      </div>
      <div>
      <div className="title-container">
      <div className="title">
        Game Title
      </div>
      </div>
      <div className="button-group">
      <button className="glass" onClick={this.props.startBattle}>Battle!</button>
      <button className="glass" onClick={this.props.rest}>Rest</button>
      <button className="glass" >Shop</button>
      <button className="glass" >Stat Trainers</button>
      <button className="glass" >Log Out</button>
      </div>
      </div>
      <div className="details-home">
      <div className="place-holder">
      </div>
      </div>
      </div>
    );
  }

}

export default Home;
