import React, { Component } from 'react';
import ShopItemList from '../components/ShopItemList';
import '../style/shop.css'

class ShopItems extends Component {

  state = {
    highlightedItem: ""
  }

  highlightItem = (e) => {
    this.setState({highlightedItem: e.target.innerText})
    console.log(this.state.highlightedItem)
  }

  removeHighlight = () => {
    this.setState({highlightedItem: ""})
  }
  render() {
    return (
      <ul className="shop-items">
      <ShopItemList items={this.props.weapons} category="Weapons" highlightedItem={this.state.highlightedItem} highlightItem={this.highlightItem} selectItem={this.props.selectItem}/>
      <ShopItemList items={this.props.armors} category="Armors" highlightedItem={this.state.highlightedItem} highlightItem={this.highlightItem} selectItem={this.props.selectItem}/>
      </ul>
    );
  }

}

export default ShopItems;
