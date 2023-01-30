import { createContext } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); 

export const SocketContext = createContext({})

export function SocketProvider(props:any) {
    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}
