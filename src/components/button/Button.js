import React from 'react'
import './button.scss'

const Button = ({type, btnTxt, handleClick, icon, className="button"}) => {
  return (
    <button type={type} onClick={handleClick} className={className}>
        {btnTxt}
        <span>{icon}</span>
    </button>
  )
}

export default Button