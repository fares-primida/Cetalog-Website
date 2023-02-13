import React from 'react'
import './App.css'
import MainSection from './Components/MainSection/MainSection'
import SecondSection from './Components/SecondSection/SecondSection'
import ThiredSection from './Components/ThiredSection/ThiredSection'
import FourSection from './Components/FourSection/FourSection'

const App = () => {
  return (
    <div className='app'>
      <MainSection />
      <SecondSection />
      <ThiredSection />
      <FourSection />
    </div>
  )
}

export default App
