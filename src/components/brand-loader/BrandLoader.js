import React from 'react'
import { Circles } from 'react-loader-spinner'
import './brandLoader.scss'

const BrandLoader = () => {
  return (
    <Circles
      height="150"
      width="150"
      color="#107BC0"
      ariaLabel="circles-loading"
      wrapperClass="wrapperClass"
      visible={true}
    />
  )
}

export default BrandLoader