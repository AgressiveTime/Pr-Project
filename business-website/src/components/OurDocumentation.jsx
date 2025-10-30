import React from 'react'
import './CSS/OurDocumentation.css'
import GroupImg from '../assets/default-images/Group.png'
import BgImg1 from '../assets/background-images/BgImg1.png'
import BgImg2 from '../assets/background-images/BgImg2.png'

function OurDocumentation() {
  return (
    <>
      <div className='our_documentation'>
        <div className='o_d-text'>
          <div className='o_d-text1'>Our Documentation</div>
          <div className='o_d-text2'>See what our profile is like and how we work for your<br />
            business</div>
        </div>
        <div className='group'>
          <img className='gp_img' src={GroupImg} alt="" />
          <img className='bg_img1' src={BgImg1} alt="" />
          <img className='bg_img2' src={BgImg2} alt="" />
        </div>

      </div>
      <div className='o_d-content'>
        <div className='content'>
          <div className='content1'>
            
          </div>
          <div className='content2'>

          </div>
        </div>
      </div>
    </>
  )
}

export default OurDocumentation