import React from 'react'
import { render } from 'react-dom'
import Menu from './components/layout/menu.jsx'

const App = () => (
  <div>
    <Menu />
    <h1>Hello World</h1>
  </div>
)

render(<App />, document.querySelector('#app'))
