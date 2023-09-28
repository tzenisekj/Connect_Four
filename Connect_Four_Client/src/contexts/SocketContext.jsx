import { createContext, useRef } from "react";
import { io } from "socket.io-client"

const URL = "http://localhost:3000"

export const socket = useRef(io(url))
export const socketContext = createContext()

const SocketContext = (children) => {

    return (
        <socketContext.Provider value={socket.current}>
            {children}
        </socketContext.Provider>
    )
}

export default SocketContext


