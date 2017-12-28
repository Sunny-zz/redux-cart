import React from 'react'
import store from '../store'
class Cart extends React.Component {
  handleAdd = (id) => {
    store.dispatch({
      type:'ADD_NUM',
      text:id
    })
  }
  handleSub = (t) => {
    if(t.num>1){
      store.dispatch({
        type:'SUB_NUM',
        text:t.id
      })
    }
  }
  render () {
    const { cart } = store.getState()
    const total = cart.reduce((sum, t) => {
      return sum + t.num*t.price
    }, 0)
    const productList = cart.length > 0 ? cart.map(t => (
      <div key={t.id}>
        <p>{t.name} --- {t.price} --- <button onClick={()=>this.handleSub(t)}>-</button> {t.num} <button onClick={()=>this.handleAdd(t.id)}>+</button></p>
      </div>
    )) : '请添加商品到购物车'
    return (
      <div>
        {productList}
        <hr/>
        {cart.length > 0? <p>总价:{total}</p> : null}
      </div>
    )
  }
}

export default Cart
