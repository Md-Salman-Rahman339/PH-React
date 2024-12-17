import React from 'react'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Gadgets from '../Gadgets/Gadgets'

const Home = () => {
  return (
    <div className='gap-x-10'>
       
      <h1>This is Home page</h1>
      <Banner></Banner>
      <Gadgets></Gadgets>
    </div>
  )
}

export default Home
