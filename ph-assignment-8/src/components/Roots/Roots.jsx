import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Roots = () => {
  return (
    <div className='max-w-5xl mx-auto mb-10'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <br></br>
      <Footer></Footer>
    </div>
  )
}

export default Roots
