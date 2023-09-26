import HomePage from "./pages/Home"
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
