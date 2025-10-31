import React from 'react'
import '../components-CSS//Header.css'
import Logo from '../assets/default-images/icons-img/Logo-Ellipse.svg'

function Header () {
  return (
    <div className='header'>
      <div className='hdr'>
        <div className='logo'>
          <img className='logo-img' src={Logo} alt="" />
        </div>
        <div className='nav'>
          <div className='nav-1'>Home</div>
          <div className='nav-2'>Works</div>
          <div className='nav-3'>About</div>
        </div>
        <div className='button'>
          <div>Contact us</div>
        </div>
      </div>
    </div>
  )
}

export default Header