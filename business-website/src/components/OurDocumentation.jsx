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
            <div className='c1'>
              <div className='c-card c1-card1'>
                <div className='card-c'>
                  <div className='h k7'>70K+</div>
                  <div className='q'>We have more than<br/>
                  customers</div>
                </div>
              </div>
              <div className='c-card c1-card2'>
                <div className='card-c cc'>
                  <div className='h m1'>10M+</div>
                  <div className='q'>People who are helped<br/>
                  because of our hard
                  <br/>work</div>
                </div>
              </div>
            </div>
            <div className='c2'>
              <div className='c-card c2-card1'>
                <div className='card-c'>
                  <div className='h n1'>100+</div>
                  <div className='q'>Projects we have<br/>
                  completed</div>
                </div>
              </div>
              <div className='c-card c2-card2'>
                <div className='card-c'>
                  <div className='h n2'>200+</div>
                  <div className='q'>Support from world-<br/>
                  renowned companies</div>
                </div>
              </div>
            </div>
          </div>
          <div className='content2'>

          </div>
        </div>
      </div>
    </>
  )
}

export default OurDocumentation