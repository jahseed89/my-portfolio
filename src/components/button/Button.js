import React from 'react'
import './button.scss'

const Button = ({btnTxt, handleClick, className="button"}) => {
  return (
    <button onClick={handleClick} className={className}>
        {btnTxt}
    </button>
  )
}

export default Button