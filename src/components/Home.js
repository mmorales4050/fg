import React, { Component } from 'react';
import '../style/home.css'

class Home extends Component {

  render() {
    return (
      <div className="home-container">
      <div className="title">
      <div></div>
      <div></div>
      </div>
      <div className="button-group">
      <button className="glass" onClick={this.props.startBattle}>Battle!</button>
      <button className="glass" onClick={this.props.rest}>Rest</button>
      <button className="glass" >Shop</button>
      <button className="glass" >Stat Trainers</button>
      <button className="glass" >Log Out</button>
      </div>
      </div>
    );
  }

}

export default Home;
