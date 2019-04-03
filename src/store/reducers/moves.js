const initialState = []

const moves = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVES":
      return [ ...action.moves ]
    case "REMOVE_MOVE":
      const [ firstMove, ...moves ] = state
      return moves
    case "CLEAR_MOVES":
      return initialState
    default:
      return state
  }
}

export default moves