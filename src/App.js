import React from 'react'
import './App.css'
import MainSection from './Components/MainSection/MainSection'
import SecondSection from './Components/SecondSection/SecondSection'
import ThiredSection from './Components/ThiredSection/ThiredSection'

const App = () => {
  return (
    <div className='app'>
      <MainSection />
      <SecondSection />
      <ThiredSection />
    </div>
  )
}

export default App
