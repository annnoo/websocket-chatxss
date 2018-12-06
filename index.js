const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.port || 3000;



server.listen(port, () => {
    console.log("Server started at port %d",port);
});


app.use(express.static(path.join(__dirname,'public')));


io.on('connection', (socket) => {
    console.log("User connected")
    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('message', {
            message: msg
        })
    })
})