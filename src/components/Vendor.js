import React, { Component } from 'react';
import '../style/shop.css'

class Vendor extends Component {

  render() {
    return (
      <div className="vendor">
      <div className="vendor-name">Zard Hunter's Shop</div>
      <div className="shop-buttons">
        <button>Buy Items</button>
        <button>Sell Items</button>
        <button onClick={this.props.goHome}>Exit</button>
      </div>
      </div>
    );
  }

}

export default Vendor;
