import React from 'react'
import '../components-CSS/Testimonials.css'
import Ellipse1 from '../assets/default-images/cards-img/Ellipse-1.png'
import Ellipse2 from '../assets/default-images/cards-img/Ellipse-2.png'
import Ellipse3 from '../assets/default-images/cards-img/Ellipse-3.png'
import Ellipse4 from '../assets/default-images/cards-img/Ellipse-4.png'
import Ellipse5 from '../assets/default-images/cards-img/Ellipse-5.png'
import Ellipse6 from '../assets/default-images/cards-img/Ellipse-6.png'
import S from '../assets/default-images/icons-img/Star.svg'

function Testimonials() {
  return (
    <div className='testimonials'>
      <div className='tstmnls-text'>
        <div className='tstmnls-text1'>Testimonials</div>
        <div className='tstmnls-text2'>Some testimonials from our customers</div>
      </div>
      <div className='t-cards'>
        <div className='t-card'>
          <div className='c'>
            <img src={Ellipse1} alt="" />
          </div>
          <div className='t-c'>
            <div className='tc-content'>
              <div className='n'>
                <div className='tc-name'>Ronald Richards</div>
                <div className='tc-c'>Google inc.</div>
              </div>
              <div className='tc-description'>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed<br />do eiusmod tempor incididunt.</div>
              <div className='s'>
                <img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='t-card'>
          <div className='c'>
            <img src={Ellipse2} alt="" />
          </div>
          <div className='t-c'>
            <div className='tc-content'>
              <div className='n'>
                <div className='tc-name'>Guy Hawkins</div>
                <div className='tc-c'>Paypal inc.</div>
              </div>
              <div className='tc-description'>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed<br />do eiusmod tempor incididunt.</div>
              <div className='s'>
                <img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='t-card'>
          <div className='c'>
            <img src={Ellipse3} alt="" />
          </div>
          <div className='t-c'>
            <div className='tc-content'>
              <div className='n'>
                <div className='tc-name'>Kristin Watson</div>
                <div className='tc-c'>Microsoft inc.</div>
              </div>
              <div className='tc-description'>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed<br />do eiusmod tempor incididunt.</div>
              <div className='s'>
                <img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='t-cards'>
        <div className='t-card'>
          <div className='c'>
            <img src={Ellipse4} alt="" />
          </div>
          <div className='t-c'>
            <div className='tc-content'>
              <div className='n'>
                <div className='tc-name'>Robert Fox</div>
                <div className='tc-c'>Facebook inc.</div>
              </div>
              <div className='tc-description'>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed<br />do eiusmod tempor incididunt.</div>
              <div className='s'>
                <img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='t-card'>
          <div className='c'>
            <img src={Ellipse5} alt="" />
          </div>
          <div className='t-c'>
            <div className='tc-content'>
              <div className='n'>
                <div className='tc-name'>Savannah Nguyen</div>
                <div className='tc-c'>Twitter inc.</div>
              </div>
              <div className='tc-description'>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed<br />do eiusmod tempor incididunt.</div>
              <div className='s'>
                <img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='t-card'>
          <div className='c'>
            <img src={Ellipse6} alt="" />
          </div>
          <div className='t-c'>
            <div className='tc-content'>
              <div className='n'>
                <div className='tc-name'>Courtney Henry</div>
                <div className='tc-c'>Apple inc.</div>
              </div>
              <div className='tc-description'>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed<br />do eiusmod tempor incididunt.</div>
              <div className='s'>
                <img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" /><img src={S} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials