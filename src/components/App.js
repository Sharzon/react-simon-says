import React, { Component, createRef } from "react"
import { connect } from "react-redux"
import { 
  lockButtons,
  unlockButtons,
  changeLevel,
  addButton,
  clearOrder,
  setMoves,
  removeMove,
  clearMoves
} from "../store/actions"

import Board from "./Board"

import '../styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.board = createRef()
    this.state = { currentLight: null }
  }

  render () {
    const round = this.props.buttonsOrder.length

    return (
      <div>
        <h1>Simon the Game</h1>
        <h2>Round: {round}</h2>
        <label>
          Level:
          <select value={this.props.level} onChange={this.changeLevel}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <Board 
          ref={this.board}
          currentLight={this.state.currentLight}
          onButtonClick={this.makeMove} />
        <button onClick={this.startGame}>Start game</button>
      </div>
    )
  }

  startGame = () => {
    this.props.clearOrder()
    this.addRandomButton()
    this.showSequence()
    // this.props.unlockButtons()
  }

  changeLevel = (event) => {
    this.props
      .changeLevel(
        event.target.value
      )
  }

  addRandomButton = () => {
    const min = 0,
      max = 3
    
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);

    this.props.addButton(
      ["red", "green", "blue", "yellow"][rand]
    )
    this.props.setMoves(this.props.buttonsOrder)
  }

  makeMove = move => {
    if (this.props.buttonsAreBlocked) {
      return
    }

    if (this.props.moves[0] === move) {
      this.props.removeMove()
      if (!this.props.moves.length) {
        this.addRandomButton()
        this.showSequence()
      }
    } else {
      this.props.clearMoves()
      this.props.clearOrder()
      this.props.lockButtons()
    }
  }

  showSequence = () => {
    this.props.lockButtons()
    const delay = this.getDelay(this.props.level)
    
    for (let button in this.props.buttonsOrder) {
      this.setState({ currentLight: button })
      console.log(this.state.currentLight)
      setTimeout(() => {
        this.setState({ currentLight: null })
      }, delay)
    }
    this.props.unlockButtons()
  }

  getDelay = level => {
    switch (this.props.level) {
      case "easy":
        return 1500
      case "medium":
        return 1000
      case "hard":
        return 400
      default:
        return 1500
    }
  }
}

export default connect(
  state => state,
  { 
    lockButtons,
    unlockButtons,
    changeLevel,
    addButton,
    clearOrder,
    setMoves,
    removeMove,
    clearMoves
  }
)(App)