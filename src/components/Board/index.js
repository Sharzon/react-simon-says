import React, { Component } from 'react'
import { connect } from 'react-redux'

import LightButton from './LightButton'

import './style.css'

class Board extends Component {
  render () {
    const className = this.props.buttonsAreLocked ? "locked" : ""

    return (
      <table className={className}>
        <tbody>
          <tr>
            <td>
              <LightButton
                color="red"
                currentLight={this.props.currentLight}
                onClick={this.handleButtonClick} />
              </td>
            <td>
              <LightButton 
                color="green"
                currentLight={this.props.currentLight}
                onClick={this.handleButtonClick} />
            </td>
          </tr>
          <tr>
            <td>
              <LightButton
                color="blue"
                currentLight={this.props.currentLight}
                onClick={this.handleButtonClick} />
            </td>
            <td>
              <LightButton 
                color="yellow" 
                currentLight={this.props.currentLight}
                onClick={this.handleButtonClick} />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  componentDidUpdate (prevProps) {
    const currentLight = this.props.currentLight
    if (currentLight && currentLight !== prevProps.currentLight) {
      this.playButtonsSound(currentLight)
    }
  }

  handleButtonClick = button => {
    if (!this.props.buttonsAreLocked) {
      this.playButtonsSound(button)
      this.props.onButtonClick(button)
    }
  }

  playButtonsSound = button => {
    const sounds = {
      red: "1.mp3",
      blue: "2.mp3",
      yellow: "3.mp3",
      green: "4.mp3"
    }

    const sound = document.createElement('audio')
    sound.setAttribute('autoplay', true)
    sound.setAttribute('src', `sounds/${sounds[button]}`)

    document.body.append(sound)
  }
}

const mapStateToProps = ({ buttonsAreLocked }) => ({ buttonsAreLocked })

export default connect(mapStateToProps)(Board)