import React, { PropTypes } from 'react'
import GameCol from './game-col.jsx'

const GameRow = ({ index, row }) => {
  return (
    <div className="row" enum={ index }>
      { row.map((col, j) => {
        return <GameCol key={ j } index={ j } />
      })}
    </div>
  )
}

GameRow.propTypes = {
  index: PropTypes.number.isRequired,
  row: PropTypes.array.isRequired
}

export default GameRow
