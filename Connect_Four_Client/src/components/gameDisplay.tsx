import { useNavigate } from 'react-router-dom'
import { Game } from "../modals/Game"

interface iProps {
    game: Game
}

function GameDisplay({ game }: iProps) {
    const navigate = useNavigate()
    
  return (
    <div className="flex hover:cursor-pointer hover:bg-blue-200" onClick={(() => navigate(`/game/${game.id}`))}>
        <p>{game.id}</p>
        <p>{game.player1}</p>
        <p>{game.player2}</p>
    </div>
  )
}

export default GameDisplay; 