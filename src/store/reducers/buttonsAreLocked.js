const initialState = true

const buttonsAreLocked = (state = initialState, action) => {
  switch (action.type) {
    case "LOCK_BUTTONS":
      return true
    case "UNLOCK_BUTTONS":
      return false
    default:
      return state
  }
}

export default buttonsAreLocked