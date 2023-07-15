import React from 'react'
import './skillCard.scss'

const SkillsCard = ({skillIcon, skill}) => {
  return (
    <div className='skill'>
        <img src={skillIcon} alt="logo" />
        <h6>{skill}</h6>
    </div>
  )
}

export default SkillsCard