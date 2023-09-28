import { createContext } from "react"
import HomePage from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import { io } from "socket.io-client"

function App() {
  const socket = io("http://localhost:3000")
  const socketContext = createContext()

  return (
    <socketContext.Provider value={socket}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h1>404 Page</h1>} />
      </Routes>
    </socketContext.Provider>
  )
}

export default App
