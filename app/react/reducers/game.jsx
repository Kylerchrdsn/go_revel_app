import * as types from '../constants/game-action-types.jsx'

export default function game(state, action = {type: 0}) {
  console.log(action.type)
  state = state || {edit: true}

  switch(action.type) {
    default:
      return state
  }
}
