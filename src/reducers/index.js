const initialState = {
  products:[
    {
      id:1,
      name:'iPhone x'
    },
    {
      id:2,
      name:'iPhone xx'
    },
    {
      id:3,
      name:'iPhone xxx'
    }
  ]
}

const rootReducer = (state = initialState, action) => {
 return state
}

export default rootReducer
