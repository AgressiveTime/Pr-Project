import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Banner from './components/Banner'
import OurServices from './components/OurServices'
import OurDocumentation from './components/OurDocumentation'

function App() {
  return (
    <div className='pg'>
      <Header/>
      <Banner/>
      <OurServices/>
      <OurDocumentation/>
    </div>
  )
}

export default App
