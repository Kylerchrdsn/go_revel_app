import * as types from '../constants/gameBoard-action-types'

export function toggleCellState(cell) {
  return { type: types.TOGGLE_CELL_STATE }
}

export function iterateWorld() {
  return { type: types.ITERATE_WORLD }
}
