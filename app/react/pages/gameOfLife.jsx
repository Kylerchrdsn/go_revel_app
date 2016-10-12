import React, { PropTypes } from 'react'
import GameRow from '../components/game-of-life/game-row.jsx'

const GameOfLife = ({ gameBoard }) => {
  return (
    <div className="container main" style={{ position: 'relative' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-1 game-menu">
            <ul className="nav nav-stacked">
              <li className="game-menu-custom"><a href="#">Custom</a></li>
              <li className="game-menu-glider"><a href="#">Glider</a></li>
              <li className="game-menu-seed"><a href="#">Seed</a></li>
            </ul>
          </div>
          <div className="col-md-1">
            <ul className="nav nav-stacked game-menu-2">
              <li className="game-start">
                <a href="#">
                  Start <span className="glyphicon glyphicon-play"></span>
                </a>
              </li>
              <li className="game-stop">
                <a href="#">
                  Stop <span className="glyphicon glyphicon-stop"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <div className="stats">
              <h1>Generation</h1>
              <span className="generation">0</span>
              <h1>Population</h1>
              <span className="population">0</span>
            </div>
          </div>
          <div className="col-md-8">
            <div className="container game">
              { gameBoard.map((row, rowIndex) => {
                return (
                  <GameRow index={ rowIndex } key={ rowIndex } />
                )
              }) }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

GameOfLife.propTypes = {
  gameBoard: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return state
}

export default GameOfLife
