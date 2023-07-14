import React from 'react'
import { Link } from 'react-router-dom'
import './projectCard.scss'

const ProjectCard = ({title, projImg, desc, url, linkText}) => {
  return (
    <div className='projCard-wrapper'>
        <h3>{title}</h3>
        <img src={projImg} alt='proj' />
        <p>{desc}</p>
        <Link to={url} target='_blank'>{linkText}</Link>
    </div>
  )
}

export default ProjectCard