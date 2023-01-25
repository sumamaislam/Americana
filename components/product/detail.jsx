import React from 'react'
import { useSelector } from 'react-redux'

function Detail() {

  const {details} = useSelector((state)=>state.product);

  console.log("details",details)
  return (
    <div>Detail</div>
  )
}

export default Detail