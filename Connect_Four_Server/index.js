const express = require("express"); 
const env = require("dotenv"); 
const { Server } = require("socket.io");
const http = require("http");
const v4id = require("uuid")
// const games = require("./games")

env.config(); 
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",  
    }
}); 

io.on("connection", (socket) => {
    console.log(`Socket has connected... -> ${socket.id}`); 

    // socket.on("game-query", (query) => {
    //     // take in query and return array of games matching said query
    //     arr = games; 
    //     if (query !== "") {
    //         arr = [games[1], games[2]]; 
    //     }
    //     socket.emit("query-results",arr);
    // })

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

