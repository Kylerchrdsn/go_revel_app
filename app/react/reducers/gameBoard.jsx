import * as types from '../constants/gameBoard-action-types.jsx'

export default function gameBoard(state = [], action = {}) {
  switch (action.type) {
    case types.TOGGLE_CELL_STATE:
      return state
    case types.ITERATE_WORLD:
      return state
    default:
      return state
  }
}
