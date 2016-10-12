import React, { PropTypes } from 'react'

const GameCol = ({ index }) => {
  return (
    <div className="col col-md-1 border game-cell" enum={ index }>
      { <div classname="filler"></div> }
    </div>
  )
}

GameCol.propTypes = {
  index: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  return state
}

export default GameCol
