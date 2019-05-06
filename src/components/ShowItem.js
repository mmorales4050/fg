import React, { Component } from 'react';
import '../style/shop.css'

class ShowItem extends Component {

  showTopDetails = () => {
    if (this.props.selectedItem.name) {
      return (
        <div className="top-details-name">{this.props.selectedItem.name}</div>
      )
    }
  }

  showMidDetails = () => {
    if (this.props.selectedItem.name) {
      return (
        <div className="mid-details">
          <div className="mid-details-top">
          <div><div className="bold-shop-text">Price:<span>{this.props.selectedItem.price}</span></div><div className="bold-shop-text">Level: <span>{this.props.selectedItem.item_level}</span></div></div>
          <div>Element Icon</div>
          </div>
          <div className="bold-shop-text">Description</div>
          <div className="desc-text">{this.props.selectedItem.item_desc}</div>
        </div>
      )
    }
  }

  showBottomDetails = () => {
    if (this.props.selectedItem.name) {
      return (
        <div className="bottom-details">
        <button>Buy</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="show-item">
      <div className="show-item-box top">
        {this.showTopDetails()}
      </div>
      <div className="show-item-box-center">
        {this.showMidDetails()}
      </div>
      <div className="show-item-box bottom">
        {this.showBottomDetails()}
      </div>
      </div>
    );
  }

}

export default ShowItem;
