import React, { useContext } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  return (
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
         <li><a>Home</a></li>
      <li><a>Donations Campaign</a></li>
      <li><a>How To Help</a></li>
      <li><a>Dashboard</a></li>
      </ul>
    </div>
    <img src={logo} alt="" />
    <a className="btn btn-ghost text-xl">Donations</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <Link to='/category/:division'> <li><a>Home</a></li></Link>
      <li><a>Donations Campaign</a></li>
      <li><a>How To Help</a></li>
      {user && user?.email?(
 <li><Link to="/auth/dashboard"><a>Dashboard</a></Link></li>
      ):(
        <></>
      )}
     
    </ul>
  </div>

  <div className="navbar-end">
    {user && user?.email?(
      <button onClick={logOut} className="btn btn-neutral rounded-none">
      Log-Out
    </button>
    ):(
      <Link to="/auth/login" className="btn btn-neutral rounded-none">
             Login
           </Link>
    )}
  </div>
</div>
  )
}

export default Navbar
