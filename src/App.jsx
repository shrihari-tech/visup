import { useState } from 'react'
import Navbar from './components/Navbar'
import SplashCursor from './BlitsBlocks/SplashCursor/SplashCursor'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SplashCursor />
      <Navbar/>
      <Home />
    </>
  )
}

export default App
