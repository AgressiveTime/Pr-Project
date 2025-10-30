import React from 'react'
import './CSS/Banner.css'
import Arrow from '../assets/default-images/Arrow-R.svg'
import Group from '../assets/default-images/Group.svg'
import Image from '../assets/background-images/Image.png'
import O from '../assets/background-images/O.png'
import Vector from '../assets/background-images/Vector.png'

function Banner() {
    return (
        <div className='banner'>
            <div className='br'>
                <div className='text1'>Make your business<br /><span>more powerful</span><br />with us</div>
                <div className='text2'>We provide various services to make<br />
                    your business grow and get bigger. Your<br />
                    satisfaction is our first priority.</div>
                <div className='button1'>
                    <div className='button1-content'>
                        <div>Get Started</div>
                        <img className='arrow' src={Arrow} alt="" />
                    </div>
                </div>
            </div>
            <div className='button2'>
                <img src={Group} alt="" />
            </div>
            <div className='bg_images'>
                <img className='i1' src={Image} alt="" />
                <img className='i2' src={O} alt="" />
                <img className='i3' src={Vector} alt="" />
            </div>
        </div>
    )
}

export default Banner