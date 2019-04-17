const initialState = 0

const moveNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INC_MOVE_NUMBER":
      return state + 1
    case "RETURN_TO_START":
      return 0
    default:
      return state
  }
}

export default moveNumber