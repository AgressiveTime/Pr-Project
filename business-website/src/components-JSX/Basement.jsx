import React from 'react'
import '../components-CSS/Basement.css'
import Arrow from '../assets/default-images/icons-img/Arrow-R.svg'
import SendIcon from '../assets/default-images/icons-img/SendIcon.svg'
import LogoImg from '../assets/default-images/icons-img/Logo-Ellipse.svg'
import M from '../assets/default-images/cards-img/m.svg'
import D from '../assets/default-images/icons-img/d.svg'
function Basement() {
    return (
        <div className='basement'>
            <div className='basement0'>
                <div className='basement0-text'>
                    <div className='b0-text1'>Are You Ready For</div>
                    <div className='b0-text2'>Start a New Project</div>
                </div>
                <div className='basement0-button1'>
                    <div className='button1-text'>Start Now</div>
                    <img className='button1-item' src={Arrow} alt="" />
                </div>
            </div>
            <div className='basement1'>
                <div className='basement1-text'>
                    <div className='b1-text1'>Get Notified About Project</div>
                    <div className='b1-text2'>Subscribe Now</div>
                </div>
                <div className='basement1-input'>
                    <input className='b1-input' placeholder='Email' type="email" />
                    <img className='b2-icon' src={SendIcon} alt="" />
                </div>
            </div>
            <div className="basement2">
                <div className="basement2-content">
                    <div className="b2-content1">
                        <div className='c1-logo'>
                            <img className='logo_img' src={LogoImg} alt="" />
                        </div>
                        <div className='dd-text'>Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit, sed do eiusmod tempor<br />
                            incididunt ut labore et dolore magna aliqua.<br />
                            Ut enim ad minim veniam, quis nostrud<br />
                            exercitation ullamco laboris nisi ut aliquip ex<br />
                            ea commodo consequat. Duis aute irure<br />
                            dolor in reprehenderit in voluptate velit esse<br />
                            cillum dolore eu fugiat nulla pariatur.</div>
                    </div>
                    <div className="b2-content2">
                        <div className="b2-text1">Our Office</div>
                        <div className='m'>
                            <img className='mImg' src={M} alt="" />
                            <img className='dImg dImg1' src={D} alt="" />
                            <img className='dImg dImg2' src={D} alt="" />
                            <img className='dImg dImg3' src={D} alt="" />
                            <img className='dImg dImg4' src={D} alt="" />
                        </div>
                    </div>
                    <div className="b2-content3">
                        <div className="b2-text2">Contact</div>
                        <div className='c0'>
                            <div className='c0-text'>Jl KH Samanhudi<br />
                                Metro Atom Plaza Bl<br />
                                AKS 1/11, Dki Jakarta</div>
                            <div className='c0-text'>info@yourdomain.<br />com</div>
                            <div className='c0-text'>+62 (0) 000 0000 00</div>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="bt">
                    <div className='bt-left bt-text'>© 2021 Creative Agency</div>
                    <div className='bt-right'>
                        <div className='bt-text'>Home</div>
                        <div className='bt-text'>Works</div>
                        <div className='bt-text'>About</div>
                        <div className='bt-text'>Pricing</div>
                        <div className='bt-text'>About</div>
                    </div>
                </div>
            </div>
            <div className="d"></div>
        </div>
    )
}

export default Basement