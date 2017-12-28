
const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return !state.find(t=>t.id===action.text.id)? [...state,action.text] : state
    case 'ADD_NUM':
      return state.map(t=>{
        if(t.id === action.text)t.num++
        return t
      })
    case 'SUB_NUM':
      return state.map(t=>{
        if(t.id === action.text)t.num--
        return t
      })
    default:
      return state
  }
}
export default cart
