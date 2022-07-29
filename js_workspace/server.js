const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const socketio = require("socket.io")(http);

// public 폴더 ststic 설정.
app.use(express.static(__dirname +'/public'));

app.get("/", (req, res) => {
  res.end("<h1>Hello Nodejs world</h1>");
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("run on Server : http://localhost:3000");
});

var io = socketio.listen(server);

// 클라이언트 접속이 되면 실행.
io.sockets.on("connection", function (socket) {
  // socket 매개 변수 - 클라이언트 소켓.
  console.log(">>>>> 클라인트 소켓 접속!!!");

    socket.on('client-message', function (data) {
        console.log("client-message : " + data);
        io.sockets.emit('news', data);
    });    

    socket.on('message', function(data) {
        console.log("client message : ", data);
        switch(data['status']){
        case 'start': 
            io.sockets.emit('start',data); break; 
        case 'draw': 
            io.sockets.emit('draw',data); break; 
        case 'end': io.sockets.emit('end',data); break; 
        }
    });

});