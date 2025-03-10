import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import { Outlet } from 'react-router-dom'
import LeftNavbar from '../components/layout-component/leftNavbar'

const HomeLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <section>
        <Banner></Banner>
      </section>

      <main  className='w-11/12 mx-auto pt-5  grid md:grid-cols-12 gap-3'>
        <aside className=' left col-span-3' >
         <LeftNavbar></LeftNavbar>
        </aside>
        <section className='col-span-9'>
            <Outlet></Outlet>
        </section>
      </main>
    </div>
  )
}

export default HomeLayout
