import React, { PropTypes } from 'react'
import GameCol from './game-col.jsx'

const GameRow = ({ index }) => {
  return (
    <div className="row" enum={ index }>
      <GameCol key={ j } index={ j } />
    </div>
  )
}

GameRow.propTypes = {
  index: PropTypes.number.isRequired,
}

export default GameRow
