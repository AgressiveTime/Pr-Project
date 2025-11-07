import React from 'react'
import '../components-CSS//Header.css'
import Logo from '../assets/default-images/icons-img/Logo-Ellipse.svg'

function Header() {
  return (
    <div className='header'>
      <div className='hdr'>
        <a className='a' href="">
          <div className='logo'>
            <img className='logo_img' src={Logo} alt="" />
          </div>
        </a>
        <div className='nav'>
          <a className='a' href=""><div className='nav-1'>Home</div></a>
          <a className='a' href=""><div className='nav-2'>Works</div></a>
          <a className='a' href=""><div className='nav-3'>About</div></a>
        </div>
        <a className='a' href="">
          <div className='button'>
            <div className='bn-text'>Contact us</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Header