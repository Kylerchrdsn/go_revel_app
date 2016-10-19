import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Layout from './components/layout/layout.jsx'
import Home from './pages/home.jsx'
import GameOfLife from './pages/gameOfLife.jsx'
import Palette from './pages/palette.jsx'

import gameBoardReducer from './reducers/game-board.jsx'
import gameReducer from './reducers/game.jsx'

const app = document.querySelector('#app')
const store = createStore(
  combineReducers({
    game: gameReducer,
    gameBoard: gameBoardReducer,
    routing: routerReducer
  })
)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ Layout }>
        <IndexRoute component={ Home } />
        <Route component={ GameOfLife } path="gameOfLife" />
        <Route component={ Palette } path="palette" />
      </Route>
    </Router>
  </Provider>,
app)
