export const lockButtons = () => ({
  type: "LOCK_BUTTONS"
})

export const unlockButtons = () => ({
  type: "UNLOCK_BUTTONS"
})

export const addButton = nextButton => ({
  type: "ADD_BUTTON",
  nextButton
})

export const clearOrder = () => ({
  type: "CLEAR_ORDER"
})

export const changeLevel = level => ({
  type: "CHANGE_LEVEL",
  level
})

export const setMoves = moves => ({
  type: "SET_MOVES",
  moves
})

export const removeMove = () => ({
  type: "REMOVE_MOVE"
})

export const clearMoves = () => ({
  type: "CLEAR_MOVES"
})