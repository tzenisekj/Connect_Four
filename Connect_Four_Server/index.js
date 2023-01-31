const express = require("express"); 
const env = require("dotenv"); 
const { Server } = require("socket.io");
const http = require("http");
const v4id = require("uuid")

env.config(); 
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",  
    }
}); 

const games = [
    {
        id: v4id.v4(),
        player1: "Fill",
        player2: "Fill",
        spectators: 0,
        joinable: true
    },
    {
        id: v4id.v4(),
        player1: "Fill",
        player2: "Fill",
        spectators: 20,
        joinable: false
    },
    {
        id: v4id.v4(),
        player1: "Fill",
        player2: "Fill",
        spectators: 1,
        joinable: false
    },

]

io.on("connection", (socket) => {
    console.log(`Socket has connected... -> ${socket.id}`); 

    socket.on("get-games", () => {
        socket.emit("ongoing-games", games); 
    })

    socket.on("game-query", (query) => {
        // take in query and return array of games matching said query

        socket.emit("query results",[]);
    })

    socket.on("new game", () => {
        // create new room as new game and allow one extra socket to join
    })

    socket.on("disconnect", () => {
        console.log(`${socket.id} has disconnected...`)
    })
});

server.listen(process.env.PORT, () => {
    console.log(`Server Initalized on port ${process.env.PORT}...`); 
}); 

