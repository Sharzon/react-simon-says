const initialState = []

const buttonsOrder = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BUTTON":
      return [
        ...state,
        action.nextButton
      ]
    case "CLEAR_ORDER":
      return initialState
    default:
      return state
  }
}

export default buttonsOrder