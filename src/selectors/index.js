//selectors 从状态树中筛选状态的函数
//处理状态数中派生出来的数据

const getProductsById = state => state.products.reduce(
  (obj, product) => {
    obj[product.id] = product
    return obj
  }, {})

export const getCartProducts = state => {
  const allProductsById = getProductsById(state)
  const cartProducts = state.cart.addedIds.map(id => ({...allProductsById[id],quntity:state.cart.quantityById[id]}))
  return cartProducts
}
export const getTotal = state =>state.cart.addedIds.reduce((total,id)=>(total+state.products.find(t=>t.id === id).price*state.cart.quantityById[id]),0)