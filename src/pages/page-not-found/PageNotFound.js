import React from 'react'
import { errorPage } from '../../assets/index'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";

const PageNotFound = () => {
  return (
    <div style={{width: '40%', margin: 'auto'}}>
      <img src={errorPage} alt='404' style={{width: '90%', marginTop: '10%'}} />
      <h3 style={{textAlign: 'center', padding: '1rem'}}><span><IoArrowBackOutline style={{color: '#0a58ca'}} /></span> <Link to='/'><span>Go Back Home</span> </Link></h3>
    </div>
  )
}

export default PageNotFound