import React from 'react'
import { Link } from 'react-router-dom'
import './blogCard.scss'

const BlogCard = ({blogTitle, blogImg, description, blogUrl, blogLink}) => {
  return (
    <div className='blog-card'>
        <h3>{blogTitle}</h3>
        <img src={blogImg} alt="img" />
        <p>{description}</p>
        <Link to={blogUrl} target='_blank'>{blogLink}</Link>
    </div>
  )
}

export default BlogCard