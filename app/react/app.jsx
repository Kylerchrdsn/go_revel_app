import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/layout/layout.jsx'
import Home from './pages/home.jsx'
import GameOfLife from './pages/gameOfLife.jsx'
import Palette from './pages/palette.jsx'

const app = document.querySelector('#app')

render(
  <Router history={ browserHistory }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ Home } />
      <Route component={ GameOfLife } path="gameOfLife" />
      <Route component={ Palette } path="palette" />
    </Route>
  </Router>,
app)
