import React, { Component, createRef } from "react"
import { connect } from "react-redux"
import { 
  lockButtons,
  unlockButtons,
  changeLevel,
  startGame,
  stopGame,
  makeMove
} from "../store/actions"

import Board from "./Board"

import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.board = createRef()
    this.state = { currentLight: null }
  }

  render () {
    const round = this.props.buttonsOrder.length

    return (
      <div className="center-text">
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
        <button onClick={this.props.startGame}>Start game</button>
      </div>
    )
  }

  componentDidUpdate (prevProps) {
    if (
      this.props.buttonsOrder !== prevProps.buttonsOrder &&
      this.props.buttonsOrder.length
    ) {
      this.showSequence()
    }
  }

  changeLevel = (event) => {
    this.props
      .changeLevel(
        event.target.value
      )
  }

  makeMove = move => {
    if (this.props.buttonsAreBlocked) {
      return
    }

    if (this.props.buttonsOrder[this.props.moveNumber] === move) {
      this.props.makeMove()
    } else {
      this.props.stopGame()
    }
  }

  showSequence = async () => {
    this.props.lockButtons()
    const delay = this.getDelay(this.props.level)

    const order = this.props.buttonsOrder
    
    const turnOnButton = i => (
      () => {
        this.setState({ currentLight: null }, () => {
          if (i < order.length) {
            this.setState(
              { currentLight: order[i] },
              () => { setTimeout(turnOnButton(i + 1), delay) }
            )
          } else {
            this.props.unlockButtons()
          }
        })
      }
    )

    setTimeout(turnOnButton(0), delay)
  }

  getDelay = level => {
    switch (level) {
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
    startGame,
    changeLevel,
    lockButtons,
    unlockButtons,
    makeMove,
    stopGame
  }
)(App)