import React from 'react'

const Button = ({btnTxt, handleClick}) => {
  return (
    <button onClick={handleClick}>
        {btnTxt}
    </button>
  )
}

export default Button