import React, { Component } from 'react'
import ProductsContainer from '../containers/ProductsContainer'
import Cartcontainer from '../containers/CartContainer'
class Main extends Component {
  render () {
    return (
      <div>
        <ProductsContainer />
        <hr />
        <Cartcontainer />
      </div>
    )
  }
}

export default Main
