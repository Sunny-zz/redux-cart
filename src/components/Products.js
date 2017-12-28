import React, { Component } from 'react'
import store from '../store'
class Products extends Component {
  handleAdd = (t) => {
    store.dispatch({
      type:'ADD_TO_CART',
      text:{...t,num:1}
    })
  }
  render () {
    const { products } = store.getState()
    const productList = products.map( item => (
      <div key={item.id} className='product'>
        <p style={{margin:'10px 0'}}>{item.name} --- ${item.price} x 1</p>
        <span style={{cursor:'pointer',padding:'3px',backgroundColor:'#4ccbb1',color:'#fff',borderRadius:'4px'}} onClick={()=>this.handleAdd(item)}
          >Add to cart
        </span>
      </div>
    ))
    return (
      <div>
        <h2>Shopping Cart Example</h2>
        { productList }
      </div>
    )
  }
}

export default Products
