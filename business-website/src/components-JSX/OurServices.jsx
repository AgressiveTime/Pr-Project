import React from 'react'
import '../components-CSS//OurServices.css'
import IdeateImg from '../assets/default-images/cards-img/Ideate.svg'
import DesignImg from '../assets/default-images/cards-img/Design.svg'
import WebDevImg from '../assets/default-images/cards-img/WebDev.svg'
import AppDevImg from '../assets/default-images/cards-img/AppDev.svg'
import BusinessGrowthImg from '../assets/default-images/cards-img/BusinessGrowth.svg'
import DigitalMarketingImg from '../assets/default-images/cards-img/Digital_marketing.svg'
import VectorArrowImg from '../assets/default-images/cards-img/VectorArrow.svg'
import Vector from '../assets/background-images/Vector.png'

function OurServices() {
    return (
        <>
            <div className='our_services'>
                <div className='o_s-text'>
                    <div className='o_s-text1'>Our Services</div>
                    <div className='o_s-text2'>The various services we provide to make your<br />
                        business more powerful</div>
                </div>
                <div className='cards'>
                    <div className='cards-1'>
                        <div className='card card1'>
                            <div className='rc rc1'>
                                <img src={IdeateImg} alt="" />
                            </div>
                            <div className='t'>
                                <div className='t1'>Ideate</div>
                                <div className='t2'>We help you develop creative<br />
                                    ideas so that your business can<br />
                                    grow more rapidly</div>
                            </div>
                            <div className='b'>
                                <img src={VectorArrowImg} alt="" />
                            </div>
                        </div>
                        <div className='card card2'>
                            <div className='rc rc2'>
                                <img src={DesignImg} alt="" />
                            </div>
                            <div className='t'>
                                <div className='t1'>Design</div>
                                <div className='t2'>We provide services with the<br />
                                    best designs than our designer<br />
                                    team for your business</div>
                            </div>
                            <div className='b'>
                                <img src={VectorArrowImg} alt="" />
                            </div>
                        </div>
                        <div className='card card3'>
                            <div className='rc rc3'>
                                <img src={WebDevImg} alt="" />
                            </div>
                            <div className='t'>
                                <div className='t1'>Web Development</div>
                                <div className='t2'>We help develop company<br />
                                    websites to be more<br />
                                    professional and attractive</div>
                            </div>
                            <div className='b'>
                                <img src={VectorArrowImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='cards-2'>
                        <div className='card card1'>
                            <div className='rc rc4'>
                                <img src={AppDevImg} alt="" />
                            </div>
                            <div className='t'>
                                <div className='t1'>App Development</div>
                                <div className='t2'>We help develop company<br />
                                    mobile apps to be more<br />
                                    professional and attractive</div>
                            </div>
                            <div className='b'>
                                <img src={VectorArrowImg} alt="" />
                            </div>
                        </div>
                        <div className='card card2'>
                            <div className='rc rc5'>
                                <img src={BusinessGrowthImg} alt="" />
                            </div>
                            <div className='t'>
                                <div className='t1'>Business Growth</div>
                                <div className='t2'>We also provide services by<br />
                                    providing input for your<br />
                                    business growth</div>
                            </div>
                            <div className='b'>
                                <img src={VectorArrowImg} alt="" />
                            </div>
                        </div>
                        <div className='card card3'>
                            <div className='rc rc6'>
                                <img src={DigitalMarketingImg} alt="" />
                            </div>
                            <div className='t'>
                                <div className='t1'>Digital marketing</div>
                                <div className='t2'>We also help you market your<br />
                                    products through an online<br />
                                    marketplace</div>
                            </div>
                            <div className='b'>
                                <img src={VectorArrowImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='v' src={Vector} alt="" />
        </>
    )
}

export default OurServices