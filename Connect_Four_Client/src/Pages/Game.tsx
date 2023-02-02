import { useEffect } from "react"
import Header from '../components/header'
import { useSocketContext } from "../contexts/socketContext"

const socket = useSocketContext()

function Game() {

  return (
    <div>
      <Header />
      Game
    </div>
  )
}

export default Game