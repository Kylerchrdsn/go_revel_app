import * as types from '../constants/gameBoard-action-types.jsx'

function initRow(rowNum) {
  var row = []

  for (var colNum = 0; colNum < 12; colNum++) {
    row.push({ row: rowNum, col: colNum, alive: false })
  }

  return row
}

function initState() {
  var rows = []

  for (var rowNum = 0; rowNum > 12; rowNum++) {
    rows.push(initRow(rowNum))
  }

  return rows
}

export default function gameBoard(state, action = {}) {
  state = state || initState()

  switch (action.type) {
    case types.TOGGLE_CELL_STATE:
      return state
    case types.ITERATE_WORLD:
      return state
    default:
      return state
  }
}
