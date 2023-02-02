import { useEffect, useState } from 'react'; 
import Header from '../components/header';
import { useSocketContext } from '../contexts/socketContext'; 
import { Game } from "../modals/Game" 
import GameDisplay from '../components/gameDisplay';

const socket = useSocketContext();

export default function Home() {
  const [games, setGames] = useState([]); 
  const [query, updateQuery] = useState("");  

  useEffect(() => {
    socket.socket.emit("game-query", query); 
    socket.socket.on("query-results", (results) => {
      setGames(results)
    })

    return (() => {
      socket.socket.off("query-results")
    })
  },[query])

  return (
    <>
      <Header />
        <main className="flex max-h-[calc(100vh-36px)]">
          <div className="bg-gray-400 w-1/3">

          </div>
          <div className="w-2/3">
            <div className="max-h-[calc(100vh-36px)] overflow-scroll scrollbar-hide">
              <input type="search" placeholder="Search..." onChange={(e)=> updateQuery(e.target.value)}/>
              {games.map((i:Game) => <GameDisplay key={i.id} game={i} />)}
            </div>
          </div>
        </main>
    </>
  )
}
