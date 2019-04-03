import { combineReducers } from "redux"
import buttonsAreLocked from './buttonsAreLocked'
import buttonsOrder from './buttonsOrder'
import level from './level'
import moves from './moves'

export default combineReducers({ 
  buttonsAreLocked,
  buttonsOrder,
  level,
  moves
});