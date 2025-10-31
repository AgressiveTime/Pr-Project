import { useState } from 'react'
import './App.css'
import Header from './components-JSX/Header'
import Banner from './components-JSX/Banner'
import OurServices from './components-JSX/OurServices'
import OurDocumentation from './components-JSX/OurDocumentation'
import WorkingSpace from './components-JSX/WorkingSpace'
import Some_of_OurGreatCustomers from './components-JSX/Some_of_OurGreatCustomers'
import FrequentlyAskQuestion from './components-JSX/FrequentlyAskQuestion'
import Testimonials from './components-JSX/Testimonials'

function App() {
  return (
    <div className='pg'>
      <Header/>
      <Banner/>
      <OurServices/>
      <OurDocumentation/>
      <WorkingSpace/>
      <Some_of_OurGreatCustomers/>
      <FrequentlyAskQuestion/>
      <Testimonials/>
    </div>
  )
}

export default App
