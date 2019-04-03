const initialState = "easy"

const level = (state = initialState, action) => {
  const availableLevels = ["easy", "medium", "hard"]
  if (
    action.type === "CHANGE_LEVEL" &&
    availableLevels.includes(action.level)
  ) {
    return action.level
  }
  
  return state
}

export default level