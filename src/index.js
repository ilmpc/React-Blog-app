import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App'
import store from './store'

const render = (
) => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

store.subscribe(render)
render()
