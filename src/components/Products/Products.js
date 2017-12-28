import React, { Component } from 'react'
import './products.css'
import store from '../../store'
class Products extends Component {
  state = {
    products:[
      // {
      //   id:1,
      //   name:'iPhone x'
      // },
      // {
      //   id:2,
      //   name:'iPhone xx'
      // },
      // {
      //   id:3,
      //   name:'iPhone xxx'
      // }
    ]
  }

  render () {
    const { products } = store.getState()
    const productList = products.map( item => <div key={item.id} className='product'>{item.name}</div>)
    return (
      <div>
        { productList }
      </div>
    )
  }
}

export default Products
