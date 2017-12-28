import React from 'react'
import ReactDom from 'react-dom'
import App from './containers/App'
import store from './store'


const render = () => {
  console.log(1)
  ReactDom.render(<App />, document.getElementById('root'))
}
render()
store.subscribe(render)
