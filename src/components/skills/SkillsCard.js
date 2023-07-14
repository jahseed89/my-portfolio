import React from 'react'
import './skillCard.scss'

const SkillsCard = ({skillIcon, skill}) => {
  return (
    <div className='skill'>
        <img src={skillIcon} alt="logo" />
        <h4>{skill}</h4>
    </div>
  )
}

export default SkillsCard