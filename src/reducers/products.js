const initialState =[
  {
    id:1,
    name:'iPhone 尊享版',
    price:100,
    buy:false
  },
  {
    id:2,
    name:'iPhone 制定版',
    price:200,
    buy:false
  },
  {
    id:3,
    name:'iPhone 限量版',
    price:300,
    buy:false
  }
]

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state.map(t=>{
        if(t.id === action.productId)t.buy=true
        return t
      })
    default:
      return state
  }

}
export default products
