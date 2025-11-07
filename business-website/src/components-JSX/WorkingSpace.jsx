import React from 'react'
import '../components-CSS/WorkingSpace.css'
import Mg0 from '../assets/default-images/cards-img/Mg-0.png'
import Mg1 from '../assets/default-images/cards-img/Mg-1.png'
import Mg2 from '../assets/default-images/cards-img/Mg-2.png'
import Mg3 from '../assets/default-images/cards-img/Mg-3.png'
import Mg4 from '../assets/default-images/cards-img/Mg-4.png'
import Mg5 from '../assets/default-images/cards-img/Mg-5.png'
import Vector from '../assets/background-images/Vector.png'

function WorkingSpace() {
  return (
    <>
      <div id='section2'>
        <div className='working_space'>
          <div className='w_s-text'>
            <div className='w_s-text1'>Working space</div>
            <div className='w_s-text2'>Let’s meet our interior room decoration</div>
          </div>
          <div className='m_g'>
            <div className='mg'>
              <div className='f f1'>
                <img className='f-i' src={Mg0} alt="" />
                <img className='f-i' src={Mg3} alt="" />
              </div>
              <div className='f f2'>
                <img className='f-i' src={Mg1} alt="" />
                <img className='f-i' src={Mg4} alt="" />
              </div>
              <div className='f f3'>
                <img className='f-i' src={Mg2} alt="" />
                <img className='f-i' src={Mg5} alt="" />
              </div>
            </div>
          </div>
        </div>
        <img className='bg_i1' src={Vector} alt="" />
        <img className='bg_i2' src={Vector} alt="" />
      </div>

    </>

  )
}

export default WorkingSpace