import { createContext, ReactNode, useContext, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

export interface socketContextState {
    socket: Socket;
}

export const socketContext = createContext<socketContextState>(
    {} as socketContextState
)

export const useSocketContext = () => 
useContext(socketContext); 

const SocketContextProvider = (props: { children?:ReactNode }) => {
    const socket = io("http://localhost:3000"); 
    
    // const socketRef = useRef(io("http://localhost:3000"));
    return (
        <socketContext.Provider value={{socket}}>
            {props.children}
        </socketContext.Provider>
    )
}

export default SocketContextProvider; 