import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import GameRow from '../components/game-of-life/game-row.jsx'
import styles from './game-of-life.css'

const GameOfLife = React.createClass({
  propTypes: {
    gameBoard: PropTypes.array.isRequired
  },

  render() {
    const { gameBoard } = this.props

    return (
      <div className={ ['container', 'main', styles.main].join(' ') }>
        <div className="container">
          <div className="row">
            <div className={ ['col-md-1', styles.gameMenu].join(' ') }>
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
              <div className={ styles.stats }>
                <h1>Generation</h1>
                <span className="generation">0</span>
                <h1>Population</h1>
                <span className="population">0</span>
              </div>
            </div>
            <div className="col-md-8">
              <div className={ ['container', styles.game].join(' ') }>
                { gameBoard.map((row, rowIndex) => {
                  return (
                    <GameRow index={ rowIndex } row={ row } key={ rowIndex } />
                  )
                }) }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return state
}

export default connect(
  mapStateToProps
)(GameOfLife)
