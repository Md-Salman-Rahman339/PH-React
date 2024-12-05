import React, { useEffect, useState } from 'react'
import Cricketer from '../Cricketer/Cricketer'
const Cricketers = () => {
  const[cricketers,setCricketers]=useState([])

  useEffect(()=>{
    fetch("crick.json")
    .then(res=>res.json())
    .then(data=>setCricketers(data))
  },[])
  return (

    <>
    
    <div className=' grid grid-cols-3 '>
      
      {
        cricketers.map(cricketer=> <Cricketer key={cricketer.id}  cricketer={cricketer}></Cricketer>)
      }
    </div>
    </>
  )
}

export default Cricketers
