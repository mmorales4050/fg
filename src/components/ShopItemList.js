import React, { Component } from 'react';
import '../style/shop.css'

class ShopItemList extends Component {
  state = {
    showItems: false,

  }
  showItems = () => {
    this.setState({showItems: !this.state.showItems})
  }

  displayItems = () => {
    return this.props.items.map(item => {
      return <li onClick={(e) => this.props.highlightItem(e)} className={`shop-item-list ${this.props.highlightedItem === item.name ? "highlight" : null}`}><div className="shop-list-item" onClick={()=>this.props.selectItem(item)}><img src={require(`../images/${item.item_element.toLowerCase()}.png`)} alt="" width="15" height="15"/>{item.name}</div></li>
    })
  }



  render() {
    return (
      <div className="shop-item-list">
      <div className={this.props.highlightedItem.includes(this.props.category) ? "highlight" : null} onClick={(e) => {this.showItems();this.props.highlightItem(e)}}>- Shop {this.props.category}</div>
      <div>
      {this.state.showItems ? this.displayItems() : null}
      </div>
      </div>
    );
  }

}

export default ShopItemList;
