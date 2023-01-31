import { useEffect, useState } from 'react'; 
import Header from '../components/header';
import { useSocketContext } from '../contexts/socketContext'; 
import { useNavigate } from 'react-router-dom';

type Game = {
  id: "string",
  player1: "string",
  player2: "string",
  spectators: number,
  joinable: boolean
}

export default function Home() {
  const [games, setGames] = useState([]); 
  const [query, updateQuery] = useState(""); 

  const socket = useSocketContext(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    socket.socket.emit("get-games"); 
    socket.socket.on("ongoing-games", (arr) => {
      setGames(arr) 
    })

    return(() => {
      socket.socket.off("get-games")
    })
  },[])

  return (
    <div>
      <Header />
      <h1>Home</h1>
      {games.map((i:Game) => <h1 key={i.id} onClick={() => navigate(`/game/${i.id}`)}>Game {i.id}</h1>)}
    </div>
  )
}
