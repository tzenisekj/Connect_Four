import { useSatet, useEffect, useContext } from "react"

const socket = useContext()

const HomePage = () => {
    const [isConnected, setIsConnected] = useState(socket.isConnected)
    
    return(
        <h1>Home Page</h1>
    )
}

export default HomePage