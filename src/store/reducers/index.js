import { combineReducers } from "redux"
import buttonsAreLocked from './buttonsAreLocked'
import buttonsOrder from './buttonsOrder'
import level from './level'
import moveNumber from './moveNumber'

export default combineReducers({ 
  buttonsAreLocked,
  buttonsOrder,
  level,
  moveNumber
});