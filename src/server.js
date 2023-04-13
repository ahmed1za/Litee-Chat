const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection',(socket)=>{
    console.log('Client connected');
    socket.emit('message','bienvenue dans litee-chat');

    socket.on('message',(data)=>{
        console.log(data);
        io.emit('message',data);
    });
    socket.on('disconnect',()=>{
        console.log('Client disconnected');
    });
});

http.listen(4200,()=>{
    console.log('Server listening on port 3000');
})
