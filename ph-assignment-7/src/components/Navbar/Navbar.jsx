import React from 'react'
import logo from '../../assets/images/logo.png'
const Navbar = () => {
  return (

    <>
  <header>
        <nav>
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li><a>Item 1</a></li>
                 
                  <li><a>Item 3</a></li>
                </ul>
              </div>
              <img src={logo} alt="" />
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>Fixture</a></li>
                <li><a>Teams</a></li>
                <li><a>Schedules</a></li>
              </ul>
              <a className="btn">Coin:0</a>
            </div>
           
              
            
          </div>
  
          
  
        </nav>
        
      </header>
    
    </>
  )
}

export default Navbar