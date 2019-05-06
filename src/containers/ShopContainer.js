import React, { Component } from 'react';
import Vendor from '../components/Vendor';
import ShopItemContainer from '../containers/ShopItemContainer';
import ShowItem from '../components/ShowItem';
import '../style/shop.css'

class ShopContainer extends Component {
  state = {
    selectedItem: {}
  }

  selectItem = (item) => {
    this.setState({selectedItem: item})
  }

  render() {
    return (
      <div className="shop-container">
      <Vendor />
      <ShopItemContainer armors={this.props.armors} weapons={this.props.weapons} selectItem={this.selectItem}/>
      <ShowItem selectedItem={this.state.selectedItem}/>
      </div>
    );
  }

}

export default ShopContainer;
