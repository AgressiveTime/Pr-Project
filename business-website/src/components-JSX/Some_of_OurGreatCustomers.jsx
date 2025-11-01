import React, { useState } from 'react'
import '../components-CSS/Some_of_OurGreatCustomers.css'
import Group0Img from '../assets/default-images/u-img/Group0.svg'
import Group1Img from '../assets/default-images/u-img/Group1.svg'
import Group2Img from '../assets/default-images/u-img/Group2.svg'
import Group3Img from '../assets/default-images/u-img/Group3.svg'
import Group4Img from '../assets/default-images/u-img/Group4.svg'
import Group5Img from '../assets/default-images/u-img/Group5.svg'
import Group6Img from '../assets/default-images/u-img/Group6.svg'
import Group7Img from '../assets/default-images/u-img/Group7.svg'
import Group8Img from '../assets/default-images/u-img/Group8.svg'
import Group9Img from '../assets/default-images/u-img/Group9.svg'
import Ee from '../assets/default-images//icons-img/Ee.svg'
import PrevImg from '../assets/default-images//icons-img/Prev.svg'
import NextImg from '../assets/default-images//icons-img/Next.svg'

function Some_of_OurGreatCustomers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Данные для слайдов
  const slides = [
    {
      text: "We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.",
      name: "Mark Garfield",
      position: "CEO & Head of Product"
    },
    {
      text: "Second slide content goes here. Excellent service and professional team that delivers outstanding results every time.",
      name: "Sarah Johnson",
      position: "Marketing Director"
    },
    {
      text: "Third slide content. We've been working with them for years and the quality of service never disappoints.",
      name: "Michael Brown",
      position: "CTO & Founder"
    },
    {
      text: "Fourth slide content. Their attention to detail and customer focus sets them apart from the competition.",
      name: "Emily Davis",
      position: "Product Manager"
    }
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className='some_of_our_great_customers'>
        <div className='soogc-text'>
          <div className='soogc-text1'>Some of Our Great Customers</div>
          <div className='soogc-text2'>Some of the companies we have worked with</div>
        </div>
        <div className='u'>
          <div className='u1'>
            <img src={Group0Img} alt="" />
            <img src={Group1Img} alt="" />
            <img src={Group2Img} alt="" />
            <img src={Group3Img} alt="" />
            <img src={Group4Img} alt="" />
          </div>
          <div className='u2'>
            <img src={Group5Img} alt="" />
            <img src={Group6Img} alt="" />
            <img src={Group7Img} alt="" />
            <img src={Group8Img} alt="" />
            <img src={Group9Img} alt="" />
          </div>
        </div>
      </div>
      <div className='carousel'>
        <div className='c_l-content'>
          <div className='ct-prev' onClick={prevSlide}>
            <img src={PrevImg} alt="Previous" />
          </div>
          <div className='cl-content'>
            <div className='c_t'>
              <div>
                <img src={Ee} alt="Quote" />
              </div>
              <div className='ct'>
                <div className='ct_text'>{slides[currentSlide].text}</div>
                <div className='ct_t'>
                  <div className='t-t1'>{slides[currentSlide].name}</div>
                  <div className='t-t2'>{slides[currentSlide].position}</div>
                </div>
              </div>
            </div>
            <div className='items'>
              {slides.map((_, index) => (
                <div 
                  key={index}
                  id='i'
                  style={{
                    backgroundColor: index === currentSlide ? '#FFFFFF' : '#FFCC00'
                  }}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
          <div className='ct-next' onClick={nextSlide}>
            <img src={NextImg} alt="Next" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Some_of_OurGreatCustomers