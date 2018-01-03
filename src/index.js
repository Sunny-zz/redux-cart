// import React from 'react'
// import ReactDom from 'react-dom'
// import App from './containers/App'
// import store from './store'
//
//
// const render = () => {
//   ReactDom.render(<App />, document.getElementById('root'))
// }
// render()
// store.subscribe(render)

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import store from './store'
let rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
