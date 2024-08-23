import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './header'
import Poster from './poster'
import ForUser from './foruser'
import Footer from './footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header></Header>
      <Poster></Poster>
      <ForUser></ForUser>
      <Footer></Footer>
      
    </>
  )
}

export default App
