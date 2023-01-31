const express = require("express"); 
const env = require("dotenv"); 
const { Server } = require("socket.io");
const http = require("http");

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
    socket.emit("on-going games", []); 
    socket.on("disconnect", () => {
        console.log(`${socket.id} has disconnected...`)
    })
});

server.listen(process.env.PORT, () => {
    console.log(`Server Initalized on port ${process.env.PORT}...`); 
}); 

