import React from 'react'
import '../components-CSS//OurDocumentation.css'
import GroupImg from '../assets/default-images/icons-img/Group.png'
import BgImg1 from '../assets/background-images/BgImg1.png'
import BgImg2 from '../assets/background-images/BgImg2.png'
import ExcludeImg from '../assets/default-images/icons-img/Exclude.svg'

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
            <div className='c1_1'>
              <div className='c-card c1_1-card1'>
                <div className='card-c'>
                  <div className='h k7'>70K+</div>
                  <div className='q'>We have more than<br />
                    customers</div>
                </div>
              </div>
              <div className='c-card c1_1-card2'>
                <div className='card-c cc'>
                  <div className='h m1'>10M+</div>
                  <div className='q'>People who are helped<br />
                    because of our hard
                    <br />work</div>
                </div>
              </div>
            </div>
            <div className='c1_2'>
              <div className='c-card c1_2-card1'>
                <div className='card-c'>
                  <div className='h n1'>100+</div>
                  <div className='q'>Projects we have<br />
                    completed</div>
                </div>
              </div>
              <div className='c-card c1_2-card2'>
                <div className='card-c'>
                  <div className='h n2'>200+</div>
                  <div className='q'>Support from world-<br />
                    renowned companies</div>
                </div>
              </div>
            </div>
          </div>
          <div className='content2'>
            <div className='c2-text1'>Customer<br />
              satisfaction is<br />
              our first priority</div>
            <div className='c2-text2'>We serve many customers, ranging from small<br />
              businesses, medium entrepreneurs, to world-<br />
              renowned companies. Their satisfaction is our<br />
              pleasure. We strive to provide the best service by:</div>
            <div className='c2-ts'>
              <div className='ts ts1'>
                <img src={ExcludeImg} alt="" />
                <div className='ts-text'>Provide idea support from our creative team</div>
              </div>
              <div className='ts ts2'>
                <img src={ExcludeImg} alt="" />
                <div className='ts-text'>Provide attractive and professional design<br />
                  services</div>
              </div>
              <div className='ts ts3'>
                <img src={ExcludeImg} alt="" />
                <div className='ts-text'>Support for service 24 hours a week</div>
              </div>
              <div className='ts ts4'>
                <img src={ExcludeImg} alt="" />
                <div className='ts-text'>Helping our customers to grow their business</div>
              </div>
              <div className='ts ts5'>
                <img src={ExcludeImg} alt="" />
                <div className='ts-text'>Provide support to market products through<br />
                  online marketplace</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurDocumentation