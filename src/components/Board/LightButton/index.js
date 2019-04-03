import React from 'react'

import './style.css';

// class LightButton extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       sound: new Audio('sounds/' + this.props.sound)
//     }
//   }

//   render () {
//     const classes = [
//       "light-button",
//       "light-button-" + this.props.color,
//     ]
//     classes = this.props.on ? [ ...classes, "on" ] : classes
//     const className = classes.join(" ")

//     return (
//       <div
//         className={className} 
//         onMouseDown={() => this.onLightButtonClick()} />
//     )
//   }

//   onLightButtonClick () {
//     if (!this.props.locked) {
//       this.state.sound.play()
//     }
//   }
// }

const LightButton = ({ color, currentLight, onClick }) => {
  let classes = [
    "light-button",
    "light-button-" + color,
  ]
  classes = currentLight === color ? [ ...classes, "on" ] : classes
  const className = classes.join(" ")
  
  return (
    <div
      className={className}
      onClick={() => onClick(color)} />
  )
}

export default LightButton