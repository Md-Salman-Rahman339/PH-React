import React from 'react'
import footerimg from '../../assets/images/logo-footer.png'
const Footer = () => {
  return (
    <>
    
    <footer className="footer bg-black text-white p-10 rounded-lg justify-between items-center justify-items-center">
   
  <nav className='justify-items-center text-wrap w-1/3'>
    <h6 className="footer-title">About us</h6>
    <p className='font-thin'>We are passionate team dedicated to providing the best services to our customers</p>
  </nav>
  <img src={footerimg} alt="" />
  <nav className='justify-center'>
    <h6 className="footer-title text-white font-bold">Quick Links</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  
  <form className='text-white'>
    <h6 className="footer-title font-bold">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn bg-rose-300 join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    
    </>
  )
}

export default Footer
