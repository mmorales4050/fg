import React, { Component } from 'react';
import Vendor from '../components/Vendor';
import ShopItemContainer from '../containers/ShopItemContainer';
import ShowItem from '../components/ShowItem';
import CharacterDetails from '../components/CharacterDetails';
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
      {this.props.showDetails ? <CharacterDetails character={this.props.character} equippedArmor={this.props.equippedArmor}/> : null}
      <Vendor goHome={this.props.goHome}/>
      <ShopItemContainer armors={this.props.armors} weapons={this.props.weapons} selectItem={this.selectItem}/>
      <ShowItem selectedItem={this.state.selectedItem}/>
      </div>
    );
  }

}

export default ShopContainer;
