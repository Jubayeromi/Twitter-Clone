import React from 'react'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ForYou from './pages/ForYou'

const App = () => {
  return (
    <div className='flex justify-center '>
      <First />
      
      <Second />
      <Third />
    </div>
  )
}

export default App
