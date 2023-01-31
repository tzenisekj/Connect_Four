import Home from "./Pages/Home"
import { Routes, Route } from "react-router-dom"
import  io  from "socket.io-client"
import Game from "./Pages/Game"
import { useEffect } from "react"
import  SocketContextProvider  from "./contexts/socketContext"

function App() {

// useEffect(() => {
//      const socket = io("http://localhost:3000"); 
     
//      return(() => {
//       socket.disconnect(); 
//      })
// },[])


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="game/:id" element={<Game />} />  
      <Route path="*" element={<h1>404 Page</h1>} />
    </Routes>
  )
}

export default App
