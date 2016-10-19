import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './game-col.css'

const GameCol = ({ index, game }) => {
  function handleClick(e) {
    if (game.edit) {
      $(e.target).click(function() {
        $(this).toggleClass(styles.on)
      })
    }
  }

  return (
    <div
      className={ ['col', 'col-md-1', 'game-cell', styles.border].join(' ') }
      enum={ index }
      onClick={ handleClick }
    >
      { <div className={ styles.filler }></div> }
    </div>
  )
}

GameCol.propTypes = {
  index: PropTypes.number.isRequired,
  game: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return state
}

export default connect(
  mapStateToProps
)(GameCol)
