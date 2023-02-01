import Home from "./Pages/Home"
import { Routes, Route } from "react-router-dom"
import Game from "./Pages/Game"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="game/:id" element={<Game />} />  
      <Route path="*" element={<h1>404 Page</h1>} />
    </Routes>
  )
}

export default App
