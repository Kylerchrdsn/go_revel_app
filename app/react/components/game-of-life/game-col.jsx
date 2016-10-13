import React, { PropTypes } from 'react'
import styles from './game-col.css'

const GameCol = ({ index }) => {
  return (
    <div className={ ['col', 'col-md-1', 'game-cell', styles.border].join(' ') } enum={ index }>
      { <div className={ styles.filler }></div> }
    </div>
  )
}

GameCol.propTypes = {
  index: PropTypes.number.isRequired,
}

export default GameCol
