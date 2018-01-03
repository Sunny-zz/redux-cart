import React, { Component } from 'react'
import store from '../store'
import styled from 'styled-components'
class Products extends Component {
  handleAdd = (t) => {
    store.dispatch({
      type:'ADD_TO_CART',
      productId:t.id
    })
  }
  render () {
    const { products } = this.props
    const productList = products.map( item => (
      <div key={item.id} className='product'>
        <p style={{margin:'10px 0'}}>{item.name} --- ${item.price} x 1</p>
        <button style={{cursor:'pointer',padding:'3px',backgroundColor:'#4ccbb1',color:'#fff',borderRadius:'4px',outline:0,border:0}} onClick={()=>this.handleAdd(item)} disabled={item.buy}
          > {item.buy?'Already bought':'Add to cart'}
        </button>
      </div>
    ))
    return (
      <Wrap>
        <h2>Shopping Cart Example</h2>
        { productList }
      </Wrap>
    )
  }
}

export default Products

const Wrap = styled.div`
  background-color:#afd5c8;
`