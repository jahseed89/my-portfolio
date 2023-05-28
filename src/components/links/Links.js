import React from 'react'
import { Link } from 'react-router-dom'
import './links.scss'

const Links = ({url, text}) => {
  return (
    <Link to={url} target='_blank' className='links'>
        {text}
    </Link>
  )
}

export default Links