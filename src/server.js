const app = require('express')();
const http = require('http').createServer(app);
//const io = require('socket.io')(http);

// server-side
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});
io.on('connection',(socket)=>{
    console.log('Client connected');


    socket.on('message',(data)=>{
        console.log(data);
        io.emit('message',data);
    });
    socket.on('disconnect',()=>{
        console.log('Client disconnected');
    });
});

http.listen(3000,()=>{
    console.log('Server listening on port 3000');
})
