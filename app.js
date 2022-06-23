const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
global.io = new Server(server);

global.socket = {}

io.on('connection', (socket) => {


    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('disconnect')
    });

    socket.on('on_new_message', (data) => {

        console.log(data)
        socket.emit('new_message', 'New Message From Server')
    }) 


});

server.listen(2000, () => {
    console.log('listening on *:3000');
});