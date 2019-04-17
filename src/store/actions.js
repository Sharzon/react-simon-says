function getRandomButton() {
  const min = 0,
    max = 3
  
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);

  return ["red", "green", "blue", "yellow"][rand]
}

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

export const addRandomButton = () => addButton(getRandomButton())

export const clearOrder = () => ({
  type: "CLEAR_ORDER"
})

export const changeLevel = level => ({
  type: "CHANGE_LEVEL",
  level
})

export const returnToStart = () => ({
  type: "RETURN_TO_START"
})

export const startGame = () => async (dispatch) => {
  await dispatch(clearOrder())
  await dispatch(returnToStart())
  await dispatch(addRandomButton())
}

export const stopGame = () => async (dispatch) => {
  await dispatch(lockButtons())
  await dispatch(returnToStart())
  await dispatch(clearOrder())
}

export const makeMove = () => async (dispatch, getState) => {
  await dispatch({ type: "INC_MOVE_NUMBER" })
  if (getState().moveNumber >= getState().buttonsOrder.length) {
    await dispatch(returnToStart())
    await dispatch(addRandomButton())
  }
}