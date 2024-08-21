import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="self-center flex justify-center items-center
                whitespace-nowrap font-inter font-extrabold text-red-500">Hello World</h1>
      <p className='text-blue-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus veritatis natus cupiditate commodi quibusdam cumque nihil molestiae voluptatibus obcaecati enim?</p>
    </>
  )
}

export default App
