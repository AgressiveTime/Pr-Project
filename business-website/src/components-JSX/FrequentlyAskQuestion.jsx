import React, { useState } from 'react'
import '../components-CSS/FrequentlyAskQuestion.css'
import BgY from '../assets/background-images/bg_y.png'
import BgB from '../assets/background-images/bg_b.png'

function FrequentlyAskQuestion() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqItems = [
    {
      question: "What are the services provided to customers?",
      answer: <>Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs,<br />develop websites and mobile applications, provide support for the growth of business ideas, to help customers<br />market their products online through the marketplace.</>
    },
    {
      question: "How can I submit a proposal for cooperation?",
      answer: <>You can submit your cooperation proposal through our online portal.<br />Simply visit our website, navigate to the "Collaboration" section, and fill out the project submission form.<br />Our team will review your proposal and get back to you within 2-3 business days.</>
    },
    {
      question: "I come from a faraway place, can collaboration be done full time online through several meeting applications?",
      answer: <>Yes, absolutely! We specialize in remote collaboration and have successfully worked with clients from all over the world.<br />We use various communication tools like Zoom, Microsoft Teams, and Slack to ensure seamless collaboration.<br />Regular virtual meetings and progress updates keep everyone aligned throughout the project.</>
    },
    {
      question: "How do I get the payment complete?",
      answer: <>We offer multiple secure payment options for your convenience: Bank transfers, credit/debit cards, PayPal, and Wise (TransferWise).<br />Payments are typically structured in milestones with invoices sent upon completion of each project phase.</>
    },
    {
      question: "How long can the collaboration last?",
      answer: <>The duration of collaboration depends on your project scope and requirements.<br />Small projects typically take 2-4 weeks, medium projects 1-3 months, and large projects 3-6 months or more.<br />We provide detailed timeline estimates during the initial project consultation.</>
    }
  ]

  const ArrowIcon = ({ isOpen }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={`arrow-icon ${isOpen ? 'open' : ''}`}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#111029"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  return (
    <div className='frequently_ask_question'>
      <div className='faq-text'>
        <div className='faq-text1'>Frequently Ask Question</div>
        <div className='faq-text2'>Some of our frequently asked questions</div>
      </div>
      <div className='faq'>
        {faqItems.map((item, index) => (
          <div key={index} className={`faq_i ${activeIndex === index ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => toggleAccordion(index)}>
              <span className="question-text">{item.question}</span>
              <ArrowIcon isOpen={activeIndex === index} />
            </button>
            <div className="faq-answer">
              <div className="answer-divider"></div>
              <div className='answer-text'>{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='bgI'>
        <img className='bg_y' src={BgY} alt="" />
        <img className='bg_b' src={BgB} alt="" />
      </div>
    </div>
  )
}

export default FrequentlyAskQuestion