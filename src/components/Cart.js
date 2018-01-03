import React from 'react'
import store from '../store'
class Cart extends React.Component {
  handleAdd = (id) => {
    store.dispatch({
      type:'ADD_NUM',
      productId:id
    })
  }
  handleSub = (id) => {
    if(this.props.products.find(t=>t.id===id).quntity>1){
      store.dispatch({
        type:'SUB_NUM',
        productId:id
      })
    }
  }
  render () {
    const { products, total } = this.props
    const productList = products.length > 0 ? products.map(t => (
      <div key={t.id}>
        <p>{t.name} --- {t.price} --- <button onClick={()=>this.handleSub(t.id)}>-</button> {t.quntity} <button onClick={()=>this.handleAdd(t.id)}>+</button> --- total {t.quntity*t.price}</p>
      </div>
    )) : '请添加商品到购物车'
    return (
      <div>
        {productList}
        <hr/>
        {products.length > 0? <p>总价:{total}</p> : null}
      </div>
    )
  }
}

export default Cart
