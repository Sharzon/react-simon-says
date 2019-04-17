import React from 'react'

import './style.css';

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