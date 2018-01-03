import { combineReducers } from 'redux'

const addedIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return  [...state,action.productId]
    default:
      return state
  }
}
const quantityById = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {...state,[action.productId]:1}
    case 'ADD_NUM':
      return {...state,[action.productId]:state[action.productId]+1}
    case 'SUB_NUM'    :
      return {...state,[action.productId]:state[action.productId]-1}
    default:
      return state
  }
}
const cart = combineReducers({
  addedIds,
  quantityById
})
export default cart
